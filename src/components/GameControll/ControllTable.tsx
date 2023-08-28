import { DurakGameApi, DeepReadonly } from "sw-durak-game-api";
import { CardComponent } from "../Card/Card";

type Props = DeepReadonly<Pick<DurakGameApi.IState.Personal, 'isAttack' | 'table'> & {
  setSelected(selected?: number): void;
  selected?: number;
}>;

export function ControllTable(props: Props) {
  const {table, isAttack, selected} = props;
  const {defenceCards} = table;

  return <div className="game-controll-table">
    {table.attackCards.map((attackCard, i) => {
      const defenceCard = defenceCards[i];

      const className = (selected === i
        ? 'controll-table-item-selected'
        : 'controll-table-item')
        + (defenceCard ? ' controll-table-item-defence' : '');

      return <div
        onClick={() => {
          if (isAttack || defenceCard) {
            return;
          }
          if (selected === i) {
            props.setSelected();
          } else {
            props.setSelected(i);
          }
        }}
        key={i}
        className={className}
      >
        <CardComponent card={attackCard} />
        {defenceCard && <div className="controll-table-defence-card"><CardComponent card={defenceCard} /></div>}
      </div>;
    })}
  </div>;
}
