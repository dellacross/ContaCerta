import { Router } from 'express'
import { RegisterUserController } from './controllers/user/RegisterUserController'
import { LoginUserController } from './controllers/user/LoginUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import { EditUserDetailsController } from './controllers/user/EditUserDetailsController'
import { ListUserDetailsController } from './controllers/user/ListUserController'
import { EndUserSessionController } from './controllers/user/DeleteUserAccountController'
import { CreateGroupController } from './controllers/group/CreateGroupController'
import { DeleteGroupController } from './controllers/group/DeleteGroupController'

const router = Router()

// user routes
router.post('/register', new RegisterUserController().handle)
router.post('/login', new LoginUserController().handle)
router.put('/edit', isAuthenticated, new EditUserDetailsController().handle)
router.get('/profile', isAuthenticated, new ListUserDetailsController().handle)
router.delete('/deleteaccount', isAuthenticated, new EndUserSessionController().handle)

// group routes
router.post('/creategroup', isAuthenticated, new CreateGroupController().handle)
router.delete('/deletegroup', isAuthenticated, new DeleteGroupController().handle)


export { router }