import * as React from "react";
import { RadioChangeEvent, RadioGroupProps } from "./interface";
import useMergedState from "rc-util/lib/hooks/useMergedState";
import Radio from "./radio";
import { RadioGroupContextProvider } from "./context";

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const [value, setValue] = useMergedState(props.defaultValue, {
      value: props.value,
    });

    const onRadioChange = (ev: RadioChangeEvent) => {
      const lastValue = value;
      const val = ev.target.value;
      if (!("value" in props)) {
        setValue(val);
      }
      const { onChange } = props;
      if (onChange && val !== lastValue) {
        onChange(ev);
      }
    };

    const {
      // className,
      // rootClassName,
      options,
      // buttonStyle = "outline" as RadioGroupButtonStyle,
      disabled,
      children,
      style,
      id,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
    } = props;

    let childrenToRender = children;
    // 如果存在 options, 优先使用
    if (options && options.length > 0) {
      childrenToRender = options.map((option) => {
        if (typeof option === "string" || typeof option === "number") {
          // 此处类型自动推导为 string
          return (
            <Radio
              key={option.toString()}
              // prefixCls={prefixCls}
              disabled={disabled}
              value={option}
              // checked={value === option}
            >
              {option}
            </Radio>
          );
        }
        // 此处类型自动推导为 { label: string value: string }
        return (
          <Radio
            // key={`radio-group-value-options-${option.value}`}
            // prefixCls={prefixCls}
            disabled={option.disabled || disabled}
            value={option.value}
            checked={value === option.value}
            title={option.title}
            style={option.style}
            id={option.id}
            required={option.required}
          >
            {option.label}
          </Radio>
        );
      });
    }

    return (
      <div
        // {...pickAttrs(props, { aria: true, data: true })}
        // className={classString}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        id={id}
        ref={ref}
      >
        <RadioGroupContextProvider
          value={{
            onChange: onRadioChange,
            value,
            disabled: props.disabled,
            name: props.name,
            optionType: props.optionType,
          }}
        >
          {childrenToRender}
        </RadioGroupContextProvider>
      </div>
    );
  }
);

export default React.memo(RadioGroup);
