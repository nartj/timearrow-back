import * as express from 'express';
import { ExpressErrorMiddlewareInterface, HttpError, Middleware } from 'routing-controllers';

@Middleware({ type: 'after' })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {

    error(error: HttpError, req: express.Request, res: express.Response, next: express.NextFunction): void {

        if (!res.headersSent) {
            res.status(error.httpCode || 500);

            res.json({
                message: error.message
            });
        }
    }
}
