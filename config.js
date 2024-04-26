const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348161433620";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx,2348161433620";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx,2348161433620";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_11_04_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMxLFxuICAgICAgICA0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICA2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgOSxcbiAgICAgICAgNzksXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVHdZWWZuMUFGOHlWU3d5U1ZzbXpsUGpCV1FWb1lSK0RablNIQ3ZMS1RTQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwickxIOFNRWWJRRC1UenZ4ejgzMU9LQVwiLFxuICBcInBob25lSWRcIjogXCJkZTZkZjg3Ny1kMGI0LTQwNWQtYjg2OC1kM2Y4YzI1ZDI4NDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMTQsXG4gICAgICAxOTksXG4gICAgICAxNTcsXG4gICAgICAxMzMsXG4gICAgICA4NSxcbiAgICAgIDE4MSxcbiAgICAgIDE0NCxcbiAgICAgIDEzNCxcbiAgICAgIDEyNCxcbiAgICAgIDIxNyxcbiAgICAgIDE2LFxuICAgICAgMjExLFxuICAgICAgMTkzLFxuICAgICAgMTIyLFxuICAgICAgMTYwLFxuICAgICAgNTYsXG4gICAgICAxODAsXG4gICAgICAyMDEsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICAxNDIsXG4gICAgICAyMyxcbiAgICAgIDUxLFxuICAgICAgMTUwLFxuICAgICAgMTA3LFxuICAgICAgNDksXG4gICAgICA2MixcbiAgICAgIDI0MyxcbiAgICAgIDIyOSxcbiAgICAgIDMsXG4gICAgICA1OSxcbiAgICAgIDE1MixcbiAgICAgIDEsXG4gICAgICAxMDcsXG4gICAgICA5LFxuICAgICAgMTIyLFxuICAgICAgMjA2LFxuICAgICAgMjA4LFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVQxTENEMlNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjE0MzM2MjA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYyNDk1ODg1MzczNDg3OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRMOEVklE8JODtfCfh6jwn4emXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmlwdDYwRkVMZmNyN0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiWGNHVXdhTkpucGxTUDlGajVhZS9sU05BSUtodVhrYk9taGpUODFoTTBNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlYwZExuTnJvazhnWktjQ2t5SDNtTXp2MngvcWRmMmZFdnpwV1lGaldxcW9STW1hKyt2eEd3d2hUTlRkdSsyem9aNzdJZEJpcXpPOGhPYmZLTVY0Z0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJxTTU3eDROVWlVRjNlQ2dTY0gzWWY0QlhmMllPWkc2d29DdkQzUis1YU1NLzczN1N2S1c5ckNaU1RQT3NySEFadW1oWlc3R2pCOVRsYkV2eC9XckNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjE0MzM2MjA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDE1NTA2NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᏀᎻϴՏͲ𓃵-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ᏀᎻϴՏͲ𓃵",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
