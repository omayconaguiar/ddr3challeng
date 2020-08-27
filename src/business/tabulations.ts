import { billingRepository } from "../repo/recordsRepository";
import { ITabulations  } from '../interfaces/ITabulations';

export default class tabulations implements tabulations {
    private _billingRepository: billingRepository

    constructor() {
        this._billingRepository = new billingRepository();
    }

    async tabulations(input: ITabulations): Promise<any> {
        return await this._billingRepository.tabulations(input);
    }
}