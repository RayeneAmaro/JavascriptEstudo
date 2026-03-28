import { rawlist, input } from '@inquirer/prompts'


let tarefas = [];
let sequencial= 1;


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
          name: "Remover",
          value: 'remover'
        },
        {
          name: "Listar",
          value: 'listar'
        },
        {
          name: "Concluir",
          value: 'concluir'
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

async function adicionarTarefa() {
  const tarefa = await input({message: 'Insira a nova tarefa: ', required: true});

  const novaTarefa = {
    id: sequencial++,
    nome: tarefa,
    concluida: false
  }

  tarefas.push(novaTarefa);

  console.log(`Tarefa "${tarefa}" adicionada com sucesso!`);
}

async function listarTarefa() {
  if(tarefas.length === 0){
    console.log('Nenhuma tarefa encontrada.');
  } else {
    tarefas.forEach(function(tarefa) {
      console.log(`${tarefa.concluida ? '[x]' : '[ ]'} ${tarefa.id} - ${tarefa.nome}`);
    });
  }
};

async function removerTarefa() {
  if(tarefas.length === 0) {
    console.log('Nenhuma tarefa encontrada.');
  } else {
      listarTarefa()
      
      const tarefa = await input({message: 'Insira o id da tarefa para remover: ', required: true});
      const tarefaId = Number(tarefa);

      const tarefaEncontrada = tarefas.find(function(tarefa){
        return tarefa.id === tarefaId;
      });

      if(tarefaEncontrada) {
        const tarefaRemovida = tarefas.filter(function(tarefaID){
          return tarefaID.id !== tarefaId;
        })

        tarefas = tarefaRemovida;

        console.log(`Tarefa com id ${tarefaId} - ${tarefaEncontrada.nome} removida com sucesso!`);
        listarTarefa();
      } else {
        console.log(`Tarefa ${tarefaId} não encontrada, verifique suas tarefas abaixo.`);
        await listarTarefa();
      }
  } 
}

async function concluirTarefa() {
  if(tarefas.length === 0){
    console.log('Nenhuma tarefa encontrada.');
  } else {
    listarTarefa();

    const tarefa = await input({message: 'Insira o id da tarefa concluida: ', required: true});
    const tarefaId = Number(tarefa)
    
    const tarefaEncontrada = tarefas.find(function(tarefa){
        return tarefa.id === tarefaId;
    })

    
    if(tarefaEncontrada) {
      tarefaEncontrada.concluida = true;
      await listarTarefa();
    } else {
      console.log(`Tarefa ${tarefaId} não encontrada, verifique suas tarefas abaixo.`);
      await listarTarefa();
    }
  }
}


let resposta;

do {
  resposta = await opcoes();

  switch(resposta){
    case 'adicionar':
      await adicionarTarefa(); 
      break;
    
    case 'listar':
      await listarTarefa();
      break;

    case 'remover':
      await removerTarefa();
      break;

    case 'concluir':
      await concluirTarefa();
      break;
    
    case 'sair':
      console.log('');
      break;
    
    default:
      console.log('Opção inválida');
    
    
  }

} while (resposta !== 'sair')
