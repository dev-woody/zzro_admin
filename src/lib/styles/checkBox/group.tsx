import * as React from "react";
import classNames from "classnames";
import omit from "rc-util/lib/omit";

import Checkbox from "./checkBox";
import type { CheckboxChangeEvent } from "./checkBox";

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType<
  T extends CheckboxValueType = CheckboxValueType
> {
  label: React.ReactNode;
  value: T;
  style?: React.CSSProperties;
  disabled?: boolean;
  title?: string;
  id?: string;
  onChange?: (e: CheckboxChangeEvent) => void;
  required?: boolean;
}

export interface AbstractCheckboxGroupProps<
  T extends CheckboxValueType = CheckboxValueType
> {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  options?: (CheckboxOptionType<T> | string | number)[];
  disabled?: boolean;
  style?: React.CSSProperties;
}

export interface CheckboxGroupProps<
  T extends CheckboxValueType = CheckboxValueType
> extends AbstractCheckboxGroupProps<T> {
  name?: string;
  defaultValue?: T[];
  value?: T[];
  onChange?: (checkedValue: T[]) => void;
  // children?: React.ReactNode;
  children?: any;
}

const CheckboxGroup = React.forwardRef(
  <T extends CheckboxValueType = CheckboxValueType>(
    props: CheckboxGroupProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
    const {
      defaultValue,
      children,
      options = [],
      className,
      rootClassName,
      style,
      ...restProps
    } = props;

    const [value, setValue] = React.useState<T[]>(
      restProps.value || defaultValue || []
    );

    React.useEffect(() => {
      if ("value" in restProps) {
        setValue(restProps.value || []);
      }
    }, [restProps, restProps.value]);

    const memoOptions = React.useMemo<CheckboxOptionType<T>[]>(
      () =>
        options.map<CheckboxOptionType<T>>((option: CheckboxOptionType<T>) => {
          if (typeof option === "string" || typeof option === "number") {
            return { label: option, value: option };
          }
          return option;
        }),
      [options]
    );

    const domProps = omit(restProps, ["value", "disabled"]);

    const childrenNode = options.length
      ? // ? memoOptions.map<React.ReactNode>((option) => (
        memoOptions.map<any>((option) => (
          <Checkbox
            // key={option.value.toString()}
            // disabled={
            //   "disabled" in option ? option.disabled : restProps.disabled
            // }
            // value={option.value}
            // checked={value.includes(option.value)}
            // onChange={option.onChange}
            // // className={`${groupPrefixCls}-item`}
            // style={option.style}
            // title={option.title}
            // id={option.id}
            // required={option.required}
            title={option.title}
          >
            {option.label}
          </Checkbox>
        ))
      : children;

    const classString = classNames(className, rootClassName);

    return <div>{childrenNode}</div>;
  }
);

export default CheckboxGroup as <
  T extends CheckboxValueType = CheckboxValueType
>(
  props: CheckboxGroupProps<T> & React.RefAttributes<HTMLDivElement>
) => React.ReactElement;
