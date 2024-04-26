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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348028367644";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx,2348028367644";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx,2348028367644";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_17_04_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICAxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc3LFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAzNixcbiAgICAgICAgNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc4LFxuICAgICAgICA2MCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMxLFxuICAgICAgICA4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV2w0encxdE41VUZzQVM3d05tRGVGV210VHVGaFA2UnA1bmlwc3RQdHpQOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZTNEMDFsZ2pTWmVfek1CVnpyTkpCUVwiLFxuICBcInBob25lSWRcIjogXCJjYTYyNjYxMi01MDllLTQzNDUtOTYwMy0xZDkzM2UzNmFkZTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTIyLFxuICAgICAgMTY5LFxuICAgICAgOTAsXG4gICAgICAzMCxcbiAgICAgIDEzOCxcbiAgICAgIDExMixcbiAgICAgIDE3NyxcbiAgICAgIDIyLFxuICAgICAgMTc3LFxuICAgICAgMjEzLFxuICAgICAgMTg1LFxuICAgICAgMTg1LFxuICAgICAgMjIxLFxuICAgICAgNDcsXG4gICAgICAxNDcsXG4gICAgICAxMTMsXG4gICAgICAzMyxcbiAgICAgIDI0NCxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMjA1LFxuICAgICAgMTUxLFxuICAgICAgMTc3LFxuICAgICAgMTUsXG4gICAgICAyNTQsXG4gICAgICA3OCxcbiAgICAgIDI3LFxuICAgICAgODksXG4gICAgICA3NyxcbiAgICAgIDEzMyxcbiAgICAgIDUyLFxuICAgICAgMTUwLFxuICAgICAgMjI0LFxuICAgICAgNTgsXG4gICAgICAyMzMsXG4gICAgICAyNixcbiAgICAgIDEzLFxuICAgICAgMTQxLFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg4TDFMRTVOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDI4MzY3NjQ0OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR2hvc3QgR2FtaW5nIEluYy5cIixcbiAgICBcImxpZFwiOiBcIjExMDkwOTA1Nzk3NDMyNToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQN1YrcDhFRU9LWHNMRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitGMmhKWnpGUDE5R1h0Zno3NmVxbnhFUlBkVTVER3phZUhHUWZENVg4QW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZG5NdWcrZEJMSzIvcy9DQnBFZkFLNlI3THhhZGpNS2dlOGt4dVowK1pONnhvdStRT2E4bFhFU2Q4eVFHajFRNHFkMWJyZHY2NHBQS0FubWZxbDg3QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUWR2aVQ4WHYrVDhEV1lQZDVLYUZmNGFQbXdha1lFRUVpK01DOHAxWldSU2F3RHpuTW5SR3k3UE94L3lHUy9XTHhqT25FeUhsdVV4RTZCSS9LV0VMaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyODM2NzY0NDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQxNjI2NjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIRHlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhEeS5qc29uIjogIntcImtleURhdGFcIjpcIi9TYnUzbE05aGY1STl2OEhEdlhQRUxkb2l0MnVmajNHWkcxd3FwSTU4ZVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE0MDc2MzM4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
