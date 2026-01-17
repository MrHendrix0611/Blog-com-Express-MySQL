const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const multer = require("multer")
const path = require('path')
const Post = require('./models/Post')

app.use(express.static('src'))

const { engine } = require('express-handlebars')
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'src/uploads/')
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

app.use('/uploads', express.static(path.join(__dirname, 'src/uploads')))

app.get('/', function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts) {
        const plainPosts = posts.map(post => post.toJSON())
        res.render('home', {posts: plainPosts})
    }).catch(function(erro){
        res.send("Ocorreu um erro ao exbir o feed: " + erro)
    })
})

app.get('/criarPost', function(req, res){
    res.render('criarPost')
})

app.post("/processaDados", upload.single('imagem'), function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
        imagem: req.file ? req.file.filename : null  // CORREÇÃO AQUI!
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Ocorreu um erro: " + erro)
    })
})


app.listen(8081, function(){
    console.log("Servidor rodando na porta: 8081")
})