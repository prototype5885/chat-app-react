import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Top({ children, className }: Props) {
  return (
    <div className={`min-h-12 max-h-12 border-b border-black ${className}`}>
      {children}
    </div>
  );
}
