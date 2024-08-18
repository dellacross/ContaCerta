import { Router } from 'express'
import { RegisterUserController } from './controllers/user/RegisterUserController'
import { LoginUserController } from './controllers/user/LoginUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import { EditUserDetailsController } from './controllers/user/EditUserDetailsController'
import { ListUserDetailsController } from './controllers/user/ListUserController'
import { EndUserSessionController } from './controllers/user/DeleteUserAccountController'
import { CreateGroupController } from './controllers/group/CreateGroupController'
import { DeleteGroupController } from './controllers/group/DeleteGroupController'
import { AddMemberController } from './controllers/member/AddMemberController'
import { ListGroupsController } from './controllers/group/ListGroupsController'
import { ListMembersController } from './controllers/member/ListMembersController'
import { DeleteMemberController } from './controllers/member/DeleteMemberController'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { UpdateCategoryController } from './controllers/category/UpdateCategoryController'
import { CreatePaymentMethodController } from './controllers/paymentmethod/CreatePaymentMethodController'
import { EditPaymentMethodController } from './controllers/paymentmethod/EditPaymentMethodController'
import { DeletePaymentMethodController } from './controllers/paymentmethod/DeletePaymentMethodController'
import { CreateExpenseController } from './controllers/expense/CreateExpenseController'
import { EditExpenseController } from './controllers/expense/EditExpenseController'
import { DeleteExpenseController } from './controllers/expense/DeleteExpenseController'
import { CreateBankAccountController } from './controllers/bankaccount/CreateBankAccountController'
import { EditBankAccountController } from './controllers/bankaccount/EditBankAccountController'
import { DeleteBankAccountController } from './controllers/bankaccount/DeleteBankAccountController'
import { ListBankAccountsController } from './controllers/bankaccount/ListBankAccountsController'
import { ListCategoriesController } from './controllers/category/ListCategoriesController'
import { ListExpensesController } from './controllers/expense/ListExpensesController'
import { ListPaymentMethodsController } from './controllers/paymentmethod/ListPaymentMethodsController'

const router = Router()

// user routes
router.post('/register', new RegisterUserController().handle)
router.post('/login', new LoginUserController().handle)
router.put('/edit', isAuthenticated, new EditUserDetailsController().handle)
router.get('/profile', isAuthenticated, new ListUserDetailsController().handle)
router.delete('/deleteaccount', isAuthenticated, new EndUserSessionController().handle)

// group routes
router.post('/creategroup', isAuthenticated, new CreateGroupController().handle)
router.get('/groups', isAuthenticated, new ListGroupsController().handle)
router.delete('/deletegroup', isAuthenticated, new DeleteGroupController().handle)

// member routes
router.put('/addmember', isAuthenticated, new AddMemberController().handle)
router.get('/listmembers', isAuthenticated, new ListMembersController().handle)
router.delete('/deletemember', isAuthenticated, new DeleteMemberController().handle)

// category routes
router.post('/createcategory', isAuthenticated, new CreateCategoryController().handle)
router.get('/categories', new ListCategoriesController().handle)
router.put('/updatecategory', isAuthenticated, new UpdateCategoryController().handle)
router.delete('/deletecategory', isAuthenticated, new CreateCategoryController().handle)

// payment method routes
router.post('/createpaymentmethod', isAuthenticated, new CreatePaymentMethodController().handle)
router.get('/paymentmethods', new ListPaymentMethodsController().handle)
router.put('/editpaymentmethod', isAuthenticated, new EditPaymentMethodController().handle)
router.delete('/deletepaymentmethod', isAuthenticated, new DeletePaymentMethodController().handle)

// expense routes
router.post('/createexpense', isAuthenticated, new CreateExpenseController().handle)
router.get('/expenses', isAuthenticated, new ListExpensesController().handle)
router.put('/editexpense', isAuthenticated, new EditExpenseController().handle)
router.delete('/deleteexpense', isAuthenticated, new DeleteExpenseController().handle)

// bank account routes
router.post('/createbankaccount', isAuthenticated, new CreateBankAccountController().handle)
router.get('/bankaccounts', isAuthenticated, new ListBankAccountsController().handle)
router.put('/editbankaccount', isAuthenticated, new EditBankAccountController().handle)
router.delete('/deletebankaccount', isAuthenticated, new DeleteBankAccountController().handle)

export { router }