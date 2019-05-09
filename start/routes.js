'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('page.landing-page').as('landing-page')

Route.group(() => {
  Route.get('/logout', 'User/AuthController.logout').as('auth.logout').middleware(['auth'])
  Route.on('/register').render('page.register').as('auth.register.get').middleware(['guest'])
  Route.post('/register', 'User/AuthController.register').validator('UserRegister').as('auth.register.post').middleware(['guest'])
  Route.on('/login').render('page.login').as('auth.login.get').middleware(['guest'])
  Route.post('/login', 'User/AuthController.login').validator('UserLogin').as('auth.login.post').middleware(['guest'])
}).prefix('auth')

Route.group(() => {
  Route.get('/', 'User/ProfilController.getProfil').as('profil.profil')
  Route.post('/', 'User/ProfilController.changeAvatar').validator('UserChangeAvatar').as('profil.avatar')
  Route.put('/', 'User/ProfilController.updateProfil').validator('UserUpdateProfil').as('profil.edit')
  Route.put('/password', 'User/ProfilController.passwordProfil').validator('UserUpdatePassword').as('profil.password')
}).prefix('profil')
