const baseUrls = {
    development: 'http://172.23.118.83:8000/',
    staging: '',
    production: '',
    test: '',
}

const baseUrl = baseUrls[process.env.NODE_ENV || 'development']

export default baseUrl