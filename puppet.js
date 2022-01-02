const puppeteer = require('puppeteer');
const randomize = require('randomatic')
var random = require('random-name')
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const delay = require('delay');

const randstr = length =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });


    const functionGetLink = (email, domain) =>new Promise((resolve, reject) => {
    fetch(`https://generator.email/${domain}/${email}`, {
        method: "get",
        headers: {
            accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "accept-encoding": "gzip, deflate, br",
            cookie: `_ga=GA1.2.659238676.1567004853; _gid=GA1.2.273162863.1569757277; embx=%5B%22${email}%40${domain}%22%2C%22hcycl%40nongzaa.tk%22%5D; _gat=1; io=io=tIcarRGNgwqgtn40O${randstr(3)}; surl=${domain}%2F${email}`,
            "upgrade-insecure-requests": 1,
            "user-agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
        }
    })
        .then(res => res.text())
        .then(text => {
            const $ = cheerio.load(text);
            const src = $("#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > table > tbody > tr > td > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > p").text();
            resolve(src);
        })
        .catch(err => reject(err));
});


(async () => {



for (let i = 0; i < 120; i++) {

try {
  var name = random.first()
            var uname = `${name}${randomize('0', 5)}`
            var email = `${uname}@honey.cloudns.ph`;
            var password = 'Passku1010'
    
            console.log(`[+] Email => ${email}`)
            var browser = await puppeteer.launch({
                executablePath: `C:/Program Files/Google/Chrome/Application/chrome.exe`,
                headless: false
            });
            
           
  const page = await browser.newPage();
  await page.goto('https://vconomics.io/en/sign-up?ref=BG1SX9LV');


                    await page.waitForSelector("#__next > div.jss33 > div > div.jss10 > form > div:nth-child(2) > div > input",{visible:true ,timeout:60000})
                    await page.click("#__next > div.jss33 > div > div.jss10 > form > div:nth-child(2) > div > input")
                    await page.type("#__next > div.jss33 > div > div.jss10 > form > div:nth-child(2) > div > input", name)

                    await page.waitForSelector("#__next > div.jss33 > div > div.jss10 > form > div:nth-child(3) > div > input",{visible:true ,timeout:60000})
                    await page.click("#__next > div.jss33 > div > div.jss10 > form > div:nth-child(3) > div > input")
                    await page.type("#__next > div.jss33 > div > div.jss10 > form > div:nth-child(3) > div > input", email)

                    await page.waitForSelector("#__next > div.jss33 > div > div.jss10 > form > div.MuiFormControl-root.MuiTextField-root.jss11.jss13 > div > input",{visible:true ,timeout:60000})
                    await page.click("#__next > div.jss33 > div > div.jss10 > form > div.MuiFormControl-root.MuiTextField-root.jss11.jss13 > div > input")
                    await page.type("#__next > div.jss33 > div > div.jss10 > form > div.MuiFormControl-root.MuiTextField-root.jss11.jss13 > div > input", password)

                    await page.waitForSelector("#__next > div.jss33 > div > div.jss10 > form > div.jss7 > span.MuiButtonBase-root.MuiIconButton-root.jss49.MuiRadio-root.MuiRadio-colorSecondary.MuiIconButton-colorSecondary > span.MuiIconButton-label > input",{visible:true ,timeout:60000})
                    await page.click("#__next > div.jss33 > div > div.jss10 > form > div.jss7 > span.MuiButtonBase-root.MuiIconButton-root.jss49.MuiRadio-root.MuiRadio-colorSecondary.MuiIconButton-colorSecondary > span.MuiIconButton-label > input")

                    //   await page.waitForSelector("#__next > div.jss33 > div > div.jss10 > form > div.jss7 > span.MuiButtonBase-root.MuiIconButton-root.jss49.MuiRadio-root.MuiRadio-colorSecondary.MuiIconButton-colorSecondary > span.MuiIconButton-label > input",{visible:true ,timeout:60000})
                    // await page.click("#__next > div.jss33 > div > div.jss10 > form > div.jss7 > span.MuiButtonBase-root.MuiIconButton-root.jss49.MuiRadio-root.MuiRadio-colorSecondary.MuiIconButton-colorSecondary > span.MuiIconButton-label > input")

                    
                      await page.waitForSelector("#__next > div.jss33 > div > div.jss10 > form > button > span.MuiButton-label",{visible:true ,timeout:60000})
                    await page.click("#__next > div.jss33 > div > div.jss10 > form > button > span.MuiButton-label")

                   
                await page.waitForSelector("#__next > div.jss33 > div > div.jss10 > div > div > div.MuiBox-root.jss76.jss61 > div > div:nth-child(1) > input[type=tel]",{visible:true ,timeout:60000})
                    await page.click("#__next > div.jss33 > div > div.jss10 > div > div > div.MuiBox-root.jss76.jss61 > div > div:nth-child(1) > input[type=tel]")
                      let linkConfirm;
                do {
                    linkConfirm = await functionGetLink(uname, email.split('@')[1]);
                    console.log(`[!] Wait for veryf link..`)
                } while (!linkConfirm);
                
                console.log(`[+] code is ${linkConfirm}..`)
                    await page.type("#__next > div.jss33 > div > div.jss10 > div > div > div.MuiBox-root.jss76.jss61 > div > div:nth-child(1) > input[type=tel]", linkConfirm)



               
                await page.waitForSelector("#dialog-verification > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > div > div.MuiBox-root.jss79 > a:nth-child(3) > button",{visible:true ,timeout:60000})
                await page.click("#dialog-verification > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > div > div.MuiBox-root.jss79 > a:nth-child(3) > button")
                await delay(1000)
                await browser.close();
                  console.log(`[+] Sukses reff ke ${i}`)
                  console.log()
                } catch (e) {
            await browser.close()
            console.log(e)
            i--
        }
  
}

            
})();