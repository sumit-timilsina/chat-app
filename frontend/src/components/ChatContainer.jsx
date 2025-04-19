import { useRef, useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import { useThemeStore } from "../store/useThemeStore";
import { formatMessageTime } from "../lib/utils";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";

const ChatContainer = () => {
  const { messages, isMessagesLoading, getMessages, selectedUser, subscribeToMessages, unsubscribeFromMessages } = useChatStore();
  const { theme } = useThemeStore(); // Get the theme from the store
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className={`flex-1 flex flex-col overflow-hidden bg-base-100`}>
        <ChatHeader />
        {/* Loading skeleton here */}
      </div>
    );
  }

  return (
    <div className={`flex-1 flex flex-col overflow-hidden bg-base-100 text-base-content`}>
      <ChatHeader />
      <div className={`flex-1 overflow-y-auto px-2 sm:px-4 py-4 space-y-4 ${theme === "dark" ? "bg-neutral text-neutral-content" : "bg-base-100"}`}>
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${message.senderId === selectedUser._id ? "chat-start" : "chat-end"}`}
          >
            <div className="chat-image avatar">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border">
                <img
                  src={message.senderId === selectedUser._id ? selectedUser.profilePic || "/avatar.png" : "/avatar.png"}
                  alt="profile pic"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="chat-header mb-1 text-xs sm:text-sm opacity-70">
              <time>{formatMessageTime(message.createdAt)}</time>
            </div>
            <div
              className={`chat-bubble max-w-xs sm:max-w-sm md:max-w-md ${
                message.senderId === selectedUser._id ? "bg-base-200 text-base-content" : "bg-primary text-primary-content"
              }`}
            >
              {message.image && (
                <img
                  src={message.image}
                  alt="Attachment"
                  className="w-full max-w-[160px] sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message.text && <p className="text-sm sm:text-base break-words">{message.text}</p>}
            </div>
          </div>
        ))}
        {/* Scroll anchor */}
        <div ref={messageEndRef} />
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
