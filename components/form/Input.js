import {
  InputGroup,
  Input,
  Label,
  FeedbackError,
  IconValidation,
} from "./style";

import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function InputComponent(props) {
  const {
    id,
    name,
    type,
    placeholder,
    state,
    regex,
    errorMsg,
    nonLabel,
    inline,
    width,
    handleChange,
  } = props;

  const onChange = (e) => {
    handleChange({ ...state, value: e.target.value });
  };

  const validation = () => {
    if (regex) {
      if (regex.test(state.value)) {
        handleChange({ ...state, isValid: "true" });
        return;
      }
      handleChange({ ...state, isValid: "false" });
    }
  };
  return (
    <>
      {!nonLabel && <Label htmlFor={id}>{name}:</Label>}
      <InputGroup width={width}>
        <Input
          inline={inline}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={state.value}
          isValid={state.isValid}
          onChange={onChange}
          onKeyUp={validation}
          onBlur={validation}
        />
        <IconValidation
          icon={state.isValid === "true" ? faCheckCircle : faTimesCircle}
          isValid={state.isValid}
        />
      </InputGroup>
      <FeedbackError isValid={state.isValid}>{errorMsg}</FeedbackError>
    </>
  );
}
