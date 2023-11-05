interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "close"; //string; //? means optional parameter
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
