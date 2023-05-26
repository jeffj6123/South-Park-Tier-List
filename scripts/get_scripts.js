const axios = require('axios');
const jsdom = require("jsdom")
const {JSDOM} = jsdom;
const Fs = require('fs')  
const path = require('path')  
const fsP = require('fs/promises')

// const fileExists = (path) => {
//   try {
//     Fs.readFileSync(path);
//     return true
//   } catch(e) {
//     return false
//   }
// }



  const asyncTimeout = async (duration) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, duration)
    })
}

const test = async (episode, delay) => {
    await asyncTimeout(delay);
    let rows = null;
    try {
        await axios.get(`${episode}/Script`).then(data => {
            dom = new JSDOM(data.data);
            const d = dom.window.document.getElementsByTagName('tbody')[1]
            .getElementsByTagName('tr')
            
            // console.log(dom.window.document.getElementsByTagName('tbody')[1].getElementsByTagName('tr')[5].getElementsByTagName('td')[0].getElementsByTagName('center')[0].innerHTML)
            rows = [];
            for(let i = 1; i <d.length; i++) {
                const tds = d.item(i).getElementsByTagName('td');
                const character = tds[0].textContent.replace('\n', '') //.item(0).innerText;
            //   console.log(person)
                if(tds.length > 1) {
                const line = tds.item(1).textContent.replace('\n', '');
                // console.log(character, line);
                rows.push({
                    character,
                    line
                })
                }
            }
        },
        err => {
            console.log(err)
        })
        } catch (e) {
            console.log(e)

        }

    return rows;
}

const save = async (data, filename) => {
    await fsP.writeFile(path.join(__dirname, filename), JSON.stringify(data, null, 4));
}


const getScripts = async () => {
    const episodes = JSON.parse(await fsP.readFile(path.join(__dirname, 'episodes2.json'), 'utf8'));

    episodes.forEach(async (episode, i) => {
        const rows = await test(episode.wiki_url, i * 1000);
        await save(rows, "/ep-scripts/" + episode.id.toString()  + ".json");
    })
}

const combineFiles = async () => {
    const files = await fsP.readdir(path.join(__dirname, 'ep-scripts'));

    const readFiles = await Promise.all(files.map(async (file) => {
        const fileName = path.join('ep-scripts', file);
        const lines = await readFileAsJson(fileName);
        const updatedLines = lines.map((line, index) => ({...line, lineNumber: index, episode: file.replace('.json', '')}));
        return updatedLines;
    }))

    const combinedLines = readFiles.flat();
    await save(combinedLines, 'all_script_lines.json')
}

const getFiles = async (characters, lineLengthMinimum) => {
    const files = await fsP.readdir(path.join(__dirname, 'ep-scripts'));
    const file = path.join('ep-scripts', files[Math.floor(Math.random() * files.length)]);
    const lines = await readFileAsJson(file);
    const validLines = lines.filter(line => characters.includes(line.character) && line.line.length > lineLengthMinimum);
    const line = validLines[Math.floor(Math.random() * validLines.length)]
    console.log(line);
}

const readFileAsJson = async (filename) => {
    return JSON.parse(await fsP.readFile(filename));
}

const getLine = async() => {
    const lines = await readFileAsJson(path.join(__dirname, 'all_script_lines.json'));

    const characters = {};

    lines.forEach(line => {
        characters[line.character] = (characters[line.character] || 0) + 1;
        // characters.add(line.character);
    })

    const MostCommon = Object.keys(characters).filter(key => characters[key] > 30);
    // console.log(Array.from(characters))
    console.log(MostCommon)
    // const validLines = lines.filter(line => characters.includes(line.character) && line.line.length > lineLengthMinimum);
    // const line = validLines[Math.floor(Math.random() * validLines.length)]

    // console.log(line);
}

getLine();
// combineFiles();
// getLine(['Kyle'], 20);
// test().then(data => {
//     save(data, 'test.json')
// })

// getScripts();