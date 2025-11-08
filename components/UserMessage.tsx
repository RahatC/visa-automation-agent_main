interface UserMessageProps {
  text: string;
}

export default function UserMessage({ text }: UserMessageProps) {
  return (
    <div className="flex justify-end">
      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-md">
        {text}
      </div>
    </div>
  );
}
