import "reflect-metadata";
import { createExpressServer, useContainer } from "routing-controllers";
import { createConnection } from "typeorm";
import { Container } from 'typedi';
import {readFileSync} from "fs";

createConnection().then(() => {
    useContainer(Container);

    process.env = JSON.parse(readFileSync(`${__dirname}/../Config/ENV.json`).toString());

    const app = createExpressServer({
        cors: true,
        defaultErrorHandler: false,
        controllers: [__dirname + "/Controller/*.ts"],
        middlewares: [__dirname + "/Middleware/*.ts"],
        interceptors: [__dirname + "/Interceptor/*.ts"],
    });

    app.listen(3000);
});


