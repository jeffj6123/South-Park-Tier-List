const fsP = require('fs/promises')
const existingData = require('./data');
const Path = require('path')  

const compare = async () => {
    const episodes = JSON.parse(await fsP.readFile(Path.join(__dirname, 'all_episodes.json'), 'utf8'));
    const dict = {};
    existingData.data.forEach(ep => {
        // console.log(ep.apiID)
        dict[ep.apiID] = ep.name
    })
    episodes.forEach(episode => {
        // console.log(episode.id)
        // console.log(dict[episode.id], episode.name)

        // if(dict[episode.id].includes("Imaginationland")) {
        // console.log(dict[episode.id], episode.name)
        // }

        if(dict[episode.id] !== episode.name) {
            console.log(dict[episode.id], episode.name)
        }
    })
}

compare();

