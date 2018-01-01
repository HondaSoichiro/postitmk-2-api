

module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('postits', function(err) {
    if (err) throw err;

    app.models.postits.create([{
//      postit_id: '1',
      board_id: '2',
      member_id: '3',
      sentence: 'jdjdjdjdkd',
      x: '12',
      y: '339'
    } ], function(err, postIts) {
      if (err) throw err;

      console.log('Models created: \n', postIts);
    });
  });
};
