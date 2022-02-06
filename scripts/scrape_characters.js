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
  const tier = Fs.readFileSync(Path.join(__dirname, 'characters.json'), 'utf8');
  const list = JSON.parse(tier);
  const characters = [];
  list.map(char => char).forEach( (character, i )=> {

    setTimeout(() => {
      const character_url = encodeURI(`https://southpark.fandom.com/wiki/${character.name.split(" ").join("_")}`)

      try {
        axios.get(character_url).then(data => {
          dom = new JSDOM(data.data);
          // console.log(ep_url)

          const d = dom.window.document.getElementsByClassName("pi-image-thumbnail")[0].getAttribute('src');


          // const url = dom.window.document.querySelector('#mw-content-text > div.mw-parser-output > table.infobox.headerscontent > tbody > tr:nth-child(2) > td > a > img').getAttribute('data-src');
          console.log("downloading " + d)
          downloadImage(d, character.id)
        },
        err => {
          console.log(character_url)
        })

        if (!fileExists(Path.resolve(__dirname, 'character_images', character.id + '.png'))) {
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
        console.log(character_url)
        // console.log(e)
      }
    }, i * 500)

  })
}

async function downloadImage (url, name) {  
    const path = Path.resolve(__dirname, 'character_images', name + '.png')
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