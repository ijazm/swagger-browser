module.exports = {
    'app': {
        'port': process.env.CR_SWAGGER_INTERFACE_PORT,
        'version': '1.0.0'
    },
    'specSources': {
        'generic': process.env.CR_SWAGGER_SOURCE_HOST,
        'onboard': process.env.CR_SWAGGER_SOURCE_ONBOARD_HOST
    }
};