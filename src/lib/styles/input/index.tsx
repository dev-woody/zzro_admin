import { InternalInput } from "./input";
import { InputProps, InputRef } from "./interface";

type CompoundedComponent = React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<InputRef>
> & {
  // Group: typeof Group;
  // Search: typeof Search;
  // TextArea: typeof TextArea;
  // Password: typeof Password;
};

const Input = InternalInput as CompoundedComponent;

export default Input;
