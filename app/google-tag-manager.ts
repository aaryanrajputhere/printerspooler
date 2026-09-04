type GoogleTagManagerEvent = {
  event: string;
  [key: string]: string | number | boolean;
};

declare global {
  interface Window {
    dataLayer?: GoogleTagManagerEvent[];
  }
}

export function sendGTMEvent(event: GoogleTagManagerEvent) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
}
