const controller = {
    index:  function(req, res, next) {
        res.render('index', { title: 'Agenda 822' });
      }
}

module.exports = controller;