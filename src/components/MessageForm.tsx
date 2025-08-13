import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const MessageForm = () => {
  const [message, setMessage] = useState<string>("");
  const [delay, setDelay] = useState<number>(10);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [sentMessage, setSentMessage] = useState<string>("");

  const handleSend = () => {
    setIsSending(true);

    const id = setTimeout(() => {
      setSentMessage(message);
      setMessage("");
      setIsSending(false);
    }, delay * 1000);

    setTimerId(id);
  };

  const handleCancel = () => {
    if (timerId) clearTimeout(timerId);
    setIsSending(false);
  };

  return (
    <div className="min-h-screen min-w-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-md p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl space-y-4 text-white">
        <h2 className="text-2xl font-bold text-center">DM Delay Button</h2>

        <Textarea
          placeholder="Enter your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Input
          type="number"
          placeholder="Delay in Seconds"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
          disabled={isSending}
          className="bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {!isSending ? (
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-opacity duration-200 text-white font-semibold py-2 px-4 rounded-lg"
            onClick={handleSend}
          >
            Send with Delay
          </Button>
        ) : (
          <Button
            className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:opacity-90 transition-opacity duration-200 text-white font-semibold py-2 px-4 rounded-lg"
            variant="destructive"
            onClick={handleCancel}
          >
            Cancel Sending
          </Button>
        )}

        {sentMessage && (
          <div className="bg-green-500/20 border border-green-400/30 text-green-300 p-3 rounded-lg">
            <p className="font-semibold">Message Sent:</p>
            <p>{sentMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageForm;
