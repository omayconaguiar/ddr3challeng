import config from './config';
import express from 'express';
import Logger from './loaders/logger';
import { matchingsRepository} from './repo/matchingsRepository'

async function startServer() {
    var match = new matchingsRepository();

    match.matchings()

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
