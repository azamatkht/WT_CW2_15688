var data = [{ item: 'run marathon' }, { item: 'eat pills' }, { item: 'finish CW' }];
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
   app.get('/todo', function (req, res) {
      res.render('todo', { todos: data });
   });

   app.post('/todo', urlEncodedParser, function (req, res) {
      data.push(req.body);
      res.json(data);
   });

   app.delete('/todo/:item', function (req, res) {
      data = data.filter(function (data) {
         return todo.item.replace(/ /g, "") !== req.params.item;
      });
      res.json(data);
   });

};