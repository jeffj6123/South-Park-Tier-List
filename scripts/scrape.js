const axios = require('axios');
const jsdom = require("jsdom")
const {JSDOM} = jsdom;
const Fs = require('fs')  
const Path = require('path')  

const fileExists = (path) => {
  try {
    Fs.readFileSync(path);
    return true
  } catch(e) {
    return false
  }
}

let get_list = () => {
  const tier = Fs.readFileSync(Path.join(__dirname, 'all_episodes.json'), 'utf8');
  const list = JSON.parse(tier);
  const descriptsion = [];
  list.map(ep => { return { id: (ep.season.toString() + (ep.episode < 10 ? '0' : '') + ep.episode.toString()), name: ep.name.split(" ").join("_") } }).forEach( (ep, i )=> {

    setTimeout(() => {
      const ep_url = encodeURI(`https://southpark.fandom.com/wiki/${ep.name}`).replace("?", "%3F").replace(/!/g, "");

      try {
        axios.get(ep_url).then(data => {
          dom = new JSDOM(data.data);
          // console.log(ep_url)

          const d = dom.window.document.getElementById("Synopsis").parentElement.nextElementSibling.textContent.replace("[1]", "") //.innerText
          // console.log(d);
          descriptsion.push({
            id: ep.id,
            description: d
          })
          // console.log(JSON.stringify({
          //   id: ep.id,
          //   description: d
          // }))
          if((i + 1) === list.length) {
            Fs.writeFileSync("all_descris.json", JSON.stringify(descriptsion))
            console.log(descriptsion);
          }

          // const url = dom.window.document.querySelector('#mw-content-text > div.mw-parser-output > table.infobox.headerscontent > tbody > tr:nth-child(2) > td > a > img').getAttribute('data-src');
          // console.log("downloading " + url)
          // downloadImage(url, ep.id)
        },
        err => {
          console.log(ep_url)
        })

        if (!fileExists(Path.resolve(__dirname, 'images', ep.id + '.png'))) {
          // axios.get(ep_url).then(data => {
          //   dom = new JSDOM(data.data);
          //   console.log(ep_url, ep.id)

          //   const d = dom.window.document.getElementById("Synopsis").parentElement.nextElementSibling.innerText

          //   descriptsion.push({
          //     id: ep.id,
          //     description: d
          //   })
          //   console.log(JSON.stringify({
          //     id: ep.id,
          //     description: d
          //   }))
          //   if((i + 1) === tier.length) {
          //     console.log(descriptsion);
          //   }

          //   // const url = dom.window.document.querySelector('#mw-content-text > div.mw-parser-output > table.infobox.headerscontent > tbody > tr:nth-child(2) > td > a > img').getAttribute('data-src');
          //   // console.log("downloading " + url)
          //   // downloadImage(url, ep.id)
          // })
        }
      } catch (e) {
        console.log(ep_url)
        // console.log(e)
      }
    }, i * 500)

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