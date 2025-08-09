
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61USW7jRhS9SlBbCy3OpAQYCEdJFiXRokRKCrIokUWyLE4uDiLV8C7ItEo72foIOUCQO+QQOYGPEFC2052p4wAhQKAm/P/e+//9tyDNcIGmqAXDtyAnuIYl6pZlmyMwBEoVBIiAHvBhCcEQrE13xExrbiVKGmezkxm+sVfmpK0qNGv4QrxZ2VOTLrYKrV+Cux7Iq32MvY8EdJ3DwI6zEXLWqaeGfFxdj1a4gqcsgkvreJSym72OpwM64S7BXRcRYoLTUM8jlCAC4ylqLYjJ6+C34xOeMMxma3l61NRUITr2oNwZ9Dg3dCUa7Cz3Yn3aWA1NvQ7+DWOqLG8YG2iy7YWoj5bXER+baULE02q0EKg6y9hqJM7a7RP8Aocp8ic+Sktctq/WnZqaQmip8ZwJLb2/s0V3HNmG58yLRhPXcz2aWcrFMsHKRn4dcBzCpAln05nqzB3PrfitDXE+4Psu3e/vIjc/eo1Ta+6I+gNwi7z0yuG/6O7OsGyT6RbOxVum9RuJq7ndbCDG0kZTqStKM9NkI88zyzi8Dr51ZWWlt+cad01PzP7Gpzdrh/ESN+HHY5/cjvt8EkHlYMrUe/iwrMjHUMYKXqva9dUcJYJPqYExVgxsXYUX8WAh00fx6oC8qXXgA4xl0ZFu/arelX0S3Gr5BVav5XSwXjdxfUCmq/WpxJ4xp7F6vDwzOqB24oMhfdcDBIW4KAkscZaezzihB6Bf28gjqDzLCwT3dH2a7RVH5VwzXvPSKb7w4jgMCb/P2EOmTVpzoyASBpNL0AM5yTxUFMgf46LMSDtDRQFDVIDhZ+dKdaQJSrISXWEfDAFPDTiJpQWOHXxavDlGsCxgnr9JUQl6ICBZMkNgWJIK9cD5vcCrOsUYBm3IFK0rmsHJkijrIqurnK6xTMcwecq5wgkqSpjkYEiLPCeKPMeyd73/BQY1oGReFHWBYw1VE7SBINE0xyiSSg8MljP+FcbnPZCipnzq4k57lu6BAJOiXKdVHmfQf2nxl0voeVmVlnabemq3QAQMPzhGZYnTsOiIVSkkXoRrpHY8wDCAcYF+LzciyH/h8jzC1MzvunAxmSi8Op+DDnsX6M/SDCX2r+qksHsMHh/e/fj4cP/948P9l93/yePDu5+fN188Ptx/0x389Phw/93jw/23v3791S8/gB6IzylohpZoSRRojqEkjuvSdBd3v7PrwPiohDguwBCo1njALbaGbgUXbHE9GsnbUFZDGbxX48VjTz28MQ4LbanUtqbGM0Iq/iRpeFtyUUMxwa5eOLq9LnjnRHTv8m+CgCGQ8ugqRZPbtJiap32U62Uj6eXtfGEq4Y5VOBGldt5awno/aydkWYsHIz4ifs+Jx8lVrC6PRjM7OHPBa8SxGCylW53caOFll81HNfbQh8mYFQwG460Tb9kwgEblUpXd7Ba7XR26yTZEVHgBj6ugn90W6xsP0tV0vVjuo129Zx2a4sqBW2dWIPC8UK2CdatbrrRVnt1/nj7x89THz77E522A0XmIPhf03+r+hLvrTuqu90GI56n8D5NNcZqdFlLXeyo85qupIFZeX+YSE008f54y+1O81GNz4XhCMwZ3nU3yGJZBRhIwBEWyh6AHSFZ1vT5Jg+wjmVSZmijXT6xjWJTye//8jSUZ7umVRbJ8DIuoK4NFb6OgM0Mr57ldwvLFjkDuPmPegLvfADhMcCy3CAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                  ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                  ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
