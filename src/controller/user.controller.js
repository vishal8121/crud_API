const User = require('../model/user.model');
const md5 = require('md5');

exports.create = function(req, res){
  const newUser = new User({
            username: req.body.username,
            password : md5(req.body.password),
            status: req.body.status,
          });
  User.create(newUser, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error: " + err);
    } else {
      if (result) {
        res.send("User Added Successfully");
      } else {
        res.send("User Already Registered");
      }
    }
  });
};

exports.login = function(req, res) {
  const user = req.body.username
  const hash = md5(req.body.password)

User.login(user,hash, (err, result)=>{
  if(err){
    // console.log(err);
    res.send(err);
  }
  else{
    if(result){
      res.send(result);
    }
    else{
     if(result){
      res.send(result);
     }
     else{
      res.send(result);
     }
    }
  }
})
}




    

