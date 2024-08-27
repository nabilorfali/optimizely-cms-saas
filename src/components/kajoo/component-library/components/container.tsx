import { FC, ComponentType, ReactNode } from "react";
import { toObject } from "../toObject";

export interface IProps {
  bgImage?: { value: { src: string } };
  tag?: keyof JSX.IntrinsicElements | ComponentType;
  [key: string]: any;
  children: ReactNode | ReactNode[];
}

const Container: FC<IProps> = ({
  bgImage,
  style = {},
  tag = "div",
  children,
  ...rest
}) => {
  const backgroundImage = bgImage?.value?.src || bgImage?.value || bgImage;
  const styleObject = toObject(style);
  const containerStyle = {
    ...styleObject,
    ...(backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}),
  };

  const Tag: keyof JSX.IntrinsicElements = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag {...rest} style={containerStyle}>
      {Array.isArray(children) ? children : [children]}
    </Tag>
  );
};

export default Container;
