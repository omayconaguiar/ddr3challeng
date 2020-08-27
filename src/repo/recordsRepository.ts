import { IRecords } from '../interfaces/IRecords';
import sequelize from '../loaders/sequelize';
import { QueryTypes } from 'sequelize';
const CronJob = require('cron').CronJob

export class billingRepository {
  async records(input: IRecords): Promise<any> {
    try {
      return await sequelize.transaction(async function (t) {
        const dayly: any = await sequelize.query(`
          SELECT 
            *
          From
            store 
          WHERE mall_id =  AND
          active = 't'
          `, {
          replacements: {
            mallId: input.mallId
          }, type: QueryTypes.SELECT
        });      
     
        const job = new CronJob('* * * * * *', () => {        

      

        }, null, true, 'America/Sao_Paulo')


        return Promise.resolve()
      })
    } catch (e) {
      return Promise.reject(e);
    }
  }

}



