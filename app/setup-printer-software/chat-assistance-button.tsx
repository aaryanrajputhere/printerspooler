"use client";

import { useEffect, useState } from "react";
import { sendGTMEvent } from "../google-tag-manager";
import {
  initializeJivoChatAdapter,
  isJivoChatReady,
  openJivoChat,
  subscribeToJivoChatReady,
} from "../jivo-chat";

export function ChatAssistanceButton() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleReady = () => setIsReady(isJivoChatReady());

    initializeJivoChatAdapter();
    handleReady();

    return subscribeToJivoChatReady(handleReady);
  }, []);

  const handleClick = () => {
    sendGTMEvent({ event: "chat_assistance_click" });

    if (!openJivoChat()) {
      setIsReady(false);
    }
  };

  return (
    <button
      className="setup-results-cta"
      type="button"
      onClick={handleClick}
      disabled={!isReady}
      aria-label={
        isReady
          ? "Open chat assistance"
          : "Chat assistance is loading"
      }
    >
      Click for Chat Assistance
    </button>
  );
}
