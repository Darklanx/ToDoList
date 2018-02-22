var local_db = new PouchDB('ToDos');
var remoteDB = new PouchDB('http://localhost:5984/myremotedb')
remoteDB.info().then(function (info) {
});

// local_db.sync(remoteDB).on("complete",function(){
// 	console.log("success Sync");
// }).on("error",function(err){
// 	console.log(err);
// });

