import { CheckboxRef } from "rc-checkbox";
import * as React from "react";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import styled, { css } from "styled-components";
import GroupContext from "./groupContext";

export interface AbstractCheckboxProps<T> {
  className?: string;
  rootClassName?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  title?: string;
  onChange?: (e: T) => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  value?: any;
  tabIndex?: number;
  name?: string;
  children?: React.ReactNode;
  id?: string;
  autoFocus?: boolean;
  type?: string;
  skipGroup?: boolean;
  required?: boolean;
}

export interface CheckboxChangeEventTarget extends CheckboxProps {
  checked: boolean;
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

export interface CheckboxProps
  extends AbstractCheckboxProps<CheckboxChangeEvent> {
  indeterminate?: boolean;
}

const CheckboxBlock = styled.div`
  padding: 0.5rem 0;
  width: fit-content;

  & + & {
    margin-left: 1rem;
  }
`;

const CheckboxLabel = styled.label<CheckboxProps>`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const CheckboxText = styled.div<CheckboxProps>`
  margin-left: 0.5rem;
  font-size: 0.75rem;
  line-height: 1.2;
`;

const InternalCheckbox: React.ForwardRefRenderFunction<
  CheckboxRef,
  CheckboxProps
> = (props, ref) => {
  const {
    className,
    rootClassName,
    children,
    // indeterminate = false,
    style,
    onMouseEnter,
    onMouseLeave,
    onClick,
    // skipGroup = false,
    disabled,
    ...restProps
  } = props;
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <CheckboxBlock style={style}>
      <CheckboxLabel htmlFor="checkBox" onClick={() => setChecked(!checked)}>
        {checked ? (
          <BiCheckboxChecked
            style={{ color: "var(--cus-color-primary-text)" }}
            size={24}
          />
        ) : (
          <BiCheckbox size={24} />
        )}
        <CheckboxText>{children}</CheckboxText>
        <input type="checkbox" checked={checked} style={{ display: "none" }} />
      </CheckboxLabel>
    </CheckboxBlock>
  );
};

const Checkbox = React.forwardRef<CheckboxRef, CheckboxProps>(InternalCheckbox);

export default Checkbox;
