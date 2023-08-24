const express = require('express')
const cheerio = require('cheerio')
const path = require('path')
const fs = require('fs');

const { privacyPolicyPageMetaTags, disclaimerPageMetaTags } = require('./src/constants/pageMetaTags')


const PORT = 8080

const app = express()

const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html', 'js', 'css', 'json', 'ico', 'png', 'jpg', 'txt', 'svg', 'woff', 'woff2', 'webp', 'map'],
    index: false,
    maxAge: '0',
    redirect: 'false',
    setHeaders: (res, pth, stat) => {
        res.set('x-timestamp', Date.now())
    }
}

app.use(express.static("build", options))

app.get('*', (req, res) =>{
    const indexHtmlPath = path.resolve(__dirname, './build/index.html')
    const indexHtml = fs.readFileSync(indexHtmlPath)
    const $ = cheerio.load(indexHtml)
    if (req.path === '/privacy-policy') $('head').append(privacyPolicyPageMetaTags)
    if (req.path === '/user-deletion-disclaimer') $('head').append(disclaimerPageMetaTags)

    res.status(200).send($.html())
})

app.listen(PORT, () => {
    console.log('SERVER Started at port: ' + PORT)
})
