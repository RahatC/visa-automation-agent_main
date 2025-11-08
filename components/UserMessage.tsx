interface UserMessageProps {
  text: string;
}

export default function UserMessage({ text }: UserMessageProps) {
  return (
    <div className="flex justify-end mb-4">
      <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-[80%]">
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}
