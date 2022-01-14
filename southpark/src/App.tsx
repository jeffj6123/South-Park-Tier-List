import React from 'react';
import './App.scss';
import Header from './components/header';
import Row, { Episode } from './components/row';
import { data } from "./all_episodes";

const colors = ['#EE324B', '#4D7DBD', '#00B8C4', '#FFE11D'];

function App() {
  const episodes: Episode[] = data.map(ep => {
    return {
      name: ep.data.name,
      releaseDate: ep.data.air_date,
      episode: ep.data.episode,
      season: ep.data.season,
      backgroundColor: colors[Math.round(Math.random() * colors.length)]
    }
  })

  console.log(episodes.sort((a,b) => a.name.length - b.name.length ))
  
  const eposidesMap: any = {};

  episodes.forEach(ep => {
    const roll = Math.round(Math.random() * 5);
    if(! (roll in eposidesMap)) {
      eposidesMap[roll] = [];
    }
    eposidesMap[roll].push(ep);

  })

  return (
    <div>
      <Header></Header>
      <div className="App">

      <Row episodes={eposidesMap[0]} season={'S'}></Row>
      <Row episodes={eposidesMap[1]} season={'A'}></Row>
      <Row episodes={eposidesMap[2]} season={'B'}></Row>
      <Row episodes={eposidesMap[3]} season={'C'}></Row>
      <Row episodes={eposidesMap[4]} season={'D'}></Row>
      </div>
    </div>
  );
}

export default App;
