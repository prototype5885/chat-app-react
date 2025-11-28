import { useEffect, useState } from "react";
import AutoResizeTextarea from "./AutoResizeTextarea";
import TypingIndicator from "./MessageTyping";
import { AddAttachment } from "./icons/AddAttachment";

export function MessageInput() {
  const [chatInput, setChatInput] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(false);

  useEffect(() => {
    if (chatInput !== "") {
      setTyping(true);
    } else {
      setTyping(false);
    }
  }, [chatInput]);

  function sendMsg() {
    console.log(chatInput);
  }

  return (
    <div className="flex flex-col">
      <div className="flex rounded-lg mx-4 bg-white/5 border border-white/10 overflow-hidden">
        <button className="group flex justify-center items-center mx-2">
          <AddAttachment />
        </button>
        <AutoResizeTextarea
          modelValue={chatInput}
          placeholder="Type something..."
          onChange={setChatInput}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMsg();
            }
          }}
        />
        <button onClick={sendMsg}>send</button>
      </div>
      <div className="min-h-6 max-h-6">
        <TypingIndicator users="me" typing={typing} />
        <div>above</div>
      </div>
    </div>
  );
}
