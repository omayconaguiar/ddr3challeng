import { matchingsRepository } from "../repo/matchingsRepository";

export default class matchings implements matchings {
    private _matchingsRepository: matchingsRepository

    constructor() {
        this._matchingsRepository = new matchingsRepository();
    }

    async matchings(): Promise<any> {
        return await this._matchingsRepository.matchings();
    }
}