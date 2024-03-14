import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

import { propsTypes } from "types/globalTypes";
import { ErrorMsg } from "../globalStyles";
import { BiChevronDown } from "react-icons/bi";
import { ErrorMessage } from "@hookform/error-message";
import { priceToString } from "lib/function/changeInput";

type SelectTyps = {
  isOpen?: boolean;
  status?: any;
  fullWidth?: boolean;
  disable?: any;
};

type formProps = {
  fullWidth?: any;
  align?: string;
};

const SelectBlock = styled.div<formProps>`
  width: fit-content;
  /* display: flex; */
  /* flex-direction: column; */
  position: relative;
  z-index: 100;
  width: 200px;
  white-space: nowrap;
  user-select: none;

  /* margin-right: 1rem; */

  & * {
    font-size: 0.875rem;
    vertical-align: middle;
  }

  ${(props: formProps) =>
    props.fullWidth &&
    css`
      width: 100% !important;
    `}

  ${(props: formProps) =>
    props.align === "vertical" &&
    css`
      flex-direction: row;
    `}
`;

const SelectedBlock = styled.div<SelectTyps>`
  box-sizing: border-box;
  color: #737373;
  background-color: #fff;
  width: inherit;
  /* min-width: 100px; */
  min-height: 30px;
  white-space: nowrap;
  border: 1px solid #d9d9d9;
  border-radius: 0.75rem;
  padding: 0.375rem 0.75rem;
  display: flex;
  justify-content: space-between;
  transition: 0s;
  margin: 0.25rem 0;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => "0 0 0 2px " + props.theme.opacity.p_10};
    cursor: pointer;
  }

  ${(props: SelectTyps) =>
    props.isOpen &&
    css`
      border: 1px solid ${(props) => props.theme.colors.primary};
      color: #d9d9d9;
    `}

  ${(props: SelectTyps) =>
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

  ${(props: SelectTyps) =>
    props.status &&
    css`
      border: 1px solid #ff4d4f !important;
      box-shadow: 0 0 0 2px rgb(255 77 79 / 10%) !important;
      border-inline-end-width: 1px;
      outline: 0;
    `}
`;

const OptionBlock = styled.div`
  position: relative;
  box-sizing: border-box;
  width: inherit;
  z-index: 100;
`;

const OptionTitle = styled.div`
  flex-grow: 1;
`;

const OptionMenuList = styled.div<SelectTyps>`
  position: absolute;
  top: 0.5rem;
  left: 0;
  height: 0;
  opacity: 0;
  transition: 0.2s;
  width: inherit;
  /* min-width: 200px; */
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
  box-shadow: 2px 2px 8px 2px #e1e1e1;
  background-color: #fff;
  border: 0;
  border-radius: 0.75rem;
  z-index: 100;

  ${(props: SelectTyps) =>
    props.isOpen &&
    css`
      height: fit-content;
      opacity: 100;
      /* border: 1px solid #d9d9d9; */
    `};

  ${(props: SelectTyps) =>
    props.fullWidth &&
    css`
      width: 100% !important;
    `}
`;

const OptionItemList = styled.div`
  box-sizing: border-box;
  height: fit-content;
  /* background-color: #fff; */
  border: 1px solid #d9d9d9;
  border-radius: 0.75rem;

  width: 100%;
`;

const OptionLabel = styled.div`
  padding: 0 0.5rem;
  height: fit-content;
  /* border-radius: 0.75rem; */

  &:hover {
    & > div.hoverColor {
      background-color: ${(props) => props.theme.opacity.p_10} !important;
      cursor: pointer;
    }

    & > div.isSubMenu {
      display: block !important;
    }
  }
`;

const OptionsLabelText = styled.div`
  box-sizing: border-box;
  border-radius: 0.75rem;
  padding: 0.5rem 0.5rem;
  margin: 0.2rem 0;
  text-align: start;
`;

const MultipleItem = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  padding: 0 0.5rem;
  border-radius: 0.25rem;

  & + & {
    margin-left: 0.125rem;
  }
`;

export const Select = (props: propsTypes) => {
  const {
    placeholder,
    fullWidth,
    optionList,
    isDepth,
    actions,
    register,
    label,
    multiple,
    setValue,
    getValues,
    errors,
    status,
    index,
    align,
    disable,
    ...rest
  } = props;
  //todo 중복선택 방지
  const [isOpen, setIsOpen] = useState(false);
  const [isTitle, setIsTitle] = useState<string>("");
  const [isMultiple, setIsMultiple] = useState<{ [key: string]: string }[]>([]);
  const newList = isMultiple.map((item) => item.id);
  const ref: any = useRef();
  const selectMenu: any = useRef();

  const OptionItems = ({ keyName, id }: { keyName: string; id: string }) => {
    const onClick = () => {
      setIsOpen(false);
      if (id !== "") {
        setIsTitle(keyName);
        if (actions) {
          actions(id);
        }
        if (label && multiple) {
          const newArray = JSON.parse(JSON.stringify(isMultiple));
          newArray.push({ id: id, keyName: keyName });
          const selectedItemInfos = newArray.map(
            (selectedItemInfo: any, index: number) => {
              return { id: selectedItemInfo.id, num: index };
            }
          );
          setIsMultiple(newArray);
          setValue(label, selectedItemInfos);
        } else if (label) {
          setValue(label, id, keyName);
        }
      }
    };
    return (
      <OptionLabel onClick={onClick}>
        <OptionsLabelText className="hoverColor">{keyName}</OptionsLabelText>
      </OptionLabel>
    );
  };

  const onMultipleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const id = e.currentTarget;
    setIsMultiple(isMultiple.filter((list) => list.id !== id.id));
    setIsTitle(placeholder);
  };

  useEffect(() => {
    function handleClickOutside(e: any): void {
      if (selectMenu.current && !selectMenu.current.contains(e.target)) {
        e.stopPropagation();
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectMenu]);

  useEffect(() => {
    if (!getValues) {
      setIsTitle(placeholder);
    }
  }, [placeholder, getValues]);

  return (
    <SelectBlock
      ref={selectMenu}
      // style={index ? { zIndex: `${index}` } : undefined}
      fullWidth={fullWidth}
      align={align}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
      }}
      {...rest}
    >
      {label && (
        <input
          style={{ display: "none" }}
          readOnly
          status={status}
          {...rest}
          {...register(label)}
        />
      )}
      <div style={{ width: "inherit" }}>
        <SelectedBlock
          isOpen={isOpen}
          status={status}
          disable={disable}
          onClick={disable ? undefined : () => setIsOpen(!isOpen)}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {isMultiple.length > 0 ? (
              isMultiple.map((item) => {
                return (
                  <MultipleItem
                    key={item.id}
                    id={item.id}
                    onClick={onMultipleClick}
                  >
                    {item.keyName}
                  </MultipleItem>
                );
              })
            ) : (
              <OptionTitle
                style={placeholder !== isTitle ? { color: "#000" } : undefined}
              >
                {isTitle}
              </OptionTitle>
            )}
          </div>
          <BiChevronDown
            style={
              placeholder !== isTitle
                ? { color: "#000", marginLeft: "1rem" }
                : { marginLeft: "1rem" }
            }
          />
        </SelectedBlock>
        <OptionBlock>
          <OptionMenuList isOpen={isOpen} fullWidth={fullWidth}>
            <OptionItemList ref={ref}>
              {optionList && optionList.length > 0 ? (
                optionList.length === newList.length ? (
                  <OptionItems
                    key={index}
                    keyName={"데이터가 없습니다."}
                    id=""
                  />
                ) : (
                  optionList.map((list: any, index: number) => {
                    if (!newList.includes(list.id || list.base.id)) {
                      return (
                        <OptionItems
                          key={index}
                          keyName={
                            label === "deliveryId"
                              ? priceToString(list.info.basicFee) +
                                "원 /" +
                                priceToString(list.info.freeCondition) +
                                "원"
                              : label === "specNumId"
                              ? priceToString(
                                  list?.info?.spec?.info?.quantity
                                ) +
                                " " +
                                list.info?.spec?.info.unit.info.nameKr
                              : list.name ||
                                list.desc ||
                                list.info.property ||
                                list.info.nameKr ||
                                list.info.name ||
                                list.info.basic?.info.nameKr ||
                                list.id ||
                                priceToString(list?.info?.quantity) +
                                  " " +
                                  list.info.unit.info.nameKr ||
                                list.info.code
                          }
                          id={list.id || list.base.id}
                        />
                      );
                    }
                  })
                )
              ) : (
                <OptionItems key={index} keyName={"데이터가 없습니다."} id="" />
              )}
            </OptionItemList>
          </OptionMenuList>
        </OptionBlock>
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
    </SelectBlock>
  );
};
