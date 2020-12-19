/*jslint node: true, nomen: true*/
"use strict";
module.exports = function (logger, config) {
  var funcs = {};
  var userlist = ["Alice", "Bob", "Charlie"];

  funcs.getUsers = function (callback) {
    logger.info("Returning user list");
    callback(null, userlist);
  };

  funcs.getUser = function (id, callback) {
    logger.info("Returning user ", id);
    if (userlist.length >= parseInt(id) && parseInt(id) - 1 >= 0) {
      callback(null, userlist[id - 1]);
      return;
    }
    logger.info("Returning user ", id, " error");
    callback({ status: 404, message: "Wrong parameter" }, null);
    return;
  };
  return funcs;
};
