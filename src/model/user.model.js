const db = require('../config/connection')

const User = function(user){
    this.username = user.username;
    this.password = user.password;
    this.status = user.status;
}

User.create = (newUser, result)=>{
    db.query("SELECT * FROM users WHERE username = ?",newUser.username, (err,result1)=>{
        if(err){
            console.log(`error:${err}`)
            result(err);
        }
        else{
            if(result1.length == 0){
                db.query("INSERT INTO users set ?",newUser, (err,res)=>{
                    if(err){
                       console.log(`error:${err}`)
                       result(err);
                    }
                    else{
                       console.log(res) 
                       result(null, res);
                    }
                   });
            }
            else{
                console.log(`error:${err}`)
                result(err)
            }
        }
    })
}

User.login = (user, hash,result) => {
    db.query("SELECT * FROM users WHERE username = ?", user, (err, res) => {
        if(err){
            console.log(`error:${err}`)
            result(err)
        }
        else{
            if(res.length == 0){
             console.log("user not found")
             result(null, "user not found")
            }
            else{
                if(hash == res[0].password){
                    result(null,'User login successfully');
                    // console.log(hash)
                    // console.log(res[0].password)
                    // console.log(user)
                }
                else{
                    result(null,'You entered Wrong password');
                }
                
            }
        }
    });
};


module.exports = User
