import { FieldError, FieldErrors, Message } from "react-hook-form";

interface Props {
  error:
    | FieldError
    | undefined
    | (Record<
        string,
        Partial<{
          type: string | number;
          message: Message;
        }>
      > &
        Partial<{
          type: string | number;
          message: Message;
        }>);
}

export default function FormError({ error }: Props) {
  return (
    <>
      {error && (
        <span className="text-md animate-flash-slidein-right text-orange-400 text-shadow-lg">
          {error.message}
        </span>
      )}
    </>
  );
}
