var db=RequestType('../dbconnection');
var Task = {
  getAllTasks: function(callback) {
    return db.query("SELECT * FROM task", callback);
  },
  getTaskById: function(id, callback) {
    return db.query("SELECT * FROM task WHERE Id=?", [id], callback);
  },
  addTask: function(Task, callback) {
    return db.query("INSERT INTO task VALUES(?, ?, ?, ?)", [Task.Id, Task.Title, Task.Summary, Task.Status], callback);
  },
  updateTask: function(id, Task, callback) {
    return db.query("UPDATE task SET Title=?, Summary=?, Status=? WHERE Id=?", [Task.Title, Task.Summary, Task.Status, id], callback);
  },
  deleteTask : function(id, callback) {
    return db.query("DELETE FROM task WHERE Id=?", [id], callback);
  }
}
module.exports=Task;