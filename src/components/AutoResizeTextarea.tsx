import React, { useRef, useEffect, useState, useCallback } from "react";

interface AutoResizeTextareaProps {
  modelValue: string;
  minRows?: number;
  maxRows?: number;
  placeholder: string;
  onChange: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = ({
            modelValue = "",
    minRows = 1,
  maxRows = 5,
  placeholder = "",
  onChange,
  onKeyDown,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [lineHeight, setLineHeight] = useState<number>(0);

  const autoResize = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea || lineHeight === 0) return;

    textarea.style.height = "auto";
    const currentRows = Math.floor(textarea.scrollHeight / lineHeight);
    const rows = Math.max(minRows, Math.min(currentRows, maxRows));
    textarea.style.height = `${rows * lineHeight}px`;
    textarea.style.overflowY = rows >= maxRows ? "auto" : "hidden";
  }, [lineHeight, minRows, maxRows]);

  useEffect(() => {
    if (textareaRef.current) {
      const style = window.getComputedStyle(textareaRef.current);
      const lh = parseInt(style.lineHeight, 10);
      if (lh && lh !== lineHeight) {
        setLineHeight(lh);
      }
    }
  }, [lineHeight]);

  useEffect(() => {
    autoResize();
  }, [modelValue, autoResize]);

  return (
    <textarea
      ref={textareaRef}
      value={modelValue}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      rows={1}
      placeholder={placeholder}
      className="resize-none overflow-y-hidden box-border grow my-3 outline-0 mx-2 h-auto"
    />
  );
};

export default AutoResizeTextarea;
