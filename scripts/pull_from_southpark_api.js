const fs = require('fs');
const path = require('path');
const axios = require('axios');
const fsP = require('fs/promises')

// // https://spapi.dev/api/episodes/1

// const episodes = [];

// for (let i = 1; i < 304; i++) {
//     try {
//         setTimeout(() => {
//             axios.get(`https://spapi.dev/api/episodes/${i}`).then(body => {
//                 const data = JSON.stringify(body.data);

//                 try {
//                     episodes.push(body.data);
//                     fs.writeFile(path.join(__dirname, 'episodes', `${body.data.season}-${body.data.episode}.json`), data, (err) => {
//                         if (err) {
//                             throw err;
//                         }
//                     });
//                 } catch (e) {
//                     console.log(e)
//                     console.log("could not save " + i)
//                 }
//             });
//         }, 1000 * i)

//     } catch (e) {
//         console.log(" could not load " + i)
//     }
// }

const getchars = () => {
    characters = [];

    for (let i = 1; i < 22; i++) {
        try {
            setTimeout(() => {
                axios.get(`https://spapi.dev/api/characters?page=${i}`).then(body => {
                    // const data = JSON.stringify(body.data);

                    characters = characters.concat(body.data.data);

                    if (i === 21) {
                        fsP.writeFile(path.join(__dirname, `characters.json`), JSON.stringify(characters))
                    }
                })
            }, 500 * i)

        } catch (e) {
            console.log(" could not load " + i)
        }
    }
}

getchars();

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