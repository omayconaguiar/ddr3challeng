import { Service, Inject } from 'typedi';
import { IRecords } from '../interfaces/IRecords';
import billingModel from '../business/records';

@Service()
export default class billingService {
  private _controller: billingModel

  constructor(
    @Inject('logger') private logger: any
  ) {
    this._controller = new billingModel();

  }

  public async records(input: IRecords): Promise<any> {
    try {
      this.logger.silly('Calling recordsSchema');
      return await this._controller.records(input);
    }
    catch (e) {
      return Promise.reject(e);
    }

  }

}


