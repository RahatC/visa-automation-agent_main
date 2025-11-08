type UserMessageProps = {
  text: string;
};

export default function UserMessage({ text }: UserMessageProps) {
  return (
    <div className="flex justify-end">
      <span className="max-w-[75%] rounded-2xl bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/30 sm:text-base">
        {text}
      </span>
    </div>
  );
}
