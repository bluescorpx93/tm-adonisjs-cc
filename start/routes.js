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

const Route = use('Route')

Route.on('/').render('home.index');
Route.get('/test', () => "Hey There!");
Route.get('/test/:id', ({ params }) => `Wow This is ${params.id} times cool`);
Route.get('/posts', 'PostController.index');
Route.get('/posts/:id', 'PostController.getPostById');
