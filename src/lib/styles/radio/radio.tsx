import React from "react";
import classNames from "classnames";
import { composeRef } from "rc-util/lib/ref";
import { RadioChangeEvent, RadioProps, RadioRef } from "./interface";
import RcCheckbox from "rc-checkbox";
import RadioGroupContext, { RadioOptionTypeContext } from "./context";

const InternalRadio: React.ForwardRefRenderFunction<RadioRef, RadioProps> = (
  props,
  ref
) => {
  const groupContext = React.useContext(RadioGroupContext);
  const {
    // prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    style,
    title,
    ...restProps
  } = props;

  const onChange = (e: RadioChangeEvent) => {
    props.onChange?.(e);
    groupContext?.onChange?.(e);
  };

  const radioProps: RadioProps = { ...restProps };

  if (groupContext) {
    radioProps.name = groupContext.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === groupContext.value;
    radioProps.disabled = radioProps.disabled ?? groupContext.disabled;
  }

  return (
    // <label
    //   // className={wrapperClassString}
    //   // style={{ ...radio?.style, ...style }}
    //   onMouseEnter={props.onMouseEnter}
    //   onMouseLeave={props.onMouseLeave}
    //   title={title}
    // >
    //   <RcCheckbox
    //     {...radioProps}
    //     // className={classNames(
    //     //   radioProps.className,
    //     //   !isButtonType && TARGET_CLS
    //     // )}
    //     type="radio"
    //     // prefixCls={prefixCls}
    //     // ref={mergedRef}
    //   />
    //   {children !== undefined ? <span>{children}</span> : null}
    // </label>
    <label>
      <input type="radio" name={restProps.name} />
      {children}
    </label>
  );
};

const Radio = React.forwardRef<RadioRef, RadioProps>(InternalRadio);

export default Radio;
