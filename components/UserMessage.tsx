interface UserMessageProps {
  text: string;
}

export default function UserMessage({ text }: UserMessageProps) {
  return (
    <div className="flex justify-end">
      <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-md">
        {text}
      </div>
    </div>
  );
}
