var tasks = [
  { Id:0, Title:'Todo 1', Summary:'At nunc si ad aliquem bene nummatum tumentemque ideo honestus advena salutatum introieris, primitus tamquam exoptatus suscipieris et interrogatus multa coactusque mentiri, miraberis numquam antea visus summatem virum tenuem te sic enixius observantem, ut paeniteat ob haec bona tamquam praecipua non vidisse ante decennium Romam. ',Status:'todo' },
  { Id:1, Title:'Todo 2', Summary:'Nisi mihi Phaedrum, inquam, tu mentitum aut Zenonem putas, quorum utrumque audivi, cum mihi nihil sane praeter sedulitatem probarent, omnes mihi Epicuri sententiae satis notae sunt. atque eos, quos nominavi, cum Attico nostro frequenter audivi, cum miraretur ille quidem utrumque, Phaedrum autem etiam amaret, cotidieque inter nos ea, quae audiebamus, conferebamus, neque erat umquam controversia, quid ego intellegerem, sed quid probarem. ',Status:'todo' },
  { Id:2, Title:'Todo 3', Summary:'Et quia Mesopotamiae tractus omnes crebro inquietari sueti praetenturis et stationibus servabantur agrariis, laevorsum flexo itinere Osdroenae subsederat extimas partes, novum parumque aliquando temptatum commentum adgressus. quod si impetrasset, fulminis modo cuncta vastarat. erat autem quod cogitabat huius modi. ',Status:'todo' },
  { Id:3, Title:'Todo 4', Summary:'Quid enim tam absurdum quam delectari multis inanimis rebus, ut honore, ut gloria, ut aedificio, ut vestitu cultuque corporis, animante virtute praedito, eo qui vel amare vel, ut ita dicam, redamare possit, non admodum delectari? Nihil est enim remuneratione benevolentiae, nihil vicissitudine studiorum officiorumque iucundius. ',Status:'done' },
  { Id:4, Title:'Todo 5', Summary:'Apud has gentes, quarum exordiens initium ab Assyriis ad Nili cataractas porrigitur et confinia Blemmyarum, omnes pari sorte sunt bellatores seminudi coloratis sagulis pube tenus amicti, equorum adiumento pernicium graciliumque camelorum per diversa se raptantes, in tranquillis vel turbidis rebus: nec eorum quisquam aliquando stivam adprehendit vel arborem colit aut arva subigendo quaeritat victum, sed errant semper per spatia longe lateque distenta sine lare sine sedibus fixis aut legibus: nec idem perferunt diutius caelum aut tractus unius soli illis umquam placet. ',Status:'todo' }
]

function checkModel(Task) {
  var errors = [];
  if(Task.Id < 0) {
    errors.push("L'id de la tâche est incorrect");
  }
  if(Task.Title.length < 3) {
    errors.push("Le titre doit faire au moins 3 caractères");
  }
  if(Task.Title.length > 20) {
    errors.push("Le titre doit faire moins de 20 caractères");
  }
  if(Task.Summary.length < 5) {
    errors.push("Le résumé doit faire au moins 5 caractères");
  }
  if(Task.Summary.length > 200) {
    errors.push("Le résumé doit faire moins de 200 caractères");
  }
  if(["todo", "done"].indexOf(Task.Status) == -1) {
    errors.push("Le status " + Task.Status + " est incorrect");
  }
  return errors;
}

methods = {
  getAllTasks : function(callback) {
    var rows = tasks;
    var err = null;
    callback(err, rows);
  },

  getTaskById : function(id, callback) {
    var rows = [];
    var err = null;
    for(var i=0; i<tasks.length; i++) {
      if(tasks[i].Id == id) {
        rows.push(tasks[i]);
        break;
      }
    }
    callback(err, rows);
  },

  addTask : function(Task, callback) {
    var checked = checkModel(Task);
    if(checked.length != 0) {
      var rows = null;
      var err = checked;
    } 
    else {
      var maxId = -1;
      for(var i=0; i<tasks.length; i++) {
        if(tasks[i].Id > maxId) {
          maxId = tasks[i].Id
        }
      }
      Task.Id = maxId+1;
      tasks.push(Task);
      var rows = tasks;
      var err = null;
    }
    callback(err, rows);
  },

  updateTask : function(id, Task, callback) {
    var checked = checkModel(Task);
    if(checked.length != 0) {
      var rows = null;
      var err = checked;
    } 
    else {
      var nbRows = 0;
      for(var i=0; i<tasks.length; i++) {
        if(tasks[i].Id == id) {
          tasks[i].Status = Task.Status;
          tasks[i].Summary = Task.Summary;
          tasks[i].Title = Task.Title;
          nbRows++;
        }
      }
      var rows = tasks;
      var err = null;
      //Erreurs
      if(nbRows == 0) {
        err = {message : "Id incorrect : aucune ligne n'a été modifiée"};
      }
      if(nbRows > 1) {
        err = {message : "Erreur : plus d'une tâche ont été mises à jour."};
      }
    }
    callback(err, rows);
  },

  deleteTask : function(id, callback) {
    var err = null;
    var idx = -1;
    for(var i=0; i<tasks.length; i++) {
      if(tasks[i].Id == id) {
        idx = i;
      }
    }
    if(idx == -1) {
      err = {message : "Id incorrect : aucune ligne n'a été suprimée"};
    }
    else {
      tasks.splice(idx,1);
    }
    var rows = tasks;
    callback(err, rows);
  }
}
module.exports= methods;