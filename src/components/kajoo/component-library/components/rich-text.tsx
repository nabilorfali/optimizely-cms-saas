import { FC } from "react";
import { CmsEditable, CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { NodeInput, RichText } from "@remkoj/optimizely-cms-react/components";

export interface IProps {
  text?: NodeInput | null | undefined;
  tag?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}

const Text: FC<IProps> = ({ fieldName, text, tag = "span", ...rest }) => {
  return (
    <CmsEditable
      as={RichText}
      {...rest}
      cmsFieldName={fieldName}
      //@ts-ignore
      text={text?.json}
    />
  );
};

export default Text;
