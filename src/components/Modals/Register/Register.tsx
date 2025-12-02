import WindowButton from "@/components/Buttons/WindowButton";
import InputField from "../Elements/InputField";

export default function Register() {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-2">
      <InputField title="Email" type="email"></InputField>
      <InputField maxLength={30} title="Password" type="email"></InputField>
      <InputField title="Password confirmation" type="email"></InputField>
      <div className="col-start-2 justify-self-end">
        <WindowButton padding={0.5} type="basic" borderType="basic">
          <p>Register</p>
        </WindowButton>
      </div>
    </div>
  );
}
