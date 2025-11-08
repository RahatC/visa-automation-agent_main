import AIMessage from "@/components/AIMessage";
import UserMessage from "@/components/UserMessage";

const mockMessages = [
  {
    id: "ai-1",
    role: "ai",
    text: "Hello! How can I help you today?",
  },
  {
    id: "user-1",
    role: "user",
    text: "Can you draft a quick introduction for our new product launch?",
  },
  {
    id: "ai-2",
    role: "ai",
    text: "Absolutely! Here's a starting point you can refine and share with the team.",
  },
] as const;

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 pb-32 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col overflow-y-auto">
          <div className="mb-4 text-center text-xs uppercase tracking-wide text-zinc-500">
            Today
          </div>
          <div className="space-y-4 pb-12">
            {mockMessages.map((message) =>
              message.role === "ai" ? (
                <AIMessage key={message.id} text={message.text} />
              ) : (
                <UserMessage key={message.id} text={message.text} />
              ),
            )}
          </div>
        </div>
      </main>
      <div className="fixed inset-x-0 bottom-0 border-t border-zinc-900/80 bg-zinc-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <input
            aria-label="Message"
            type="text"
            placeholder="Send a message..."
            className="flex-1 rounded-xl border border-transparent bg-zinc-800/80 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
          />
          <button
            type="button"
            className="rounded-xl bg-indigo-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
