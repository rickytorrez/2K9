if (process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://<rick>:<rick1234>@ds255767.mlab.com:55767/vidjot-prod'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}