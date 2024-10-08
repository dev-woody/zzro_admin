import { useState, forwardRef } from "react";
import styled, { css } from "styled-components";
import { propsTypes } from "types/globalTypes";
import { AlignBox, ErrorMsg } from "../globalStyles";
import { ErrorMessage } from "@hookform/error-message";
import { InputProps, InputRef } from "./interface";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface FormProps {
  // width?: string;
  disable?: boolean;
  status?: any;
  type?: string;
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div<FormProps>`
  position: relative;
  display: flex;
  /* flex-wrap: wrap; */
  box-sizing: border-box;
  min-width: 200px;
  margin: 0.25rem 0;
  padding: 0.375rem 12px;
  color: rgba(0, 0, 0, 0.88);
  line-height: 1.5;
  list-style: none;
  position: relative;
  background-color: #fff;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 0.75rem;
  transition: all 0.2s;
  /* overflow: hidden; */

  * {
    font-size: 0.875rem;
  }

  ${(props) =>
    props.type === "textarea" &&
    css`
      height: 300px !important;
    `}

  ${(props) =>
    props.disable &&
    css`
      border: 1px solid #d9d9d9 !important;
      box-shadow: 0 0 0 0 !important;
      color: #d9d9d9 !important;
      background-color: #f9f9f9;

      &:hover {
        cursor: not-allowed !important;
      }
    `}

    ${(props) =>
    props.status &&
    css`
      border: 1px solid #ff4d4f !important;
      box-shadow: 0 0 0 2px rgb(255 77 79 / 10%) !important;
      border-inline-end-width: 1px;
      outline: 0;
    `}

    &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => "0 0 0 2px " + props.theme.opacity.p_10};
    border-inline-end-width: 1px;
    outline: 0;
  }

  &:focus-within {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => "0 0 0 2px " + props.theme.opacity.p_10};
    border-inline-end-width: 1px;
    outline: 0;
  }

  & + & {
    margin-top: 2rem;
  }
`;

const FrontIcon = styled.div`
  margin-right: 0.5rem;
`;

const BackIcon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const InternalInputBlock = styled.input`
  flex-grow: 1;
  border: 0 !important;
  background-color: inherit;
  color: inherit;
  /* cursor: inherit; */
  &:focus-visible {
    border: none;
    outline: none;
  }
`;

const StyledTextAreaBlock = styled.textarea`
  flex-grow: 1;
  border: 0 !important;
  background-color: inherit;
  color: inherit;
  min-height: inherit;
  /* cursor: inherit; */
  &:focus-visible {
    border: none;
    outline: none;
  }
`;

const Label = styled.label<FormProps>`
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid #d9d9d9;
  color: #000;
  background-color: #fff;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  overflow: hidden !important;

  ${(props: { status?: string }) =>
    props.status === "primary" &&
    css`
      background-color: ${(props) => props.theme.colors.primary} !important;
      color: #fff !important;
      border: 0px !important;
      font-weight: 600;

      &:hover {
        border: 0px !important;
        background-color: ${(props) => props.theme.opacity.p_80} !important;
      }
    `}

  &:hover {
    /* border: 1px solid ${(props) => props.theme.colors.primary}; */
    /* box-shadow: ${(props) => "0 0 0 2px " + props.theme.opacity.p_10}; */
    color: inherit;
    cursor: inherit;
  }
`;

const CapsLockBlock = styled.div`
  position: absolute;
  background-color: #fff;
  top: -120%;
  right: -60%;
  border: 1px solid ${(props) => props.theme.colors.primary};
  padding: 0.25rem 1rem;
  border-radius: 0.75rem 0.75rem 0.75rem 0;
  z-index: 1000;
`;

export const PassShowBlock = ({
  isPassShow,
  setIsPassShow,
}: {
  isPassShow: boolean;
  setIsPassShow: (status: boolean) => void;
}) => {
  return isPassShow ? (
    <AiFillEye onClick={() => setIsPassShow(false)} />
  ) : (
    <AiFillEyeInvisible onClick={() => setIsPassShow(true)} />
  );
};

export const InternalInput = forwardRef<InputRef, InputProps>((props, ref) => {
  const [isCapslock, setIsCapslock] = useState<boolean>(false);
  const {
    startItem,
    endItem,
    label,
    register = () => null,
    errors,
    status,
    disable,
    type,
    ...rest
  } = props;

  const passwordKeyPress = (e: KeyboardEvent) => {
    if (e.getModifierState("CapsLock")) {
      setIsCapslock(true);
      return;
    } else {
      setIsCapslock(false);
    }
  };

  return (
    <AlignBox>
      <FormItem type={type} disable={disable} status={status}>
        {startItem && <FrontIcon>{startItem}</FrontIcon>}
        {type === "textarea" ? (
          <StyledTextAreaBlock
            disabled={disable}
            {...rest}
            autoComplete="off"
            {...register(label)}
            // onKeyPress={label === "password" ? passwordKeyPress : null}
          />
        ) : (
          <InternalInputBlock
            disabled={disable}
            {...rest}
            type={type}
            autoComplete="off"
            {...register(label)}
            // onKeyPress={label === "password" ? passwordKeyPress : null}
          />
        )}
        {endItem && <BackIcon>{endItem}</BackIcon>}
        {label === "password" && isCapslock && (
          <CapsLockBlock>
            CapsLock이
            <br />
            켜져있습니다.
          </CapsLockBlock>
        )}
      </FormItem>
      {errors && (
        <ErrorMessage
          errors={errors}
          name={typeof label === "string" ? label : ""}
          render={({ message }) => (
            <ErrorMsg>{message ? message : "\u00A0"}</ErrorMsg>
          )}
        />
      )}
    </AlignBox>
  );
});

export const StyledSearchInput = (props: propsTypes) => {
  const {
    width,
    label,
    register,
    errors,
    status,
    disable,
    action,
    align,
    btnText,
    ...rest
  } = props;
  return (
    <AlignBox align={align}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "fit-content",
        }}
      >
        <FormItem status={status}>
          {register ? (
            <InternalInputBlock
              disabled={disable}
              {...rest}
              autoComplete="off"
              {...register(label)}
            />
          ) : (
            <InternalInputBlock
              disabled={disable}
              {...rest}
              autoComplete="off"
            />
          )}
        </FormItem>
        <Label
          status="primary"
          onClick={action}
          style={{ marginLeft: "0.25rem", minWidth: "60px" }}
        >
          {btnText ? btnText : "검색"}
        </Label>
      </div>
      {errors && (
        <ErrorMessage
          errors={errors}
          name={label}
          render={({ message }) => (
            <ErrorMsg align={align}>{message ? message : "\u00A0"}</ErrorMsg>
          )}
        />
      )}
    </AlignBox>
  );
};
