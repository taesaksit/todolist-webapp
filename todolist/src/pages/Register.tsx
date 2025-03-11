import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import catImage from "../assets/cat cute flip.jpg";
import { handleRegister } from "@/services/register/functions/handle-register";

export const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setShowError(true);
      return;
    }
    setShowError(false);

    const registerData = { firstname, username, password };
    await handleRegister(registerData, navigate);
  };
  return (
    <div className="flex bg-white w-full h-screen justify-center items-center">
      <div className="w-[850px] h-max bg-[#F8F9FF] shadow-lg px-20 py-16 rounded-lg flex flex-col items-center">
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
          <div className="flex flex-col items-center gap-4">
            <img
              src={catImage}
              alt="Cute Cat"
              className="w-40 h-40 rounded-full object-cover"
            />
            <div className="w-full">
              <span className="font-semibold text-sm text-gray-400">
                Your Name
              </span>
              <Input
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className={`w-full, ${
                  showError && !password ? "border-2 border-red-400" : ""
                }`}
              />
              {showError && !password && (
                <p className="text-xs text-red-400 my-1">
                  This field is required
                </p>
              )}
            </div>
            <div className="w-full">
              <span className="font-semibold text-sm text-gray-400">
                Username
              </span>
              <Input
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-full, ${
                  showError && !password ? "border-2 border-red-400" : ""
                }`}
              />
              {showError && !password && (
                <p className="text-xs text-red-400 my-1">
                  This field is required
                </p>
              )}
            </div>
            <div className="w-full">
              <span className="font-semibold text-sm text-gray-400">
                Password
              </span>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full, ${
                  showError && !password ? "border-2 border-red-400" : ""
                }`}
              />
              {showError && !password && (
                <p className="text-xs text-red-400 my-1">
                  This field is required
                </p>
              )}
            </div>
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
          <p className="text-xs text-center">
            Already have an account?{" "}
            <span
              className="text-xs text-[#6270EF] font-semibold hover:underline cursor-pointer"
              onClick={() => navigate("/")}
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
