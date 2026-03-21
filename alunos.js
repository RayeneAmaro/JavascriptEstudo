import { rawlist, input } from '@inquirer/prompts'

let alunos = [
  {
    id: 1,
    nome: "Douglas Amaro",
    idade: 18
  },
  {
    id: 2,
    nome: "Rayene Alves",
    idade: 729
  },
  {
    id: 3,
    nome: "Beatriz Alves",
    idade: 11
  },
  {
    id: 4,
    nome: "Bianca Alves",
    idade: 8
  },
];

async function opcoes() {

  const lista = await rawlist(
    {
      message: "Escolha uma opção abaixo",
      default: 'adicionar',
      choices: [
        {
          name: "Adicionar",
          value: 'adicionar'
        },
        {
          name: "Alterar",
          value: 'alterar'
        },
        {
          name: "Remover",
          value: 'remover'
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


async function adicionarAluno(){
    const aluno = await input({ message: 'Insira o nome do novo aluno: ', required: true });
    const idade = await input({ message: 'Insira a idade do aluno: ', required: true });

    const novoAluno = {
      id: alunos.length + 1,
      nome: aluno,
      idade: Number(idade)
    };

    alunos.push(novoAluno)

    console.log(`Aluno adicionado com sucesso!`)
}

async function alterarAluno(){
    const alunoAlterado = await input({ message: 'Insira o id do aluno a ser alterado: ', required: true })
    const alteracao = await input({ message: 'Insira o número do que deseja alterar: [1] Nome     [2] Idade', required: true })

    // Buscar aluno pra alteração
    const alunoEncontrado = alunos.find(aluno => aluno.id === Number(alunoAlterado));

    // novos dados
    if (alteracao === '1') {

      const nomeAntigo = alunoEncontrado.nome;
      const aluno = await input({ message: 'Insira o novo nome: ', required: true });
      alunoEncontrado.nome = aluno;
      console.log(`Nome do aluno atualizado de ${nomeAntigo} para: ${aluno}`);

    } else if (alteracao === '2') {

      const idadeAntiga = alunoEncontrado.idade;
      const idade = await input({ message: 'Insira a nova idade: ', required: true });
      alunoEncontrado.idade = Number(idade);
      console.log(`Idade do aluno atualizada de ${idadeAntiga} para: ${idade}`);

    } else {

      console.log('Opção invalida')

    }
}

async function removerAluno(){
  const alunoRemovido = await input({ message: 'Insira o id do aluno a ser removido: ', required: true });

    // buscar aluno
    const alunoAntesRemover = alunos.find(aluno => aluno.id === Number(alunoRemovido));

    const nomeAntesRemover = alunoAntesRemover.nome;

    // remover aluno
    let novosAlunos = alunos.filter(aluno => aluno.id !== Number(alunoRemovido));
    alunos = {...novosAlunos}

    console.log(`Aluno ${nomeAntesRemover} foi removido com sucesso!`)
}

async function listarAluno() {
      console.log(alunos);
}


let resposta;

do {
  resposta = await opcoes();

  switch(resposta){
    case 'adicionar':
      await adicionarAluno();
      break

    case 'alterar':
      await alterarAluno();
      break;
    
    case 'remover':
      await removerAluno();
      break;

    case 'listar':
      await listarAluno();
      break;

    default:
      console.log('');
      break;
  }

} while (resposta !== 'sair');
