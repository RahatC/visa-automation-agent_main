type UserMessageProps = {
  text: string;
};

const UserMessage = ({ text }: UserMessageProps) => {
  return (
    <div className="flex justify-end">
      <div className="max-w-[75%] rounded-2xl bg-indigo-500 px-4 py-3 text-sm leading-relaxed text-white shadow-sm">
        {text}
      </div>
    </div>
  );
};

export default UserMessage;
