const config = require('./config');
const sources = [
    {
        "name": "petstore",
        "url": "http://petstore.swagger.io/v2/swagger.json"
    },
    {
        "name": "instagram",
        "url": "https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml"
    },
    {
        "name": "marketplace",
        "url": `${config.specSources.generic}api/marketplace/swagger.yaml`
    },
    {
        "name": "tracktrace",
        "url": `${config.specSources.generic}api/tracktrace/swagger.yaml`
    },
    {
        "name": "matchmaking",
        "url": `${config.specSources.generic}api/matchmaking/swagger.yaml`
    },
    {
        "name": "notification",
        "url": `${config.specSources.generic}api/notification/swagger.yaml`
    },
    {
        "name": "profile",
        "url": `${config.specSources.generic}api/profile/swagger.yaml`
    },
    {
        "name": "authentication",
        "url": `${config.specSources.generic}api/authentication/swagger.yaml`
    },
    {
        "name": "chat",
        "url": `${config.specSources.generic}api/chat/swagger.yaml`
    },
    {
        "name": "onboarding",
        "url": `${config.specSources.onboard}api/onboarding/swagger.yaml`
    },
    {
        "name": "mailer",
        "url": `${config.specSources.generic}api/mailer/swagger.yaml`
    }
];

module.exports = sources;