//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349033567058";
global.owner = process.env.OWNER_NUMBER || "2349033567058";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURWYlFMM0xUR3ZwcDRWdXlGYXduRmJwc0lwd2FwbS9lM1BpOS9zY0YxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjFmbDgyZE9vZGVjZ0JNZEZmcFRZNmpwMEdQaVFxa3VEQW9aVGtDdUNraz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRGVYQjg5bVZYazIyV3IweXFqZWpsN2ZCaXVmN1NBVFJFMDVIMUNmV0VNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SnF6TVRXdkRCNFF0Y21teFFzWDZjWVBkaXE1dUZKM0VndjZHanJnQmhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVMaW4xcmhyR1dtZWRkN01IaXBDM0FBb2Z0a1FpQTZ6eVgrOEM2NEw5VWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpmTUd3MFJpK01ON3IrZWQ4VWJ4TkpUSjAwL2krSXhVTldSaDJHcHBiZ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU5rTmlpMktiSWt1KzNZS1Z5ZVNXdHRXSXJab1dXY3VIT21RV3N6bCttZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVlZTGtRdld5Y0JoR2ZUQ2g0ODJmVFdlaFBWb2dydGdoa1lrYVRZMEV5ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtuTnFIMnhkcWhZOGlhYXpUMFhsTlB0RTVXU1NFTXhpNzY4djZ5ZWVVdHBxU1pPeTJxNlIyK0FYcmZPa2tEemwza0FzTGFLWk1MMlBtalpsZy9mK0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJHTGdRSm1mYVJHcXkrc0M0RnMrblEyelI5K1ZYWkRNb1BPUnM4dFFlYmFRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlaVU1RWJnSlNwdTJzb3JWb2F6b3BRIiwicGhvbmVJZCI6IjEzNjllYmNjLTJlYzYtNDFjOS1hMjZhLWE3OTI5YTM3NmE2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzSW1oVmwveDg5Mm5oN1gzTnlOZThsQmUvRVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFVuUDFYZkVaNGxRVUk0RVEybGJhT2ZuU3pnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhXWUJISzVYIiwibWUiOnsiaWQiOiIyMzQ5MDMzNTY3MDU4OjZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01pb2tTc1FtL0xRdWdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldidkNMeWhOY2NwQW9kS0RFRnNJd0NuQjR4amQwekJOdkdHelN0WHdYRHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZYMGtQSGFOUHMyVXBMQ042dnIvV01VdjJkcm1nZGpxZHJiMTNhUlVVbFB6UUZETWY2QUtqc0VRT1FqV01uMElOU1ZpNm5qamJFaFpkeGRnY05hMUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkS3Bpd0Y3SG9oRXhYSWRXcGRJWFJyNm1aRUlDeUpETm1sczNsdVpINjErMXhyZ3c3YVNiMkZaUDNoSXFUNzdnQXJBT2RzYzRraTcvbmUvaDlCczNDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMzM1NjcwNTg6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWbTd3aThvVFhIS1FLSFNneEJiQ01BcHdlTVkzZE13VGJ4aHMwclY4Rnc4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzNTcyOTA0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFIMSJ9
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhPQ3pYNGdhS2I4TFhtc2Z6WUR4VXVkb0Z2aGVSV0hqVXMwMDYzVjZHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaG1uTmlFa0pZeG84eXhmdWl5WFIxSVNNenhkbHN5b2IwL3ZrYUx3RFJWRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTTV3T0V5Zit0R1FXQk5QN1pKQ0c2ZDljWlBseUZ0b0lyV0FnMUtYWGs4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVdDd0U2Rpem0waU11RmRiUmFMMUc1OXg0L0l0UTdHc0FHczNGSEFUM21BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVBZXlnZk44MHJoclpxalp6T1QvYWtTbDFtQVhZcytKWmtXdmFoVkR6MTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVnR0w5N2JWb2p6aTZMZHNYbkFaRlM2aGdzMlZnZ3pKQ3Z0cDBNVVBlMEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1qc2xQQ1hoblNSVnB2UWtMenhLUkFVeWRQL2JaZ05Uc3gyMDJoYytWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMitjNnBHOFZ6OUNRTTVsNXlmd0duRmdaejdnNndMa293Nlpob2tobGtUMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFsQjBVMVcvbTZYTWZXd3NUaVdxSm1CQ3NUNzRQTDdnVHhVZmxkVnY5WVR0eFZtbGppbSsrNW9iWng5enNZNWJYcXBVOFlkTEQ0SHlmcVdSOE9Hb0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6IlVZekgyRitydGw5TUR4blJRZlBlK1REUEE5SmFvRndSa3RPN2xCMjVRVk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhIZjdIcUdnUldXM2FzZjc5TlhEYVEiLCJwaG9uZUlkIjoiMWNiODBlODQtYWRmOC00ZWE4LWI3ZWMtNjhkMzg5OTgzNmU0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFnd0ZmSmo2SEFDQzlyZkZmOE5iQlFwQ2dlMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQjIyVkxJeEEwZ2tlTHNxWjNCQ285UUVTbTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiREZFWTFHNEsiLCJtZSI6eyJpZCI6IjIzNDkwMzM1NjcwNTg6NTVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ082b2tTc1F2TnJydXdZWUJDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldidkNMeWhOY2NwQW9kS0RFRnNJd0NuQjR4amQwekJOdkdHelN0WHdYRHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxCM1kwa0Y4dW1tUXNHZE9QL3l0eDJnaHhicDVGRnJNeUhHRVNjSFQxRHY3Sm5kVnR2RlFaby82a1ppZW1ISXNtYWFHYXN3WW5lNFU2bG1WS3B4N0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwYUdNVEZ2cG1hRHZOZ0ljUmhWcklMY1dZM2IrSHByN2ZxcmZWMFJIaFA3eTVSdGdodkRzUXhxR3ZnZzNXb0xSYTVyMHR6NnN6VURPMTBPRW1wNFNEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMzM1NjcwNTg6NTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVm03d2k4b1RYSEtRS0hTZ3hCYkNNQXB3ZU1ZM2RNd1RieGhzMHJWOEZ3OCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjEwOTM4NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHREwifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
