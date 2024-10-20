export type ContainerComponentParams = {
  width: number;
  height: number;
};

export type RowComponentParams = {
  items: string[];
  updateFn: (index: number, text: string) => void;
};
