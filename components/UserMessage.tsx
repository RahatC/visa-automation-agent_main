interface UserMessageProps {
  text: string;
}

export default function UserMessage({ text }: UserMessageProps) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[70%] bg-blue-600 text-white px-4 py-3 rounded-lg shadow-md">
        <p className="whitespace-pre-wrap break-words">{text}</p>
      </div>
    </div>
  );
}
