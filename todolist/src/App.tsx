import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Login } from "./pages/Login";
import { ErrorPage } from "./pages/Error";
import { Register } from "./pages/Register";
import { TodosList } from "./pages/Todos";
import { Layout } from "./components/layouts/layout";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>

        <Route element={<Layout />}>
          <Route path="/todo" element={<TodosList />}></Route>
        </Route>
      </Routes>
      <ToastContainer aria-label="Notification Container" />
    </>
  );
};
export default App;
