const Sequelize = require("sequelize")

const sequelize = new Sequelize('blog_app', 'root', '061145', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(() => console.log("Banco de dados conectado com sucesso!"))
    .catch((erro) => console.error("Erro ao se concetar ao banco: ", erro))


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}