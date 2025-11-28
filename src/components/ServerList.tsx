import { useEffect, useState } from "react";
import ServerBase from "./ServerBase";
import type { ServerModel } from "../libs/models";

export default function ServerList() {
  const [serverList, setServerList] = useState<ServerModel[]>([]);

  useEffect(() => {
    const servers: ServerModel[] = [
      { id: "1", owner_id: "0", name: "First" },
      { id: "2", owner_id: "0", name: "Second" },
      { id: "3", owner_id: "0", name: "Third" },
      { id: "4", owner_id: "0", name: "Fourth" },
      { id: "5", owner_id: "0", name: "Fifth" },
      { id: "6", owner_id: "0", name: "Sixth" },
    ];

    setServerList(servers);
  }, []);

  return (
    <ul className="flex flex-col items-center py-2">
      <ServerBase id="" type="dm" name="DM" selected={false} />
      <ServerSeparator />
      {serverList.map((server) => (
        <ServerBase
          key={server.id}
          id={server.id}
          type="server"
          name={server.id}
          pic={server.picture}
          selected={false}
        />
      ))}
      <ServerSeparator />
      <ServerBase
        id=""
        type="add-server"
        name="Add a server"
        selected={false}
      />
    </ul>
  );
}

function ServerSeparator() {
  return (
    <div className="w-8 py-2">
      <div className="h-px bg-white/25"></div>
    </div>
  );
}
