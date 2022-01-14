// const request = require('request');

// // https://spapi.dev/api/episodes/1

// request('https://jsonplaceholder.typicode.com/todos/1', { json: true }, (err, res, body) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(body.id);
//     console.log(body.title);
// });

// const fs = require('fs');


// for (let i = 1; i < 301; i++) {
//         try {
//             setTimeout(() => {
//                 request(`https://spapi.dev/api/episodes/${i}`, { json: true }, (err, res, body) => {
//                     if (err) {
//                         return console.log(err);
//                     }
//                     const data = JSON.stringify(body);

//                     // write JSON string to a file
//                     fs.writeFile(`${body.data.season}-${body.data.episode}.json`, data, (err) => {
//                         if (err) {
//                             throw err;
//                         }
//                         console.log("JSON data is saved.");
//                     });
//                 });
//             }, 1000 * i)

//         } catch (e) {
//             console.log(" no episode")
//         }
//     }
const fs = require('fs');
const path = require('path');
const episodes = [];

const f = async () => {
    fs.readdirSync('./').forEach(file => {
        if(file.includes('.json')) {
            const data = fs.readFileSync(file);
            episodes.push(JSON.parse(data));
            console.log(file);
        }
      });    

      console.log(episodes)
      fs.writeFileSync("all_episodes.json", JSON.stringify(episodes))
    }

// f();

const g = async () => {
    // const data = fs.readFileSync('./all_eposides.json', 'utf8');
    
    const tier = fs.readFileSync( path.join(__dirname , 'data.txt') , 'utf8');

    const split = tier.replaceAll('\t', '').split("\n")

    console.log(split)
}

g();