interface AIMessageProps {
  text: string;
}

export default function AIMessage({ text }: AIMessageProps) {
  return (
    <div className="flex justify-start">
      <div className="bg-gray-700 text-gray-100 rounded-lg px-4 py-2 max-w-md">
        {text}
      </div>
    </div>
  );
}
