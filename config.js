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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349042566898";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx,2349042566898";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx,2349042566898";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_04_04_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTczLFxuICAgICAgICA0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjAyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcwLFxuICAgICAgICA5MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4LFxuICAgICAgICA3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDU2LFxuICAgICAgICA5NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQXBhdFB3RCtIcWdRaDA5M3hma3NHUU9kK01VcEF6Mmtzbit1RUtvcENXaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNzFld2xyT1BRTzIyX3FlZEw1OFJuQVwiLFxuICBcInBob25lSWRcIjogXCI2MGVmMzBhNC00MTM3LTRlYjItYjAyMi1jNGUyNDNiYzBlN2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMTM5LFxuICAgICAgMzEsXG4gICAgICAxMTEsXG4gICAgICA4NCxcbiAgICAgIDgwLFxuICAgICAgMTIwLFxuICAgICAgMjM1LFxuICAgICAgMjI3LFxuICAgICAgMTEwLFxuICAgICAgMTU0LFxuICAgICAgMjI1LFxuICAgICAgMTU4LFxuICAgICAgNTksXG4gICAgICA0MyxcbiAgICAgIDMzLFxuICAgICAgNzMsXG4gICAgICAxMTYsXG4gICAgICA1MyxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDI1MCxcbiAgICAgIDE3NyxcbiAgICAgIDI1NCxcbiAgICAgIDIxOSxcbiAgICAgIDE3MixcbiAgICAgIDE2OSxcbiAgICAgIDI1MyxcbiAgICAgIDI0OCxcbiAgICAgIDI0NSxcbiAgICAgIDE2OSxcbiAgICAgIDEyNCxcbiAgICAgIDMsXG4gICAgICAyOSxcbiAgICAgIDE3NSxcbiAgICAgIDI0NixcbiAgICAgIDE0LFxuICAgICAgNjQsXG4gICAgICA5NixcbiAgICAgIDE1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNUjczUEhCRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0MjU2Njg5ODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODczNDY4NzYxNjYxNDk6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEYW1lenl54pyM77iP8J+SmVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BPQ3h0NEhFTGIxcjdFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaWMwdkZRWXpjcDNSc0gyUHhiVW1Kc0UyQWlkQ2FxVktQWVhjVTMrS2FFTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2V2lwSXp0ck0yWjBjUzUxcld4MWozeWRJcjVTUkFFaGswZTZ1Uk8wUmZMeFdrWm9XT1pFc0d2U0JHdmZaSEdidGVtL3NUTkZLN2JSOTNJMVJVdFhEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6N0F4ZklQdnBUTXZVbHNsa2hTQUI5U1pORHB5TUFaMHhhN21MbThHSEoxb3pFY3pkYzZnenpKdzhsMm83NkJoVitsV3pvOUhvR1IyNktzY1RQTlpEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQyNTY2ODk4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDE1ODI2NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Damezyy𓃵-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Damezyy𓃵",


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
