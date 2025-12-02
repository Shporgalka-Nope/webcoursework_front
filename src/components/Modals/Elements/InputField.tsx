interface Props {
  type?: string;
  title: string;
  maxLength?: number;
}

export default function InputField({ type = "text", title, maxLength }: Props) {
  return (
    <>
      <p className="mr-2">{title}</p>
      <input
        maxLength={maxLength}
        type={type}
        className="w-full border-b-2 border-blue-400"
      ></input>
    </>
  );
}
