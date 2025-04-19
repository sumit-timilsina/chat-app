import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            {/* Mobile: Show Sidebar if no user selected */}
            {(!selectedUser) ? (
              <div className="w-full block lg:hidden">
                <Sidebar />
              </div>
            ) : (
              // Mobile: Show ChatContainer if user is selected
              <div className="flex-1 block lg:hidden">
                <ChatContainer />
              </div>
            )}

            {/* Desktop: Always show Sidebar and ChatContainer side by side */}
            <div className="hidden lg:flex h-full w-full">
              <Sidebar />
              <div className="flex-1">
                {selectedUser ? <ChatContainer /> : <NoChatSelected />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
