import React from 'react';
import './App.scss';
import Header from './components/header';
import Row, { Episode } from './components/row';
import { data } from "./all_episodes";
import { ranks, rankingMap } from './ranks';

const colors = ['#EE324B', '#4D7DBD', '#00B8C4' ] //, '#FFE11D'];

function App() {
  const episodes: Episode[] = data.map(ep => {
    return {
      name: ep.name,
      releaseDate: ep.air_date,
      episode: ep.episode,
      season: ep.season,
      backgroundColor: colors[Math.round(Math.random() * colors.length)],
      thumbnail: 'images/' + ep.season.toString() +(ep.episode < 10 ? '0' : '') + ep.episode.toString() + '.png'
    }
  })

  console.log(episodes.sort((a,b) => a.name.length - b.name.length ))
  
  const eposidesMap: any = {};
  
  episodes.forEach(ep => {
    const id = ep.season.toString() +(ep.episode < 10 ? '0' : '') + ep.episode.toString()
    let tier = "unranked"
    if(id in rankingMap) {
      tier = rankingMap[id].tier;
    }
    if(! (tier in eposidesMap)) {
        eposidesMap[tier] = [];
      }
      eposidesMap[tier].push(ep);

  })

  return (
    <div>
      <Header></Header>
      <div className="App">

      <Row episodes={eposidesMap['s']} season={'S'}></Row>
      <Row episodes={eposidesMap['a']} season={'A'}></Row>
      <Row episodes={eposidesMap['b']} season={'B'}></Row>
      <Row episodes={eposidesMap['c']} season={'C'}></Row>
      <Row episodes={eposidesMap['d']} season={'D'}></Row>
      <Row episodes={eposidesMap['f']} season={'F'}></Row>
      <Row episodes={eposidesMap['unranked']} season={'U'}></Row>
      </div>
    </div>
  );
}

export default App;
