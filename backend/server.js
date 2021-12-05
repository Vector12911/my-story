var mysql = require('mysql');
var cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uid } = require('uuid');
const app = express();
var moment = require('moment');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: 'writeyourownstory'
});

db.connect(function (err) {
  if (err) {
    console.log(err)
  }
  else {
    console.log("Connected!");
  }
});

// app.post('/register', (req, res) => {
//   console.log(req.body);
//   var id = uid();
//   var q = "INSERT INTO register_user(id,email,password) values(?,?,?)";
//   var data = [id, req.body.email, req.body.password];
//   db.query(q, data, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send('value inserted');
//     }
//   })
// })

// app.post('/login', (req, res) => {
//   console.log(req.body);
//   var id = uid();
//   var q="INSERT INTO register_user(id,email,password) values(?,?,?)";
//   var q = 'SELECT * FROM groups_info_tradingview_alerts WHERE email=?,AND password=?';
//   var data = [id, req.body.email, req.body.password];
//   db.query(q, data, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     else if (result.length) {
//       res.send({ 'message': 'success', 'operation': 'success' });
//     }
//     else {
//       res.send({ 'message': 'danger', 'operation': 'danger' });
//     }
//   })
// })

const isStory = async (reg) => {
  console.log(reg.body.user_id);
  return new Promise((resolve, reject) => {
    var q = 'SELECT story FROM user WHERE uid="' + reg.body.user_id + '"';
    db.query(q, (err, result) => {
      if (err) {
        console.log('line 71 ', err);
      }
      else {
        resolve(result)
      }
    })
  })

}

app.post('/add-story', async (req, res) => {

  console.log(req.body);
  const storyData = await isStory(req);
  console.log('89 :', storyData.length);
  if (storyData.length == 0) {
    console.log('dfcvdf');
    var s = [req.body.story];
    var q = "INSERT INTO user(uid,email,story) values(?,?,?)";
    var data = [req.body.user_id, req.body.user_email, JSON.stringify(s)];
    db.query(q, data, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send({ "operation": "success", "message": "story inserted" });
      }
    })
  }
  else {
    var s = JSON.parse(storyData[0].story);
    console.log(s)
    s.push(req.body.story);
    var q = 'UPDATE user SET story=? WHERE uid=?';
    var data = [JSON.stringify(s), req.body.user_id];
    db.query(q, data, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send({ "operation": "success", "message": "story updated" });
      }
    })
  }

})

const isComment = async (story_id) => {
  return new Promise((resolve, reject) => {
    var q = 'SELECT comment FROM story_comment WHERE story_id="' + story_id + '"';
    db.query(q, (err, result) => {
      if (err) {
        console.log('line 123 ', err);
      }
      else {
        resolve(result)
      }
    })
  })

}

app.post('/comment', async (req, res) => {

  console.log(req.body);
  const commentData = await isComment(req.body.story_id);
  console.log('121 :', commentData.length);
  if (storyData.length == 0) {
    var s = [req.body.comment];
    var q = "INSERT INTO story_comment(story_id,comment) values(?,?)";
    var data = [req.body.story_id, req.body.comment, JSON.stringify(s)];
    db.query(q, data, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send({ "operation": "success", "message": "comment inserted" });
      }
    })
  }
  else {
    var s = JSON.parse(commentData[0].comment);
    console.log(s)
    s.push(req.body.comment);
    var q = 'UPDATE story_comment SET comment=? WHERE story_id=?';
    var data = [JSON.stringify(s), req.body.story_id];
    db.query(q, data, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send({ "operation": "success", "message": "comment updated" });
      }
    })
  }

})


app.post('/get-allstory', async (req, res) => {

  const storyData = await isStory(req);
  console.log(storyData);
  // res.send(JSON.parse(storyData[0].story));
  res.send({ "operation": "success", "data":  JSON.parse(storyData[0].story)});

})



app.listen(5000, () => {
  console.log('server is listening at 5000')
})
