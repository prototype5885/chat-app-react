import "./MessageTyping.css";

interface Props {
  typing: boolean;
  users: string;
}

export default function TypingIndicator({ typing, users }: Props) {
  if (typing) {
    return (
      <div className="mx-8 flex items-center">
        <div v-if="props.user" className="flex flex-row">
          <div id="svg-container" className="flex items-center">
            <svg width="6" height="6" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="white" />
            </svg>
            <svg width="6" height="6" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="white" />
            </svg>
            <svg width="6" height="6" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="white" />
            </svg>
          </div>
          <label className="ml-2 text-white">{users} is typing...</label>
        </div>
      </div>
    );
  } else {
    null;
  }
}
