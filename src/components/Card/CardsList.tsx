import { Card, DeepReadonly } from 'sw-durak-game-api';
import { BackSideCard, BackSideCardSymbol } from './BackSideCard';
import { CardComponent } from './Card';

export function CardsList({ cards, onCardClick }: { cards: DeepReadonly<(Card | BackSideCardSymbol)[]>, onCardClick?: (card: Card) => void }) {
  return (<div className='cards-list'>
    {cards.map((card, index) => card === BackSideCardSymbol
      ? <BackSideCard key={index} />
      : <CardComponent key={index} card={card} onClick={onCardClick && (() => onCardClick(card))} />
    )}
  </div>);
}
