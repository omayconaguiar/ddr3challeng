import { Service, Inject } from 'typedi';
import { ITabulations } from '../interfaces/ITabulations';
import tabulationsModel from '../business/tabulations';

@Service()
export default class tabulationsService {
  private _controller: tabulationsModel

  constructor(
    @Inject('logger') private logger: any
  ) {
    this._controller = new tabulationsModel();

  }

  public async tabulations(input: ITabulations): Promise<any> {
    try {
      this.logger.silly('Calling tabulationsSchema');
      return await this._controller.tabulations(input);
    }
    catch (e) {
      return Promise.reject(e);
    }

  }

}


