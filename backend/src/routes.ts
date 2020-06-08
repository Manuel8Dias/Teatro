import express from 'express'

const routes = express.Router()

//npm run dev

routes.get('/', () => {
    return('Hello World')
})

export default routes;