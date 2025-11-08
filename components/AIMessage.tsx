interface AIMessageProps {
  text: string;
}

export default function AIMessage({ text }: AIMessageProps) {
  return (
    <div className="flex justify-start">
      <div className="bg-gray-300 text-black px-4 py-2 rounded-lg max-w-md">
        {text}
      </div>
    </div>
  );
}
