import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "lib/layout/layout";
import SignInForm from "components/auth/singInForm";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "theme/themes";
import GlobalStyle from "lib/styles/globalStyles";
import Dashboard from "components/dashboard";
import Client from "components/client";
import Customer from "components/customer";
import Goods from "components/goods";
import Board from "components/board";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/client/*" element={<Client />} />
        <Route path="/customer/*" element={<Customer />} />
        <Route path="/goods/*" element={<Goods />} />
        <Route path="/board/*" element={<Board />} />
      </Route>,
      <Route path="signIn" element={<SignInForm />}></Route>,
    ])
  );

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
