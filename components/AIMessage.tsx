type AIMessageProps = {
  text: string;
};

const AIMessage = ({ text }: AIMessageProps) => {
  return (
    <div className="flex justify-start">
      <div className="max-w-[75%] rounded-2xl bg-zinc-800 px-4 py-3 text-sm leading-relaxed text-zinc-100 shadow-sm">
        {text}
      </div>
    </div>
  );
};

export default AIMessage;
