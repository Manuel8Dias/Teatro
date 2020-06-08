import { join } from 'path'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Logger from './core/logger'
import { ConsoleColor } from './core/console'
import router from './routes'

export class App {
    public express: express.Application;

    public constructor () {
        this.express = express()

        this.setupViewEngine()
        this.setupExpress()
        this.setupLogger()

        this.routes()
    }

    public static run (port:number): void {
        const app = new App()
        const http = app.express

        http.listen(port, () => Logger.log(`--> App start at http://localhost:${port}`, ConsoleColor.FgGreen))
    }

    private setupViewEngine (): void {
        this.express.set('views', join(__dirname, 'views'))
        this.express.set('view engine', 'ejs')
    }

    private setupExpress (): void {
    this.express.use(cors())
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({
      extended: true
    }))
    }

    private setupLogger (): void {
        this.express.use(Logger.logRequestsMiddleware)
    }

    private routes (): void {
        this.express.use(express.static(join(__dirname, '/../public')))
        // Middlewares
        this.express.use(router)
    }
}
