import { billingRepository } from "../repo/recordsRepository";
import { IMatchings  } from '../interfaces/IMatchings';

export default class matchings implements matchings {
    private _billingRepository: billingRepository

    constructor() {
        this._billingRepository = new billingRepository();
    }

    async matchings(input: IMatchings): Promise<any> {
        return await this._billingRepository.matchings(input);
    }
}