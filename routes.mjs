import { request } from 'http';
import { resolve } from 'path';
import initBillsController from './controllers/bills.mjs';
// import initPeopleController from './controllers/people.mjs';
import db from './models/index.mjs';

export default function routes(app) {
  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
  app.post('/newbill', initBillsController(db).create);
  // app.post('/newperson', initPeopleController(db).create);
}
