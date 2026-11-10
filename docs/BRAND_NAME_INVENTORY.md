# Brand name inventory (v303) — "SmarTest Pro" / "SnapTest Pro" -> "The Vishnu Sharma"

Naya naam ek jagah se: `app-config.js` -> `appName`. Naya logo: `icon-*.png`, `snaptestpro-logo.png`, `favicon.ico`, `splash-screen.jpg`, `snaptestpro-banner.jpg` (file ke naam purane hi rakhe taaki links/precache na tootein).

## Badla gaya (display)
title / meta / og / twitter, manifest name + short_name, owner manifest, splash + header, "Powered by ..." tag, privacy / terms / pitch / delete-account / offline pages, push notification titles, Admit Card / result sheet / paper print header, WhatsApp & email support text, Excel/PDF download file names (`TheVishnuSharma_Results.*`), phone folder `Documents/TheVishnuSharma/`, Android launcher label default (capacitor.config.js), Owner APK app name + release title, README.

## Jaan-boojh kar NAHI badla (technical identifiers)
| Kya | Kahan | Kyun |
|---|---|---|
| `com.snaptestpro.*` package / application IDs | capacitor.config.js, workflows, fetch-institute.js | APK identity; badalne par app update nahi hota |
| Google Drive folder `"SnapTest Pro"` | drive-upload.js | Isi naam se purana folder dhoondha jata hai; badalne par institutes ki files "gayab" dikhengi |
| `SnapTestProApp` (User-Agent marker) | app-bridge.js, inline/index-inline-02.js | App-vs-web detection |
| `SnapTestPro.apk`, `SnapTestOwner.apk`, `app-b<N>` tags | build-android.yml, build-owner-apk.yml, app-version.json | Purane install links + auto-update |
| `snaptestpro.github.io`, `SnaptestPro/...` GitHub repo/URLs, `web+snaptestpro` | everywhere | Production URLs |
| Firebase project ID, Firestore collections, `snap_*` localStorage keys, Worker `snaptestpro-push` | various | Data compatibility |
| Service-worker cache prefix `snaptestpro-v<build>` | sw.js | Internal; build number se badalta hai |
| Purane docs / notes / changelog | docs/notes, notes/, NOTES*.md | Itihaas |

Naya package ID / URL / repo naam chahiye ho to alag migration plan banega — display rename ke saath mat milao.
