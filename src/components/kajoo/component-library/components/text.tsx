import { FC } from "react";
import { CmsEditable, CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
export interface IProps {
  text?: string;
  tag?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}

const Text: FC<IProps> = ({ fieldName, text, tag = "span", ...rest }) => {
  return (
    <CmsEditable as={tag} {...rest} cmsFieldName={fieldName}>
      {text}
    </CmsEditable>
  );
};

export default Text;
