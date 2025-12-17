interface Props {
  children?: React.ReactNode;
}

export default function ModalFrame({ children }: Props) {
  return (
    <div className="animate-slidein absolute top-0 left-0 z-1 flex h-screen w-screen items-center justify-center bg-[#171010]">
      {children}
    </div>
  );
}
