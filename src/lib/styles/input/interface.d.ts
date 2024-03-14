import { CSSProperties } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface InputProps extends CommonInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'type' | 'value'> {
    value?: ValueType;
    // prefixCls?: string;
    type?: LiteralUnion<'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week', string>;
    onPressEnter?: KeyboardEventHandler<HTMLInputElement>;
    /** It's better to use `count.show` instead */
    // showCount?: boolean | {
    //     formatter: ShowCountFormatter;
    // };
    autoComplete?: string;
    htmlSize?: number;
    classNames?: CommonInputPropsz['classNames'] & {
        input?: string;
        count?: string;
    };
    styles?: CommonInputProps['styles'] & {
        input?: CSSProperties;
        count?: CSSProperties;
    };
    count?: CountConfig;

    startItem?: JSX.Element;
    endItem?: JSX.Element;
    styles?: Record<CSSProperties>
    label?: string;
    register?: UseFormRegister;
    errors?: FeildError;
    status?: FieldError;
    disable?: boolean;
    // onKeyPress?: () =>
    // align,
}

export interface InputRef {
    focus: (options?: InputFocusOptions) => void;
    blur: () => void;
    setSelectionRange: (start: number, end: number, direction?: 'forward' | 'backward' | 'none') => void;
    select: () => void;
    input: HTMLInputElement | null;
}