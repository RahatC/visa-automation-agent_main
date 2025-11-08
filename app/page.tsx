"use client";

import { useState } from "react";
import UserMessage from "@/components/UserMessage";
import AIMessage from "@/components/AIMessage";

export default function Home() {
  const [messages, setMessages] = useState<Array<{ type: "user" | "ai"; text: string }>>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: "user", text: inputValue }]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Main conversation area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>Start a conversation...</p>
          </div>
        )}
        {messages.map((message, index) => (
          <div key={index}>
            {message.type === "user" ? (
              <UserMessage text={message.text} />
            ) : (
              <AIMessage text={message.text} />
            )}
          </div>
        ))}
      </div>

      {/* Fixed input area at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4">
        <div className="max-w-4xl mx-auto flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
