
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61UyY7bRhD9laCvEizui4ABwk3ULmqhFgY5tMgmRYnbdDepoQwB/ohccsghlyCAkav/x1d/RUDNjD1IHGcChKdid6Pqvar36i3I8pigEapB9y0ocFxBipqQ1gUCXaCXYYgwaIMAUgi64N5wT5wy5DIoeKGULE+aLspsbjq54NDS24syIpVizKRUuwPXNijKfRL730jIbNzAWCbY305Se2ZuksitdocNy/Ok9nMZDZcaGtrEco6DO3BtMsIYx1lkFQeUIgyTEaodGOPXwc/N4VZ+ECucj+v5NCoukUBz20VL/6jaCsF6Z9paj1yGt18Jn91JvdrlNxqb9tTNVNPEfSX093J88Apnge89hpYt6MLeyn+ET+IoQ8EgQBmNaf3qvqOZqKCRqY6ZTtoZdOazYO4VjnM+zeu5XCZrWxXm8rC/zDf564CrsarKF+9e0AZxP5ImSnE4HlNTzKNk447WJyGmJko486ApL4E7+Fkrp//Sd0kbL1YnYqajIU35iyhXFX8exKP45IRmwQ7gA9W31gKfe5PXwXc9m6xdOJ4e3WXHznqzZUtv9bfj+8EKR95pNFcDFR+s/S5zv8CHtMTfQjldL0YJnZLWiS9ZvChXqWdDMpCl7fo8Z4sQ0XyYqKknJsxEiDsPrjTm2VOkUr236M2kjrFh7uGF4XpppawNmVowsYz53Y3RCdWDAHTZaxtgFMWEYkjjPGvOBK4NYFAtkY8RvXUX2DA0rDyMsoiMRUsTW8PkopvCpJpQtL8IkCoTIZEPi6M0uQNtUODcR4SgoB8TmuN6ggiBESKg+8NtUA1njNKcomEcgC4QGVVQeFYSePV78uZ8gJTAoniTIQraIMR5OkGgS3GJ2uD23rQ0RhckUZJlS2Y0wRAsVmVVS9UFmddYpSGYPtZcxSkiFKYF6LKyyDKiIjLqtf2/wDB4lmc0S7MYU2FMxVJ4xeJUXjINXeFNw/g2DFa4/tgGGXqgjyJuWs+zbRDGmFA3K4skh8Gzwp8voe/nZUaXdeYbTYAw6L44RpTGWUQaYmUGsX+IK2Q0PEA3hAlBn6eNMAqeuTxtMCMPGhEK0mpmzXgDNNibRH9tTVcQ/96dDDaPwcc/fv70/t2n9+8+/vbTdx9//dBEv3/49P4X0AbJLRHLsQqryBIrcIwiCE2y5uL6mUNTMkAUxglpWjxZafJs17fGrXlnMrBtzYo0I9LAF87PRnpUauH3H6LdmjvrPb/abXYcL49oknsJ1vcdUx45xz2TObPFan66+0oS0AWdqah7HuccuZGJ0a4qz9tj2BsebdGslNbZXAq0cozDerPbmy1Z3XjassLJZMH3Kco0dVNH9ODVikv6515vOZ9eWifZ1O6aagGqYh+9LEb14nLJVH5sqqMj05ptLMfPI2pVRKmGJHSd03S4rtyZWmr2CA+gW+vRvRBaeNQa52sGZpXvcRfJNp0z3fbPxnaMqR49Wvy2YpKn1R4/uS++/YYxum3Kp7H923QfcTcaZK7tFymeVu8/rC8dbnVlZ/cCoi22Y66XTmmrxh60PXjedM6t+ihw6vByObnMEFwbMxQJpGGOU9AFJN1D0AY4LxtFD7Iw/0YlQ2MG+tNiSyCh2heXfM3//OMrB+dFH5ID6ALOYXeHsJF8rRXFkkL6bDqgNV9/44Hrn/kyxrucCAAA',
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
