const path = require('path');
const axios = require('axios');
const fsP = require('fs/promises')

const asyncTimeout = async (duration) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, duration)
    })
}

const loadData = async (url, delay) => {
    await asyncTimeout(delay);
    const { data } = await axios.get(url)
    let list = data.data;
    if(data.links.next) {
        list = list.concat(await loadData(data.links.next, delay));
    }

    return list
}

const loadAndSave = async (url, filename, delay) => {
    const data = await loadData(url, delay);
    await fsP.writeFile(path.join(__dirname, filename), JSON.stringify(data, null, 4));
}

loadAndSave("https://spapi.dev/api/episodes", 'all_episodes.json', 1000)
// loadAndSave("https://spapi.dev/api/characters", 'characters.json', 200)
