import { Router } from 'express'
import { RegisterUserController } from './controllers/user/RegisterUserController'
import { LoginUserController } from './controllers/user/LoginUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import { EditUserDetailsController } from './controllers/user/EditUserDetailsController'

const router = Router()

// user routes
router.post('/register', new RegisterUserController().handle)
router.post('/login', new LoginUserController().handle)
router.put('/edit', isAuthenticated, new EditUserDetailsController().handle)

export { router }