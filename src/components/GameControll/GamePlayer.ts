import { DeepReadonly, DurakGameApi, DurakPlayerApi } from "sw-durak-game-api";


export class GamePlayer extends DurakPlayerApi {

  constructor(
    private _onUpdate: (state: DeepReadonly<DurakGameApi.IState.Personal>) => void
  ) {
    super();
  }

  onUpdate(state: DeepReadonly<DurakGameApi.IState.Personal>): void {
    this._onUpdate(state);
  }

  update(action: DurakGameApi.Action): void {
    super.update(action);
  }
}
