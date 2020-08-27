import config from './config';
import express from 'express';
import Logger from './loaders/logger';
import { IMatchings } from './interfaces/IMatchings';
import sequelize from './loaders/sequelize';
import { QueryTypes } from 'sequelize';
const CronJob = require('cron').CronJob

async function startServer() {
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

    //executa a cada 5 segundos
    new CronJob('*/5 * * * * *', async() => {    
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

    const app = express();

    await require('./loaders').default({ expressApp: app });

    app.listen(config.port, (err: any) => {
        
        if (err) {
            Logger.error(err);
            process.exit(1);
        }
        Logger.info(`
            ################################################
            🛡️  Server listening on port: ${config.port} 🛡️ 
            ################################################
        `);
    });
}

startServer();
