import { ReactNode } from "react";

//rafce
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      This is a primary alert—check for text - {children}
    </div>
  );
};

export default Alert;
