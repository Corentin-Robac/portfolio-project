import TextArea from "@/components/TextAreaComponent";
import { setSaeData } from "@/store/Store";

export default function EditableTextArea({ dataKey, ...rest }) {
  return (
    <TextArea
      {...rest}
      onChange={(v) => {
        setSaeData({ [dataKey]: v });
      }}
    />
  );
}
