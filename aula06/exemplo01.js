class Livro{
    constructor(pNome){
        this.Nome = pNome;
    }
    get Nome() {return this.Nome;}
    set Nome(pNome) {this.nome = pNome;}
}

var obj_livro1 = new Livro("Use a cabeça java");
console.log("Nome do Livro: " + obj_livro1.nome);