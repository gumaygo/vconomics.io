const fetch = require('node-fetch');
var randomize = require('randomatic');
const readline = require("readline-sync");
var random = require('random-name')
var cheerio = require('cheerio')

const functionRegist = (email, reff) => new Promise((resolve, reject) => {
    const bodys = {
        fromReferralId: reff,
        fullName: `${random.last()} ${random.first()}`,
        password: "Japro908@",
        rePassword: "Japro908@",
        userName: email
     } 
   
    fetch('https://vconomics.io/identity/accounts/register/4', { 
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9,id;q=0.8,zh;q=0.7,ko;q=0.6,ja;q=0.5,zh-CN;q=0.4',
            'Content-Type': 'application/json',
            'Host': 'vconomics.io',
            'Origin': 'https://vconomics.io',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
            'X-CULTURE-CODE': 'EN',
            'X-VIA': 2,
        }
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

const functionGetOtp = (email) => new Promise((resolve, reject) => {
    fetch(`https://generator.email`, {
           method: "get",
           headers: {
               'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
               'accept-encoding': 'gzip, deflate, br',
               'accept-language': 'en-US,en;q=0.9',
               'cookie': `_ga=GA1.2.1434039633.1579610017; _gid=GA1.2.374838364.1579610017; _gat=1; surl=gmailya.com%2F${email}`,
               'sec-fetch-mode': 'navigate',
               'sec-fetch-site': 'same-origin',
               'upgrade-insecure-requests': 1,
               'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36'
           }
       })
    .then(res => res.text())
    .then(text => {
        const $ = cheerio.load(text);
        const src = $("#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > table > tbody > tr > td > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > p").text()
        resolve(src);
    })
    .catch(err => reject(err));
});

const functionVerif = (token, otp) => new Promise((resolve, reject) => {
    const bodys = {
        otp: otp,
        otpType: 1,
        validateToken: token
     } 
   
    fetch('https://vconomics.io/identity/tokens/verify-otp', { 
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9,id;q=0.8,zh;q=0.7,ko;q=0.6,ja;q=0.5,zh-CN;q=0.4',
            'Content-Type': 'application/json',
            'Host': 'vconomics.io',
            'Origin': 'https://vconomics.io',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
            'X-CULTURE-CODE': 'EN',
            'X-VIA': 2,
        }
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

(async () => {
    const reff = readline.question('Reff : ')
   for (var i = 0; i < 100000000; i++){
    try {
        const email = `${randomize('a0', 8)}@gmailya.com`
        console.log(email)
        const regist = await functionRegist(email,  reff)
        console.log(regist)
        const token = regist.data.token
        do {
            var otp = await functionGetOtp(email.split('@')[0])
        } while(!otp)
        const verif = await functionVerif(token, otp)
        console.log(verif)
    } catch (e) {
        console.log('[!] Gagal ngereff')
 }
}
})()