const config = require('../config/dev');
const session = require('express-session');
const passport = require('passport');

exports.init = (server, db) => {

    require('./passport').init(passport);

    const appSession = {
        name: "app-session",
        secret: config.SESSION_SECRET,
        cookie: { maxAge: 2 * 60 * 60 * 1000 },
        resave: false,
        saveUninitialized: false,
        store: db.initSessionStore(),
    };

    server.use(session(appSession));
    server.use(passport.initialize());
    server.use(passport.session());
};
