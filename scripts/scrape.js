const axios = require('axios');
const jsdom = require("jsdom")
const {JSDOM} = jsdom;
const Fs = require('fs')  
const Path = require('path')  

// axios.get('https://southpark.fandom.com/wiki/Terrance_and_Phillip_in_Not_Without_My_Anus').then(data => {
//     dom = new JSDOM(data.data);
//     const url = dom.window.document.querySelector("[alt='201.jpg']").getAttribute('data-src');
//     console.log(url)
//     downloadImage(url)
// })

let get_list = () => {
    const tier = Fs.readFileSync( Path.join(__dirname , 'all_episodes.json') , 'utf8');
    const list = JSON.parse(tier);

    list.map(ep => { return { id: (ep.data.season.toString() + (ep.data.episode < 10 ? '0' : '') +  ep.data.episode.toString()), name: ep.data.name.split(" ").join("_")}}).forEach(ep => {

        setTimeout(() => {
        const ep_url = encodeURI(`https://southpark.fandom.com/wiki/${ep.name}`);
        console.log(ep_url, ep.id)

        try {
            axios.get(ep_url).then(data => {
                dom = new JSDOM(data.data);
                console.log(ep_url, ep.id)
    
                const url = dom.window.document.querySelector('#mw-content-text > div.mw-parser-output > table.infobox.headerscontent > tbody > tr:nth-child(2) > td > a > img').getAttribute('data-src');
                downloadImage(url, ep.id)
            })
        } catch(e) {
            console.log(e)
        }
                        }, 1000)

    })
}

async function downloadImage (url, name) {  
    const path = Path.resolve(__dirname, 'images', name + '.png')
    const writer = Fs.createWriteStream(path)
  
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)
  
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve)
      writer.on('error', reject)
    })
  }

get_list();