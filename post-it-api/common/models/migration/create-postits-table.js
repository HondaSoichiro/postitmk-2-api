//postits_table作成
//「node ファイル名」で実行

var app = require('../../../server/server.js');
app.dataSources.mysqlDs.automigrate('postits', function(err) {
  if (err===null) console.log('table creatin success!!!');
  if (err) throw err;
});

//server/boot配下に置くとき
/*
module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('postits', function(err) {
    if (err) throw err;

    app.models.postits.create([{
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
*/

