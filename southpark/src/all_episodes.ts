import { Episode } from "./components/row"

export interface IRankable {
    id: string;
}
export interface IRankResponse {
    ranks: { rank: string, id: string }[],
    id: string
}

export const parseUserRanks = (items: IRankable[], ranks: IRankResponse, rankOptions: string[]) => {
    const rankingMap = {};

    ranks.ranks.forEach(rank => {
      rankingMap[rank.id] = rank.rank
    })


    const itemMap: Record<string, IRankable[]> = rankOptions.reduce((map, tier) => { map[tier] = []; return map }, {});

    items.forEach(item => {
      let tier = "u"
      if (item.id in rankingMap) {
        tier = rankingMap[item.id];
      }
      if (!(tier in itemMap)) {
        itemMap[tier] = [];
      }
      itemMap[tier].push(item);
    })

    return itemMap;
}

export const data = [
    {
        "id": "101",
        "name": "Cartman Gets an Anal Probe",
        "season": 1,
        "episode": 1,
        "air_date": "1997-08-13",
        "created_at": "2021-07-14T19:50:37.000000Z",
        "updated_at": "2021-07-14T19:50:37.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Mr. Kitty"
            },
            {
                "name": "Jason White"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Token Black"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/623",
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/8",
            "https://spapi.dev/api/locations/458"
        ],
        "apiID": 1,
        "description": "While the boys are waiting for the School Bus, Cartman explains the odd nightmare he had the previous night involving alien visitors.\n"
    },
    {
        "id": "110",
        "name": "Damien",
        "season": 1,
        "episode": 10,
        "air_date": "1998-02-04",
        "created_at": "2021-07-14T19:50:38.000000Z",
        "updated_at": "2021-07-14T19:50:38.000000Z",
        "characters": [
            {
                "name": "Damien Thorn"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Satan"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Sharon Marsh"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/338",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/351"
        ],
        "apiID": 10,
        "description": "After being shunned by the others kids, Damien, the Son of Satan, calls upon his father to fight Jesus in the ultimate Pay-Per-View Boxing Match between good and evil.\n"
    },
    {
        "id": "111",
        "name": "Tom's Rhinoplasty",
        "season": 1,
        "episode": 11,
        "air_date": "1998-02-11",
        "created_at": "2021-07-14T19:50:39.000000Z",
        "updated_at": "2021-07-14T19:50:39.000000Z",
        "characters": [
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Butters Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/370",
            "https://spapi.dev/api/locations/623",
            "https://spapi.dev/api/locations/507",
            "https://spapi.dev/api/locations/320",
            "https://spapi.dev/api/locations/286"
        ],
        "apiID": 11,
        "description": "While Mr. Garrison deserts the class for a visit to Tom's Rhinoplasty, Stan, Kyle, Kenny, and Cartman all compete for the attention of Ms. Ellen, the new substitute teacher.\n"
    },
    {
        "id": "112",
        "name": "Mecha-Streisand",
        "season": 1,
        "episode": 12,
        "air_date": "1998-02-18",
        "created_at": "2021-07-14T19:50:39.000000Z",
        "updated_at": "2021-07-14T19:50:39.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Butters Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/448"
        ],
        "apiID": 12,
        "description": "The boys' discovery of a prehistoric relic spawns a monster that threatens to destroy South Park and the world.\n"
    },
    {
        "id": "113",
        "name": "Cartman's Mom is a Dirty Slut",
        "season": 1,
        "episode": 13,
        "air_date": "1998-02-25",
        "created_at": "2021-07-14T19:50:39.000000Z",
        "updated_at": "2021-07-14T19:50:39.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Mr. Kitty"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Marvin Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Dr. Alphonse Mephesto"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Kevin Mephesto"
            },
            {
                "name": "Gerald Broflovski"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/458"
        ],
        "apiID": 13,
        "description": "Who is Eric Cartman's father? It could be anyone who attended South Park's 12th Annual Drunken Barn Dance.\n"
    },
    {
        "id": "102",
        "name": "Weight Gain 4000",
        "season": 1,
        "episode": 2,
        "air_date": "1997-08-20",
        "created_at": "2021-07-14T19:50:37.000000Z",
        "updated_at": "2021-07-14T19:50:37.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Token Black"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/623",
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/469",
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/280",
            "https://spapi.dev/api/locations/25",
            "https://spapi.dev/api/locations/162",
            "https://spapi.dev/api/locations/458"
        ],
        "apiID": 2,
        "description": "When Cartman's environmental essay wins a national contest, America's sweetheart, Kathie Lee Gifford, comes to South Park to present the award.\n"
    },
    {
        "id": "103",
        "name": "Volcano",
        "season": 1,
        "episode": 3,
        "air_date": "1997-08-27",
        "created_at": "2021-07-14T19:50:37.000000Z",
        "updated_at": "2021-07-14T19:50:37.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Liane Cartman"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/149"
        ],
        "apiID": 3,
        "description": "A weekend trip to experience the finer points of camping, fishing and blowing animals to smithereens is threatened by an erupting volcano.\n"
    },
    {
        "id": "104",
        "name": "Big Gay Al's Big Gay Boat Ride",
        "season": 1,
        "episode": 4,
        "air_date": "1997-09-03",
        "created_at": "2021-07-14T19:50:37.000000Z",
        "updated_at": "2021-07-14T19:50:37.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Sparky"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Rex"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Token Black"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/351",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/395",
            "https://spapi.dev/api/locations/222"
        ],
        "apiID": 4,
        "description": "When Stan discovers his new dog Sparky is gay, he becomes so confused he loses his will to play in the big Homecoming Football game against North Park.\n"
    },
    {
        "id": "105",
        "name": "An Elephant Makes Love to a Pig",
        "season": 1,
        "episode": 5,
        "air_date": "1997-09-10",
        "created_at": "2021-07-14T19:50:38.000000Z",
        "updated_at": "2021-07-14T19:50:38.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Dr. Alphonse Mephesto"
            },
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Fluffy"
            },
            {
                "name": "Kyle's elephant"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Jason White"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Kevin Mephesto"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Token Black"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/157",
            "https://spapi.dev/api/locations/4"
        ],
        "apiID": 5,
        "description": "Kyle's mom will not let him keep his new pet, an elephant because it is so huge. So the boys turn to Dr. Mephesto to genetically engineer a smaller elephant.\n"
    },
    {
        "id": "106",
        "name": "Death",
        "season": 1,
        "episode": 6,
        "air_date": "1997-09-17",
        "created_at": "2021-07-14T19:50:38.000000Z",
        "updated_at": "2021-07-14T19:50:38.000000Z",
        "characters": [
            {
                "name": "Marvin Marsh"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Terrance and Phillip"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Annie Knitts"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/6"
        ],
        "apiID": 6,
        "description": "Grandpa's sole birthday wish is for Stan to take part in his assisted suicide. Meanwhile, Mrs. Broflovski has organized a protest against the boys' favorite TV show, \"Terrance and Phillip\".\n"
    },
    {
        "id": "107",
        "name": "Pinkeye",
        "season": 1,
        "episode": 7,
        "air_date": "1997-10-29",
        "created_at": "2021-07-14T19:50:38.000000Z",
        "updated_at": "2021-07-14T19:50:38.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Jimbo Kern"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/163",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/458",
            "https://spapi.dev/api/locations/616",
            "https://spapi.dev/api/locations/4"
        ],
        "apiID": 7,
        "description": "A mishap at the morgue transforms the residents of South Park into brain-eating zombies and threatens the boys' night of Trick-or-Treating.\n"
    },
    {
        "id": "108",
        "name": "Starvin' Marvin",
        "season": 1,
        "episode": 8,
        "air_date": "1997-11-19",
        "created_at": "2021-07-14T19:50:38.000000Z",
        "updated_at": "2021-07-14T19:50:38.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Dr. Alphonse Mephesto"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Kevin Mephesto"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Kevin McCormick"
            },
            {
                "name": "Stuart McCormick"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/566",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/286",
            "https://spapi.dev/api/locations/8"
        ],
        "apiID": 8,
        "description": "Mistaking Cartman for a starving African child, government authorities send him to Ethiopia where he runs into Sally Struthers.\n"
    },
    {
        "id": "109",
        "name": "Mr. Hankey, the Christmas Poo",
        "season": 1,
        "episode": 9,
        "air_date": "1997-12-17",
        "created_at": "2021-07-14T19:50:38.000000Z",
        "updated_at": "2021-07-14T19:50:38.000000Z",
        "characters": [
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Mr. Hankey"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Token Black"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/162"
        ],
        "apiID": 9,
        "description": "While South Park Elementary is attempting to stage a non-denominational holiday play that will not offend (or entertain) anyone, Kyle checks himself into the South Park mental asylum.\n"
    },
    {
        "id": "1001",
        "name": "The Return of Chef",
        "season": 10,
        "episode": 1,
        "air_date": "2006-03-22",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 140,
        "description": "Chef  returns to South Park after spending time away with a group called, \"The Super Adventure Club,\" but when his strange behavior starts getting him in trouble, the boys risk everything to save him.\n"
    },
    {
        "id": "1010",
        "name": "Miss Teacher Bangs a Boy",
        "season": 10,
        "episode": 10,
        "air_date": "2006-10-18",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 149,
        "description": "In his new role as School Hallway Monitor at South Park Elementary, Cartman must team up with Kyle when they discover a teacher having sex with a student.\n"
    },
    {
        "id": "1011",
        "name": "Hell on Earth 2006",
        "season": 10,
        "episode": 11,
        "air_date": "2006-10-25",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 150,
        "description": "Satan is throwing the biggest Halloween costume party ever. Just like a girl getting ready for her sweet sixteen, every detail must be perfect for the prince of darkness. The antics of the most notorious serial killers of all time threaten his fun.\n"
    },
    {
        "id": "1012",
        "name": "Go God Go",
        "season": 10,
        "episode": 12,
        "air_date": "2006-11-01",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 151,
        "description": "South Park Elementary faces strong opposition to the topic of evolution. Cartman's too busy to notice as he plans to propel himself into the future on the precise release date of the newest, hottest game console.\n"
    },
    {
        "id": "1013",
        "name": "Go God Go XII",
        "season": 10,
        "episode": 13,
        "air_date": "2006-11-08",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 152,
        "description": "Eric Cartman has frozen himself in an attempt to make his three-week wait for a Nintendo Wii pass quickly. A freak accident landed him over 500 years in the future and now, he's stuck in a Godless world on the brink of war with no Nintendo Wii.\n"
    },
    {
        "id": "1014",
        "name": "Stanley's Cup",
        "season": 10,
        "episode": 14,
        "air_date": "2006-11-15",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 153,
        "description": "Stan Marsh has hit rock bottom. He's got no job, no bicycle and his only way out of a bad situation is to coach the local pee wee hockey team.\n"
    },
    {
        "id": "1002",
        "name": "Smug Alert!",
        "season": 10,
        "episode": 2,
        "air_date": "2006-03-29",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 141,
        "description": ""
    },
    {
        "id": "1003",
        "name": "Cartoon Wars Part I",
        "season": 10,
        "episode": 3,
        "air_date": "2006-04-05",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 142,
        "description": "Cartman and Kyle are at war over the popular cartoon, \"Family Guy\". When the creators of the show announce that they will show the image of a religious symbol, the network threatens to ban the episode. Cartman sees this as his chance to get \"Family Guy\" off the air for good. The two boys embark upon a mad chase across the country and the fate of \"Family Guy\" lies with whichever boy reaches Hollywood first.\n"
    },
    {
        "id": "1004",
        "name": "Cartoon Wars Part II",
        "season": 10,
        "episode": 4,
        "air_date": "2006-04-12",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 143,
        "description": "After leaving Kyle injured on the side of the road, Cartman races to the headquarters of \"Family Guy\" determined to put an end to the show once and for all.\n"
    },
    {
        "id": "1005",
        "name": "A Million Little Fibers",
        "season": 10,
        "episode": 5,
        "air_date": "2006-04-19",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 144,
        "description": "Towelie gets over his drug addiction and writes his memoirs. With Oprah's support, his book becomes a best seller and his story inspires millions to turn their lives around.\n"
    },
    {
        "id": "1006",
        "name": "ManBearPig",
        "season": 10,
        "episode": 6,
        "air_date": "2006-04-26",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 145,
        "description": "Al Gore warns the school about the threat of ManBearPig.\n"
    },
    {
        "id": "1007",
        "name": "Tsst",
        "season": 10,
        "episode": 7,
        "air_date": "2006-05-03",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 146,
        "description": "When Cartman's mom realizes she can't control her son anymore, she gets help from an expert. The \"Dog Whisperer\" may have what it takes but Eric Cartman's not going down without a fight.\n"
    },
    {
        "id": "1008",
        "name": "Make Love, Not Warcraft",
        "season": 10,
        "episode": 8,
        "air_date": "2006-10-04",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 147,
        "description": "The boys dedicate their lives to defeating a mad gamer and saving the World of Warcraft.\n"
    },
    {
        "id": "1009",
        "name": "Mystery of the Urinal Deuce",
        "season": 10,
        "episode": 9,
        "air_date": "2006-10-11",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 148,
        "description": "The world's biggest conspiracy of all time is finally uncovered when Eric Cartman exposes the true culprit behind the September 11th attacks.\n"
    },
    {
        "id": "1101",
        "name": "With Apologies to Jesse Jackson",
        "season": 11,
        "episode": 1,
        "air_date": "2007-03-07",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 154,
        "description": "After Randy Marsh experiences an unfortunate incident on national TV, the \"N\" bomb hits South Park. While Randy seeks forgiveness from Jesse Jackson, South Park Elementary invites a midget by the name of Dr. Nelson to talk about sensitivity.\n"
    },
    {
        "id": "1110",
        "name": "Imaginationland",
        "season": 11,
        "episode": 10,
        "air_date": "2007-10-17",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 163,
        "description": "When the entire contents of the world's imagination lay open before them, Stan and Kyle step right in. Back in South Park, Cartman swears he's seen a leprechaun.\n"
    },
    {
        "id": "1111",
        "name": "Imaginationland,_Episode_II",
        "season": 11,
        "episode": 11,
        "air_date": "2007-10-24",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 164,
        "description": "Stan and Kyle are being held in the bowels of the Pentagon until they tell the government how they got into Imaginationland. Meanwhile, Cartman simply won't rest until he finds Kyle and gets him to make good on their bet to suck his balls.\n"
    },
    {
        "id": "1112",
        "name": "Imaginationland,_Episode_III",
        "season": 11,
        "episode": 12,
        "air_date": "2007-10-31",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 165,
        "description": "Inside Imaginationland, Stan and Butters engage in the battle of their lives as they fight the army of evil imaginary forces. Meanwhile, Cartman goes all the way to the Supreme Court to get Kyle to pay up on their bet.\n"
    },
    {
        "id": "1113",
        "name": "Guitar Queer-O",
        "season": 11,
        "episode": 13,
        "air_date": "2007-11-07",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 166,
        "description": "Stan Marsh and Kyle are hooked on Guitar Hero. Unfortunately, Stan's superior skills on the video game damage his friendship with Kyle.\n"
    },
    {
        "id": "1114",
        "name": "The List",
        "season": 11,
        "episode": 14,
        "air_date": "2007-11-14",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 167,
        "description": "The girls in the fourth grade class have made a secret list that rates every boy's looks from cutest to ugliest. When the boys steal the list, they are completely unprepared to deal with the results.\n"
    },
    {
        "id": "1102",
        "name": "Cartman Sucks",
        "season": 11,
        "episode": 2,
        "air_date": "2007-03-14",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 155,
        "description": "When his \"ultimate plan\" to embarrass Butters backfires, Cartman struggles to keep his classmates from seeing a compromising photograph. Meanwhile, Butters is sent to a special camp where they \"Pray the Gay Away.\"\n"
    },
    {
        "id": "1103",
        "name": "Lice Capades",
        "season": 11,
        "episode": 3,
        "air_date": "2007-03-21",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 156,
        "description": "An infestation of head lice plagues South Park Elementary. When Mr. Garrison refuses to name names, Cartman finds a way to detect who has lice in the hopes of making fun of his unfortunate classmate.\n"
    },
    {
        "id": "1104",
        "name": "The Snuke",
        "season": 11,
        "episode": 4,
        "air_date": "2007-03-28",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 157,
        "description": "While Cartman follows a lead on a possible terrorist attack, Hillary Clinton makes a campaign stop in South Park for a big rally.\n"
    },
    {
        "id": "1105",
        "name": "Fantastic Easter Special",
        "season": 11,
        "episode": 5,
        "air_date": "2007-04-04",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 158,
        "description": "Determined to get the real story behind why he has to decorate eggs for Easter, Stan falls in with an eccentric society that guards a legendary secret.\n"
    },
    {
        "id": "1106",
        "name": "D-Yikes!",
        "season": 11,
        "episode": 6,
        "air_date": "2007-04-11",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 159,
        "description": ""
    },
    {
        "id": "1107",
        "name": "Night of the Living Homeless",
        "season": 11,
        "episode": 7,
        "air_date": "2007-04-18",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 160,
        "description": "As an increasing number of homeless people are begging for change all over South Park, the boys work to solve the homeless problem once and for all.\n"
    },
    {
        "id": "1108",
        "name": "Le Petit Tourette",
        "season": 11,
        "episode": 8,
        "air_date": "2007-10-03",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 161,
        "description": "Cartman discovers the joys of having Tourette's syndrome. Drunk with the power of saying whatever he wants without getting in trouble for it, he lines up national TV coverage to take advantage of his new life with no filters.\n"
    },
    {
        "id": "1109",
        "name": "More Crap",
        "season": 11,
        "episode": 9,
        "air_date": "2007-10-10",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 162,
        "description": "Stan's dad becomes South Park's home-town hero when the guys down at the local bar see the size of his most recent crap.\n"
    },
    {
        "id": "1201",
        "name": "Tonsil Trouble",
        "season": 12,
        "episode": 1,
        "air_date": "2008-03-12",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 168,
        "description": "Cartman finds himself fighting for his life after a routine tonsillectomy goes wrong. When Kyle becomes infected with Cartman's ailment, the two won't stop for anything as they search for a cure that will reverse their otherwise certain mortality.\n"
    },
    {
        "id": "1210",
        "name": "Pandemic",
        "season": 12,
        "episode": 10,
        "air_date": "2008-10-22",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 177,
        "description": "While the world struggles to contain an epidemic of epic proportions, the boys find a way to make money off of it.\n"
    },
    {
        "id": "1211",
        "name": "Pandemic 2: The Startling",
        "season": 12,
        "episode": 11,
        "air_date": "2008-10-29",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 178,
        "description": "Giant guinea pigs are attacking cities all over the world.  The boys have the key that will save everyone from the onslaught but they're stranded in the Andes Mountains.\n"
    },
    {
        "id": "1212",
        "name": "About Last Night...",
        "season": 12,
        "episode": 12,
        "air_date": "2008-11-05",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 179,
        "description": "While the country celebrates, the President-elect catches everyone off guard when he arrives at the White House prematurely. From the Oval Office, the new Commander-In-Chief assembles his team and prepares for the job ahead.\n"
    },
    {
        "id": "1213",
        "name": "Elementary School Musical",
        "season": 12,
        "episode": 13,
        "air_date": "2008-11-12",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 180,
        "description": "The boys must embrace the latest fad to hit South Park Elementary or risk their status as the coolest kids in school.\n"
    },
    {
        "id": "1214",
        "name": "The Ungroundable",
        "season": 12,
        "episode": 14,
        "air_date": "2008-11-19",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 181,
        "description": "Butters is sure he's seen a Vampire at school but he can't get anyone to listen to him. Tired of being teased at school and punished by his parents, Butters joins the Vampire group and becomes \"ungroundable.\" Meanwhile, the Goth Kids are angry and frustrated when the other kids can't tell the difference between a Goth and a Vampire.\n"
    },
    {
        "id": "1202",
        "name": "Britney's New Look",
        "season": 12,
        "episode": 2,
        "air_date": "2008-03-19",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 169,
        "description": "When the boys help Britney Spears get to the North Pole, they discover the shocking secret behind her popularity.\n"
    },
    {
        "id": "1203",
        "name": "Major Boobage",
        "season": 12,
        "episode": 3,
        "air_date": "2008-03-26",
        "created_at": "2021-07-14T19:50:56.000000Z",
        "updated_at": "2021-07-14T19:50:56.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 170,
        "description": "In a South Park homage to the 1981 film, \"Heavy Metal\", the boys are trying to get Kenny off the latest drug craze that's captured the junior high and under set.\n"
    },
    {
        "id": "1204",
        "name": "Canada on Strike",
        "season": 12,
        "episode": 4,
        "air_date": "2008-04-02",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 171,
        "description": "The head of the World Canadian Bureau leads the country into a long and painful strike and the responsibility of brokering a settlement rests with the boys.\n"
    },
    {
        "id": "1205",
        "name": "Eek, A Penis!",
        "season": 12,
        "episode": 5,
        "air_date": "2008-04-09",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 172,
        "description": ""
    },
    {
        "id": "1206",
        "name": "Over Logging",
        "season": 12,
        "episode": 6,
        "air_date": "2008-04-16",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 173,
        "description": "The citizens of South Park wake up and find the internet is gone. When Randy hears there may still be some internet out in California, he packs up his family and heads west.\n"
    },
    {
        "id": "1207",
        "name": "Super Fun Time",
        "season": 12,
        "episode": 7,
        "air_date": "2008-04-23",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 174,
        "description": "While the kids are on an educational field trip to a living museum, Cartman makes Butters sneak away from the class to go to the amusement center located next door.\n"
    },
    {
        "id": "1208",
        "name": "The China Probrem",
        "season": 12,
        "episode": 8,
        "air_date": "2008-10-08",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 175,
        "description": "With the rest of the American people haunted by the memory of a recent tragic event, only Butters will stand with Cartman as he confronts the Chinese.\n"
    },
    {
        "id": "1209",
        "name": "Breast Cancer Show Ever",
        "season": 12,
        "episode": 9,
        "air_date": "2008-10-15",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 176,
        "description": "Wendy gets in trouble when she threatens to beat up Cartman after school.\n"
    },
    {
        "id": "1301",
        "name": "The Ring",
        "season": 13,
        "episode": 1,
        "air_date": "2009-03-11",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 182,
        "description": "Kenny takes his new girlfriend Tammy to a Jonas Brothers' concert where they each get purity rings.\n"
    },
    {
        "id": "1310",
        "name": "W.T.F.",
        "season": 13,
        "episode": 10,
        "air_date": "2009-10-21",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 191,
        "description": "After attending their first WWE match, all the boys want to be professional wrestlers.\n"
    },
    {
        "id": "1311",
        "name": "Whale Whores",
        "season": 13,
        "episode": 11,
        "air_date": "2009-10-28",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 192,
        "description": "Stan takes action to stop the Japanese from killing the world's whales and dolphins.\n"
    },
    {
        "id": "1312",
        "name": "The F Word",
        "season": 13,
        "episode": 12,
        "air_date": "2009-11-04",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 193,
        "description": "The boys fight back against the loud and obnoxious Motorcycle Riders that are disrupting everyone in South Park.\n"
    },
    {
        "id": "1313",
        "name": "Dances with Smurfs",
        "season": 13,
        "episode": 13,
        "air_date": "2009-11-11",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 194,
        "description": "Cartman is chosen to do the morning announcements at South Park Elementary.\n"
    },
    {
        "id": "1314",
        "name": "Pee",
        "season": 13,
        "episode": 14,
        "air_date": "2009-11-18",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 195,
        "description": "The boys' fun-filled day at the water park is about to turn deadly.\n"
    },
    {
        "id": "1302",
        "name": "The Coon",
        "season": 13,
        "episode": 2,
        "air_date": "2009-03-18",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Boy with red shirt and blue pants"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Jason White"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Louis Handler"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Nelly's mom"
            },
            {
                "name": "Officer Barbrady"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/200",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/127",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/7",
            "https://spapi.dev/api/locations/365",
            "https://spapi.dev/api/locations/378"
        ],
        "apiID": 183,
        "description": "\"The Coon\" rises from the trash and takes his place as a lone vigilante who wipes out crime in the town of South Park.\n"
    },
    {
        "id": "1303",
        "name": "Margaritaville",
        "season": 13,
        "episode": 3,
        "air_date": "2009-03-25",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Jason White"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Betsy Donovan"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Laura Tucker"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Marvin Marsh"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Roger Donovan"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Thomas Tucker"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/210",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/120",
            "https://spapi.dev/api/locations/159",
            "https://spapi.dev/api/locations/360",
            "https://spapi.dev/api/locations/386"
        ],
        "apiID": 184,
        "description": "Randy steps forward with a solution to fix the desperate state of the economy.\n"
    },
    {
        "id": "1304",
        "name": "Eat, Pray, Queef",
        "season": 13,
        "episode": 4,
        "air_date": "2009-04-01",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 185,
        "description": "Someone plays an April Fool's joke on the boys and it doesn't go over well.\n"
    },
    {
        "id": "1305",
        "name": "Fishsticks",
        "season": 13,
        "episode": 5,
        "air_date": "2009-04-08",
        "created_at": "2021-07-14T19:50:57.000000Z",
        "updated_at": "2021-07-14T19:50:57.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 186,
        "description": "Cartman and Jimmy come up with the funniest joke of all time.\n"
    },
    {
        "id": "1306",
        "name": "Pinewood Derby",
        "season": 13,
        "episode": 6,
        "air_date": "2009-04-15",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 187,
        "description": "Randy has a plan that will assure Stan a first place trophy in this year's Pinewood Derby.\n"
    },
    {
        "id": "1307",
        "name": "Fatbeard",
        "season": 13,
        "episode": 7,
        "air_date": "2009-04-22",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 188,
        "description": "Cartman's dream of living the life of a pirate will come true if he can just get to Somalia.\n"
    },
    {
        "id": "1308",
        "name": "Dead Celebrities",
        "season": 13,
        "episode": 8,
        "air_date": "2009-10-07",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 189,
        "description": "Ike is being tormented by paranormal forces. Kyle brings in professional ghost hunters to help save his little brother.\n"
    },
    {
        "id": "1309",
        "name": "Butters' Bottom Bitch",
        "season": 13,
        "episode": 9,
        "air_date": "2009-10-14",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 190,
        "description": "Butters is determined to get his first kiss so his friends won't make fun of him anymore.\n"
    },
    {
        "id": "1401",
        "name": "Sexual Healing",
        "season": 14,
        "episode": 1,
        "air_date": "2010-03-17",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 196,
        "description": "The latest in scientific testing reveals that some of the boys at South Park Elementary have a sex addiction problem.\n"
    },
    {
        "id": "1410",
        "name": "Insheeption",
        "season": 14,
        "episode": 10,
        "air_date": "2010-10-20",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 205,
        "description": "When Stan is sent to the school counselor because he's holding on to an obscene number of useless possessions, he realizes that Mr. Mackey has a hoarding disorder too.\n"
    },
    {
        "id": "1411",
        "name": "Coon 2: Hindsight",
        "season": 14,
        "episode": 11,
        "air_date": "2010-10-27",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 206,
        "description": "\"Coon and Friends\" set out to help the victims of BP's latest catastrophic drilling accident in the Gulf. Much to the Coon's dismay, another Super Hero gets there first.\n"
    },
    {
        "id": "1412",
        "name": "Mysterion Rises",
        "season": 14,
        "episode": 12,
        "air_date": "2010-11-03",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 207,
        "description": "Mysterion's true identity is revealed. Meanwhile, The Coon, scorned by his fellow Super Heroes, is out for revenge.\n"
    },
    {
        "id": "1413",
        "name": "Coon vs. Coon & Friends",
        "season": 14,
        "episode": 13,
        "air_date": "2010-11-10",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 208,
        "description": "Coon and Friends find themselves at the mercy of Cartman who now has the dark lord, Cthulhu, doing his bidding. Kenny wrestles with the curse of his super power through his alter ego, Mysterion.\n"
    },
    {
        "id": "1414",
        "name": "Crème Fraiche",
        "season": 14,
        "episode": 14,
        "air_date": "2010-11-17",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 209,
        "description": "Randy's obsession with the Food Network forces Sharon to explore a new interest of her own.\n"
    },
    {
        "id": "1402",
        "name": "The Tale of Scrotie McBoogerballs",
        "season": 14,
        "episode": 2,
        "air_date": "2010-03-24",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 197,
        "description": "The boys are given a controversial book to read in school and it inspires them to write one of their own.\n"
    },
    {
        "id": "1403",
        "name": "Medicinal Fried Chicken",
        "season": 14,
        "episode": 3,
        "air_date": "2010-03-31",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 198,
        "description": "Cartman's favorite restaurant has been shut down and replaced by a store that sells medicinal marijuana. Randy is desperate to get a prescription card to buy pot and Cartman will do anything to get his beloved fried chicken back.\n"
    },
    {
        "id": "1404",
        "name": "You Have 0 Friends",
        "season": 14,
        "episode": 4,
        "air_date": "2010-04-07",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 199,
        "description": "When Kyle begs Stan to \"friend\" him, Stan gets sucked into Facebook.\n"
    },
    {
        "id": "1405",
        "name": "200",
        "season": 14,
        "episode": 5,
        "air_date": "2010-04-14",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 200,
        "description": "This show marked South Park's 200th episode. Led by Tom Cruise, two hundred celebrities, previously ridiculed by the town of South Park, file a class action lawsuit. They demand immunity from ever being made fun of again. When Stan begs them to accept his apology, they offer impossible terms and the boys ask the Super Best Friends for help.\n"
    },
    {
        "id": "1406",
        "name": "201",
        "season": 14,
        "episode": 6,
        "air_date": "2010-04-21",
        "created_at": "2021-07-14T19:50:58.000000Z",
        "updated_at": "2021-07-14T19:50:58.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 201,
        "description": "In the exciting conclusion to this two-part blockbuster celebrating South Park's 200th episode, angry celebrities, violent ginger kids, and Mecha Streisand face off against the Super Best Friends and the South Park faithful. It's a destructive battle on the largest scale, but all everyone wants to know is, \"Who is Eric Cartman's father?\"\n"
    },
    {
        "id": "1407",
        "name": "Crippled Summer",
        "season": 14,
        "episode": 7,
        "air_date": "2010-04-28",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 202,
        "description": "Jimmy and Timmy are off to summer camp with all their handicapable friends.\n"
    },
    {
        "id": "1408",
        "name": "Poor and Stupid",
        "season": 14,
        "episode": 8,
        "air_date": "2010-10-06",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Wendy Testaburger"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/488",
            "https://spapi.dev/api/locations/424"
        ],
        "apiID": 203,
        "description": "Cartman dreams of being a NASCAR driver and he's willing to do whatever it takes to make it happen.\n"
    },
    {
        "id": "1409",
        "name": "It's a Jersey Thing",
        "season": 14,
        "episode": 9,
        "air_date": "2010-10-13",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 204,
        "description": "New Jersey is taking over the nation one state at a time. Randy and the boys take a stand as the Jerseyites approach South Park.\n"
    },
    {
        "id": "1501",
        "name": "HUMANCENTiPAD",
        "season": 15,
        "episode": 1,
        "air_date": "2011-04-27",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 210,
        "description": "Kyle is intimately involved in the development of a revolutionary new product called HumancentiPad.\n"
    },
    {
        "id": "1510",
        "name": "Bass to Mouth",
        "season": 15,
        "episode": 10,
        "air_date": "2011-10-19",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Boy with red shirt and blue pants"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Jason White"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Louis Handler"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Scott Malkinson"
            },
            {
                "name": "Timmy Burch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6"
        ],
        "apiID": 219,
        "description": "The kids' most scandalous secrets are being leaked on an outrageous new gossip website.\n"
    },
    {
        "id": "1511",
        "name": "Broadway Bro Down",
        "season": 15,
        "episode": 11,
        "air_date": "2011-10-26",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 220,
        "description": "After Randy takes Sharon to see a hit musical, he becomes Broadway's biggest fan.\n"
    },
    {
        "id": "1512",
        "name": "1%",
        "season": 15,
        "episode": 12,
        "air_date": "2011-11-02",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 221,
        "description": "The 99% is ganging up on Eric Cartman.\n"
    },
    {
        "id": "1513",
        "name": "A History Channel Thanksgiving",
        "season": 15,
        "episode": 13,
        "air_date": "2011-11-09",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 222,
        "description": "The boys are getting close to discovering the truth about the first Thanksgiving.\n"
    },
    {
        "id": "1514",
        "name": "The Poor Kid",
        "season": 15,
        "episode": 14,
        "air_date": "2011-11-16",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 223,
        "description": "Kenny ends up in the foster care system after his parents are arrested.\n"
    },
    {
        "id": "1502",
        "name": "Funnybot",
        "season": 15,
        "episode": 2,
        "air_date": "2011-05-04",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 211,
        "description": "Jimmy hosts the Special Ed Department's First Annual Comedy Awards.\n"
    },
    {
        "id": "1503",
        "name": "Royal Pudding",
        "season": 15,
        "episode": 3,
        "air_date": "2011-05-11",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 212,
        "description": "The Prince of Canada is about to take a Princess and Ike is obsessed with the Royal Wedding.\n"
    },
    {
        "id": "1504",
        "name": "T.M.I.",
        "season": 15,
        "episode": 4,
        "air_date": "2011-05-18",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 213,
        "description": "Cartman throws a fit when the boys' penis sizes are posted on the school bulletin board, and is sent to anger management therapy.\n"
    },
    {
        "id": "1505",
        "name": "Crack Baby Athletic Association",
        "season": 15,
        "episode": 5,
        "air_date": "2011-05-25",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 214,
        "description": "Kyle gets in on the ground floor of Cartman's latest business venture, The Crack Baby Athletic Association.\n"
    },
    {
        "id": "1506",
        "name": "City Sushi",
        "season": 15,
        "episode": 6,
        "air_date": "2011-06-01",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 215,
        "description": "Butters is diagnosed with multiple personality disorder.\n"
    },
    {
        "id": "1507",
        "name": "You're Getting Old",
        "season": 15,
        "episode": 7,
        "air_date": "2011-06-08",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 216,
        "description": "Just after Stan's 10th birthday, his worldview starts to change and so do his friendships.\n"
    },
    {
        "id": "1508",
        "name": "Ass Burgers",
        "season": 15,
        "episode": 8,
        "air_date": "2011-10-05",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 217,
        "description": "Cartman finds a unique way to cope with Asperger's Syndrome.\n"
    },
    {
        "id": "1509",
        "name": "The Last of the Meheecans",
        "season": 15,
        "episode": 9,
        "air_date": "2011-10-12",
        "created_at": "2021-07-14T19:50:59.000000Z",
        "updated_at": "2021-07-14T19:50:59.000000Z",
        "characters": [
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Jason White"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Timmy Burch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/245",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/577"
        ],
        "apiID": 218,
        "description": "Cartman joins the United States Border Patrol.\n"
    },
    {
        "id": "1601",
        "name": "Reverse Cowgirl",
        "season": 16,
        "episode": 1,
        "air_date": "2012-03-14",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 224,
        "description": "When one of the boys leaves the toilet seat up after he uses the bathroom, an unspeakable tragedy occurs.\n"
    },
    {
        "id": "1610",
        "name": "Insecurity",
        "season": 16,
        "episode": 10,
        "air_date": "2012-10-10",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 233,
        "description": "Cartman signs up for a home security system.\n"
    },
    {
        "id": "1611",
        "name": "Going Native",
        "season": 16,
        "episode": 11,
        "air_date": "2012-10-17",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 234,
        "description": "It is time for Butters to begin a journey where he will follow in the path of his Hawaiian ancestors.\n"
    },
    {
        "id": "1612",
        "name": "A Nightmare on Face Time",
        "season": 16,
        "episode": 12,
        "air_date": "2012-10-24",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 235,
        "description": "Randy's big plans for Halloween night keep Stan from trick or treating with his friends.\n"
    },
    {
        "id": "1613",
        "name": "A Scause For Applause",
        "season": 16,
        "episode": 13,
        "air_date": "2012-10-31",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 236,
        "description": "A serious doping scandal shakes everyone's faith in a beloved icon. Everyone who once supported the fallen hero is now cutting off their symbolic yellow wristbands.\n"
    },
    {
        "id": "1614",
        "name": "Obama Wins!",
        "season": 16,
        "episode": 14,
        "air_date": "2012-11-07",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 237,
        "description": ""
    },
    {
        "id": "1602",
        "name": "Cash For Gold",
        "season": 16,
        "episode": 2,
        "air_date": "2012-03-21",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 225,
        "description": "Cartman launches his own gem shopping channel.\n"
    },
    {
        "id": "1603",
        "name": "Faith Hilling",
        "season": 16,
        "episode": 3,
        "air_date": "2012-03-28",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 226,
        "description": "The kids are in danger when new trends start to evolve and shift at a rapid pace.\n"
    },
    {
        "id": "1604",
        "name": "Jewpacabra",
        "season": 16,
        "episode": 4,
        "air_date": "2012-04-04",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 227,
        "description": "The town's big Easter Egg Hunt is in jeopardy when Cartman produces video evidence of a mysterious creature lurking in the woods.\n"
    },
    {
        "id": "1605",
        "name": "Butterballs",
        "season": 16,
        "episode": 5,
        "air_date": "2012-04-11",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 228,
        "description": "Butters is the victim of an unlikely bully.\n"
    },
    {
        "id": "1606",
        "name": "I Should Have Never Gone Ziplining",
        "season": 16,
        "episode": 6,
        "air_date": "2012-04-18",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 229,
        "description": "The boys' ziplining adventure becomes a terrifying test of survival.\n"
    },
    {
        "id": "1607",
        "name": "Cartman Finds Love",
        "season": 16,
        "episode": 7,
        "air_date": "2012-04-25",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 230,
        "description": "The time has finally come for Cartman to let a special someone know exactly how he feels.\n"
    },
    {
        "id": "1608",
        "name": "Sarcastaball",
        "season": 16,
        "episode": 8,
        "air_date": "2012-09-26",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 231,
        "description": "South Park Elementary takes steps to address football's concussion crisis.\n"
    },
    {
        "id": "1609",
        "name": "Raising the Bar",
        "season": 16,
        "episode": 9,
        "air_date": "2012-10-03",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 232,
        "description": "Cartman finally admits he's fat and immediately gets a mobility scooter.\n"
    },
    {
        "id": "1701",
        "name": "Let Go, Let Gov",
        "season": 17,
        "episode": 1,
        "air_date": "2013-09-25",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 238,
        "description": "Cartman infiltrates the NSA and doesn't like what he finds in his personal file.\n"
    },
    {
        "id": "1710",
        "name": "The Hobbit",
        "season": 17,
        "episode": 10,
        "air_date": "2013-12-11",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 247,
        "description": "When Wendy tries to fix one of her girlfriends up with Butters, she ends up in the counselor's office.\n"
    },
    {
        "id": "1702",
        "name": "Informative Murder Porn",
        "season": 17,
        "episode": 2,
        "air_date": "2013-10-02",
        "created_at": "2021-07-14T19:51:00.000000Z",
        "updated_at": "2021-07-14T19:51:00.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Mrs. Tweak"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Boy with red shirt and blue pants"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Filmore Anderson"
            },
            {
                "name": "Flora Larsen"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Jason White"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Laura Tucker"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Louis Handler"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Matt (Nelly's dad)"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Roger Donovan"
            },
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Thomas Tucker"
            },
            {
                "name": "Timmy Burch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/258",
            "https://spapi.dev/api/locations/472",
            "https://spapi.dev/api/locations/482",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/120",
            "https://spapi.dev/api/locations/6"
        ],
        "apiID": 239,
        "description": "The boys use the game of Minecraft as a distraction to keep their parents from hurting each other.\n"
    },
    {
        "id": "1703",
        "name": "World War Zimmerman",
        "season": 17,
        "episode": 3,
        "air_date": "2013-10-09",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 240,
        "description": "Cartman sees Token as a threat to all humanity.\n"
    },
    {
        "id": "1704",
        "name": "Goth Kids 3: Dawn of the Posers",
        "season": 17,
        "episode": 4,
        "air_date": "2013-10-23",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 241,
        "description": "The Goth Kids are being sent away to a camp for troubled children.\n"
    },
    {
        "id": "1705",
        "name": "Taming Strange",
        "season": 17,
        "episode": 5,
        "air_date": "2013-10-30",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 242,
        "description": "When Ike hits puberty, he and Kyle start to grow apart. To save their relationship, Kyle takes Ike to see a live performance of Yo Gabba Gabba!.\n"
    },
    {
        "id": "1706",
        "name": "Ginger Cow",
        "season": 17,
        "episode": 6,
        "air_date": "2013-11-06",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 243,
        "description": "Cartman's latest prank brings peace to the world.\n"
    },
    {
        "id": "1707",
        "name": "Black Friday",
        "season": 17,
        "episode": 7,
        "air_date": "2013-11-13",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 244,
        "description": "The boys prepare to battle the crowds already lining up for the first official day of holiday shopping.\n"
    },
    {
        "id": "1708",
        "name": "A Song of Ass and Fire",
        "season": 17,
        "episode": 8,
        "air_date": "2013-11-20",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 245,
        "description": "Black Friday is almost here and the battle for the new gaming devices is heating up. Princess Kenny's betrayal has left Cartman out for revenge.\n"
    },
    {
        "id": "1709",
        "name": "Titties and Dragons",
        "season": 17,
        "episode": 9,
        "air_date": "2013-12-04",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 246,
        "description": "The doors to the mall will finally open for the biggest Black Friday sale in history. The boys are divided over which gaming device to buy and a bloody battle will determine whether Xbox or Sony will be the winner.\n"
    },
    {
        "id": "1801",
        "name": "Go Fund Yourself",
        "season": 18,
        "episode": 1,
        "air_date": "2014-09-24",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 248,
        "description": "The boys name their new start-up company, The Washington Redskins.\n"
    },
    {
        "id": "1810",
        "name": "#HappyHolograms",
        "season": 18,
        "episode": 10,
        "air_date": "2014-12-10",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 257,
        "description": ""
    },
    {
        "id": "1802",
        "name": "Gluten Free Ebola",
        "season": 18,
        "episode": 2,
        "air_date": "2014-10-01",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 249,
        "description": "South Park goes gluten free.\n"
    },
    {
        "id": "1803",
        "name": "The Cissy",
        "season": 18,
        "episode": 3,
        "air_date": "2014-10-08",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 250,
        "description": "Randy is harboring a giant secret and the pressure is getting to him. Meanwhile, Cartman calls Stan a cissy.\n"
    },
    {
        "id": "1804",
        "name": "Handicar",
        "season": 18,
        "episode": 4,
        "air_date": "2014-10-15",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 251,
        "description": "Timmy's successful new car service makes him a lot of enemies.\n"
    },
    {
        "id": "1805",
        "name": "The Magic Bush",
        "season": 18,
        "episode": 5,
        "air_date": "2014-10-29",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 252,
        "description": "Graphic video from an unknown drone is uploaded on the internet.\n"
    },
    {
        "id": "1806",
        "name": "Freemium Isn't Free",
        "season": 18,
        "episode": 6,
        "air_date": "2014-11-05",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 253,
        "description": "Stan is addicted to the new Terrance and Phillip mobile game.\n"
    },
    {
        "id": "1807",
        "name": "Grounded Vindaloop",
        "season": 18,
        "episode": 7,
        "air_date": "2014-11-12",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 254,
        "description": "Butters is convinced he's living in a virtual reality.\n"
    },
    {
        "id": "1808",
        "name": "Cock Magic",
        "season": 18,
        "episode": 8,
        "air_date": "2014-11-19",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 255,
        "description": "There are illegal goings-on in the basement of City Wok.\n"
    },
    {
        "id": "1809",
        "name": "#REHASH",
        "season": 18,
        "episode": 9,
        "air_date": "2014-12-03",
        "created_at": "2021-07-14T19:51:01.000000Z",
        "updated_at": "2021-07-14T19:51:01.000000Z",
        "characters": [
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Ike Broflovski"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/218",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/130",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/361"
        ],
        "apiID": 256,
        "description": ""
    },
    {
        "id": "1901",
        "name": "Stunning and Brave",
        "season": 19,
        "episode": 1,
        "air_date": "2015-09-16",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 258,
        "description": "The boys express their utmost respect for Caitlyn Jenner in the most stunning and brave South Park ever.\n"
    },
    {
        "id": "1910",
        "name": "PC Principal Final Justice",
        "season": 19,
        "episode": 10,
        "air_date": "2015-12-09",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 267,
        "description": "Kyle has chosen a dangerous alliance over his friendship with Stan.\n"
    },
    {
        "id": "1902",
        "name": "Where My Country Gone?",
        "season": 19,
        "episode": 2,
        "air_date": "2015-09-23",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 259,
        "description": "Garrison wants to build a wall to keep out all of the undocumented immigrants.\n"
    },
    {
        "id": "1903",
        "name": "The City Part of Town",
        "season": 19,
        "episode": 3,
        "air_date": "2015-09-30",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 260,
        "description": "The town of South Park is gentrifying and Kenny thinks it's time to get a job.\n"
    },
    {
        "id": "1904",
        "name": "You're Not Yelping",
        "season": 19,
        "episode": 4,
        "air_date": "2015-10-14",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 261,
        "description": "Cartman considers himself the top on-line restaurant reviewer in South Park.\n"
    },
    {
        "id": "1905",
        "name": "Safe Space",
        "season": 19,
        "episode": 5,
        "air_date": "2015-10-21",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 262,
        "description": "Cartman is the latest victim of body shaming.\n"
    },
    {
        "id": "1906",
        "name": "Tweek x Craig",
        "season": 19,
        "episode": 6,
        "air_date": "2015-10-28",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 263,
        "description": "The Asian Girls in school are drawing dreamy pictures of Tweek and Craig.\n"
    },
    {
        "id": "1907",
        "name": "Naughty Ninjas",
        "season": 19,
        "episode": 7,
        "air_date": "2015-11-11",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 264,
        "description": "The citizens of South Park decide they no longer need a police force in town.\n"
    },
    {
        "id": "1908",
        "name": "Sponsored Content",
        "season": 19,
        "episode": 8,
        "air_date": "2015-11-18",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 265,
        "description": "Jimmy's integrity as a newsman runs smack into PC Principal's ideology.\n"
    },
    {
        "id": "1909",
        "name": "Truth and Advertising",
        "season": 19,
        "episode": 9,
        "air_date": "2015-12-02",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 266,
        "description": "PC Principal disappears with two of the 4th grade students.\n"
    },
    {
        "id": "201",
        "name": "Terrance and Phillip in Not Without My Anus",
        "season": 2,
        "episode": 1,
        "air_date": "1998-04-01",
        "created_at": "2021-07-14T19:50:39.000000Z",
        "updated_at": "2021-07-14T19:50:39.000000Z",
        "characters": [
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Terrance and Phillip"
            },
            {
                "name": "Sally Dion"
            },
            {
                "name": "Dr. Alphonse Mephesto"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kevin Mephesto"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Stan Marsh"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/29",
            "https://spapi.dev/api/locations/31",
            "https://spapi.dev/api/locations/35",
            "https://spapi.dev/api/locations/456",
            "https://spapi.dev/api/locations/571",
            "https://spapi.dev/api/locations/281",
            "https://spapi.dev/api/locations/140",
            "https://spapi.dev/api/locations/497",
            "https://spapi.dev/api/locations/506"
        ],
        "apiID": 14,
        "description": "Terrance and Phillip must save Terrance's little daughter, Sally, and all of Canada from an evil dictator.\n"
    },
    {
        "id": "210",
        "name": "Chickenpox",
        "season": 2,
        "episode": 10,
        "air_date": "1998-08-26",
        "created_at": "2021-07-14T19:50:41.000000Z",
        "updated_at": "2021-07-14T19:50:41.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Kevin McCormick"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Terrance and Phillip"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Mr. Kitty"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/458",
            "https://spapi.dev/api/locations/87",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/488",
            "https://spapi.dev/api/locations/6"
        ],
        "apiID": 23,
        "description": "The kids' parents only have their best interests at heart when they arrange for Stan, Kyle, and Cartman to be exposed to the chickenpox virus.\n"
    },
    {
        "id": "211",
        "name": "Roger Ebert Should Lay off the Fatty Foods",
        "season": 2,
        "episode": 11,
        "air_date": "1998-09-02",
        "created_at": "2021-07-14T19:50:41.000000Z",
        "updated_at": "2021-07-14T19:50:41.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Mabel Cartman"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Peter"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Token Black"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/483",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/165",
            "https://spapi.dev/api/locations/363"
        ],
        "apiID": 24,
        "description": "Is the new planetarium a harmless place to learn about the solar system, or the scene of a diabolical plot to control the minds of South Park's citizens?\n"
    },
    {
        "id": "212",
        "name": "Clubhouses",
        "season": 2,
        "episode": 12,
        "air_date": "1998-09-23",
        "created_at": "2021-07-14T19:50:41.000000Z",
        "updated_at": "2021-07-14T19:50:41.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Terrance and Phillip"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Thomas McElroy"
            },
            {
                "name": "Scott Malkinson"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Craig Tucker"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/7",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/458"
        ],
        "apiID": 25,
        "description": "Stan and Kyle are psyched to have Wendy and Bebe visit their clubhouse for a game of Truth or Dare, but first they have to build one.\n"
    },
    {
        "id": "213",
        "name": "Cow Days",
        "season": 2,
        "episode": 13,
        "air_date": "1998-09-30",
        "created_at": "2021-07-14T19:50:42.000000Z",
        "updated_at": "2021-07-14T19:50:42.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Liane Cartman"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/358",
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/338"
        ],
        "apiID": 26,
        "description": "South Park's 14th Annual \"Cow Days\" rodeo and carnival is here and the boys are determined to win Terrance and Phillip dolls.\n"
    },
    {
        "id": "214",
        "name": "Chef Aid",
        "season": 2,
        "episode": 14,
        "air_date": "1998-10-07",
        "created_at": "2021-07-14T19:50:42.000000Z",
        "updated_at": "2021-07-14T19:50:42.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Stephen Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/38",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/458",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/462",
            "https://spapi.dev/api/locations/469",
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/154",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/623",
            "https://spapi.dev/api/locations/165"
        ],
        "apiID": 27,
        "description": "After a huge loss in court, Chef is left penniless, but he has some very famous and talented friends in the music business who want to help their old mentor.\n"
    },
    {
        "id": "215",
        "name": "Spookyfish",
        "season": 2,
        "episode": 15,
        "air_date": "1998-10-28",
        "created_at": "2021-07-14T19:50:42.000000Z",
        "updated_at": "2021-07-14T19:50:42.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Spookyfish (character)"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Terrance and Phillip"
            },
            {
                "name": "Flo Kimble"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Kevin McCormick"
            },
            {
                "name": "Sparky"
            },
            {
                "name": "Mr. Kitty"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/488",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/623",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/274",
            "https://spapi.dev/api/locations/4"
        ],
        "apiID": 28,
        "description": "When Sharon Marsh's Aunt Flo makes a monthly visit, she brings a mysterious pet fish for Stan.\n"
    },
    {
        "id": "216",
        "name": "Merry Christmas Charlie Manson!",
        "season": 2,
        "episode": 16,
        "air_date": "1998-12-09",
        "created_at": "2021-07-14T19:50:42.000000Z",
        "updated_at": "2021-07-14T19:50:42.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Howard Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Harold Cartman"
            },
            {
                "name": "Mabel Cartman"
            },
            {
                "name": "Florence Cartman"
            },
            {
                "name": "Uncle Stinky"
            },
            {
                "name": "Elvin Cartman"
            },
            {
                "name": "Cartman's unnamed relatives"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Terrance and Phillip"
            },
            {
                "name": "Lisa Cartman"
            },
            {
                "name": "Fat Bob"
            },
            {
                "name": "Alexandra Cartman"
            },
            {
                "name": "Jimmy Cartman"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Fred Cartman"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/483",
            "https://spapi.dev/api/locations/108",
            "https://spapi.dev/api/locations/114"
        ],
        "apiID": 29,
        "description": ""
    },
    {
        "id": "217",
        "name": "Gnomes",
        "season": 2,
        "episode": 17,
        "air_date": "1998-12-16",
        "created_at": "2021-07-14T19:50:42.000000Z",
        "updated_at": "2021-07-14T19:50:42.000000Z",
        "characters": [
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Mrs. Tweak"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Stephen Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/374",
            "https://spapi.dev/api/locations/513",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/263",
            "https://spapi.dev/api/locations/628",
            "https://spapi.dev/api/locations/4"
        ],
        "apiID": 30,
        "description": "Cartman, Stan, Kyle and Kenny are assigned to write a report with Tweek, the very nervous and highly caffeinated boy who insists gnomes are stealing his underpants.\n"
    },
    {
        "id": "218",
        "name": "Prehistoric Ice Man",
        "season": 2,
        "episode": 18,
        "air_date": "1999-01-20",
        "created_at": "2021-07-14T19:50:42.000000Z",
        "updated_at": "2021-07-14T19:50:42.000000Z",
        "characters": [
            {
                "name": "Dr. Alphonse Mephesto"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Kevin Mephesto"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/157",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/168",
            "https://spapi.dev/api/locations/2"
        ],
        "apiID": 31,
        "description": "The boys' discovery of a man encased in ice threatens Stan and Kyle's friendship.\n"
    },
    {
        "id": "202",
        "name": "Cartman's Mom is Still a Dirty Slut",
        "season": 2,
        "episode": 2,
        "air_date": "1998-04-22",
        "created_at": "2021-07-14T19:50:39.000000Z",
        "updated_at": "2021-07-14T19:50:39.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Dr. Alphonse Mephesto"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Kevin Mephesto"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/157",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/193",
            "https://spapi.dev/api/locations/443"
        ],
        "apiID": 15,
        "description": "The boys wait for Dr. Mephesto to regain consciousness and reveal the identity of Cartman's father.\n"
    },
    {
        "id": "203",
        "name": "Ike's Wee Wee",
        "season": 2,
        "episode": 3,
        "air_date": "1998-05-20",
        "created_at": "2021-07-14T19:50:40.000000Z",
        "updated_at": "2021-07-14T19:50:40.000000Z",
        "characters": [
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Mr. Testaburger"
            },
            {
                "name": "Murrey Broflovski"
            },
            {
                "name": "Mrs. Stevens"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/23",
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/469",
            "https://spapi.dev/api/locations/485",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/168",
            "https://spapi.dev/api/locations/338",
            "https://spapi.dev/api/locations/115",
            "https://spapi.dev/api/locations/262"
        ],
        "apiID": 16,
        "description": "Mr. Mackey, the school counselor, is fired and turns to drugs and alcohol. Meanwhile, when the boys find out what it means to be circumcised they try to save Ike from his bris.\n"
    },
    {
        "id": "204",
        "name": "Chickenlover",
        "season": 2,
        "episode": 4,
        "air_date": "1998-05-27",
        "created_at": "2021-07-14T19:50:40.000000Z",
        "updated_at": "2021-07-14T19:50:40.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Kevin McCormick"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Stephen Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/252",
            "https://spapi.dev/api/locations/488",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/8"
        ],
        "apiID": 17,
        "description": "When Barbrady resigns, anarchy ensues and the boys pitch in to help.\n"
    },
    {
        "id": "205",
        "name": "Conjoined Fetus Lady",
        "season": 2,
        "episode": 5,
        "air_date": "1998-06-03",
        "created_at": "2021-07-14T19:50:40.000000Z",
        "updated_at": "2021-07-14T19:50:40.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Token Black"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/563",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/67",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/182",
            "https://spapi.dev/api/locations/189"
        ],
        "apiID": 18,
        "description": "With Pip as their star player, the South Park dodgeball team is off to the championships.\n"
    },
    {
        "id": "206",
        "name": "The Mexican Staring Frog of Southern Sri Lanka",
        "season": 2,
        "episode": 6,
        "air_date": "1998-06-10",
        "created_at": "2021-07-14T19:50:40.000000Z",
        "updated_at": "2021-07-14T19:50:40.000000Z",
        "characters": [
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Satan"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Peter's wife"
            },
            {
                "name": "Stephen Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/590"
        ],
        "apiID": 19,
        "description": "Jimbo and Ned's efforts to drive up the ratings for their new hunting show on the cable access channel threatens to edge out an old favorite, Jesus and Pals.\n"
    },
    {
        "id": "207",
        "name": "City on the Edge of Forever (Flashbacks)",
        "season": 2,
        "episode": 7,
        "air_date": "1998-06-17",
        "created_at": "2021-07-14T19:50:40.000000Z",
        "updated_at": "2021-07-14T19:50:40.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Boy with red shirt and blue pants"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Dr. Alphonse Mephesto"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Marvin Marsh"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Wendy Testaburger"
            }
        ],
        "locations": [],
        "apiID": 20,
        "description": "A freak accident leaves the South Park Elementary School Bus teetering precariously on the edge of a cliff.\n"
    },
    {
        "id": "208",
        "name": "Summer Sucks",
        "season": 2,
        "episode": 8,
        "air_date": "1998-06-24",
        "created_at": "2021-07-14T19:50:41.000000Z",
        "updated_at": "2021-07-14T19:50:41.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Kevin McCormick"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Peter's wife"
            },
            {
                "name": "Stephen Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/557",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/469",
            "https://spapi.dev/api/locations/577",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/357",
            "https://spapi.dev/api/locations/177"
        ],
        "apiID": 21,
        "description": "The entire town is gearing up for the annual 4 July celebration when a ban on fireworks is imposed.\n"
    },
    {
        "id": "209",
        "name": "Chef's Chocolate Salty Balls",
        "season": 2,
        "episode": 9,
        "air_date": "1998-08-19",
        "created_at": "2021-07-14T19:50:41.000000Z",
        "updated_at": "2021-07-14T19:50:41.000000Z",
        "characters": [
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Mr. Hankey"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Peter's wife"
            },
            {
                "name": "Stephen Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/214",
            "https://spapi.dev/api/locations/142",
            "https://spapi.dev/api/locations/438"
        ],
        "apiID": 22,
        "description": "South Park's first film festival attracts crowds of pretentious, tofu-eating movie lovers to the quiet mountain town.\n"
    },
    {
        "id": "2001",
        "name": "Member Berries",
        "season": 20,
        "episode": 1,
        "air_date": "2016-09-14",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 268,
        "description": "Garrison is still hot on the campaign trail.\n"
    },
    {
        "id": "2010",
        "name": "The End of Serialization as We Know It",
        "season": 20,
        "episode": 10,
        "air_date": "2016-12-07",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 277,
        "description": "Cartman finally understands why Heidi wants to get him to Mars.\n"
    },
    {
        "id": "2002",
        "name": "Skank Hunt",
        "season": 20,
        "episode": 2,
        "air_date": "2016-09-21",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 269,
        "description": "Kyle's dad manages to keep his identity as a troll a secret while he takes his on-line abuse global.\n"
    },
    {
        "id": "2003",
        "name": "The Damned",
        "season": 20,
        "episode": 3,
        "air_date": "2016-09-28",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 270,
        "description": "Gerald is thrilled with the media attention as he continues to troll everyone and anyone.\n"
    },
    {
        "id": "2004",
        "name": "Wieners Out",
        "season": 20,
        "episode": 4,
        "air_date": "2016-10-12",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 271,
        "description": "The boys band together to stand up for their rights.\n"
    },
    {
        "id": "2005",
        "name": "Douche and a Danish",
        "season": 20,
        "episode": 5,
        "air_date": "2016-10-19",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 272,
        "description": "Giant Douche wants out of the Presidential race.\n"
    },
    {
        "id": "2006",
        "name": "Fort Collins",
        "season": 20,
        "episode": 6,
        "air_date": "2016-10-26",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 273,
        "description": "An entire city in Colorado gets hacked. Gerald and Cartman may lose everything when their complete history of internet activity becomes public.\n"
    },
    {
        "id": "2007",
        "name": "Oh, Jeez",
        "season": 20,
        "episode": 7,
        "air_date": "2016-11-09",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 274,
        "description": "Gerald comes face-to-face with the Troll Hunter.\n"
    },
    {
        "id": "2008",
        "name": "Members Only",
        "season": 20,
        "episode": 8,
        "air_date": "2016-11-16",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 275,
        "description": "The new President-elect pays a visit to his hometown.\n"
    },
    {
        "id": "2009",
        "name": "Not Funny",
        "season": 20,
        "episode": 9,
        "air_date": "2016-11-30",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 276,
        "description": "Cartman is certain that Butters is trying to steal his girlfriend.\n"
    },
    {
        "id": "2101",
        "name": "White People Renovating Houses",
        "season": 21,
        "episode": 1,
        "air_date": "2017-09-13",
        "created_at": "2021-07-14T19:51:02.000000Z",
        "updated_at": "2021-07-14T19:51:02.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 278,
        "description": "Protestors armed with tiki torches and confederate flags take to the streets of South Park. Randy comes to grips with what it means to be white in today's society.\n"
    },
    {
        "id": "2110",
        "name": "Splatty Tomato",
        "season": 21,
        "episode": 10,
        "air_date": "2017-12-06",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 287,
        "description": "The children of South Park claim to have seen Mr. Garrison lurking around town and they're frightened. The town comes together to make the President go away.\n"
    },
    {
        "id": "2102",
        "name": "Put It Down",
        "season": 21,
        "episode": 2,
        "air_date": "2017-09-20",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 279,
        "description": "When Tweek is caught in the middle of a petty conflict, it drives his relationship with Craig to the brink.\n"
    },
    {
        "id": "2103",
        "name": "Holiday Special",
        "season": 21,
        "episode": 3,
        "air_date": "2017-09-27",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 280,
        "description": "In a return to form, a forbidden love story between a white man and a Native American man unfolds. However, the boys' story exploits people's misery for laughs.\n"
    },
    {
        "id": "2104",
        "name": "Franchise Prequel",
        "season": 21,
        "episode": 4,
        "air_date": "2017-10-11",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 281,
        "description": "Professor Chaos has found the perfect tool to spread lies and misinformation about Coon and Friends. In trying to save their reputation, the boys come face to face with Mark Zuckerberg.\n"
    },
    {
        "id": "2105",
        "name": "Hummels & Heroin",
        "season": 21,
        "episode": 5,
        "air_date": "2017-10-18",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 282,
        "description": "Drugs are flowing into South Park. A passionate young health advocate has traced the source of these illegal meds and is about to expose Stan Marsh.\n"
    },
    {
        "id": "2106",
        "name": "Sons A Witches",
        "season": 21,
        "episode": 6,
        "air_date": "2017-10-25",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 283,
        "description": "This year at the traditional Halloween get together, a witch casts a spell that terrorizes the town and ruins Halloween for the boys. Cartman sees a way to use the witch's power to his advantage.\n"
    },
    {
        "id": "2107",
        "name": "Doubling Down",
        "season": 21,
        "episode": 7,
        "air_date": "2017-11-08",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 284,
        "description": "Kyle doesn't understand why Heidi won't break up with Cartman. He's playing with fire when he gets in the middle of the school's most talked about couple.\n"
    },
    {
        "id": "2108",
        "name": "Moss Piglets",
        "season": 21,
        "episode": 8,
        "air_date": "2017-11-15",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 285,
        "description": "Jimmy and Timmy's project has caught the attention of some very important people. Their experiment could have far reaching implications that could save the world… and they might even win first prize in this year's science fair.\n"
    },
    {
        "id": "2109",
        "name": "SUPER HARD PCness",
        "season": 21,
        "episode": 9,
        "air_date": "2017-11-29",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 286,
        "description": "PC Principal is wrestling with some unfamiliar feelings. Meanwhile, boys will be boys except for Kyle who, for the first time, seems to see things differently from the rest of his friends.\n"
    },
    {
        "id": "2201",
        "name": "Dead Kids",
        "season": 22,
        "episode": 1,
        "air_date": "2018-09-26",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 288,
        "description": "Sharon is abnormally emotional and it's really getting Randy down.\n"
    },
    {
        "id": "2210",
        "name": "Bike Parade",
        "season": 22,
        "episode": 10,
        "air_date": "2018-12-12",
        "created_at": "2021-07-14T19:51:04.000000Z",
        "updated_at": "2021-07-14T19:51:04.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Larry Zewiski"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Ryan Valmer"
            },
            {
                "name": "Sarah Valmer"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Mr. Zewiski"
            },
            {
                "name": "Mrs. Zewiski"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/9",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/488",
            "https://spapi.dev/api/locations/150",
            "https://spapi.dev/api/locations/501",
            "https://spapi.dev/api/locations/514"
        ],
        "apiID": 297,
        "description": "The boys' chance of winning the Bike Parade is in jeopardy when Kenny quits.\n"
    },
    {
        "id": "2202",
        "name": "A Boy And A Priest",
        "season": 22,
        "episode": 2,
        "air_date": "2018-10-03",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 289,
        "description": "The town finds the church doors locked and there's no sign of Butters or the Pastor.\n"
    },
    {
        "id": "2203",
        "name": "The Problem with a Poo",
        "season": 22,
        "episode": 3,
        "air_date": "2018-10-10",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 290,
        "description": "Mr. Hankey's offensive behavior puts him in jeopardy of being fired as the Director of the Annual Christmas Pageant.\n"
    },
    {
        "id": "2204",
        "name": "Tegridy Farms",
        "season": 22,
        "episode": 4,
        "air_date": "2018-10-17",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Jenny Harrison"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Mr. Mackey Senior"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/622",
            "https://spapi.dev/api/locations/212",
            "https://spapi.dev/api/locations/9"
        ],
        "apiID": 291,
        "description": "Randy moves the family to the country and he takes up farming.\n"
    },
    {
        "id": "2205",
        "name": "The Scoots",
        "season": 22,
        "episode": 5,
        "air_date": "2018-10-31",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Jimbo Kern"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/120",
            "https://spapi.dev/api/locations/296",
            "https://spapi.dev/api/locations/485",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/250",
            "https://spapi.dev/api/locations/261"
        ],
        "apiID": 292,
        "description": "The kids plan to use the latest revolution in mobility to get more candy on Halloween than they have ever gotten before.\n"
    },
    {
        "id": "2206",
        "name": "Time To Get Cereal",
        "season": 22,
        "episode": 6,
        "air_date": "2018-11-07",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Satan"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Strong Woman"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Marvin Marsh"
            },
            {
                "name": "Mr. Mackey Senior"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/9",
            "https://spapi.dev/api/locations/412",
            "https://spapi.dev/api/locations/310",
            "https://spapi.dev/api/locations/323",
            "https://spapi.dev/api/locations/453"
        ],
        "apiID": 293,
        "description": "South Park citizens are in danger and the boys realize that only Al Gore can help.\n"
    },
    {
        "id": "2207",
        "name": "Nobody Got Cereal?",
        "season": 22,
        "episode": 7,
        "air_date": "2018-11-14",
        "created_at": "2021-07-14T19:51:03.000000Z",
        "updated_at": "2021-07-14T19:51:03.000000Z",
        "characters": [
            {
                "name": "Satan"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Marvin Marsh"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/9",
            "https://spapi.dev/api/locations/143",
            "https://spapi.dev/api/locations/122",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/519"
        ],
        "apiID": 294,
        "description": "The boys break out of jail and are on the run from the police and ManBearPig.\n"
    },
    {
        "id": "2208",
        "name": "Buddha Box",
        "season": 22,
        "episode": 8,
        "air_date": "2018-11-28",
        "created_at": "2021-07-14T19:51:04.000000Z",
        "updated_at": "2021-07-14T19:51:04.000000Z",
        "characters": [
            {
                "name": "PC Babies"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "PC Principal"
            },
            {
                "name": "Strong Woman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Mr. Mackey Senior"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/235",
            "https://spapi.dev/api/locations/431",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/503",
            "https://spapi.dev/api/locations/350"
        ],
        "apiID": 295,
        "description": "Cartman has been diagnosed with anxiety.\n"
    },
    {
        "id": "2209",
        "name": "Unfulfilled",
        "season": 22,
        "episode": 9,
        "air_date": "2018-12-05",
        "created_at": "2021-07-14T19:51:04.000000Z",
        "updated_at": "2021-07-14T19:51:04.000000Z",
        "characters": [
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Mrs. Tweak"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Larry Zewiski"
            },
            {
                "name": "Mr. Zewiski"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/235",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/145",
            "https://spapi.dev/api/locations/488",
            "https://spapi.dev/api/locations/159",
            "https://spapi.dev/api/locations/501",
            "https://spapi.dev/api/locations/9",
            "https://spapi.dev/api/locations/507",
            "https://spapi.dev/api/locations/514"
        ],
        "apiID": 296,
        "description": "South Park is chosen to be the home for Amazon's newest Fulfillment Center.\n"
    },
    {
        "id": "2301",
        "name": "Mexican Joker",
        "season": 23,
        "episode": 1,
        "air_date": "2019-09-25",
        "created_at": "2021-07-14T19:51:04.000000Z",
        "updated_at": "2021-07-14T19:51:04.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Dave Harrison"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Stephen Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/89",
            "https://spapi.dev/api/locations/288",
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/122",
            "https://spapi.dev/api/locations/501",
            "https://spapi.dev/api/locations/9"
        ],
        "apiID": 298,
        "description": "Randy fights against home-grown. Meanwhile, Kyle goes to camp.\n"
    },
    {
        "id": "2302",
        "name": "Band in China",
        "season": 23,
        "episode": 2,
        "air_date": "2019-10-02",
        "created_at": "2021-07-14T19:51:04.000000Z",
        "updated_at": "2021-07-14T19:51:04.000000Z",
        "characters": [
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Damien Thorn"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Stephen Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/392",
            "https://spapi.dev/api/locations/523",
            "https://spapi.dev/api/locations/563",
            "https://spapi.dev/api/locations/47",
            "https://spapi.dev/api/locations/83",
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/350",
            "https://spapi.dev/api/locations/9"
        ],
        "apiID": 299,
        "description": "Randy sees an opportunity for Tegridy in China.\n"
    },
    {
        "id": "2303",
        "name": "Shots",
        "season": 23,
        "episode": 3,
        "air_date": "2019-10-09",
        "created_at": "2021-07-14T19:51:05.000000Z",
        "updated_at": "2021-07-14T19:51:05.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "PC Principal"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Thomas Tucker"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/432",
            "https://spapi.dev/api/locations/338",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/9",
            "https://spapi.dev/api/locations/105"
        ],
        "apiID": 300,
        "description": "Randy celebrates the success of Tegridy Farms while Cartman refuses to get a shot.\n"
    },
    {
        "id": "2304",
        "name": "Let Them Eat Goo",
        "season": 23,
        "episode": 4,
        "air_date": "2019-10-16",
        "created_at": "2021-07-14T19:51:05.000000Z",
        "updated_at": "2021-07-14T19:51:05.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Nichole Daniels"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "PC Principal"
            },
            {
                "name": "Sharon Marsh"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/228",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/364",
            "https://spapi.dev/api/locations/9",
            "https://spapi.dev/api/locations/273"
        ],
        "apiID": 301,
        "description": "Cartman is sure the new plant-based diet in the school cafeteria gave him a heart attack.\n"
    },
    {
        "id": "2305",
        "name": "Tegridy Farms Halloween Special",
        "season": 23,
        "episode": 5,
        "air_date": "2019-10-30",
        "created_at": "2021-07-14T19:51:05.000000Z",
        "updated_at": "2021-07-14T19:51:05.000000Z",
        "characters": [
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "PC Principal"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Stephen Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/403",
            "https://spapi.dev/api/locations/501",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/9"
        ],
        "apiID": 302,
        "description": "It's Halloween and Randy is dealing with his daughter's marijuana problem.\n"
    },
    {
        "id": "2306",
        "name": "Season Finale",
        "season": 23,
        "episode": 6,
        "air_date": "2019-11-06",
        "created_at": "2021-07-14T19:51:05.000000Z",
        "updated_at": "2021-07-14T19:51:05.000000Z",
        "characters": [
            {
                "name": "Alejandro White"
            },
            {
                "name": "Crystal White"
            },
            {
                "name": "Mrs. White"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Jason White"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Panamanian Padengo Pequeño"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Linda Black"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/150",
            "https://spapi.dev/api/locations/9",
            "https://spapi.dev/api/locations/89",
            "https://spapi.dev/api/locations/443",
            "https://spapi.dev/api/locations/59"
        ],
        "apiID": 303,
        "description": "The citizens of South Park have had enough of Randy and Tegridy Farms and they just want to lock him up.\n"
    },
    {
        "id": "301",
        "name": "Rainforest Shmainforest",
        "season": 3,
        "episode": 1,
        "air_date": "1999-04-07",
        "created_at": "2021-07-14T19:50:43.000000Z",
        "updated_at": "2021-07-14T19:50:43.000000Z",
        "characters": [
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Boy with red shirt and blue pants"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Red McArthur"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/564"
        ],
        "apiID": 32,
        "description": "The boys travel to the Costa Rica as a part of the \"Getting Gay with Kids\" choir tour.\n"
    },
    {
        "id": "310",
        "name": "Korn's Groovy Pirate Ghost Mystery",
        "season": 3,
        "episode": 10,
        "air_date": "1999-10-27",
        "created_at": "2021-07-14T19:50:44.000000Z",
        "updated_at": "2021-07-14T19:50:44.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Cleo Broflovski"
            },
            {
                "name": "Wendy Testaburger"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/155",
            "https://spapi.dev/api/locations/112",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/4"
        ],
        "apiID": 41,
        "description": "Korn comes to South Park for a Halloween concert and helps the boys solve a spooky pirate ghost mystery.\n"
    },
    {
        "id": "311",
        "name": "Chinpokomon",
        "season": 3,
        "episode": 11,
        "air_date": "1999-11-03",
        "created_at": "2021-07-14T19:50:45.000000Z",
        "updated_at": "2021-07-14T19:50:45.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Mr. Kitty"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Mrs. Tweak"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Louis Handler"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/299",
            "https://spapi.dev/api/locations/575",
            "https://spapi.dev/api/locations/49",
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/48",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/160",
            "https://spapi.dev/api/locations/443"
        ],
        "apiID": 42,
        "description": "Stan, Kyle, Cartman and Kenny are caught up in the latest fad from Japan: Chinpoko Mon!\n"
    },
    {
        "id": "312",
        "name": "Hooked on Monkey Fonics",
        "season": 3,
        "episode": 12,
        "air_date": "1999-11-10",
        "created_at": "2021-07-14T19:50:45.000000Z",
        "updated_at": "2021-07-14T19:50:45.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Mark Cotswolds"
            },
            {
                "name": "Rebecca Cotswolds"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Mr. Cotswolds"
            },
            {
                "name": "Mrs. Cotswolds"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Sally Dion"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Dr. Alphonse Mephesto"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Thomas Tucker"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Boy with red shirt and blue pants"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Louis Handler"
            },
            {
                "name": "Millie Larsen"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/461",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/7",
            "https://spapi.dev/api/locations/338",
            "https://spapi.dev/api/locations/623"
        ],
        "apiID": 43,
        "description": "To help Cartman win the school spelling bee, Cartman's Mom gives him the Hooked on Monkey Fonics spelling system.\n"
    },
    {
        "id": "313",
        "name": "Starvin' Marvin in Space",
        "season": 3,
        "episode": 13,
        "air_date": "1999-11-17",
        "created_at": "2021-07-14T19:50:45.000000Z",
        "updated_at": "2021-07-14T19:50:45.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Tricia Tucker"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Red McArthur"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/614",
            "https://spapi.dev/api/locations/566",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/558",
            "https://spapi.dev/api/locations/78",
            "https://spapi.dev/api/locations/3"
        ],
        "apiID": 44,
        "description": "Starvin' Marvin returns to South Park with an alien spaceship and enlists Cartman, Stan, Kyle and Kenny's help to seek out a new home for his starving people.\n"
    },
    {
        "id": "314",
        "name": "The Red Badge of Gayness",
        "season": 3,
        "episode": 14,
        "air_date": "1999-11-24",
        "created_at": "2021-07-14T19:50:45.000000Z",
        "updated_at": "2021-07-14T19:50:45.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Marvin Marsh"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Peter's wife"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/614",
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/148",
            "https://spapi.dev/api/locations/548",
            "https://spapi.dev/api/locations/488",
            "https://spapi.dev/api/locations/549",
            "https://spapi.dev/api/locations/443",
            "https://spapi.dev/api/locations/410"
        ],
        "apiID": 45,
        "description": "Cartman has visions of glory as he suits up for the Confederacy in the annual reenactment of a Civil War battle, and leads the drunken rebels to defeat the union.\n"
    },
    {
        "id": "315",
        "name": "Mr. Hankey's Christmas Classics",
        "season": 3,
        "episode": 15,
        "air_date": "1999-12-01",
        "created_at": "2021-07-14T19:50:45.000000Z",
        "updated_at": "2021-07-14T19:50:45.000000Z",
        "characters": [
            {
                "name": "Mr. Hankey"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Satan"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Boy with red shirt and blue pants"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Louis Handler"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Mr. Kitty"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/606",
            "https://spapi.dev/api/locations/485",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/570",
            "https://spapi.dev/api/locations/575"
        ],
        "apiID": 46,
        "description": "An extravaganza of holiday songs are performed in unique South Park style, hosted by Mr. Hankey.\n"
    },
    {
        "id": "316",
        "name": "Are You There God? It's Me, Jesus",
        "season": 3,
        "episode": 16,
        "air_date": "1999-12-29",
        "created_at": "2021-07-14T19:50:46.000000Z",
        "updated_at": "2021-07-14T19:50:46.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Dr. Alphonse Mephesto"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Boy with red shirt and blue pants"
            },
            {
                "name": "Louis Handler"
            },
            {
                "name": "Peter's wife"
            },
            {
                "name": "Kevin Mephesto"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Butters Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/538",
            "https://spapi.dev/api/locations/523",
            "https://spapi.dev/api/locations/568",
            "https://spapi.dev/api/locations/479",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/488",
            "https://spapi.dev/api/locations/202",
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/458",
            "https://spapi.dev/api/locations/157",
            "https://spapi.dev/api/locations/535"
        ],
        "apiID": 47,
        "description": "People from all over the world start to gather outside Jesus' house waiting for a millennium miracle.\n"
    },
    {
        "id": "317",
        "name": "World Wide Recorder Concert",
        "season": 3,
        "episode": 17,
        "air_date": "2000-01-12",
        "created_at": "2021-07-14T19:50:46.000000Z",
        "updated_at": "2021-07-14T19:50:46.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Mrs. Garrison Senior"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Wendy Testaburger"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/552",
            "https://spapi.dev/api/locations/205",
            "https://spapi.dev/api/locations/470",
            "https://spapi.dev/api/locations/6"
        ],
        "apiID": 48,
        "description": "The children of South Park are invited to Arkansas for the \"Four Million Child Blow 2000\", the first worldwide recorder concert.\n"
    },
    {
        "id": "302",
        "name": "Spontaneous Combustion",
        "season": 3,
        "episode": 2,
        "air_date": "1999-04-14",
        "created_at": "2021-07-14T19:50:43.000000Z",
        "updated_at": "2021-07-14T19:50:43.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Dr. Alphonse Mephesto"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Kevin McCormick"
            },
            {
                "name": "Kevin Mephesto"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Helen Burch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/257",
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/150",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/27"
        ],
        "apiID": 33,
        "description": "When the citizens of South Park start exploding randomly, the mayor enlists Stan's dad, the resident geologist, to find a solution to the problem.\n"
    },
    {
        "id": "303",
        "name": "The Succubus",
        "season": 3,
        "episode": 3,
        "air_date": "1999-04-21",
        "created_at": "2021-07-14T19:50:43.000000Z",
        "updated_at": "2021-07-14T19:50:43.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Thomas McElroy"
            },
            {
                "name": "Nellie McElroy"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Boy with red shirt and blue pants"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/117",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/623",
            "https://spapi.dev/api/locations/458",
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/286"
        ],
        "apiID": 34,
        "description": "Chef's parents arrive in South Park from Scotland fresh from an encounter with the Loch Ness Monster to attend Chef's wedding.\n"
    },
    {
        "id": "304",
        "name": "Jakovasaurs",
        "season": 3,
        "episode": 4,
        "air_date": "1999-06-16",
        "created_at": "2021-07-14T19:50:43.000000Z",
        "updated_at": "2021-07-14T19:50:43.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Dr. Alphonse Mephesto"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Kevin Mephesto"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Red McArthur"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/8",
            "https://spapi.dev/api/locations/480",
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/157",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/338",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/568",
            "https://spapi.dev/api/locations/477"
        ],
        "apiID": 35,
        "description": "The boys discover a prehistoric creature called a Jakovasaur while camping at Stark's Pond.\n"
    },
    {
        "id": "305",
        "name": "Tweek vs. Craig",
        "season": 3,
        "episode": 5,
        "air_date": "1999-06-23",
        "created_at": "2021-07-14T19:50:44.000000Z",
        "updated_at": "2021-07-14T19:50:44.000000Z",
        "characters": [
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Mrs. Tweak"
            },
            {
                "name": "Thomas Tucker"
            },
            {
                "name": "Laura Tucker"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Tricia Tucker"
            },
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Boy with red shirt and blue pants"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/7",
            "https://spapi.dev/api/locations/513",
            "https://spapi.dev/api/locations/511",
            "https://spapi.dev/api/locations/445",
            "https://spapi.dev/api/locations/213",
            "https://spapi.dev/api/locations/309"
        ],
        "apiID": 36,
        "description": "The boys instigate a fight between Tweek and Craig in shop class. Meanwhile, Mr. Adler, the shop teacher, is haunted by a recurring dream of his lost love.\n"
    },
    {
        "id": "306",
        "name": "Sexual Harassment Panda",
        "season": 3,
        "episode": 6,
        "air_date": "1999-07-07",
        "created_at": "2021-07-14T19:50:44.000000Z",
        "updated_at": "2021-07-14T19:50:44.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Butters Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/417",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/154",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/27",
            "https://spapi.dev/api/locations/338"
        ],
        "apiID": 37,
        "description": "After Sexual Harassment Panda \"educates\" the children, Cartman sues Stan for sexual harassment, and a flurry of other lawsuits follow.\n   \n"
    },
    {
        "id": "307",
        "name": "Cat Orgy",
        "season": 3,
        "episode": 7,
        "air_date": "1999-07-14",
        "created_at": "2021-07-14T19:50:44.000000Z",
        "updated_at": "2021-07-14T19:50:44.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Mr. Kitty"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/4",
            "https://spapi.dev/api/locations/498"
        ],
        "apiID": 38,
        "description": "While all the adults are gathering at Mr. Mackey's house to watch a meteor shower Shelly Marsh is left babysit Cartman.\n"
    },
    {
        "id": "308",
        "name": "Two Guys Naked in a Hot Tub",
        "season": 3,
        "episode": 8,
        "air_date": "1999-07-21",
        "created_at": "2021-07-14T19:50:44.000000Z",
        "updated_at": "2021-07-14T19:50:44.000000Z",
        "characters": [
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Mrs. Petuski"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/485"
        ],
        "apiID": 39,
        "description": "Stan's parents drag him along to Mr. Mackey's meteor shower party, where he is sent down into the basement to play with Pip, Butters and Dougie.\n"
    },
    {
        "id": "309",
        "name": "Jewbilee",
        "season": 3,
        "episode": 9,
        "air_date": "1999-07-28",
        "created_at": "2021-07-14T19:50:44.000000Z",
        "updated_at": "2021-07-14T19:50:44.000000Z",
        "characters": [
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Louis Handler"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/419"
        ],
        "apiID": 40,
        "description": "Kyle invites Kenny to join him and Ike at Jewbilee, a camp for Jewish kids.\n"
    },
    {
        "id": "401",
        "name": "The Tooth Fairy Tats 2000",
        "season": 4,
        "episode": 1,
        "air_date": "2000-04-05",
        "created_at": "2021-07-14T19:50:46.000000Z",
        "updated_at": "2021-07-14T19:50:46.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 49,
        "description": "When Cartman discovers the Tooth Fairy is paying a premium price for his lost teeth, he and the boys seize the opportunity to make some cash.\n"
    },
    {
        "id": "410",
        "name": "Probably",
        "season": 4,
        "episode": 10,
        "air_date": "2000-07-26",
        "created_at": "2021-07-14T19:50:48.000000Z",
        "updated_at": "2021-07-14T19:50:48.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 58,
        "description": "Cartman's flock begins to grow and the children begin plans to build him a Church. Meanwhile, Satan turns to God for advice.\n"
    },
    {
        "id": "411",
        "name": "Fourth Grade",
        "season": 4,
        "episode": 11,
        "air_date": "2000-11-08",
        "created_at": "2021-07-14T19:50:48.000000Z",
        "updated_at": "2021-07-14T19:50:48.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 59,
        "description": "The boys devise a plan to travel back in time a full year and return to the third grade, with the help of Timmy and his electronic wheelchair.\n"
    },
    {
        "id": "412",
        "name": "Trapper Keeper",
        "season": 4,
        "episode": 12,
        "air_date": "2000-11-15",
        "created_at": "2021-07-14T19:50:48.000000Z",
        "updated_at": "2021-07-14T19:50:48.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 60,
        "description": "When Cartman finally stops bragging about his new Trapper Keeper, a stranger informs him that it will eventually take over the world and destroy humankind, if they do not destroy it first.\n"
    },
    {
        "id": "413",
        "name": "Helen Keller! The Musical",
        "season": 4,
        "episode": 13,
        "air_date": "2000-11-22",
        "created_at": "2021-07-14T19:50:48.000000Z",
        "updated_at": "2021-07-14T19:50:48.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 61,
        "description": ""
    },
    {
        "id": "414",
        "name": "Pip",
        "season": 4,
        "episode": 14,
        "air_date": "2000-11-29",
        "created_at": "2021-07-14T19:50:48.000000Z",
        "updated_at": "2021-07-14T19:50:48.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 62,
        "description": "When Pip is offered the opportunity to become a gentleman he goes to London only to discover that Miss Havisham plans to break his heart.\n"
    },
    {
        "id": "415",
        "name": "Fat Camp",
        "season": 4,
        "episode": 15,
        "air_date": "2000-12-06",
        "created_at": "2021-07-14T19:50:48.000000Z",
        "updated_at": "2021-07-14T19:50:48.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 63,
        "description": "Cartman's family and friends have intervened and are forcing him to trim down. While Cartman's away, Kenny's star is on the rise when he gets his own reality TV show.\n"
    },
    {
        "id": "416",
        "name": "The Wacky Molestation Adventure",
        "season": 4,
        "episode": 16,
        "air_date": "2000-12-13",
        "created_at": "2021-07-14T19:50:48.000000Z",
        "updated_at": "2021-07-14T19:50:48.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Filmore Anderson"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Laura Tucker"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Louis Handler"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Mrs. Anderson"
            },
            {
                "name": "Mrs. Tweak"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Thomas Tucker"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Wendy Testaburger"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/488",
            "https://spapi.dev/api/locations/6"
        ],
        "apiID": 64,
        "description": "To get back at his parents for not letting him go to a concert, Kyle tells the police that his parents molested him. Soon, the whole town is free of adults and divided into two rival cities.\n"
    },
    {
        "id": "417",
        "name": "A Very Crappy Christmas",
        "season": 4,
        "episode": 17,
        "air_date": "2000-12-20",
        "created_at": "2021-07-14T19:50:48.000000Z",
        "updated_at": "2021-07-14T19:50:48.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Mr. Hankey"
            },
            {
                "name": "Amber Hankey"
            },
            {
                "name": "Autumn Hankey"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Cornwallis Hankey"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Marvin Marsh"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Simon Hankey"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Wendy Testaburger"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/75",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/320",
            "https://spapi.dev/api/locations/142",
            "https://spapi.dev/api/locations/585",
            "https://spapi.dev/api/locations/501"
        ],
        "apiID": 65,
        "description": "When Mr. Hankey skips Christmas, the boys find him living with his alcoholic wife and their three little nuggets. He tells them that no one is into Christmas anymore.\n"
    },
    {
        "id": "402",
        "name": "Cartman's Silly Hate Crime 2000",
        "season": 4,
        "episode": 2,
        "air_date": "2000-04-12",
        "created_at": "2021-07-14T19:50:46.000000Z",
        "updated_at": "2021-07-14T19:50:46.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 50,
        "description": "Cartman is pursued by the FBI for committing a hate crime and lands in juvenile hall.\n"
    },
    {
        "id": "403",
        "name": "Timmy 2000",
        "season": 4,
        "episode": 3,
        "air_date": "2000-04-19",
        "created_at": "2021-07-14T19:50:46.000000Z",
        "updated_at": "2021-07-14T19:50:46.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 51,
        "description": "When Timmy is diagnosed with Attention Deficit Disorder, it triggers a wave of prescription drug abuse at South Park Elementary.\n"
    },
    {
        "id": "404",
        "name": "Quintuplets 2000",
        "season": 4,
        "episode": 4,
        "air_date": "2000-04-26",
        "created_at": "2021-07-14T19:50:46.000000Z",
        "updated_at": "2021-07-14T19:50:46.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Marvin Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Kevin McCormick"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/400",
            "https://spapi.dev/api/locations/581",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/168",
            "https://spapi.dev/api/locations/190",
            "https://spapi.dev/api/locations/488",
            "https://spapi.dev/api/locations/8"
        ],
        "apiID": 52,
        "description": "8-year-old contorting quintuplets from Romania defect to the United States and seek shelter with Stan's family.\n"
    },
    {
        "id": "405",
        "name": "Cartman Joins NAMBLA",
        "season": 4,
        "episode": 5,
        "air_date": "2000-06-21",
        "created_at": "2021-07-14T19:50:47.000000Z",
        "updated_at": "2021-07-14T19:50:47.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Dr. Alphonse Mephesto"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Kevin Mephesto"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Louis Handler"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/488",
            "https://spapi.dev/api/locations/151",
            "https://spapi.dev/api/locations/155",
            "https://spapi.dev/api/locations/157",
            "https://spapi.dev/api/locations/342",
            "https://spapi.dev/api/locations/343"
        ],
        "apiID": 53,
        "description": "Cartman decides to seek friendship using the Internet, and finds an older man who is more than willing to be his friend...and more.\n"
    },
    {
        "id": "406",
        "name": "Cherokee Hair Tampons",
        "season": 4,
        "episode": 6,
        "air_date": "2000-06-28",
        "created_at": "2021-07-14T19:50:47.000000Z",
        "updated_at": "2021-07-14T19:50:47.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Laura Tucker"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Mrs. Tweak"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Fluffy"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Wendy Testaburger"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/71",
            "https://spapi.dev/api/locations/469",
            "https://spapi.dev/api/locations/86",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/307",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/344"
        ],
        "apiID": 54,
        "description": "Kyle needs a kidney transplant and Cartman is discovered to be the perfect donor. Cartman gladly offers his kidney to Kyle—for the price of $10 million dollars.\n   \n"
    },
    {
        "id": "407",
        "name": "Chef Goes Nanners",
        "season": 4,
        "episode": 7,
        "air_date": "2000-07-05",
        "created_at": "2021-07-14T19:50:47.000000Z",
        "updated_at": "2021-07-14T19:50:47.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 55,
        "description": "Chef's passionate protest declaring the South Park flag racist enflames the entire town.\n"
    },
    {
        "id": "408",
        "name": "Something You Can Do with Your Finger",
        "season": 4,
        "episode": 8,
        "air_date": "2000-07-12",
        "created_at": "2021-07-14T19:50:48.000000Z",
        "updated_at": "2021-07-14T19:50:48.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 56,
        "description": "\"Fingerbang\" is the newest boy band starring all the boys and it's also Cartman's latest scheme to make a million dollars.\n"
    },
    {
        "id": "409",
        "name": "Do the Handicapped Go to Hell?",
        "season": 4,
        "episode": 9,
        "air_date": "2000-07-19",
        "created_at": "2021-07-14T19:50:48.000000Z",
        "updated_at": "2021-07-14T19:50:48.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 57,
        "description": "The boys learn in Sunday school that they must confess their sins, but worry about Timmy since all he can say is his own name.\n"
    },
    {
        "id": "501",
        "name": "It Hits the Fan",
        "season": 5,
        "episode": 1,
        "air_date": "2001-06-20",
        "created_at": "2021-07-14T19:50:48.000000Z",
        "updated_at": "2021-07-14T19:50:48.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 66,
        "description": "The you-know-what hits the fan 162 times when the citizens of South Park tune in to hear the word \"shit\" on a popular TV show.\n"
    },
    {
        "id": "510",
        "name": "How to Eat with Your Butt",
        "season": 5,
        "episode": 10,
        "air_date": "2001-11-14",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 75,
        "description": "Cartman gets Kenny's school picture on every \"missing child\" milk carton in the country.\n"
    },
    {
        "id": "511",
        "name": "The Entity",
        "season": 5,
        "episode": 11,
        "air_date": "2001-11-21",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 76,
        "description": "Mr. Garrison gets fed up with long lines, delayed flights and the airline industry in general and invents his own transportation device.\n"
    },
    {
        "id": "512",
        "name": "Here Comes the Neighborhood",
        "season": 5,
        "episode": 12,
        "air_date": "2001-11-28",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 77,
        "description": "Token is tired of being the only rich kid in town, and succeeds in attracting several other wealthy families to South Park.\n"
    },
    {
        "id": "513",
        "name": "Kenny Dies",
        "season": 5,
        "episode": 13,
        "air_date": "2001-12-05",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Kevin McCormick"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Wendy Testaburger"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/150",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/193"
        ],
        "apiID": 78,
        "description": "In a very special episode of \"South Park,\" Cartman fights for Kenny's life when he speaks before Congress in favor of stem-cell research.\n"
    },
    {
        "id": "514",
        "name": "Butters' Very Own Episode",
        "season": 5,
        "episode": 14,
        "air_date": "2001-12-12",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Wendy Testaburger"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/368",
            "https://spapi.dev/api/locations/501",
            "https://spapi.dev/api/locations/209",
            "https://spapi.dev/api/locations/355",
            "https://spapi.dev/api/locations/326",
            "https://spapi.dev/api/locations/298"
        ],
        "apiID": 79,
        "description": "Alone and lost, Butters determinedly makes his way through porn theatres and gay bathhouses in an effort to get his dad back home in time to eat at Bennigan's for his parents' anniversary.\n"
    },
    {
        "id": "502",
        "name": "Cripple Fight",
        "season": 5,
        "episode": 2,
        "air_date": "2001-06-27",
        "created_at": "2021-07-14T19:50:48.000000Z",
        "updated_at": "2021-07-14T19:50:48.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 67,
        "description": "Big Gay Al returns to South Park as the new scout leader. When he is fired for being gay, the boys rally to his defense with the help of the new \"handi-capable\" kid, Jimmy.\n"
    },
    {
        "id": "503",
        "name": "Super Best Friends",
        "season": 5,
        "episode": 3,
        "air_date": "2001-07-04",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 68,
        "description": "Stan, Kyle, Cartman and Kenny discover David Blaine, magician and cult leader, performing in the streets of South Park. Stan finds out early that the Blainiacs are not as nice as everyone thinks. He tries to convince the other boys they have been brainwashed, but they have forsaken their friends and families. Teaming up with Jesus, Stan calls upon all the Super Best Friends to destroy the magician and thwart the mass suicide pact he has launched.\n"
    },
    {
        "id": "504",
        "name": "Scott Tenorman Must Die",
        "season": 5,
        "episode": 4,
        "air_date": "2001-07-11",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 69,
        "description": "After the other boys explain to Cartman that pubes do not count unless you grow your own, Cartman realizes he has been tricked by the school bully, Scott Tenorman.\n"
    },
    {
        "id": "505",
        "name": "Terrance and Phillip: Behind the Blow",
        "season": 5,
        "episode": 5,
        "air_date": "2001-07-18",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 70,
        "description": "When the boys discover Terrance and Phillip have called it quits, they will go to any lengths to reunite the duo and recruit them for South Park's Earth Day festivities.\n"
    },
    {
        "id": "506",
        "name": "Cartmanland",
        "season": 5,
        "episode": 6,
        "air_date": "2001-07-25",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 71,
        "description": "Cartman inherits a million dollars from his grandmother and fulfills his lifelong dream of owning his own amusement park: Cartmanland!\n"
    },
    {
        "id": "507",
        "name": "Proper Condom Use",
        "season": 5,
        "episode": 7,
        "air_date": "2001-08-01",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 72,
        "description": "In a time-honored tradition and right-of-passage, the boys are separated from the girls and schooled in the mysteries of sex by none other than Mr. Mackey.\n"
    },
    {
        "id": "508",
        "name": "Towelie",
        "season": 5,
        "episode": 8,
        "air_date": "2001-08-08",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 73,
        "description": "When the government steals their new Gamesphere, the boys will stop at nothing to get it back.\n"
    },
    {
        "id": "509",
        "name": "Osama bin Laden Has Farty Pants",
        "season": 5,
        "episode": 9,
        "air_date": "2001-11-07",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 74,
        "description": "The kids of South Park have raised money to send to the children of Afghanistan, but the Government believes the Afghani children's thank you gift is contaminated with Anthrax and the boys are forced to take it back to Afghanistan.\n"
    },
    {
        "id": "601",
        "name": "Jared Has Aides",
        "season": 6,
        "episode": 1,
        "air_date": "2002-03-06",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 80,
        "description": "As the country becomes obsessed with a popular program for losing weight, the boys see an opportunity to become sponsored by a major restaurant chain.\n"
    },
    {
        "id": "610",
        "name": "Bebe's Boobs Destroy Society",
        "season": 6,
        "episode": 10,
        "air_date": "2002-07-17",
        "created_at": "2021-07-14T19:50:51.000000Z",
        "updated_at": "2021-07-14T19:50:51.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Mrs. Stevens"
            },
            {
                "name": "Mrs. Testaburger"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Boy with red shirt and blue pants"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Jason White"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Red McArthur"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/286",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/499"
        ],
        "apiID": 89,
        "description": "Cartman gets kicked out of the gang when Bebe develops boobs and the boys lose their minds, threatening their friendships and society as we know it.\n"
    },
    {
        "id": "611",
        "name": "Child Abduction is Not Funny",
        "season": 6,
        "episode": 11,
        "air_date": "2002-07-24",
        "created_at": "2021-07-14T19:50:51.000000Z",
        "updated_at": "2021-07-14T19:50:51.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Betsy Donovan"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Mrs. Tweak"
            },
            {
                "name": "Millard Anderson"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Roger Donovan"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Filmore Anderson"
            },
            {
                "name": "Flora Larsen"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Laura Tucker"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Linda Black"
            },
            {
                "name": "Mrs. Mackey Senior"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Steve Black"
            },
            {
                "name": "Thomas Tucker"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Wendy Testaburger"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/214",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/228",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/143",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/513",
            "https://spapi.dev/api/locations/386"
        ],
        "apiID": 90,
        "description": "In an effort to protect their children from kidnappers, the parents hire the owner of City Wok Restaurant to build the Great Wall of South Park.\n"
    },
    {
        "id": "612",
        "name": "A Ladder to Heaven",
        "season": 6,
        "episode": 12,
        "air_date": "2002-11-06",
        "created_at": "2021-07-14T19:50:51.000000Z",
        "updated_at": "2021-07-14T19:50:51.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Millie Larsen"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/604",
            "https://spapi.dev/api/locations/575",
            "https://spapi.dev/api/locations/296",
            "https://spapi.dev/api/locations/298",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/488",
            "https://spapi.dev/api/locations/442",
            "https://spapi.dev/api/locations/193",
            "https://spapi.dev/api/locations/443"
        ],
        "apiID": 91,
        "description": "Kenny died with the winning ticket to a prize of endless candy in his pocket. The boys decide to build a ladder to Heaven where they expect to find him and get the ticket back.\n"
    },
    {
        "id": "613",
        "name": "The Return of the Fellowship of the Ring to the Two Towers",
        "season": 6,
        "episode": 13,
        "air_date": "2002-11-13",
        "created_at": "2021-07-14T19:50:51.000000Z",
        "updated_at": "2021-07-14T19:50:51.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 92,
        "description": "The boys embark upon a mythical quest as they set out to return their copy of the \"The Lord of the Rings\" movie to their local video store.\n"
    },
    {
        "id": "614",
        "name": "The Death Camp of Tolerance",
        "season": 6,
        "episode": 14,
        "air_date": "2002-11-20",
        "created_at": "2021-07-14T19:50:51.000000Z",
        "updated_at": "2021-07-14T19:50:51.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 93,
        "description": "The boys are sentenced to the Death Camp of Tolerance where they learn how to treat minorities. Mr. Slave and Lemmiwinks make their debut in this episode.\n"
    },
    {
        "id": "615",
        "name": "The Biggest Douche in the Universe",
        "season": 6,
        "episode": 15,
        "air_date": "2002-11-27",
        "created_at": "2021-07-14T19:50:51.000000Z",
        "updated_at": "2021-07-14T19:50:51.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 94,
        "description": "When a famous psychic fails to help him exorcise Kenny from his body, Cartman and Chef travel to the moors of Scotland, where Chef's mom tries a little of her voodoo magic on him.\n"
    },
    {
        "id": "616",
        "name": "My Future Self n' Me",
        "season": 6,
        "episode": 16,
        "air_date": "2002-12-04",
        "created_at": "2021-07-14T19:50:51.000000Z",
        "updated_at": "2021-07-14T19:50:51.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Marvin Marsh"
            },
            {
                "name": "Mrs. Stoley"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Shelly Marsh"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/111",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/501"
        ],
        "apiID": 95,
        "description": "When a 32-year-old man claiming to be Stan from the future shows up in South Park, young Stan is forced to come to terms with the loser he will become.\n"
    },
    {
        "id": "617",
        "name": "Red Sleigh Down",
        "season": 6,
        "episode": 17,
        "air_date": "2002-12-11",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 96,
        "description": "Cartman has to score one big \"nice\" to be eligible for Christmas presents this year. He recruits Santa, Mr. Hankey and Jesus in a desperate attempt to bring Christmas to the downtrodden citizens of Iraq.\n"
    },
    {
        "id": "602",
        "name": "Asspen",
        "season": 6,
        "episode": 2,
        "air_date": "2002-03-13",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 81,
        "description": "While the adults trapped at a time-share sales meeting, Stan is challenged by the best skier on the mountain.\n"
    },
    {
        "id": "603",
        "name": "Freak Strike",
        "season": 6,
        "episode": 3,
        "air_date": "2002-03-20",
        "created_at": "2021-07-14T19:50:49.000000Z",
        "updated_at": "2021-07-14T19:50:49.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Kevin Mephesto"
            },
            {
                "name": "Lisa Cartman"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/68",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/538",
            "https://spapi.dev/api/locations/501"
        ],
        "apiID": 82,
        "description": "When the boys learn that talk shows offer prizes to people who are grossly disfigured they can't sign Butters up fast enough.\n"
    },
    {
        "id": "604",
        "name": "Fun with Veal",
        "season": 6,
        "episode": 4,
        "air_date": "2002-03-27",
        "created_at": "2021-07-14T19:50:50.000000Z",
        "updated_at": "2021-07-14T19:50:50.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Thomas Tucker"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Laura Tucker"
            },
            {
                "name": "Linda Stotch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/487"
        ],
        "apiID": 83,
        "description": "Stan is appalled when he realizes the veal he's been eating is, in fact, the meat from little baby calves.\n"
    },
    {
        "id": "605",
        "name": "The New Terrance and Phillip Movie Trailer",
        "season": 6,
        "episode": 5,
        "air_date": "2002-04-03",
        "created_at": "2021-07-14T19:50:50.000000Z",
        "updated_at": "2021-07-14T19:50:50.000000Z",
        "characters": [
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Terrance and Phillip"
            },
            {
                "name": "Terrance Mephesto"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/558",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/458",
            "https://spapi.dev/api/locations/563",
            "https://spapi.dev/api/locations/568",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/538",
            "https://spapi.dev/api/locations/143",
            "https://spapi.dev/api/locations/338",
            "https://spapi.dev/api/locations/501"
        ],
        "apiID": 84,
        "description": "All the kids in South Park are glued to the TV, wild with anticipation to see the first trailer for the latest Terrance and Phillip movie.\n"
    },
    {
        "id": "606",
        "name": "Professor Chaos",
        "season": 6,
        "episode": 6,
        "air_date": "2002-04-10",
        "created_at": "2021-07-14T19:50:50.000000Z",
        "updated_at": "2021-07-14T19:50:50.000000Z",
        "characters": [
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Boy with red shirt and blue pants"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Damien Thorn"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Filmore Anderson"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Jason White"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Louis Handler"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Officer Barbrady"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/209",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/60",
            "https://spapi.dev/api/locations/155",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/7",
            "https://spapi.dev/api/locations/501"
        ],
        "apiID": 85,
        "description": "The boys fire Butters as their new friend. Devastation over his rejection unleashes Butters' dark side and Professor Chaos is born.\n"
    },
    {
        "id": "607",
        "name": "The Simpsons Already Did It",
        "season": 6,
        "episode": 7,
        "air_date": "2002-06-26",
        "created_at": "2021-07-14T19:50:50.000000Z",
        "updated_at": "2021-07-14T19:50:50.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Millard Anderson"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/458",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/501",
            "https://spapi.dev/api/locations/494"
        ],
        "apiID": 86,
        "description": "Professor Chaos is frustrated when he realizes all of his diabolical plans to wreak havoc on South Park have already been done by \"The Simpsons.\"\n"
    },
    {
        "id": "608",
        "name": "Red Hot Catholic Love",
        "season": 6,
        "episode": 8,
        "air_date": "2002-07-03",
        "created_at": "2021-07-14T19:50:50.000000Z",
        "updated_at": "2021-07-14T19:50:50.000000Z",
        "characters": [
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Betsy Donovan"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Roger Donovan"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Thomas Tucker"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Laura Tucker"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Linda Black"
            },
            {
                "name": "Marvin Marsh"
            },
            {
                "name": "Mrs. Tweak"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Steve Black"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Token Black"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/120",
            "https://spapi.dev/api/locations/150",
            "https://spapi.dev/api/locations/622",
            "https://spapi.dev/api/locations/589"
        ],
        "apiID": 87,
        "description": "A sexual abuse scandal involving priests hits South Park and is taken all the way to the Vatican.\n"
    },
    {
        "id": "609",
        "name": "Free Hat",
        "season": 6,
        "episode": 9,
        "air_date": "2002-07-10",
        "created_at": "2021-07-14T19:50:51.000000Z",
        "updated_at": "2021-07-14T19:50:51.000000Z",
        "characters": [
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Jason White"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Millard Anderson"
            },
            {
                "name": "Mrs. Anderson"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/214",
            "https://spapi.dev/api/locations/55",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/513"
        ],
        "apiID": 88,
        "description": "When the boys find out that their favorite movies are being enhanced, re-released and ruined in the process, they form a club to \"Save Films from their Directors.\"\n"
    },
    {
        "id": "701",
        "name": "Cancelled",
        "season": 7,
        "episode": 1,
        "air_date": "2003-03-19",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 97,
        "description": "Stan, Cartman, Kyle and Kenny find out that planet Earth is just one big intergalactic reality show and it's about to be cancelled.\n"
    },
    {
        "id": "710",
        "name": "Grey Dawn",
        "season": 7,
        "episode": 10,
        "air_date": "2003-11-05",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 106,
        "description": "With South Park's senior citizens behind the wheel, more than a few farmer's markets have been mowed down. Unwilling to surrender their driver's licenses, the elderly fight back.\n"
    },
    {
        "id": "711",
        "name": "Casa Bonita",
        "season": 7,
        "episode": 11,
        "air_date": "2003-11-12",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 107,
        "description": "Kyle chooses Stan, Kenny and Butters to celebrate his birthday at Casa Bonita. When Cartman finds out he's not invited, he arranges for Butters to conveniently go \"missing.\"\n"
    },
    {
        "id": "712",
        "name": "All About Mormons",
        "season": 7,
        "episode": 12,
        "air_date": "2003-11-19",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 108,
        "description": "A Mormon kid moves to South Park and it's up to Stan to kick his ass. But when Stan and his dad meet their new Mormon neighbors, they become fascinated with how genuinely nice they are.\n"
    },
    {
        "id": "713",
        "name": "Butt Out",
        "season": 7,
        "episode": 13,
        "air_date": "2003-12-03",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 109,
        "description": "After singing and dancing representatives from an anti-smoking campaign rap about the dangers of smoking, the kids at South Park Elementary realize how cool it really is and take up the habit.\n"
    },
    {
        "id": "714",
        "name": "Raisins",
        "season": 7,
        "episode": 14,
        "air_date": "2003-12-10",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 110,
        "description": "After Wendy breaks up with Stan the boys take him to \"Raisins,\" a local restaurant known for its great chicken wings and hot girls.\n"
    },
    {
        "id": "715",
        "name": "It's Christmas in Canada",
        "season": 7,
        "episode": 15,
        "air_date": "2003-12-17",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 111,
        "description": "The town decides to cancel Christmas and take up a collection when Ike's Canadian birth parents show up unexpectedly and want their baby back.\n"
    },
    {
        "id": "702",
        "name": "Krazy Kripples",
        "season": 7,
        "episode": 2,
        "air_date": "2003-03-26",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 98,
        "description": "Jimmy and Timmy pull together a group of people like themselves and call their new club the \"Crips.\"\n"
    },
    {
        "id": "703",
        "name": "Toilet Paper",
        "season": 7,
        "episode": 3,
        "air_date": "2003-04-02",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 99,
        "description": "Cartman convinces the boys to \"toilet paper\" their teacher's house, but Kyle is overwhelmed with guilt.\n"
    },
    {
        "id": "704",
        "name": "I'm a Little Bit Country",
        "season": 7,
        "episode": 4,
        "air_date": "2003-04-09",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 100,
        "description": "The boys join some anti-war protesters because it is a free pass out of school for the day.\n"
    },
    {
        "id": "705",
        "name": "Fat Butt and Pancake Head",
        "season": 7,
        "episode": 5,
        "air_date": "2003-04-16",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 101,
        "description": "One of Cartman's body parts becomes famous overnight and rivals the popularity of another superstar.\n"
    },
    {
        "id": "706",
        "name": "Lil' Crime Stoppers",
        "season": 7,
        "episode": 6,
        "air_date": "2003-04-23",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 102,
        "description": "After they return a missing doll to a little girl, the police department recognizes the boys' efforts and officially names them \"junior deputies.\"\n"
    },
    {
        "id": "707",
        "name": "Red Man's Greed",
        "season": 7,
        "episode": 7,
        "air_date": "2003-04-30",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 103,
        "description": "The citizens of South Park are being forced off their land to make way for a new super highway after owners of the Three Feathers Indian Casino acquire the town.\n"
    },
    {
        "id": "708",
        "name": "South Park is Gay!",
        "season": 7,
        "episode": 8,
        "air_date": "2003-10-22",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Mrs. Tweak"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Ryan Valmer"
            },
            {
                "name": "Sarah Valmer"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Thomas Tucker"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Betsy Donovan"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Laura Tucker"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Wendy Testaburger"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/2",
            "https://spapi.dev/api/locations/458",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/159"
        ],
        "apiID": 104,
        "description": ""
    },
    {
        "id": "709",
        "name": "Christian Rock Hard",
        "season": 7,
        "episode": 9,
        "air_date": "2003-10-29",
        "created_at": "2021-07-14T19:50:52.000000Z",
        "updated_at": "2021-07-14T19:50:52.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Stuart McCormick"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/451",
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/77",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/127",
            "https://spapi.dev/api/locations/501"
        ],
        "apiID": 105,
        "description": "When the other boys kick Cartman out of their band, he pulls his own group together to make music for Jesus.\n"
    },
    {
        "id": "801",
        "name": "Good Times with Weapons",
        "season": 8,
        "episode": 1,
        "air_date": "2004-03-17",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 112,
        "description": "The boys are transformed into Japanese Warriors after they trick a vendor and buy martial arts weapons at a local flea market.\n"
    },
    {
        "id": "810",
        "name": "Pre-School",
        "season": 8,
        "episode": 10,
        "air_date": "2004-11-10",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 121,
        "description": "The kid who took the fall for the boys five years ago is getting out of Juvie, and his first order of business is revenge.[2]\n"
    },
    {
        "id": "811",
        "name": "Quest for Ratings",
        "season": 8,
        "episode": 11,
        "air_date": "2004-11-17",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 122,
        "description": "The boys of South Park produce their own morning news show on the school's closed-circuit television station and are immediately caught up in an intense competition for ratings.\n"
    },
    {
        "id": "812",
        "name": "Stupid Spoiled Whore Video Playset",
        "season": 8,
        "episode": 12,
        "air_date": "2004-12-01",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 123,
        "description": "Disturbed by the corruptive influence Paris Hilton has on all little girls in South Park, one of the town's favorite citizens challenges her to a \"whore-off.\"\n"
    },
    {
        "id": "813",
        "name": "Cartman's Incredible Gift",
        "season": 8,
        "episode": 13,
        "air_date": "2004-12-08",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 124,
        "description": "After sustaining a severe head injury, Cartman appears to have the power to see into the future. South Park detectives are quick to enlist his help in cracking unsolved murder cases.\n"
    },
    {
        "id": "814",
        "name": "Woodland Critter Christmas",
        "season": 8,
        "episode": 14,
        "air_date": "2004-12-15",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 125,
        "description": "Stan agrees to help a group of adorable Woodland Critters build a manger in anticipation of the birth of their Lord and Savior, only to find out that they serve Satan.\n"
    },
    {
        "id": "802",
        "name": "Up the Down Steroid",
        "season": 8,
        "episode": 2,
        "air_date": "2004-03-24",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 113,
        "description": "Jimmy is in training for the upcoming Special Olympics and he's determined to win at any cost.\n"
    },
    {
        "id": "803",
        "name": "The Passion of the Jew",
        "season": 8,
        "episode": 3,
        "air_date": "2004-03-31",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 114,
        "description": "Kyle finally sees the blockbuster movie \"The Passion of the Christ\" and admits that Cartman has been right about the Jewish people all along.\n"
    },
    {
        "id": "804",
        "name": "You Got F'd in the A",
        "season": 8,
        "episode": 4,
        "air_date": "2004-04-07",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 115,
        "description": "Stan just got served, and now it's up to him to put together a team of South Park's best dancers to compete against a troupe from Orange County.\n"
    },
    {
        "id": "805",
        "name": "AWESOM-O",
        "season": 8,
        "episode": 5,
        "air_date": "2004-04-14",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 116,
        "description": "Cartman plans to learn all of Butters' innermost secrets and then use them against him, by pretending to be Butters' new best friend, a robot named AWESOM-O 4000.\n"
    },
    {
        "id": "806",
        "name": "The Jeffersons",
        "season": 8,
        "episode": 6,
        "air_date": "2004-04-21",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 117,
        "description": "The children of South Park are attracted to \"Mr. Jefferson,\" the new neighbor in town, and Cartman goes out of his way to get \"Mr. Jefferson\" to love him best.\n"
    },
    {
        "id": "807",
        "name": "Goobacks",
        "season": 8,
        "episode": 7,
        "air_date": "2004-04-28",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Herbert Garrison Sr."
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Kevin McCormick"
            },
            {
                "name": "Kevin Mephesto"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Michael"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Mrs. Tweak"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Peter"
            },
            {
                "name": "Peter's wife"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Thomas Tucker"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Wendy Testaburger"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/101",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/120",
            "https://spapi.dev/api/locations/149",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/385"
        ],
        "apiID": 118,
        "description": "Humans from the year 4035 are traveling to South Park through a recently opened time portal and are looking for work.\n"
    },
    {
        "id": "808",
        "name": "Douche and Turd",
        "season": 8,
        "episode": 8,
        "air_date": "2004-10-27",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 119,
        "description": "A PETA protest against the use of a cow as South Park Elementary's mascot forces the student body to choose a new one.\n"
    },
    {
        "id": "809",
        "name": "Something Wall-Mart This Way Comes",
        "season": 8,
        "episode": 9,
        "air_date": "2004-11-03",
        "created_at": "2021-07-14T19:50:53.000000Z",
        "updated_at": "2021-07-14T19:50:53.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 120,
        "description": "In order to save South Park, Stan and Kyle have to find a way to destroy the ever-expanding Wall-Mart superstore while keeping Cartman from stabbing them in the back.\n"
    },
    {
        "id": "901",
        "name": "Mr. Garrison's Fancy New Vagina",
        "season": 9,
        "episode": 1,
        "air_date": "2005-03-09",
        "created_at": "2021-07-14T19:50:54.000000Z",
        "updated_at": "2021-07-14T19:50:54.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 126,
        "description": "As Mr. Garrison enjoys his new womanly attributes after his sex change, the rest of the town gets in touch with their inner feelings too.\n"
    },
    {
        "id": "910",
        "name": "Follow That Egg!",
        "season": 9,
        "episode": 10,
        "air_date": "2005-11-02",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 135,
        "description": ""
    },
    {
        "id": "911",
        "name": "Ginger Kids",
        "season": 9,
        "episode": 11,
        "air_date": "2005-11-09",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 136,
        "description": "After the sudden on-set of the disease Gingervitis, Cartman rallies all other ginger kids to rise up and assume their role as the master race.\n"
    },
    {
        "id": "912",
        "name": "Trapped in the Closet",
        "season": 9,
        "episode": 12,
        "air_date": "2005-11-16",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 137,
        "description": "Scientologists converge on Stan's house after he is identified as the reincarnation of L. Ron Hubbard. One A-lister locks himself in the closet and refuses to come out after Stan criticizes his \"talent.\"\n"
    },
    {
        "id": "913",
        "name": "Free Willzyx",
        "season": 9,
        "episode": 13,
        "air_date": "2005-11-30",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 138,
        "description": "The boys try to rescue their new friend Willzyx, a talking space whale, from the Denver Sea Park and with the help of MASA (Mexican Aeronautica y Spacia Administracion) get him home to the moon for $200.\n"
    },
    {
        "id": "914",
        "name": "Bloody Mary",
        "season": 9,
        "episode": 14,
        "air_date": "2005-12-07",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 139,
        "description": "Stan is embarrassed when his dad gets pulled over for drunk driving. Randy believes that only one thing can save him from his \"disease,\" a bleeding statue of the Virgin Mary in the next town.\n"
    },
    {
        "id": "902",
        "name": "Die Hippie, Die",
        "season": 9,
        "episode": 2,
        "air_date": "2005-03-16",
        "created_at": "2021-07-14T19:50:54.000000Z",
        "updated_at": "2021-07-14T19:50:54.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 127,
        "description": "When hippie drum circles start popping up in people's attics and backyards the citizens of South Park have no choice but to turn to Eric Cartman for help.\n"
    },
    {
        "id": "903",
        "name": "Wing",
        "season": 9,
        "episode": 3,
        "air_date": "2005-03-23",
        "created_at": "2021-07-14T19:50:54.000000Z",
        "updated_at": "2021-07-14T19:50:54.000000Z",
        "characters": [],
        "locations": [],
        "apiID": 128,
        "description": "The boys set up a talent agency and pool all their resources and impress their first client only to have another agency steal him away.\n"
    },
    {
        "id": "904",
        "name": "Best Friends Forever",
        "season": 9,
        "episode": 4,
        "air_date": "2005-03-30",
        "created_at": "2021-07-14T19:50:54.000000Z",
        "updated_at": "2021-07-14T19:50:54.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Michael"
            },
            {
                "name": "Mrs. Garrison Senior"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Satan"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Boy with red shirt and blue pants"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Henrietta Biggle"
            },
            {
                "name": "Karen McCormick"
            },
            {
                "name": "Kevin McCormick"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Louis Handler"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Peter"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Shelly Marsh"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/214",
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/57",
            "https://spapi.dev/api/locations/604",
            "https://spapi.dev/api/locations/606",
            "https://spapi.dev/api/locations/299",
            "https://spapi.dev/api/locations/488",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/7",
            "https://spapi.dev/api/locations/190"
        ],
        "apiID": 129,
        "description": "Kenny is the only one of his friends to get the newest, coolest portable gaming device and Cartman cannot deal with it. Will they remain best friends forever?\n"
    },
    {
        "id": "905",
        "name": "The Losing Edge",
        "season": 9,
        "episode": 5,
        "air_date": "2005-04-06",
        "created_at": "2021-07-14T19:50:54.000000Z",
        "updated_at": "2021-07-14T19:50:54.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Kyle Schwartz"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Richard Tweak"
            },
            {
                "name": "Roger Donovan"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Betsy Donovan"
            },
            {
                "name": "Carol McCormick"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Laura Tucker"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Linda Black"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Mrs. Tweak"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Ryan Valmer"
            },
            {
                "name": "Sarah Valmer"
            },
            {
                "name": "Steve Black"
            },
            {
                "name": "Stuart McCormick"
            },
            {
                "name": "Thomas Tucker"
            },
            {
                "name": "Tweek Tweak"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/528",
            "https://spapi.dev/api/locations/68",
            "https://spapi.dev/api/locations/532",
            "https://spapi.dev/api/locations/533",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/386"
        ],
        "apiID": 130,
        "description": "The kids desperately want an end to the boring baseball season. The problem is, they keep winning.\n"
    },
    {
        "id": "906",
        "name": "The Death of Eric Cartman",
        "season": 9,
        "episode": 6,
        "air_date": "2005-04-13",
        "created_at": "2021-07-14T19:50:54.000000Z",
        "updated_at": "2021-07-14T19:50:54.000000Z",
        "characters": [
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Red McArthur"
            },
            {
                "name": "Scott Tenorman"
            },
            {
                "name": "Timmy Burch"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/453",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/136",
            "https://spapi.dev/api/locations/7",
            "https://spapi.dev/api/locations/158",
            "https://spapi.dev/api/locations/501"
        ],
        "apiID": 131,
        "description": "Cartman is sure he's dead and Butters is sure that Eric Cartman's ghost is haunting him. Together they attempt to make amends to all the people Cartman has wronged over the years.\n"
    },
    {
        "id": "907",
        "name": "Erection Day",
        "season": 9,
        "episode": 7,
        "air_date": "2005-04-20",
        "created_at": "2021-07-14T19:50:54.000000Z",
        "updated_at": "2021-07-14T19:50:54.000000Z",
        "characters": [
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Ike Broflovski"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Clark Malkinson"
            },
            {
                "name": "Laura Tucker"
            },
            {
                "name": "Michael"
            },
            {
                "name": "Peter"
            },
            {
                "name": "Mrs. Garrison Senior"
            },
            {
                "name": "Liane Cartman"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Ryan Valmer"
            },
            {
                "name": "Sarah Valmer"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Flora Larsen"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Henrietta Biggle"
            },
            {
                "name": "Jason White"
            },
            {
                "name": "Jenny Harrison"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Louis Handler"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Mr. Harrison"
            },
            {
                "name": "Mrs. Stevens"
            },
            {
                "name": "Mrs. Testaburger"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Roger Donovan"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Wendy Testaburger"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/218",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/501",
            "https://spapi.dev/api/locations/514"
        ],
        "apiID": 132,
        "description": "The South Park Elementary School Talent Show is coming up and Jimmy can't wait to perform his comedy routine, but first he must find a way to gain control of his raging hormones.\n"
    },
    {
        "id": "908",
        "name": "Two Days Before the Day After Tomorrow",
        "season": 9,
        "episode": 8,
        "air_date": "2005-10-19",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Gerald Broflovski"
            },
            {
                "name": "Mrs. Garrison Senior"
            },
            {
                "name": "Jimbo Kern"
            },
            {
                "name": "Mr. Mackey Senior"
            },
            {
                "name": "Officer Barbrady"
            },
            {
                "name": "Randy Marsh"
            },
            {
                "name": "Sharon Marsh"
            },
            {
                "name": "Sheila Broflovski"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Thomas Tucker"
            },
            {
                "name": "Annie Knitts"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Boy with red shirt and blue pants"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Citizen with brown hair and blue suit"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "DogPoo Petuski"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Louis Handler"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Shelly Marsh"
            },
            {
                "name": "Terrance Mephesto"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Jerome \"Chef\" McElroy"
            },
            {
                "name": "Laura Tucker"
            },
            {
                "name": "Linda Black"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Marvin Marsh"
            },
            {
                "name": "Mrs. Stevens"
            },
            {
                "name": "Mrs. Tweak"
            },
            {
                "name": "Steve Black"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/522",
            "https://spapi.dev/api/locations/50",
            "https://spapi.dev/api/locations/55",
            "https://spapi.dev/api/locations/260",
            "https://spapi.dev/api/locations/418",
            "https://spapi.dev/api/locations/487",
            "https://spapi.dev/api/locations/120",
            "https://spapi.dev/api/locations/6"
        ],
        "apiID": 133,
        "description": "A Global Warming State of Emergency is declared in South Park as the world's largest beaver dam breaks and floods the adjacent town of Beaverton.\n"
    },
    {
        "id": "909",
        "name": "Marjorine",
        "season": 9,
        "episode": 9,
        "air_date": "2005-10-26",
        "created_at": "2021-07-14T19:50:55.000000Z",
        "updated_at": "2021-07-14T19:50:55.000000Z",
        "characters": [
            {
                "name": "Butters Stotch"
            },
            {
                "name": "Bebe Stevens"
            },
            {
                "name": "Bradley Biggle"
            },
            {
                "name": "Clyde Donovan"
            },
            {
                "name": "Craig Tucker"
            },
            {
                "name": "Eric Cartman"
            },
            {
                "name": "Heidi Turner"
            },
            {
                "name": "Jason White"
            },
            {
                "name": "Kevin Stoley"
            },
            {
                "name": "Kyle Broflovski"
            },
            {
                "name": "Fred Cartman"
            },
            {
                "name": "Stan Marsh"
            },
            {
                "name": "Wendy Testaburger"
            },
            {
                "name": "Mrs. Garrison Senior"
            },
            {
                "name": "Linda Stotch"
            },
            {
                "name": "Nancy Turner"
            },
            {
                "name": "Stephen Stotch"
            },
            {
                "name": "Thomas Turner"
            },
            {
                "name": "Boy with red shirt and blue pants"
            },
            {
                "name": "Esther"
            },
            {
                "name": "Jimmy Valmer"
            },
            {
                "name": "Kenny McCormick"
            },
            {
                "name": "Millie Larsen"
            },
            {
                "name": "Timmy Burch"
            },
            {
                "name": "Token Black"
            },
            {
                "name": "Tweek Tweak"
            }
        ],
        "locations": [
            "https://spapi.dev/api/locations/3",
            "https://spapi.dev/api/locations/91",
            "https://spapi.dev/api/locations/6",
            "https://spapi.dev/api/locations/501",
            "https://spapi.dev/api/locations/512"
        ],
        "apiID": 134,
        "description": "Butters must fake his death, dress up as a girl and infiltrate a slumber party, in order to retrieve a future telling device Cartman is convinced the girls have.\n"
    }
]


export const episodes: Episode[] = data.map(ep => {
    return {
      name: ep.name,
      releaseDate: ep.air_date,
      episode: ep.episode,
      season: ep.season,
      thumbnail: '/images/' + ep.id + '.png',
      id: ep.id,
      description: ep.description,
      characters: ep.characters
    }
  }).sort((ep1, ep2) => +ep1.id - +ep2.id)