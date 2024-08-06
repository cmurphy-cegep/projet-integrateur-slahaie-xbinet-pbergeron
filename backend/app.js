const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const HttpError = require('./HttpError');

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const crypto = require('crypto');

const recetteRouter = require('./routes/recetteRouter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/recettes', recetteRouter)

class BasicStrategyModified extends BasicStrategy {
  constructor(options, verify) {
    return super(options, verify);
  }

  _challenge() {
    return 'xBasic realm="' + this._realm + '"';
  }
}

passport.use(new BasicStrategyModified((id_utilisateur, motDePasse, authResult) => {
  utilisateurQueries.getLoginByUserAccountId(id_utilisateur).then(utilisateur => {
    if (!utilisateur) {
      return authResult(null,false);
    }

    const iterations = 100000;
    const keylen = 64;
    const digest = "sha512";

    crypto.pbkdf2(motDePasse, utilisateur.motDePasseSalt, iterations, keylen, digest, (err, hashedPassword) => {

      if (err) {
        return authResult(err);
      }

      const userMdpHashBuffer = Buffer.from(utilisateur.motDePasseHash, "base64");

      if (!crypto.timingSafeEqual(userMdpHashBuffer, hashedPassword)) {
        return authResult(null,false);
      }

      return authResult(null, utilisateur);
    });
  }).catch(err => {
    return authResult(err);
  });
}));

app.get('/login',
  passport.authenticate('basic', { session: false }),
  (req, res, next) => {

    if (req.user) {
      const userDetails = {
        id_utilisateur: req.user.id_utilisateur,
        nom: req.user.utilisateur,
        admin: req.user.admin
      };
      res.json(userDetails)
    } else {
      return next({ status: 500, message: "propriété user absente"})
    }
  }
)

app.post('/inscription',{

}
)

app.use((err, req, res, next) => {
  console.log("error handler: ", err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500)
  if (err instanceof HttpError) {
    res.json(err.getJsonMessage());
  } else {
    res.json(err);
  }
});

module.exports = app;
