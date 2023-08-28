import { useState } from "react";
import { DurakGameApi, DeepReadonly } from "sw-durak-game-api";
import { DurakGameState } from "../DurakGameState/DurakGameState";
import { GameControll } from "./GameControll/GameControll";
import { GamePlayer } from "./GameControll/GamePlayer";


export function TestGame() {
  const [player1State, setPlayer1State] = useState<DeepReadonly<DurakGameApi.IState.Personal>>();

  const [player1] = useState(() => new GamePlayer((state) => {
    setPlayer1State(state);
  }));

  const [player2State, setPlayer2State] = useState<DeepReadonly<DurakGameApi.IState.Personal>>();

  const [player2] = useState(() => new GamePlayer((state) => {
    setPlayer2State(state);
  }));

  const [gameState] = useState(() => new DurakGameState([player1, player2]));

  return (<div>
    {player1State ? <GameControll playerState={player1State} update={action => player1.update(action)} /> : undefined}
    {player2State ? <GameControll playerState={player2State} update={action => player2.update(action)} /> : undefined}
    <button
      className="restart-btn"
      onClick={() => {
        gameState.restart();
      }}
    >restart</button>
    <button
      className="restart-btn"
      onClick={() => {
        try {
          gameState.controlls.toPreviousState();
        } catch (err) {
          console.log(err);
        }
      }}
    >{'<--'}</button>
    <button
      className="restart-btn"
      onClick={() => {
        gameState.controlls.toNextState();
      }}
    >{'-->'}</button>
  </div>);
}
