import { AdvancedDurakGameApi, DurakPlayerApi } from "sw-durak-game-api";

export class DurakGameState {

  private game!: AdvancedDurakGameApi;

  public controlls!: Pick<AdvancedDurakGameApi, 'toNextState' | 'toPreviousState'>;

  constructor(
    private players: [player1: DurakPlayerApi, player2: DurakPlayerApi],
  ) {
    this.restart();
  }

  restart() {
    const [player1, player2] = this.players;

    this.controlls = this.game = new AdvancedDurakGameApi(player1, player2, (winner) => {
        if (!winner) {
          alert('no winner');
        } else if (winner === player1) {
          alert('player1 is winner');
        } else {
          alert('player2 is winner');
        }
      });
  }
}
