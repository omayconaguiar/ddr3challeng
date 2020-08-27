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
            logger.debug('Calling POST /communication-management/sendbillings: with: %o', {
                "params": req.params,
                "headers": req.headers,
                "query": req.query,
                "body": req.body
            });
            try {
                const communicationServiceInstance = Container.get(matchings);
                const communicationRequest: IMatchings = {
                    ...req.query,
                    ...req.body
                }
                const response = await communicationServiceInstance.matchings(communicationRequest);
                res.status(200).json(response);
            } catch (e) {
                // @ts-ignore
                logger.error('🔥 Error calling POST communication-management/sendbillings: %o', e);
                return next(e);
            }

        });

}