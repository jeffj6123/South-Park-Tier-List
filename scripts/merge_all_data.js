const fsP = require('fs/promises')
const Path = require('path')  

const listToMap = (list, key) => {
    return list.reduce( (map, item) => {
        map[item[key]] = item;
        return map;
    }, {})
}

let mergeData =  async () => {
    const episodes = JSON.parse(await fsP.readFile(Path.join(__dirname, 'all_episodes.json'), 'utf8'));
    const chars = JSON.parse(await fsP.readFile(Path.join(__dirname, 'characters.json'), 'utf8'));
    const charMap = listToMap(chars, "url");
    
    const descriptions = JSON.parse(await fsP.readFile(Path.join(__dirname, 'all_descris.json'), 'utf8'));
    const descriptionMap = listToMap(descriptions, "id");

    const result = episodes.map(ep => {
        const id = ep.season.toString() + (ep.episode < 10 ? '0' : '') + ep.episode.toString();

        let description = "";
        if(id in descriptionMap) {
            description = descriptionMap[id].description;
        }else{
            console.log("no description for " + id)
        }


        return {
            ...ep,
            apiID: ep.id,
            id,
            description,
            characters: ep.characters.map( id => {
                const char = charMap[id];
                return {
                    name: char.name
                }
            })
        }
    })

    await fsP.writeFile(Path.join(__dirname, 'combined_data.json'), JSON.stringify(result));
}

mergeData();