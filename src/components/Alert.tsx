//rafce
interface Props {
  text: string;
}

const Alert = ({ text }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      This is a primary alert—check for text - {text}
    </div>
  );
};

export default Alert;
