    // EX1 
    
    const cores = [
        "red",
        "blue",
        "green"
]



function mudaCor (cores) {
    
const li = document.querySelectorAll("li");



cores.map((cor,i) => {
  if(li[i]) {
            li[i].style.backgroundColor = cor;
  }



}
)
 }
mudaCor(cores);

// EX 2


function unfold(seed, func) {
  const result = [];
  let value = seed;

  while (value <= 1024) {
    result.push(value);
    value = func(value);
  }

  return result;
}

function gerarLista() {
  const numeros = unfold(1, n => n * 2);

 
  const ul = document.createElement("ul");

  numeros.map(num => {
    const li = document.createElement("li");
    li.textContent = num;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

gerarLista();



// EX3

function unfoldLista() {
  const lista = [];
  for (let i = 1; i <= 50; i++) lista.push(i);
  return lista;
}

function listarPares() {
  const numeros = unfoldLista();
  const pares = numeros.filter(n => n % 2 === 0);

  const ul = document.createElement("ul");

  pares.forEach(num => {
    const li = document.createElement("li");
    li.textContent = num;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

listarPares();






// EX4


function juntarDivs() {
  const divs = document.querySelectorAll("div");

  const textoTotal = [...divs].reduce((acc, div) => {
    return acc.concat(div.textContent);
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

    p.textContent = `Valor total do estoque (quantidade > 5): R$ ${total}`
    document.body.appendChild(p);
}

calcularEstoque();

