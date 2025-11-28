import Top from "./Top";

interface Props {
  serverId: string;
}

export function ChannelList({ serverId }: Props) {
  return (
    <div className="flex flex-col min-w-60 max-w-60 grow overflow-y-auto">
      <Top>
        <span>{serverId}</span>
      </Top>
      <div className="grow flex flex-col overflow-y-auto p-2"></div>
    </div>
  );
}
