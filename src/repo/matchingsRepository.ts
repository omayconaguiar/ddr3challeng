import { IMatchings } from '../interfaces/IMatchings';
import sequelize from '../loaders/sequelize';
import { QueryTypes } from 'sequelize';
const CronJob = require('cron').CronJob

export class billingRepository {
  async matchings(input: IMatchings): Promise<any> {
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



