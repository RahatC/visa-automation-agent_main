type UserMessageProps = {
  text: string;
};

const UserMessage = ({ text }: UserMessageProps) => {
  return (
    <div className="flex justify-end">
      <div className="max-w-[75%] rounded-2xl bg-sky-500 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/20">
        {text}
      </div>
    </div>
  );
};

export default UserMessage;
