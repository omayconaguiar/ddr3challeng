import { Service, Inject } from 'typedi';
import matchingsModel from '../business/matchings';

@Service()
export default class matchingsService {
  private _controller: matchingsModel

  constructor(
    @Inject('logger') private logger: any
  ) {
    this._controller = new matchingsModel();

  }

  public async matchings(): Promise<any> {
    try {
      this.logger.silly('Calling matchingsSchema');
      return await this._controller.matchings();
    }
    catch (e) {
      return Promise.reject(e);
    }

  }

}


