import { Button } from "./style";

export default function ButtonComponent(props) {
  const { id, type, disabled, variant, inline, onClick, children } = props;

  return (
    <Button
      id={id}
      type={type}
      disabled={disabled}
      variant={variant}
      inline={inline}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
