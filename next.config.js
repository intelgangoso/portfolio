const path = require('path');
const { config } = require('process');

module.exports = {
    webpack: config => {
        config.resolve.alias["@"] = path.resolve(__dirname);
        return config;
    },
    env: {
        BASE_URL: 'http://localhost:3000/graphql'
        //BASE_URL: 'http://206.189.85.50:3000/graphql'
    }
}
