import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TLogin } from "@/types/login/login";
import { fetchPostRegister } from "../register.service";

export const handleRegister = async (
  registerData: TLogin,
  navigate: (path: string) => void
) => {
  const response = await fetchPostRegister(registerData);
  if (response.status === "success") {
    toast.success(response.message);
    navigate("/");
  } else {
    // แสดงแจ้งเตือนถ้า login ล้มเหลว
    toast.error(response.message);
  }
};
