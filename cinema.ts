import { rawlist, input } from '@inquirer/prompts'

let filmes = [
    {
        id: 1,
        titulo: "O Poderoso Chefão",
        genero: "Drama",
        ano: 1972
    },
    {
        id: 2,
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        genero: "Fantasia",
        ano: 2001
    },
    {
        id: 3,
        titulo: "Pulp Fiction",
        genero: "Ficção",
        ano: 1994
    },
    {
        id: 4,
        titulo: "O Exorcista",
        genero: "Terror",
        ano: 1973
    },
    {
        id: 5,
        titulo: "A Origem",
        genero: "Ficção",
        ano: 2010
    },
    {
        id: 6,
        titulo: "O Iluminado",
        genero: "Terror",
        ano: 1980
    },
    {
        id: 7,
        titulo: "Harry Potter e a Pedra Filosofal",
        genero: "Fantasia",
        ano: 2001
    },
    {
        id: 8,
        titulo: "Forrest Gump",
        genero: "Drama",
        ano: 1994
    },
    {
        id: 9,
        titulo: "Crepúsculo",
        genero: "Fantasia",
        ano: 2008
    },
    {
        id: 10,
        titulo: "O Sexto Sentido",
        genero: "Terror",
        ano: 1999
    }
]

async function opcoes() {
  const lista = await rawlist(
    {
      message: "Escolha uma opção abaixo",
      default: 'buscar',
      choices: [
        {
          name: "Buscar por nome do Filme",
          value: 'filme'
        },
        {
          name: "Filtrar por Gênero",
          value: 'genero'
        },
        {
            name: "Filtrar por Ano",
            value: 'ano'
        },
        {
          name: "Listar",
          value: 'listar'
        },
        {
          name: "Sair",
          value: 'sair'
        },
      ]
    },
  )

  return lista;
}

async function listarNomesFilmes(){
    console.log('--- LISTA DE FILMES ---');

    filmes.forEach(filme => {
        console.log(`${filme.titulo}`);
    })
}

async function listarAnoFilmes(){
    console.log('--- ANOS DISPONÍVEIS ---');

    const todosAnos = filmes.map(filme => filme.ano);
    let anosUnicos = [...new Set(todosAnos)];

    anosUnicos.sort((a,b) => a - b);

    anosUnicos.forEach( ano => {
        console.log(`${ano}`);
    })
}

async function listarGeneros(){
    console.log('--- GÊNEROS DISPONÍVEIS ---');

    const todosGeneros = filmes.map(filme => filme.genero);
    let generosUnicos = [...new Set(todosGeneros)];

    generosUnicos.forEach(genero => {
        console.log(`${genero}`);
    })
    
}

async function buscarFilme(){
    
    await listarNomesFilmes();

    const busca = await input({message: 'Digite o nome do filme: ', required: true});

    const filmeEncontrado = filmes.filter(filme => filme.titulo.toLowerCase().includes(busca.toLowerCase()));

    if(filmeEncontrado.length > 0){
        filmeEncontrado.forEach(filme => {
        console.log(`Filme: ${filme.id} - ${filme.titulo} | Gênero: ${filme.genero} | Ano: ${filme.ano}`);
        })
    } else {
        console.log(`Filme '${busca}' não encontrado`);
    }
}

async function filtrarPorGenero(){

    await listarGeneros();
    const generoBusca = await input({message: 'Digite o gênero buscado: ', required: true});

    const filmesFiltrados = filmes.filter(filme => filme.genero.toLowerCase() === generoBusca.toLowerCase());

    if(filmesFiltrados.length){
        console.log(`--- FILMES DO GÊNERO ${generoBusca.toUpperCase()} ---`);
        filmesFiltrados.forEach(filmes => {
            console.log(`${filmes.id} - ${filmes.titulo} - ${filmes.ano}.`);
        })
    } else {
        console.log(`Nenhum filme do gênero '${generoBusca}' encontrado`);
    }
}

async function filtrarPorAno(){
    
    await listarAnoFilmes();

    const anoBusca = await input({message: 'Digite o ano para filtrar: ', required: true});

    const filmesFiltrados = filmes.filter(filme => filme.ano === parseInt(anoBusca));

    if(filmesFiltrados.length){
        console.log(`--- FILMES DO ANO ${anoBusca} ---`);
        filmesFiltrados.forEach(filmes => {
            console.log(`${filmes.id} - ${filmes.titulo} - ${filmes.genero}.`);
        })
    } else {
        console.log(`Nenhum filme do ano ${anoBusca} encontrado`);
    }
} 

async function listarFilmes(){
    console.log('--- LISTA DE FILMES ---');

    filmes.forEach(filme => {
        console.log(`${filme.id} - ${filme.titulo} - ${filme.genero}, ${filme.ano}.`);
    })
}


let resposta;

do {
  resposta = await opcoes();

  switch(resposta){
    case 'filme':
      await buscarFilme(); 
      break;
     
    case 'genero':
        await filtrarPorGenero();
        break;

    case 'ano':
        await filtrarPorAno();
        break;
    case 'listar':
        await listarFilmes();
        break;
    
    case 'sair':
      console.log('');
      break;
    
    default:
      console.log('Opção inválida');
    
    
  }

} while (resposta !== 'sair')