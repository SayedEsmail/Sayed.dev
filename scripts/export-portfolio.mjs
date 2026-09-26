import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const origin = process.env.PORTFOLIO_ORIGIN || "http://localhost:3000";
const url = new URL("/portfolio", origin).href;
const session = "portfolio-export";
const args = ["--yes", "agent-browser", "--session", session];
if (process.env.CHROME_PATH) args.push("--executable-path", process.env.CHROME_PATH);
function browser(...command) {
    const result = spawnSync("npx", [...args, ...command], { stdio: "inherit" });
    if (result.status !== 0) throw new Error(`Portfolio export failed: ${command[0]}`);
}
try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Portfolio preview returned ${response.status}`);
    browser("open", url);
    browser("wait", "--load", "networkidle");
    // PDF export must include lazy images beyond the visible viewport.
    browser("eval", "(async () => { await document.fonts.ready; await Promise.all(Array.from(document.images, image => { image.loading = 'eager'; return image.decode(); })); return 'All portfolio images loaded'; })()");
    browser("pdf", resolve("public/Sayed_Esmail_Portfolio.pdf"));
} finally {
    browser("close");
}
