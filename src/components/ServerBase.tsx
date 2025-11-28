import { Mail, Plus } from "lucide-react";

interface Props {
  id: string;
  type: "dm" | "server" | "add-server";
  name: string;
  pic?: string;
  selected: boolean;
}

export default function ServerBase({ id, type, name, pic, selected }: Props) {
  return (
    <li>
      <button
        className={`bg-white/7 flex justify-center items-center w-12 h-12 my-1 bg-cover bg-center transition-all cursor-pointer
        ${
          selected
            ? "rounded-[35%] bg-blue-500"
            : "rounded-[50%] hover:rounded-[35%] hover:bg-blue-500"
        }`}
        style={
          type == "server" && pic != undefined
            ? { backgroundImage: `url(/avatars/${pic})` }
            : {}
        }
      >
        {type === "dm" ? (
          <Mail size={32} strokeWidth={1} />
        ) : type === "add-server" ? (
          <Plus />
        ) : type === "server" && pic == undefined && name !== "" ? (
          <span>{name[0].toUpperCase()}</span>
        ) : null}
      </button>
    </li>
  );
}
