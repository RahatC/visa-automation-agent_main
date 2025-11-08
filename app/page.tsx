"use client";

import { useState } from "react";
import UserMessage from "@/components/UserMessage";
import AIMessage from "@/components/AIMessage";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim() === "") return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
    };

    setMessages([...messages, newMessage]);
    setInputText("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: "This is a simulated AI response. Your message was: " + inputText,
        isUser: false,
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Main conversation area */}
      <div className="flex-1 overflow-y-auto p-4 pb-32">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              <p className="text-xl">Start a conversation</p>
              <p className="text-sm mt-2">Type a message below to begin</p>
            </div>
          ) : (
            messages.map((message) =>
              message.isUser ? (
                <UserMessage key={message.id} text={message.text} />
              ) : (
                <AIMessage key={message.id} text={message.text} />
              )
            )
          )}
        </div>
      </div>

      {/* Fixed input area at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4">
        <div className="max-w-4xl mx-auto flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
          <button
            onClick={handleSend}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
