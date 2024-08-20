const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const HttpError = require('./HttpError');

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const crypto = require('crypto');

const recetteRouter = require('./routes/recetteRouter');
const utilisateurQueries = require("./queries/userAccountQueries");
const noteRouter = require("./routes/noteRouter.js");

const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



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
    console.log(utilisateur.id_utilisateurs);
    if (!utilisateur) {
      return authResult(null,false);
    }

    const iterations = 100000;
    const keylen = 64;
    const digest = "sha512";

    crypto.pbkdf2(motDePasse, utilisateur.password_salt, iterations, keylen, digest, (err, hashedPassword) => {

      if (err) {
        return authResult(err);
      }

      const userMdpHashBuffer = Buffer.from(utilisateur.password_hash, "base64");

      if (!crypto.timingSafeEqual(userMdpHashBuffer, hashedPassword)) {
        return authResult(null,false);
      }

      return authResult(null, utilisateur);
    });
  }).catch(err => {
    return authResult(err);
  });
}));

app.use('/recettes', recetteRouter);
app.use('/note', noteRouter);

app.get('/login',
  passport.authenticate('basic', { session: false }),
  (req, res, next) => {

    if (req.user) {
      const userDetails = {
        id_utilisateur: req.user.id_utilisateurs,
        nom: req.user.nom_utilisateur,
        admin: req.user.admin
      };
      res.json(userDetails)
    } else {
      return next({ status: 500, message: "propriété user absente"})
    }
  }
)

app.post('/inscription', (req, res, next) => {
  const utilisateur = req.body
  if (utilisateur) {
    const id_user = req.body.id_utilisateur;
    const user = req.body.nom;
    const password = req.body.motDePasse;
    const saltBuf = crypto.randomBytes(16);
    const salt = saltBuf.toString("base64");

    const verif = utilisateurQueries.getUserAccount(id_user);

    if (id_user == verif.userId) {
      return next({ status: 500, message: "compte existant"})
    }

    
      crypto.pbkdf2(password, salt, 100000, 64, "sha512", (err, derivedKey) => {
        if (err) throw err;
  
        const password_hash = derivedKey.toString("base64");
        
        const userReturn = utilisateurQueries.createUserAccount(id_user,user,password_hash,salt);
  
        res.json(userReturn);
      }
      
  );
    }

    
    
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
