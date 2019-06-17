import {ExpressMiddlewareInterface, Middleware} from "routing-controllers";

@Middleware({ type: 'after' })
export class loggingMiddleware implements ExpressMiddlewareInterface {

    use(request: any, response: any, next: (err?: any) => any): any {
        console.log(request);
        next();
    }
}
