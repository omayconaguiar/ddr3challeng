import { matchingsRepository } from "../repo/matchingsRepository";
import { IMatchings  } from '../interfaces/IMatchings';

export default class matchings implements matchings {
    private _matchingsRepository: matchingsRepository

    constructor() {
        this._matchingsRepository = new matchingsRepository();
    }

    async matchings(input: IMatchings): Promise<any> {
        return await this._matchingsRepository.matchings(input);
    }
}