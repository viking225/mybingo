import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

type BingoProps = {
  width: number;
  height: number;
};
type BoxesProps = {
  items: string[];
  updateFn: (index: number, text: string) => void;
};

const gap = 5;

const BoxesRow: React.FC<BoxesProps> = ({ items, updateFn }: BoxesProps) => {
  const style = StyleSheet.create({
    row: {
      display: "flex",
      flexDirection: "row",
    },
    box: {
      backgroundColor: "red",
      marginHorizontal: gap / 2,
      marginVertical: gap / 2,
      minHeight: 50,
      minWidth: 50,
      flexGrow: 1,
      flexShrink: 1,
    },
  });

  return (
    <View style={style.row}>
      {items.map((value, index) => (
        <TextInput
          style={style.box}
          key={index}
          value={value}
          onChangeText={(text) => updateFn(index, text)}
        />
      ))}
    </View>
  );
};

const BingoComponent: React.FC<BingoProps> = ({
  width,
  height,
}: BingoProps) => {
  const [values, _setValues] = useState<string[]>(
    Array(Number(width) * Number(height)).fill(""),
  );

  console.log("allvalues: ", values);

  const updateBoxesValue = (index: number, value: string) => {
    const data = [...values];
    data[index] = value;
    _setValues(data);
  };

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
    },
  });

  return (
    <div style={styles.container}>
      {Array(height)
        .fill(null)
        .map((value, yPosition) => {
          const rowValues = values.slice(
            yPosition * width,
            yPosition * width + width,
          );
          console.log("rowValues: ", {
            yPosition,
            start: yPosition * width,
            end: yPosition * width + width,
            rowValues,
          });
          return (
            <BoxesRow
              key={yPosition}
              items={rowValues}
              updateFn={(xPosition, value) =>
                updateBoxesValue(xPosition + yPosition * width, value)
              }
            />
          );
        })}
    </div>
  );
};

export { BingoComponent };
