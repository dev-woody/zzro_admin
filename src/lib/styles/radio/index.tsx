import { RadioProps, RadioRef } from "./interface";
import InternalRadio from "./radio";
import Group from "./group";

type CompoundedComponent = React.ForwardRefExoticComponent<
  RadioProps & React.RefAttributes<RadioRef>
> & {
  Group: typeof Group;
  // Button: typeof Button;
  /** @internal */
  // __ANT_RADIO: boolean;
};

const Radio = InternalRadio as CompoundedComponent;
Radio.Group = Group;

export default Radio;
