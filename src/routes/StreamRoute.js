const StreamController = require('../controllers/StreamController');
module.exports = (app) => {
   app.post('/stream', StreamController.post);
   app.put('/stream/:id', StreamController.put);
   app.delete('/stream/:id', StreamController.delete);
   app.get('/streams', StreamController.get);
   app.get('/stream/:id', StreamController.getById);
}