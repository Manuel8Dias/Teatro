import { Router } from 'express'
import DefaultController from '../controllers/default.controller'
import UsersController from '../controllers/user.controller'

const router = Router()

// routes
router.get('/', DefaultController.index)

router.get('/users', UsersController.getAll)
router.get('/users/:id', UsersController.getOne)
router.post('/users', UsersController.create)
router.put('/users/:id', UsersController.update)
router.delete('/users/:id', UsersController.delete)

export default router
