import { billingRepository } from "../repo/recordsRepository";
import { IRecords  } from '../interfaces/IRecords';

export default class records implements records {
    private _billingRepository: billingRepository

    constructor() {
        this._billingRepository = new billingRepository();
    }

    async records(input: IRecords): Promise<any> {
        return await this._billingRepository.records(input);
    }
}