import { Service, Inject } from 'typedi';
import { IRecords } from '../interfaces/IRecords';
import recordsModel from '../business/records';

@Service()
export default class recordsService {
  private _controller: recordsModel

  constructor(
    @Inject('logger') private logger: any
  ) {
    this._controller = new recordsModel();

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


