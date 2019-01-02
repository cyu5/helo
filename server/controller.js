const Axios = require("axios");

module.exports = {
  register(req, res, next) {
    const { username, password } = req.body;
    const db = req.app.get("db");

    //
    Axios

      // request for a random user image
      .get(`https://robohash.org/${username}${password}?set=set4`)

      // .then(
      //   db.register_new_user({ username, password, profile_pic })
      //     .then(users => {
      //       res.send(users[0]);
      //     })
      //     .catch(err => {
      //       console.log(`error register`, err);
      //       res.status(500).send(`Sorry, database is down`);
      //     });
      // )

      // store user info in db
      .then(resFromImageApi => {
        // const profile_pic = resFromImageApi.data;
        const profile_pic = "some pic";
        // console.log(profile_pic);

        db.register_new_user({ username, password, profile_pic })

          // respond with stored user data as comfirmation
          .then(users => {
            res.send(users[0]);
          })

          // error handling
          .catch(err => {
            console.log(`error register`, err);
            res.status(500).send(`Sorry, database is down`);
          });
      });
  },

  login(req, res, next) {
    const { username, password } = req.body;
    const db = req.app.get("db");

    db.get_user({ username, password })
      .then(users => {
        const user = users[0];
        if (user) {
          res.send(user);
        } else {
          res.send("wrong username and/or password");
        }
      })
      .catch(error => {
        console.log(`error login`, err);
        res.status(500).send(`Sorry, database is down`);
      });
  }
};
