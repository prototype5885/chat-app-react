import { Hash } from "lucide-react";

interface Props {
  id: string;
  name: string;
  selected: boolean;
  pressed: (id: string) => Promise<string>;
}

export function Channel({ id, name, selected, pressed }: Props) {
  return (
    <li>
      <button
        className={`w-full flex itemns-center h-9 rounded-lg hover:text-white ${
          selected ? "bg-white/8 text-white" : "hover-bg"
        }`}
        onClick={() => pressed(id)}
      >
        <Hash className="mx-1" strokeWidth={2} size={20} />
        <span className="ml-1">{name}</span>
      </button>
    </li>
  );
}
