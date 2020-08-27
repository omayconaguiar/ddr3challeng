import { ITabulations } from '../interfaces/ITabulations';
import sequelize from '../loaders/sequelize';
import { QueryTypes } from 'sequelize';
const CronJob = require('cron').CronJob

export class tabulationsRepository {
  async tabulations(input: ITabulations): Promise<any> {
    try {
      return await sequelize.transaction(async function (t) {
        const tabulations: any = await sequelize.query(`
          INSERT INTO "tabulation" (nome_cliente, protocolo,data_atendimento, numero_binado, numero_acesso)
          VALUES(:nomeCliente, :protocolo, :dataAtendimento, :numeroBinado, :numeroAcesso)
          `, {
          replacements: {
            nomeCliente: input.nomeCliente,
            protocolo: input.protocolo,
            dataAtendimento: input.dataAtendimento,
            numeroBinado: input.numeroBinado,
            numeroAcesso: input.numeroAcesso,
          }, type: QueryTypes.INSERT
        });      
        return Promise.resolve()
      })
    } catch (e) {
      return Promise.reject(e);
    }
  }

}



