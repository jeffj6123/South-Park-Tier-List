const fsP = require('fs/promises')

const parse = async () => {
    const file = await fsP.readFile('./ranks.csv', 'utf8');
    const tierMap = {};

    let currentTier = "";
    let mapping = [];

    file.split("\n").forEach(line => {
        const row = line.trim().split(",").filter(cell => cell.length > 0);

        
        if(row.length > 0) {
            let first = row[0]
            //check if its a letter
            if(first.toUpperCase() !== first) {
                currentTier = first;
                row.splice(0, 1);
            }

            const reformattedList = row.map(item => {
                const split = item.split(".");

                return {
                    season: parseInt(split[0]),
                    episode: parseInt(split[1]),
                    tier: currentTier
                }
            })
        

            const rowTier = tierMap[currentTier] || [];

            tierMap[currentTier] = rowTier.concat(reformattedList);
            mapping = mapping.concat(reformattedList);
        }

    })

    console.log(mapping)

    fsP.writeFile("ranks.json", JSON.stringify(mapping))
}


parse();