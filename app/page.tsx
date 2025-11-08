import AIMessage from "@/components/AIMessage";
import UserMessage from "@/components/UserMessage";

type Message = {
  id: number;
  role: "user" | "ai";
  text: string;
};

const demoMessages: Message[] = [
  {
    id: 1,
    role: "ai",
    text: "Hey there! How can I help you build today?",
  },
  {
    id: 2,
    role: "user",
    text: "I want to create a sleek chat UI with Tailwind. Any tips?",
  },
  {
    id: 3,
    role: "ai",
    text: "Start with a strong layout: dark background, generous padding, and clear contrast between user and AI bubbles.",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950 text-neutral-100">
      <main className="flex-1 overflow-y-auto px-4 pb-32 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
          {demoMessages.map((message) =>
            message.role === "user" ? (
              <UserMessage key={message.id} text={message.text} />
            ) : (
              <AIMessage key={message.id} text={message.text} />
            ),
          )}
        </div>
      </main>
      <div className="fixed inset-x-0 bottom-0 border-t border-white/10 bg-neutral-950/90 backdrop-blur">
        <form className="mx-auto flex w-full max-w-3xl items-center gap-3 px-4 py-4 sm:px-6">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-full border border-white/10 bg-neutral-900/80 px-4 py-3 text-base text-neutral-100 placeholder:text-neutral-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
          />
          <button
            type="submit"
            className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
