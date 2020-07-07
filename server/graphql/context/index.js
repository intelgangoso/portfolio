const passport = require("passport");

//options == {email, password}
const authenticateUser = (req, options) => {
    return new Promise((resolve,reject) => {
        const done = (error, user) => {
            if (error) {
                return reject(new Error(error));
            }

            if (user) {
                req.login(user, (error) =>{
                    if (error) {
                        return reject(new Error(error));
                    }
                    return resolve(user);
                });
            } else {
                return reject(new Error('Invalid password or email!'));
            }
        };

        const authFn = passport.authenticate("graphql", options, done);
        authFn();

        return true;
    });
};

exports.buildAuthContext = (req) => {
    const auth = {
        authenticate: (options) => {
            return authenticateUser(req, options);
        },
        logout: () => {
            req.logout();
        },
        isAuthenticated: () => {
            return req.isAuthenticated();
        },
        getUser: () => {
            return req.user;
        }
    };

    return auth;
};
