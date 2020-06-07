import express from 'express'

const routes =express.Router()

routes.get('/', () => {
    return (
        'Hello World!'
    )
})

export default routes;
