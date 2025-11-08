type UserMessageProps = {
  text: string;
};

export default function UserMessage({ text }: UserMessageProps) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] rounded-2xl bg-indigo-500 px-4 py-2 text-sm text-white shadow-sm">
        {text}
      </div>
    </div>
  );
}
