import React, { useEffect, useState } from 'react';
import { Game } from '@bghoard/api-interfaces';
// import { BrowserRouter, Route } from 'react-router-dom';

export const App = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then((r) => r.json())
      .then(setGames);
  }, []);

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Board Game Hoard: Review</h1>
      </div>
      <div>{JSON.stringify(games)}</div>
    </>
  );
};
