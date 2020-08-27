import { Service, Inject } from 'typedi';
import { IMatchings } from '../interfaces/IMatchings';
import billingModel from '../business/matchings';

@Service()
export default class billingService {
  private _controller: billingModel

  constructor(
    @Inject('logger') private logger: any
  ) {
    this._controller = new billingModel();

  }

  public async matchings(input: IMatchings): Promise<any> {
    try {
      this.logger.silly('Calling matchingsSchema');
      return await this._controller.matchings(input);
    }
    catch (e) {
      return Promise.reject(e);
    }

  }

}


