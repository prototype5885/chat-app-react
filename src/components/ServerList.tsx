import { useEffect, useState } from "react";
import ServerBase from "./ServerBase";
import type { ServerModel } from "../libs/models";

export default function ServerList() {
  const [serverList, setServerList] = useState<ServerModel[]>([]);

  useEffect(() => {
    const fetchServers = async () => {
      const response = await fetch("/api/server", { method: "GET" });
      if (!response.ok) {
        throw new Error(`${response.status} getting server list`);
      }

      const servers: ServerModel[] = await response.json();
      setServerList(servers);
    };

    fetchServers();
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
          name={server.name}
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
