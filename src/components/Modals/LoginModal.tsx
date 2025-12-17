"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import FormError from "../FormError";
import LoginWithJwt from "@/Scripts/CheckJwt";

interface Props {
  toggleMenus: () => void;
  toggleModal: () => void;
  setPersonality: (rers: any) => void;
}

type FormFields = {
  login: string;
  password: string;
};

export default function LoginModal({
  toggleMenus,
  toggleModal,
  setPersonality,
}: Props) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const FormSubmitHandler: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await fetch("http://localhost:3001/api/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          login: data.login.toLocaleLowerCase(),
          password: data.password.toLocaleLowerCase(),
        }),
      }).then(async (res) => {
        if (!res.ok) {
          throw new Error((await res.json()).message);
        }
      });

      const result = await LoginWithJwt();
      if (result) {
        setPersonality(result);
        toggleModal();
        return;
      } else {
        throw new Error("Somethings went wrong, please try again later");
      }
    } catch (err) {
      if (err instanceof Error) setError("root", { message: err.message });
    }
  };

  return (
    <div className="w-fit rounded-xl border-4 border-[#2B2B2B] bg-[#423F3E] p-2 text-white">
      <div className="mb-2 flex w-full justify-center rounded-b-sm border-b-4 border-b-[#2B2B2B]">
        <h1 className="text-md relative font-bold text-shadow-lg">Sign In</h1>
      </div>
      <form
        className="flex flex-col gap-1"
        onSubmit={handleSubmit(FormSubmitHandler)}
      >
        <input
          {...register("login", {
            required: "Login is required",
          })}
          className="rounded-md border-2 border-white bg-white pl-1 text-black hover:border-[#FA812F]"
          type="text"
          placeholder="Login"
        ></input>
        <FormError error={errors.login}></FormError>

        <input
          {...register("password", {
            required: "Password is required",
          })}
          className="rounded-md border-2 border-white bg-white pl-1 text-black hover:border-[#FA812F]"
          type="password"
          placeholder="Password"
        ></input>
        <FormError error={errors.password}></FormError>

        <FormError error={errors.root}></FormError>

        <div className="mt-1 flex w-full flex-col items-center justify-center rounded-t-sm border-t-4 border-t-[#2B2B2B]">
          <input
            disabled={isSubmitting}
            value={isSubmitting ? "Please wait..." : "Sign In"}
            className="mx-1 mt-1 w-full grow rounded-xl border-3 border-[#FA812F] bg-[#FA812F] p-1 font-semibold text-white transition text-shadow-lg hover:border-[#FFB22C] active:bg-blue-100"
            type="submit"
          ></input>
          <p className="w-full text-center font-sans text-sm font-bold text-gray-500 subpixel-antialiased text-shadow-lg">
            Dont have an account? <br></br>Try:
          </p>
          <button
            onClick={toggleMenus}
            className="mx-1 mt-1 w-full grow rounded-xl border-3 border-[#FA812F] bg-[#FA812F] font-semibold text-white transition text-shadow-lg hover:border-[#FFB22C] active:bg-blue-100"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
