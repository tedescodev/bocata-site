import {
  InputGroup,
  InputFile,
  variant
} from "./style";

export default function InputFileComponent(props) {
  const { id, name, value, onChange } = props;
  return (
    <>
      <InputGroup>
        <InputFile
          type="file"
          id={id}
          name={name}
          variant={variant}
          value={value}
          onChange={onChange}
          onKeyUp={onChange}
          onBlur={onChange}
        />
      </InputGroup>
    </>
  );
}
