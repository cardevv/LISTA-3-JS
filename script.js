    // EX1 
    
    const cores = [
        "red",
        "blue",
        "green"
]



function mudaCor (cores) {
    
const li = document.querySelectorAll("li");



cores.map((cor,i) => {
  if(li[lista]) {
            li[i].style.backgroundColor = cor;
  }



}
)
 }
mudaCor(cores);

// EX 2


// EX3





// EX4


function juntarDivs ( ) {

    const divs = document.querySelectorAll("div");

    const textoTotal = [...divs].reduce((acc,div) => {

        return acc.concat("" + div.textContent);

    }, "");


    const p = document.createElement("p");
    p.textContent = textoTotal;
    document.body.appendChild(p);


}

juntarDivs();


// EX 5

const alunos = [
    {
        nome: "ana", nota: 9
    },
    {
        nome: "carlos", nota: 6
    },
    {
        nome: "sabrina", nota: 1,
    }
];


function listaAprovados() {

    const aprovados = alunos.filter(aluno => aluno.nota >= 7);

    const ul = document.createElement("ul");


    aprovados.map(aluno => {

        const li = document.createElement("li");
        li.textContent = aluno.nome;
        ul.appendChild(li);


    });


    document.body.appendChild(ul);
}

listaAprovados();

// EX 6

const produtos = [
  { nome: "Monitor", preco: 800, quantidade: 4 },
  { nome: "Teclado", preco: 150, quantidade: 3 },
  { nome: "Mouse", preco: 90, quantidade: 8 },
  { nome: "Notebook", preco: 3500, quantidade: 2 }
];


function calcularEstoque() {

    const selecionados = produtos.filter(produto => produto.quantidade > 5);

    const total = selecionados.reduce((acc, produto) => acc + (produto.preco * produto.quantidade), 0);

    const p = document.createElement("p");

    p.textContent = `Valor total do estoque (quantida > 5): R$ ${total}`
    document.body.appendChild(p);
}

calcularEstoque();