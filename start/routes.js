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

Route.on('/').render('page.landing-page')
Route.group(() => {
  Route.get('/register', 'User/AuthController.getRegister').as('auth.register.get')
  Route.post('/register', 'User/AuthController.register').validator('UserRegister').as('auth.register.post')
  Route.get('/login', 'User/AuthController.getLogin').as('auth.login.get')
  Route.post('/login', 'User/AuthController.login').validator('UserLogin').as('auth.login.post')
}).prefix('auth')
