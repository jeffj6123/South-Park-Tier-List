const fsP = require('fs/promises')
const fs = require('fs')
const Path = require('path')  
const axios = require('axios');

const listToMap = (list, key) => {
    return list.reduce( (map, item) => {
        map[item[key]] = item;
        return map;
    }, {})
}

let mergeData =  async () => {
    const episodes = JSON.parse(await fsP.readFile(Path.join(__dirname, 'episodes2.json'), 'utf8'));
    const chars = JSON.parse(await fsP.readFile(Path.join(__dirname, 'characters2.json'), 'utf8'));
    const charMap = listToMap(chars, "url");
    
    const result = episodes.map((ep, index) => {
        const id = ep.season.toString() + (ep.episode < 10 ? '0' : '') + ep.episode.toString();

        setTimeout(() => {
            downloadImage(ep.thumbnail_url, id)
        }, index * 100)

        return {
            ...ep,
            apiID: ep.id,
            id,
            characters: ep.characters.map( id => {
                const char = charMap[id];
                return {
                    name: char.name,
                    id: char.id
                }
            })
        }
    })

    await fsP.writeFile(Path.join(__dirname, 'combined_data.json'), JSON.stringify(result));
}

async function downloadImage(url, name) {
    const path = Path.resolve(__dirname, 'images2', name + '.png')
    const writer = fs.createWriteStream(path)
  
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

mergeData();