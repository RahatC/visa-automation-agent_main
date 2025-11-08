import AIMessage from "@/components/AIMessage";
import UserMessage from "@/components/UserMessage";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 pb-32 pt-10">
        <div className="flex-1 space-y-4 overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-lg backdrop-blur">
          <UserMessage text="Hi there, can you help me with something?" />
          <AIMessage text="Absolutely. Ask me anything and I'll do my best to help." />
        </div>
      </main>
      <div className="fixed inset-x-0 bottom-0 border-t border-zinc-800 bg-zinc-900/95 px-4 py-4 backdrop-blur">
        <form className="mx-auto flex w-full max-w-3xl items-center gap-3">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-1 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
          <button
            type="submit"
            className="rounded-full bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
