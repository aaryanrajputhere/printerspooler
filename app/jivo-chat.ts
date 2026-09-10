"use client";

type JivoChatOpenResult = {
  result: "ok" | "fail";
  error?: string;
};

type JivoChatApi = {
  open: (params?: { start?: "call" | "menu" | "chat" }) => JivoChatOpenResult;
};

declare global {
  interface Window {
    jivo_api?: JivoChatApi;
    jivo_onLoadCallback?: () => void;
    __printerspoolerJivoAdapterInstalled?: boolean;
    __printerspoolerJivoReady?: boolean;
  }
}

const JIVO_CHAT_READY_EVENT = "printerspooler:jivo-chat-ready";

function markJivoChatReady() {
  window.__printerspoolerJivoReady = true;
  window.dispatchEvent(new Event(JIVO_CHAT_READY_EVENT));
}

export function initializeJivoChatAdapter() {
  if (!window.__printerspoolerJivoAdapterInstalled) {
    const existingCallback = window.jivo_onLoadCallback;

    window.jivo_onLoadCallback = () => {
      existingCallback?.();
      markJivoChatReady();
    };
    window.__printerspoolerJivoAdapterInstalled = true;
  }

  // This covers client-side navigation to the CTA after JivoChat has initialized.
  if (typeof window.jivo_api?.open === "function") {
    markJivoChatReady();
  }
}

export function isJivoChatReady() {
  return (
    window.__printerspoolerJivoReady === true &&
    typeof window.jivo_api?.open === "function"
  );
}

export function subscribeToJivoChatReady(listener: () => void) {
  window.addEventListener(JIVO_CHAT_READY_EVENT, listener);
  return () => window.removeEventListener(JIVO_CHAT_READY_EVENT, listener);
}

export function openJivoChat() {
  if (!isJivoChatReady()) {
    return false;
  }

  return window.jivo_api?.open({ start: "chat" }).result === "ok";
}
