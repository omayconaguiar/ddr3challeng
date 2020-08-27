import { recordsRepository } from "../repo/recordsRepository";
import { IRecords  } from '../interfaces/IRecords';

export default class records implements records {
    private _recordsRepository: recordsRepository

    constructor() {
        this._recordsRepository = new recordsRepository();
    }

    async records(input: IRecords): Promise<any> {
        return await this._recordsRepository.records(input);
    }
}