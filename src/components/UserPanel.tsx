import { useState } from "react";
import type { UserModel } from "../libs/models";
import Avatar from "./Avatar";
import { Settings } from "lucide-react";

export function UserPanel() {
  const [user] = useState<UserModel>({
    id: "0",
    display_name: "Test",
    picture: "",
  });

  return (
    <div className="flex items-center h-full px-2">
      <button className="w-3/5 flex items-center p-1 hover-bg rounded-lg hover:bg-white/5 cursor-pointer">
        <Avatar size="40" name={user.display_name} pic={user.picture} />
        <div className="flex flex-col items-start ml-2">
          <span className="text-sm">{user.display_name}</span>
          <span className="text-xs">Status</span>
        </div>
      </button>

      <div className="w-2/5 flex justify-evenly">
        <button className="hover-bg rounded-lg hover:bg-white/5 cursor-pointer">
          <Settings strokeWidth="1" className="m-1" />
        </button>
      </div>
    </div>
  );
}
