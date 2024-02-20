import { CheckboxRef } from "rc-checkbox";
import { CheckboxProps } from "./checkBox";
import InternalCheckbox from "./checkBox";
import Group from "./group";

type CompoundedComponent = React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<CheckboxRef>
> & {
  Group: typeof Group;
  /** @internal */
};

const Checkbox = InternalCheckbox as CompoundedComponent;
Checkbox.Group = Group;

export default Checkbox;
