var express = require('./Task.mock.methods');
var Task = {
  getAllTasks: methods.getAllTasks,
  getTaskById: methods.getTaskById,
  addTask:     methods.addTask,
  updateTask:  methods.updateTask,
  deleteTask : methods.deleteTask
}
module.exports=Task;