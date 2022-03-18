const livros= require("../model/livros.json")

const getAll=(req,res)=>{
    console.log(req.url)
    res.status(200).send(livros)
}

const getByID=(req,res)=>{
    const id = req.params.id

    const livrofiltrado=livros.find(
        (livro)=>livro.id == id)
        res.status(200).send
        (livrofiltrado)
}

const getbyTitle =(req,res)=>{
    const titulo = req.params.titulo

    const livrofiltradoportitulo= livros.find((livro)=>livro.titulo==titulo)

    res.status(200).sed(livrofiltradoportitulo)
}

module.exports={getAll, getByID, getbyTitle}
