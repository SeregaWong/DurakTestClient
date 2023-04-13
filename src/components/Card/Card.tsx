import { Card } from 'sw-durak-game-api';

export function CardComponent({ card, onClick }: { card: Card, onClick?: () => void }) {
  const imgPath = `./${card.suit}/${card.val}.jpeg`;
  return (<div className='card' onClick={onClick}>
    <img src={imgPath} alt='card'></img>
  </div>);
}
