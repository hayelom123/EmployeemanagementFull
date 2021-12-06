import React, { useState } from "react";
import { TextFieldStyle, InputBox, ErrorSpan } from "../styles/Textfield_style";
interface props {
  name: string;
  placeHolder: string;
  type: string;
  value?: string | number;
  visible?: boolean;
  error?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const TextField: React.FC<props> = ({
  name,
  placeHolder,
  value,
  handleChange,
  type,
  error,
}) => {
  const [oldType, setOldType] = useState(type);
  return (
    <InputBox>
      <TextFieldStyle
        type={oldType !== "date" ? type : "text"}
        name={name}
        value={value}
        placeholder={placeHolder}
        onFocus={(e) => {
          if (oldType === "date") {
            setOldType("text");
          }
        }}
        onChange={handleChange}
      />
      {error && <ErrorSpan>{error}</ErrorSpan>}
    </InputBox>
  );
};
