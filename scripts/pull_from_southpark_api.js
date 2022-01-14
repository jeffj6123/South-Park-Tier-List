const request = require('request');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
// // https://spapi.dev/api/episodes/1

// const episodes = [];

for (let i = 1; i < 304; i++) {
    try {
        setTimeout(() => {
            axios.get(`https://spapi.dev/api/episodes/${i}`).then(body => {
                if (err) {
                    return console.log(err);
                }
                const data = JSON.stringify(body.data);

                try {
                    episodes.push(body.data);
                    fs.writeFile(path.join(__dirname, 'episodes', `${body.data.season}-${body.data.episode}.json`), data, (err) => {
                        if (err) {
                            throw err;
                        }
                    });
                } catch (e) {
                    console.log(e)
                    console.log("could not save " + i)
                }
            });
        }, 1000 * i)

    } catch (e) {
        console.log(" could not load " + i)
    }
}

// const f = async () => {
//     episodes =[];
//     fs.readdirSync('./episodes').forEach(file => {
//         if(file.includes('.json')) {
//             const data = fs.readFileSync('./episodes/' + file);
//             episodes.push(JSON.parse(data));
//             console.log(file);
//         }
//       });    

//       console.log(episodes)
//       fs.writeFileSync("all_episodes.json", JSON.stringify(episodes), null, 4)
//     }

// f();