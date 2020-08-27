import { Service, Inject } from 'typedi';
import { ITabulations } from '../interfaces/ITabulations';
import billingModel from '../business/tabulations';

@Service()
export default class billingService {
  private _controller: billingModel

  constructor(
    @Inject('logger') private logger: any
  ) {
    this._controller = new billingModel();

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


