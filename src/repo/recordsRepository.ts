import { IRecords } from '../interfaces/IRecords';
import sequelize from '../loaders/sequelize';
import { QueryTypes } from 'sequelize';

export class recordsRepository {
  async records(input: IRecords): Promise<any> {
    try {
      return await sequelize.transaction(async function (t) {
        const records: any = await sequelize.query(`
          INSERT INTO "records" (telefone, ramal,data_gravacao)
          VALUES(:telefone, :ramal,:dataGravacao)                      
          `, {
          replacements: {
            telefone: input.telefone,
            ramal: input.ramal,
            dataGravacao: input.dataGravacao,
          }, type: QueryTypes.INSERT
        });      
        return Promise.resolve()
      })
    } catch (e) {
      return Promise.reject(e);
    }
  }

}



