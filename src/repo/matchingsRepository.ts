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
     

        const job = new CronJob('*/5 * * * * *', async() => {    
          if(matchingsA.length){            
            for(var i=0;i<matchingsA.length;i++){
              await sequelize.query(`
                INSERT INTO "matchings" (gravacao_old, tabulacao_old)    
                VALUES (${matchingsA[i].gravacaoid}, ${matchingsA[i].tabulacaoid})    
                `, {
                type: QueryTypes.INSERT
              }); 
            }
          }
          else{
          for(var i=0;i<matchingsB.length;i++){
            await sequelize.query(`
              INSERT INTO "matchings" (gravacao_old, tabulacao_old)    
              VALUES (${matchingsB[i].gravacaoid}, ${matchingsB[i].tabulacaoid})    
              `, {
              type: QueryTypes.INSERT
            }); 
          
          }
        }

        }, null, true, 'America/Sao_Paulo')

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



