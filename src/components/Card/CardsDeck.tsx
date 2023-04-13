import { Card } from 'sw-durak-game-api';
import { BackSideCard } from './BackSideCard';
import { CardComponent } from './Card';

export function CardsDeck({ trumpCard, deckCardsLeftAmount }: { trumpCard: Card, deckCardsLeftAmount: number }) {
  return (<div className='cards-deck'>
    {deckCardsLeftAmount
      ? deckCardsLeftAmount > 1
        ? <>
          <BackSideCard>{deckCardsLeftAmount}</BackSideCard>
          <CardComponent card={trumpCard} />
        </>
        : undefined
      : undefined
    }
  </div>);
}

