type AIMessageProps = {
  text: string;
};

const AIMessage = ({ text }: AIMessageProps) => {
  return (
    <div className="flex justify-start">
      <div className="max-w-[75%] rounded-2xl bg-neutral-800/80 px-4 py-3 text-sm text-neutral-100 shadow-inner shadow-black/10 ring-1 ring-white/5">
        {text}
      </div>
    </div>
  );
};

export default AIMessage;
