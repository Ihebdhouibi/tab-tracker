module.exports = (sequelize, DataTypes) => 
    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            //allowNull: {args :false , msg: 'Please enter your email '},
            //validate: {isEmail:{args: true, msg: 'Please enter a valide email '}},
            unique: {args: true,msg: 'Please enter a unique email '}
        },
        password: {
            type: DataTypes.STRING,
            //allowNull: false
    }
}
)