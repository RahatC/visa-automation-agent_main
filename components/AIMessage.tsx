interface AIMessageProps {
  text: string;
}

export default function AIMessage({ text }: AIMessageProps) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[70%] bg-gray-300 text-black px-4 py-3 rounded-lg shadow-md">
        <p className="whitespace-pre-wrap break-words">{text}</p>
      </div>
    </div>
  );
}
