import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IMatchings } from '../../interfaces/IMatchings';
import matchings from '../../services/matchings';
import middlewares from '../middlewares';

const route = Router();

export default (app: Router) => {
    app.use(route);
    route.get('/matchings',
        middlewares.validateInput('matchingsSchema'),
        async (req: Request, res: Response, next: NextFunction) => {
            const logger = Container.get('logger');
            // @ts-ignore
            logger.debug('Calling GET /ddr3/matchings: with: %o', {
                "params": req.params,
                "headers": req.headers,
                "query": req.query,
                "body": req.body
            });
            try {
                const communicationServiceInstance = Container.get(matchings);             
                const response = await communicationServiceInstance.matchings();
                res.status(200).json(response);
            } catch (e) {
                // @ts-ignore
                logger.error('🔥 Error calling GET /ddr3/matchings: %o', e);
                return next(e);
            }

        });

}