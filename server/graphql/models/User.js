class User {    

    constructor(model) {
        this.Model = model;
    }

    getAuthUser(ctx) {
        if (ctx.isAuthenticated()) {
            return ctx.getUser();
        }

        return null;
    }

    async signUp(signUpData) {
        if (signUpData.password !== signUpData.passwordConfirmation) {
            throw new Error('Password not a match.');
        }

        try {
            return await this.Model.create(signUpData);
        } catch (err) {
            if(err.code && err.code === 11000){
                throw new Error('User already exist');
            }

            throw err;
        }

    }

    async signIn(signInData, ctx) {
        try {
            const user = await ctx.authenticate(signInData);
            return user;
        } catch (err) {
            return err;
        }

    }

    signOut(ctx) {
        try {
            ctx.logout();
            return true;
        } catch (err) {
            return false;
        }
    }
}

module.exports = User;