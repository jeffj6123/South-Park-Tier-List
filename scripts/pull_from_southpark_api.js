const fs = require('fs');
const path = require('path');
const axios = require('axios');
const fsP = require('fs/promises')

const getEpisodes = () => {
    let episodes = [];
    const loop = 32;

    for (let i = 1; i < loop; i++) {
        try {
            setTimeout(() => {
                axios.get(`https://spapi.dev/api/episodes?page=${i}`).then(body => {

                    episodes = episodes.concat(body.data.data);

                    if (i === (loop - 1)) {
                        fsP.writeFile(path.join(__dirname, `episodes2.json`), JSON.stringify(episodes.sort((a,b) => a.id - b.id)))
                    }
                })
            }, 100 * i)

        } catch (e) {
            console.log(" could not load " + i)
        }
    }
}

const getCharacters = () => {
    let episodes = [];
    const loop = 23;

    for (let i = 1; i < loop; i++) {
        try {
            setTimeout(() => {
                axios.get(`https://spapi.dev/api/characters?page=${i}`).then(body => {
                    // const data = JSON.stringify(body.data);

                    episodes = episodes.concat(body.data.data);

                    if (i === (loop - 1)) {
                        fsP.writeFile(path.join(__dirname, `characters2.json`), JSON.stringify(episodes.sort((a,b) => a.id - b.id)))
                    }
                })
            }, 100 * i)

        } catch (e) {
            console.log(" could not load " + i)
        }
    }
}

getCharacters()
// getEpisodes();