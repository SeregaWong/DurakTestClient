import { useState } from "react";
import { DurakGameApi, DeepReadonly, DurakPlayerApi } from "sw-durak-game-api";
import { BackSideCard, BackSideCardSymbol } from "../Card/BackSideCard";
import { CardsDeck } from "../Card/CardsDeck";
import { CardsList } from "../Card/CardsList";
import { ControllTable } from "./ControllTable";

export function GameControll({ playerState, update }: { playerState: DeepReadonly<DurakGameApi.IState.Personal>; update: DurakPlayerApi['update'] }) {

  const [selected, setSelected] = useState<number>();

  return (<div className="game-controll">
      {playerState.isAttack && playerState.wasTaken && <p className="take-info">take</p>}
    <div className="game-controll-enemy">
      <CardsList cards={new Array(playerState.enemyCardsAmount).fill(BackSideCardSymbol)} />
    </div>

    <CardsDeck
      deckCardsLeftAmount={playerState.deckCardsLeftAmount}
      trumpCard={playerState.trumpCard}
    ></CardsDeck>    

    <ControllTable
      isAttack={playerState.isAttack}
      setSelected={setSelected}
      table={playerState.table}
      selected={selected}
    />

    <div className="game-controll-out">
      {playerState.outGameCards
        ? <BackSideCard>{playerState.outGameCards.length}</BackSideCard>
        : undefined
      }
    </div>

    <div className="game-controll-cards">
      <CardsList
        cards={playerState.myCards}
        onCardClick={card => {
          if (playerState.isAttack || selected === undefined) {
            update({
              type: 'attack',
              card,
            });
            setSelected(undefined);
          } else {
            update({
              type: 'defence',
              card,
              place: selected,
            });
            setSelected(undefined);
          }
        }}
      />
    </div>

    {playerState.isAttack
      ? <button
          className="game-controll-done"
          onClick={() => update({type: 'done'})}
        >done</button>
      : <button
          className="game-controll-take"
          onClick={() => update({type: 'take'})}
        >take</button>
    }

  </div>);
}
