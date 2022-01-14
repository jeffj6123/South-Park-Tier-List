const axios = require('axios');
const jsdom = require("jsdom")
const { JSDOM } = jsdom;
const Fs = require('fs')
const Path = require('path')

const fileExists = (path) => {
  try {
    Fs.readFileSync(path);
    return true
  } catch (e) {
    return false
  }
}

let get_list = () => {
  const tier = Fs.readFileSync(Path.join(__dirname, 'all_episodes.json'), 'utf8');
  const list = JSON.parse(tier);
  console.log(list.length)
  const t = list.map(ep => {
    return {
      id: (ep.data.season.toString() + (ep.data.episode < 10 ? '0' : '') + ep.data.episode.toString()),
      name: ep.data.name.split(" ").join("_"),
      season: ep.data.season
    }
  }).reduce( (previous, current) => {
      previous[current.season] = 1 + (previous[current.season] || 0);

      return previous;
  }, {})

  console.log(t);
}

get_list();

/*
At this point I noticed we are missing roughly 70 episodes.

*/

// new Set().entries()