import { useChatStore } from "../store/useChatStore";
import { useMediaQuery } from "react-responsive";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const UsersPage = () => {
  const { selectedUser } = useChatStore();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const renderContent = () => {
   
    return (
      <div className="flex h-full rounded-lg overflow-hidden">
        <Sidebar />
      </div>
    );
  };

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
