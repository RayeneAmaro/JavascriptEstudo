import { rawlist, input } from '@inquirer/prompts'

let tarefas = [];

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
    const tarefa = await input({ message: 'Insira a tarefa: ', required: true });
    
    const novaTarefa = {
        id: tarefas.length + 1,
        tarefa: tarefa,
        concluida: false
    }

    tarefas.push(novaTarefa);
    console.log('Tarefa adicionada com sucesso!');
}

async function listarTarefas() {

    if(tarefas.length === 0){
        console.log("Nenhuma tarefa encontrada!");
    } else {
        tarefas.forEach((tarefa, index) => {
      const icone = tarefa.concluida ? '✅' : '❌';
      
      console.log(`${icone} ${index + 1} - ${tarefa.tarefa}`);
    });
    
    console.log("======================\n");
  }
}

async function removerTarefa(){
  if(tarefas.length === 0){
    console.log("Nenhuma tarefa encontrada!");
  } else {
    await listarTarefas();
    const tarefa = await input({message: 'Insira o ID da tarefa que será removida: ', required: true});
    const tarefaRemovida = Number(tarefa) - 1;
    tarefas.splice(tarefaRemovida, 1)
    console.log('Tarefa removida com sucesso!');
  }
}

async function concluirTarefa(){
  if(tarefas.length === 0){
    console.log("Nenhuma tarefa encontrada!");
  } else {
    await listarTarefas();
    const tarefa = await input({message: 'Insira o ID da tarefa que será concluída: ', required: true})
    tarefas[tarefa-1].concluida = true;
    console.log('Tarefa concluída com sucesso!');
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
        await listarTarefas();
        break;
    
    case 'remover':
        await removerTarefa();
        break;

    case 'concluir':
        await concluirTarefa();
        break;

      default:
        console.log('');
    
  }

} while (resposta !== 'sair');
