type AIMessageProps = {
  text: string;
};

export default function AIMessage({ text }: AIMessageProps) {
  return (
    <div className="flex justify-start">
      <span className="max-w-[75%] rounded-2xl bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 shadow-lg shadow-zinc-900/10 sm:text-base">
        {text}
      </span>
    </div>
  );
}
