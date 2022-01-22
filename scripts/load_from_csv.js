const fsP = require('fs/promises')

const parse = async () => {
    const file = await fsP.readFile('./ranks.csv', 'utf8');
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

                const id = split[0] + (parseInt(split[1]) < 10 ? '0' : '') + split[1];

                
                return {
                    "entityValue" : {
                        "properties" : {
                            "rank" : {
                                "stringValue": currentTier
                            },
                            "id": {
                                "stringValue": id
                            }
                        }
                    }
                }
            })
        
            mapping = mapping.concat(reformattedList);
        }

    })

    console.log(mapping)

    fsP.writeFile("ranks2.json", JSON.stringify(mapping))
}


parse();