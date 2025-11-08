interface AIMessageProps {
  text: string;
}

export default function AIMessage({ text }: AIMessageProps) {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-gray-800 text-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}
