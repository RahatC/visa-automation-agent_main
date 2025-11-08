import AIMessage from "@/components/AIMessage";
import UserMessage from "@/components/UserMessage";

const messages = [
  { id: 1, role: "ai", text: "Hi there! How can I help you today?" },
  { id: 2, role: "user", text: "I’m exploring this new interface—looks great already." },
  {
    id: 3,
    role: "ai",
    text: "Awesome! Feel free to ask anything when you’re ready.",
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <main className="flex flex-1 flex-col px-4 pb-32 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col">
          <header className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-slate-100 sm:text-xl">
                Minimal Chat
              </h1>
              <p className="text-sm text-slate-400">
                A clean starting point for your next conversation experience.
              </p>
            </div>
            <span className="hidden rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-400 sm:block">
              Prototype
            </span>
          </header>
          <div className="flex-1 space-y-4 overflow-y-auto rounded-3xl border border-white/5 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur">
            {messages.map((message) =>
              message.role === "user" ? (
                <UserMessage key={message.id} text={message.text} />
              ) : (
                <AIMessage key={message.id} text={message.text} />
              )
            )}
          </div>
        </div>
      </main>
      <div className="fixed inset-x-0 bottom-0 border-t border-white/5 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-3xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-1 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
          <button className="inline-flex items-center justify-center rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
