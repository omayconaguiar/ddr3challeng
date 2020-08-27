import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { ITabulations } from '../../interfaces/ITabulations';
import tabulations from '../../services/tabulations';
import middlewares from '../middlewares';

const route = Router();

export default (app: Router) => {
    app.use(route);
    route.post('/tabulations',
        middlewares.validateInput('tabulationsSchema'),
        async (req: Request, res: Response, next: NextFunction) => {
            const logger = Container.get('logger');
            // @ts-ignore
            logger.debug('Calling POST /ddr3/tabulations: with: %o', {
                "params": req.params,
                "headers": req.headers,
                "query": req.query,
                "body": req.body
            });
            try {
                const communicationServiceInstance = Container.get(tabulations);
                const communicationRequest: ITabulations = {
                    ...req.query,
                    ...req.body
                }
                const response = await communicationServiceInstance.tabulations(communicationRequest);
                res.status(200).json(response);
            } catch (e) {
                // @ts-ignore
                logger.error('🔥 Error calling POST /ddr3/tabulations: %o', e);
                return next(e);
            }

        });

}