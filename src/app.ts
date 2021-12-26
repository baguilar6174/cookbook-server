import express, { Application } from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './api/routes';
import { errorHandler } from './api/middlewares/error-handler';
import { RouteNotFoundError } from './api/errors/route-not-found-error';
import cors from 'cors';
import dbInit from './db/init';

export const get = () => {
    
    const app: Application = express();

    // Port
    const PORT = process.env.PORT || 3000;

    // Config Values
    dotenv.config()

    // Morgan Dev
    app.use(morgan('dev'));

    app.use(cors({
        "origin": [
            'http://localhost:4200',
        ],
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    }));

    // Url prefix
    const API_PREFIX = process.env.API_PREFIX || '/api/v1';

    // Settings
    app.set('port', process.env.PORT || 3000);

    // Body parsing Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Routes
    app.use(`${API_PREFIX}`, routes)

    // Not found
    app.all('*', async (req, res) => {
        throw new RouteNotFoundError();
    });

    // Error Handler
    app.use(errorHandler);

    return app
}

export const start = () => {
    const app = get()
    try {
        app.listen(app.get('port'), () => {
            console.log(`Server running on http://localhost:${app.get('port')}`)
        })
    } catch (error: any) {
        console.log(`Error occurred: ${error.message}`)
    }
}

start();
dbInit();