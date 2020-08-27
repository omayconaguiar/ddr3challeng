import { IMatchings } from '../interfaces/IMatchings';
import sequelize from '../loaders/sequelize';
import { QueryTypes } from 'sequelize';
const CronJob = require('cron').CronJob

export class matchingsRepository {
  async matchings(input: IMatchings): Promise<any> {
    try {
      return await sequelize.transaction(async function (t) {        
        var matchingsA: any = await sequelize.query(`
          SELECT 
            r.id AS gravacaoId,
            t.id AS tabulacaoId
          FROM 
            records r
            JOIN tabulation t ON (t.numero_acesso = r.telefone)
          WHERE 
            r.telefone = t.numero_acesso      
          `, {
           type: QueryTypes.SELECT
        }); 
        
        var matchingsB: any = await sequelize.query(`
          SELECT 
            r.id AS gravacaoId,
            t.id AS tabulacaoId
          FROM 
            records r
            JOIN tabulation t ON (t.numero_binado = r.telefone)
          WHERE 
            r.telefone = t.numero_binado            
          `, {
          type: QueryTypes.SELECT
        });      

        if(matchingsA.length)
        return Promise.resolve(matchingsA)
        else
        return Promise.resolve(matchingsB)
      })
    } catch (e) {
      return Promise.reject(e);
    }
  }

}



