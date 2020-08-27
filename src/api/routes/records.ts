import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IRecords } from '../../interfaces/IRecords';
import records from '../../services/records';
import middlewares from '../middlewares';

const route = Router();

export default (app: Router) => {
    app.use(route);
    route.post('/records',
        middlewares.validateInput('recordsSchema'),
        async (req: Request, res: Response, next: NextFunction) => {
            const logger = Container.get('logger');
            // @ts-ignore
            logger.debug('Calling POST /ddr3/records: with: %o', {
                "params": req.params,
                "headers": req.headers,
                "query": req.query,
                "body": req.body
            });
            try {
                const communicationServiceInstance = Container.get(records);
                const communicationRequest: IRecords = {
                    ...req.query,
                    ...req.body
                }
                const response = await communicationServiceInstance.records(communicationRequest);
                res.status(200).json(response);
            } catch (e) {
                // @ts-ignore
                logger.error('🔥 Error calling POST /ddr3/records: %o', e);
                return next(e);
            }

        });

}