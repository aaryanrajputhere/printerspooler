import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("loads one sitewide JivoChat widget from the root layout", async () => {
  const layout = await readFile(new URL("app/layout.tsx", projectRoot), "utf8");
  const widgetUrl = "https://code.jivosite.com/widget/oG59z23wRg";

  assert.equal(layout.split(widgetUrl).length - 1, 1);
  assert.match(layout, /id="jivo-chat-widget"/);
  assert.match(layout, /strategy="afterInteractive"/);
});

test("renders an accessible chat assistance button backed by the Jivo API", async () => {
  const [page, button, adapter] = await Promise.all([
    readFile(new URL("app/setup-printer-software/page.tsx", projectRoot), "utf8"),
    readFile(
      new URL(
        "app/setup-printer-software/chat-assistance-button.tsx",
        projectRoot,
      ),
      "utf8",
    ),
    readFile(new URL("app/jivo-chat.ts", projectRoot), "utf8"),
  ]);

  assert.match(page, /<ChatAssistanceButton\s*\/>/);
  assert.match(button, /<button/);
  assert.match(button, /disabled=\{!isReady\}/);
  assert.match(button, /chat_assistance_click/);
  assert.match(button, /openJivoChat\(\)/);
  assert.match(adapter, /jivo_onLoadCallback/);
  assert.match(adapter, /open\(\{ start: "chat" \}\)/);
});
