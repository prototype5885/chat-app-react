interface Props {
  size: string;
  pic: string;
  name: string;
}

export default function Avatar({ size, pic, name }: Props) {
  return (
    <div
      className="bg-cover bg-center rounded-full bg-black/15"
      style={{
        backgroundImage: `url(/cdn/avatars/${pic})`,
        minWidth: `${size}px`,
        maxWidth: `${size}px`,
        minHeight: `${size}px`,
        maxHeight: `${size}px`,
      }}
    >
      {pic === "" && name !== "" ? <span>{name[0].toUpperCase()}</span> : null}
    </div>
  );
}
