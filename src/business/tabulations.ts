import { tabulationsRepository } from "../repo/tabulationsRepository";
import { ITabulations  } from '../interfaces/ITabulations';

export default class tabulations implements tabulations {
    private _tabulationsRepository: tabulationsRepository

    constructor() {
        this._tabulationsRepository = new tabulationsRepository();
    }

    async tabulations(input: ITabulations): Promise<any> {
        return await this._tabulationsRepository.tabulations(input);
    }
}