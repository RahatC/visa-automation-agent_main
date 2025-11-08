type AIMessageProps = {
  text: string;
};

export default function AIMessage({ text }: AIMessageProps) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] rounded-2xl bg-zinc-800 px-4 py-2 text-sm text-zinc-100 shadow-sm">
        {text}
      </div>
    </div>
  );
}
