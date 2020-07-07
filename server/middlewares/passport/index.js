const GraphqlStrategy = require('./strategies');
const User = require('../../database/models/user');


exports.init = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (error, user) => {
            done(error, user);
        });
    });

    passport.use('graphql', new GraphqlStrategy(({email, password}, done) => {
        User.findOne({email}, (error, user) => {
            if (error) {
                return done(error);
            }

            if (!user) {
                return done(null, false);
            }

            //check if user password is a match with options password
            // done(null, user);

            user.validatePassword(password, (error, isMatching) => {
                if (error) {
                    return done(error);
                }

                if (!isMatching) {
                    return done(null, false);
                }

                return done(null, user);
            });
        });
    }));
}