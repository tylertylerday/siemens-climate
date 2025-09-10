import { app as n, BrowserWindow as r } from "electron";
import { createRequire as a } from "node:module";
import { fileURLToPath as c } from "node:url";
import o from "node:path";
a(import.meta.url);
const s = o.dirname(c(import.meta.url));
process.env.APP_ROOT = o.join(s, "..");
const t = process.env.VITE_DEV_SERVER_URL, _ = o.join(process.env.APP_ROOT, "dist-electron"), i = o.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = t ? o.join(process.env.APP_ROOT, "public") : i;
let e;
function l() {
  e = new r({
    icon: o.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: o.join(s, "preload.mjs")
    }
  }), e.on("enter-full-screen", () => {
    e == null || e.setMenuBarVisibility(!1);
  }), e.on("leave-full-screen", () => {
    e == null || e.setMenuBarVisibility(!0);
  }), e.webContents.on("did-finish-load", () => {
    e == null || e.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), t ? e.loadURL(t) : e.loadFile(o.join(i, "index.html"));
}
n.on("window-all-closed", () => {
  process.platform !== "darwin" && (n.quit(), e = null);
});
n.on("activate", () => {
  r.getAllWindows().length === 0 && l();
});
n.whenReady().then(l);
export {
  _ as MAIN_DIST,
  i as RENDERER_DIST,
  t as VITE_DEV_SERVER_URL
};
