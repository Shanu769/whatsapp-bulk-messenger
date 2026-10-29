# WhatsApp Bulk Messenger

NOS local Chrome extension, version 0.1.0. Original source code. No license key, subscription, paid unlock, backend or API key. Independent of WhatsApp and Meta.

## Install

1. Download the repository ZIP from **Code → Download ZIP**.
2. Extract the ZIP to a permanent folder.
3. Open Chrome and type `chrome://extensions` in the address bar.
4. Turn on Developer mode. Click **Load unpacked**.
5. Select the extracted repository folder containing `manifest.json`.
6. Click the puzzle icon, pin WhatsApp Bulk Messenger, then click its NOS icon.
7. Link your phone on the official `https://web.whatsapp.com` page. Reload that page after installing or updating the extension.

An unpacked extension is local to each computer. Chrome profile sync does not copy or update it. Repeat the installation on each computer. To update, download the latest ZIP, replace the local files, click **Reload** on `chrome://extensions`, and refresh WhatsApp Web.

## First test

Import a CSV or XLSX with `first_name` and `phone` headers. Replace all sample numbers with your own test number. Use phone cells formatted as Text. For mixed countries include the full +country code, such as +1 followed by 10 national digits or +91 followed by 10 national digits. Only the first Excel worksheet is imported; formulas and old .xls files are not supported. Save .xls as .xlsx or CSV first.

Write `Hi @first_name, Happy Diwali!`. Preview each recipient. Select attachments again if you reopen the extension. Choose Review mode first, confirm the contacts expect your messages, then Start queue. Review mode opens the personalized draft: you add attachments and press Send in WhatsApp, then click I sent it in the extension.

Automatic queue is experimental. It uses WhatsApp Web controls, including sending text and then attachments separately. It stops if the draft or phone number cannot be verified or an expected control is missing. Saved-name headers usually require review mode. It does not read delivery receipts. Keep the dashboard and WhatsApp tab open, use English WhatsApp Web, and do not switch chats or interact with the WhatsApp tab while automatic sending runs. Stop cannot recall an already submitted message. After errors, inspect the chat before retrying; some content may already have been sent.

## Limits and privacy

- Maximum 5,000 rows, 5 MB import file, 4,000 message characters, 5 attachments of 10 MB each.
- Phone checks are structural; they do not establish ownership, validity or WhatsApp registration.
- Duplicate normalized phones are excluded, with the first row retained. Names are never used for duplicate detection.
- Reports distinguish submitted clicks, user-confirmed sends, excluded rows, skipped rows and rows needing review. Nothing is labeled delivered.
- Contacts and drafts are saved to this browser profile's local extension storage. They are not uploaded to this GitHub repository. Attachments remain in memory until the tab closes. Clear contacts and draft removes contact data and progress; delete saved templates separately. Uninstalling removes extension storage.
- WhatsApp receives the selected number and text when a chat opens and receives attachments when submitted. No other service receives imported files.
- This tool does not bypass WhatsApp limits or guarantee that an account will avoid restrictions. Use only expected, consented messages. Meta Verified is not an API entitlement.
- No automatic self-repair or automatic updates are installed. After a WhatsApp change, use Review mode or stop using the tool until the adapter is updated and tested. Replace files and click Reload on the Chrome extensions page to install updates.
- The NOS icon is temporary. Replace `icon.png` with the intended 128 x 128 PNG logo and reload the extension.

## Verification

Loaded as an unpacked extension in a separate headless Microsoft Edge test profile (Chromium engine). CSV, XLSX, phone normalization, duplicate exclusion, personalization, preview, consent gating, local persistence and the sending adapter were tested. Sending tests used a controlled local page fixture; no live WhatsApp login, attachment delivery or recipient delivery test was performed. Chrome itself and real WhatsApp interface compatibility still need an account test. This is a testable first build, not a production-certified bulk sender.

## Source and dependencies

`app.js` handles the workspace and queue; `core.js` handles parsing and normalization; `content.js` is the guarded web adapter; `background.js` opens the workspace. JSZip is bundled locally under its included MIT license. There is no remotely loaded executable code.

Official references: https://faq.whatsapp.com/5913398998672934/ ; https://www.whatsapp.com/legal/messaging-guidelines ; https://www.whatsapp.com/legal/meta-terms-whatsapp-business ; https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world
