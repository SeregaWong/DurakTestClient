import { DeepReadonly, DurakGame, DurakPlayerApi } from "sw-durak-game-api";


export class GamePlayer extends DurakPlayerApi {

  constructor(
    private _onUpdate: (state: DeepReadonly<DurakGame.PersonalGameState>) => void
  ) {
    super();
  }

  onUpdate(state: DeepReadonly<DurakGame.PersonalGameState>): void {
    this._onUpdate(state);
  }

  update(action: DurakGame.Action): void {
    super.update(action);
  }
}
