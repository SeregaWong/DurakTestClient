import { Card } from "sw-durak-game-api";
import { CardComponent } from "./Card/Card";

export function PlayerCards({ cards }: { cards: Card[] }) {

	return (<div>
		{cards.map(card => (<span>
			<CardComponent card={card} />
		</span>))}
	</div>);
}
