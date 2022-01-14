const axios = require('axios');
const jsdom = require("jsdom")
const { JSDOM } = jsdom;
const Fs = require('fs')
const Path = require('path')

const fileExists = (path) => {
  try {
    Fs.readFileSync(path);
    return true
  } catch (e) {
    return false
  }
}

let get_list = () => {
  const tier = Fs.readFileSync(Path.join(__dirname, 'all_episodes.json'), 'utf8');
  const list = JSON.parse(tier);
  console.log(list.length)
  list.map(ep => {
    return {
      id: (ep.season.toString() + (ep.episode < 10 ? '0' : '') + ep.episode.toString()),
      name: ep.name.split(" ").join("_")
    }
  }).filter(ep => !fileExists(Path.resolve(__dirname, 'images', ep.id + '.png'))).forEach((ep, i) => {

    setTimeout(() => {
      const ep_url = encodeURI(`https://southpark.fandom.com/wiki/${ep.name}`).replace("?", "%3F");

      try {
        console.log(ep_url, ep.id)

        axios.get(ep_url).then(data => {
          dom = new JSDOM(data.data);

          const url = dom.window.document.querySelector('#mw-content-text > div.mw-parser-output > table.infobox.headerscontent > tbody > tr:nth-child(2) > td > a > img').getAttribute('data-src');
          console.log("downloading " + url)
          downloadImage(url, ep.id)
        })
      } catch (e) {
        console.log(e)
      }
    }, i * 1000)

  })
}

async function downloadImage(url, name) {
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

/*
At this point I noticed we are missing roughly 70 episodes.

*/