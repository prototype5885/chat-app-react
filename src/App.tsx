import { useEffect, useState } from "react";
import "./Theme.css";
import Top from "./components/Top";
import ServerList from "./components/ServerList";
import { UserPanel } from "./components/UserPanel";
import { ChannelList } from "./components/ChannelList";

function App() {
  const [theme, setTheme] = useState<string>("");
  const [serverId, setServerId] = useState<string>("123");

  useEffect(() => {
    setTheme("theme-diskord");
  });

  return (
    <div className={`flex flex-row h-screen select-none ${theme}`}>
      {/* server list */}
      <div
        className="bg-black/45 min-w-18 max-w-18 overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <ServerList />
      </div>

      {/* channel/friend list */}
      <div className="flex flex-col min-w-60 max-w-60 h-screen grow">
        {/* channel or friend list */}
        <div className="flex grow overflow-y-auto bg-black/20">
          <ChannelList key={serverId} serverId={serverId} />
        </div>
        {/* user panel */}
        <div className="min-h-14 max-h-14 bg-black/35">
          <UserPanel />
        </div>
      </div>

      {/* third panel */}
      <div className="flex flex-col w-full h-full">
        <Top className="bg-black/10">channel id</Top>
        {/* <ChatArea
          className="bg-black/10"
          channelId="0"
          messageList={messageList}
          initialMessagesReceived={initialMessagesReceived}
        /> */}
      </div>
      {/* fourt panel */}
      <div className="min-w-64 max-w-64 flex flex-col">
        <Top className="bg-black/10">idk</Top>
        <div className="bg-black/20 flex-1"></div>
      </div>
    </div>
  );
}

export default App;
