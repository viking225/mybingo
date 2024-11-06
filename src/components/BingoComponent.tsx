import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Bingo } from "../types";

const gap = 5;

const BoxesRow: React.FC<Bingo.RowComponentParams> = ({
  items,
  updateFn,
}: Bingo.RowComponentParams) => {
  const style = StyleSheet.create({
    row: {
      display: "flex",
      flexDirection: "row",
    },
    box: {
      backgroundColor: "white",
      marginHorizontal: gap / 2,
      marginVertical: gap / 2,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      textAlign: "center",
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

const BingoComponent: React.FC<Bingo.ContainerComponentParams> = ({
  width,
  height,
}: Bingo.ContainerComponentParams) => {
  const [values, _setValues] = useState<string[]>(
    Array(Number(width) * Number(height)).fill(""),
  );

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
      <View style={styles.container}>
        {Array(height)
            .fill(null)
            .map((value, yPosition) => {
              const rowValues = values.slice(
                  yPosition * width,
                  yPosition * width + width,
              );

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
      </View>

  );
};

export {BingoComponent};
