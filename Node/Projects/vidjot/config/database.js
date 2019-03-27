if (process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://rick:test1234@ds125616.mlab.com:25616/vidjot-prod'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}