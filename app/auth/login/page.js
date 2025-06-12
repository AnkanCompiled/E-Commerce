import AuthComponent from "@/components/AuthComponent";
import { api } from "@/configs/axios";
import Link from "next/link";

export default function Login() {
  const handleLogin = async () => {
    const res = await api.post("/api/login", { email: "sda", password: "sda" });
  };
  return (
    <div className="flex flex-col items-center h-[calc(100vh-60px)] bg-gradient-to-bl from-neutral-700 to-neutral-500">
      <div className="w-full md:w-[70vw] xl:w-[40vw] h-full my-10 flex flex-col rounded-lg bg-white">
        <div className="space-y-3.5 p-5 mx-auto lg:mx-0">
          <h2 className="text-3xl/normal font-semibold">Welcome Back!</h2>
          <span className="text-xl/normal">
            Sign in to continue your fashion trend.
          </span>
        </div>
        <div className="flex-1 bg-neutral-200 m-2 p-5 space-y-6 rounded-lg">
          <AuthComponent type={"login"} />
          <Link
            href={"/auth/register"}
            className="underline block text-center"
            replace
          >
            Do not have an account! Sign Up.
          </Link>
        </div>
      </div>
    </div>
  );
}
