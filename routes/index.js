var express = require('express');
var router = express.Router();
var Task = require('../models/Task.mock');

//GET 1 or all tasks
router.get('/:id?', function(req, res, next) {
  
  if(req.params.id) {
    Task.getTaskById(req.params.id, function(err, rows) {
      if(err) {
        res.json(err);
      } 
      else {
        res.json(rows);
      }
    });
  }
  else {
    Task.getAllTasks(function(err, rows) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
});

//POST add task
router.post('/', function(req, res, next) {
  Task.addTask(req.body, function(err, count) {
    if(err) {
      res.json(err);
    }
    else {
      res.json(req.body); //or return count
    }
  });
});

//DELETE add task
router.delete('/:id', function(req, res, next) {
  Task.deleteTask(req.params.id, function(err, count) {
    if(err) {
      res.json(err);
    }
    else {
      res.json(req.body); //or return count
    }
  });
});

router.put('/:id', function(req, res, next) {
  Task.updateTask(req.params.id, req.body, function(err, rows) {
    if(err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

module.exports = router;
