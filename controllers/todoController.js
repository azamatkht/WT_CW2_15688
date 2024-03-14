var data = [{ item: 'run marathon' }, { item: 'eat pills' }, { item: 'finish CW' }];
module.exports = function (app) {
   app.get('/todo', function (req, res) {
      res.render('todo', { todos: data });
   });

   app.post('/todo', function (req, res) {
     
   });

   app.delete('/todo/:item', function (req, res) {
      
   });

};