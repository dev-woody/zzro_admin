import { useState } from "react";
import styled from "styled-components";
import {
  Button,
  StyledForm,
  StyledInput,
  PassShowBlock,
  ErrorMsg,
} from "lib/styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

import { BiUser, BiLock } from "react-icons/bi";
import { response } from "types/globalTypes";
import { BaseBlock } from "lib/styles";

const SignInBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eef2f6;
`;

const SignInFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 0.75rem;
  background-color: #fff;
  width: 100%;
  max-width: 200px;
`;

interface SignInProps {
  signInResult: response;
  onSubmit: (data: any) => void;
}

const schema = yup.object({
  userId: yup.string().required("아이디를 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
});

function SignInForm({ signInResult, onSubmit }: any) {
  const [isPassShow, setIsPassShow] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  return (
    <SignInBlock>
      <SignInFormBlock>
        <Link
          to="/"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          {/* <img src={LogoTypo} width={"65%"} /> */}
          ZaZaero
        </Link>
        <StyledForm onSubmit={handleSubmit((data) => onSubmit(data))}>
          <StyledInput
            placeholder="아이디"
            fullWidth
            startItem={<BiUser />}
            label="userId"
            register={register}
            errors={errors}
            status={errors.userId}
          />
          <StyledInput
            placeholder="비밀번호"
            type={isPassShow ? "text" : "password"}
            fullWidth
            startItem={<BiLock />}
            endItem={
              <PassShowBlock
                isPassShow={isPassShow}
                setIsPassShow={setIsPassShow}
              />
            }
            label="password"
            register={register}
            errors={errors}
            status={errors.password}
          />
          {/* <ErrorMsg>{signInResult.message}</ErrorMsg> */}
          <Button
            type="submit"
            status="primary"
            fullWidth
            disabled={isSubmitting}
            style={{ marginTop: "2rem" }}
          >
            로그인
          </Button>
          {/* <p
            style={{
              margin: "0.5rem 0",
              fontSize: "0.75rem",
              textAlign: "center",
            }}
          >
            아직 회원이 아니신가요?
          </p>
          <Link to="/auth/register" style={{ width: "100%" }}>
            <Button type="button" fullWidth>
              회원가입
            </Button>
          </Link> */}
        </StyledForm>
      </SignInFormBlock>
    </SignInBlock>
  );
}

export default SignInForm;
