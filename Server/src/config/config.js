module.exports = {
    port: process.env.PORT || 8083,
    db: {
        database: process.env.DB_NAME || 'tab-tracker',
        user:     process.env.DB_USER || 'tab-tracker',
        password: process.env.DB_PASS || 'tab-tracker',
        options: {
            dialect: process.env.DIALECT ||'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite',
            logging: true
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
    
}
