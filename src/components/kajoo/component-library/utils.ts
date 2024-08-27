interface ITextField {
  value?: string | number;
  editable?: string;
}

export const getTextField = (text: ITextField | string) => {
  let field;
  try {
    field =
      typeof text === "object" ? text : { value: JSON.parse(`"${text}"`) };
  } catch (e) {
    field = { value: text } as ITextField;
  }

  return field;
};
