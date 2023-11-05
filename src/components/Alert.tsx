import { ReactNode } from "react";
import Button from "./Button";

//rafce
interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissilbe" role="alert">
        This is a primary alert—check for text - {children}
      </div>
      <button type="button" className={"btn-close"} onClick={onClose} />
      <br />
      <br />
    </>
  );
};

export default Alert;
