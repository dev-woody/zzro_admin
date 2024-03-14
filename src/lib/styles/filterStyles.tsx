import styled from "styled-components";
import { Button } from "./button/buttonStyles";
import Input from "./input";
import { useForm } from "react-hook-form";

const StyledFilterBlock = styled.form`
  display: flex;
  margin-bottom: 1rem;
`;

type FilterProps = {
  label: string;
  placeholder?: string;
  action: (data: any) => void;
};

const StyledFilter = ({ label, placeholder, action }: FilterProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  return (
    <StyledFilterBlock onSubmit={handleSubmit((data) => action({ data }))}>
      <Input label={label} placeholder={placeholder} register={register} />
      <Button type="submit" status="primary" disabled={isSubmitting}>
        검색
      </Button>
    </StyledFilterBlock>
  );
};

export default StyledFilter;
