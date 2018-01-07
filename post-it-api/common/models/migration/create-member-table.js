//membersテーブル作成
//「node ファイル名」で実行

var app = require('../../../server/server.js');
app.dataSources.mysqlDs.automigrate('members', function(err) {
  if (err===null) console.log('table creation success!!!');
  if (err) throw err;
});

/*
server/boot配下に置くとき

module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('members', function(err) {
    if (err) throw err;
  });
};
*/

