# restAPINodeJS

Todo's REST API
- mocked (default)
- mysql

Routes : 
* GET     /tasks
* GET     /tasks/id
* POST    /tasks
* PUT     /tasks/id
* DELETE  /tasks/id

Todo model :
- Id      : number >= 0, auto-incremented
- Title   : string >=3 <=20
- Summary : string >=5 <=200
- Status  : string in ["todo", "done"]

```json
var task = {
  "Id":      0,             
  "Title":   "Todo",       
  "Summary": "My summary",  
  "Status":  "todo"         
}
```
