export interface DataObj<T> {
  [key: string]: T;
}

export type response = {
  success: boolean;
  data: any;
  message: string;
  isReset: boolean;
  status: "idle" | "success" | "fail";
};

export function checkStatus(status: "idle" | "success" | "fail"): boolean {
  if (status === "success") {
    return true;
  } else return false;
}

export const responseForm: response = {
  success: false,
  data: null,
  message: "",
  isReset: true,
  status: "idle",
};

export interface propsTypes {
  [key: string]: any;
}

export interface userType {
  loginAt: string;
  name: string;
  isTopLevel: boolean;
  email: string;
  signInfo: {
    userId: string;
    password: null;
  };
}

export type GetProps<T extends React.ComponentType<any> | object> = T extends React.ComponentType<
  infer P
>
  ? P
  : T extends object
    ? T
    : never;

export type GetProp<
  T extends React.ComponentType<any> | object,
  PropName extends keyof GetProps<T>,
> = NonNullable<GetProps<T>[PropName]>;