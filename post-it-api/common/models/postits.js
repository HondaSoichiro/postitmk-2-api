'use strict';

// 自分でオリジナルAPI作りたい時にここを実装する

module.exports = function(postits) {
  // remoteMethodの第一引数と同名でないとダメ
  postits.greet11 = function(msg, cb) {
    cb(null, 'Greetings... ' + msg);
  }

  postits.remoteMethod('greet11', {
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg: 'greeting', type: 'string'}
  });
};
