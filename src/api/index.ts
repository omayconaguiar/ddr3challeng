import { Router } from 'express';
import records from './routes/records';
import matchings from './routes/matchings';
import tabulations from './routes/tabulations';

export default () => {
    const app = Router();
    records(app);
    matchings(app);
    tabulations(app);
    return app;
}