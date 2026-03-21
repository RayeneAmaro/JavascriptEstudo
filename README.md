# JavaScript Study Cases

Este repositório contém casos de estudo desenvolvidos durante o aprendizado da linguagem JavaScript. Cada arquivo representa um projeto prático para demonstrar conceitos e funcionalidades da linguagem.

## Autor
Rayene Amaro

## Descrição
Aprendendo JavaScript! Este projeto inclui exemplos de aplicações CLI, consumo de APIs e manipulação de dados.

## Casos de Estudo

### 1. Gerenciamento de Alunos (`alunos.js`)
Um sistema de gerenciamento de alunos via linha de comando usando a biblioteca `inquirer` para interações interativas.

**Funcionalidades:**
- Adicionar novo aluno
- Alterar nome ou idade de um aluno
- Remover aluno
- Listar todos os alunos
- Sair do programa

**Como executar:**
```bash
node alunos.js
```

### 2. Busca de CEP (`buscaCEP.js`)
Script para buscar informações de endereço a partir de um CEP brasileiro usando a API ViaCEP.

**Funcionalidades:**
- Validação do CEP (deve ter 8 dígitos)
- Consulta à API ViaCEP
- Exibição de logradouro, bairro, cidade, estado e região

**Como executar:**
```bash
node buscaCEP.js
```

### 3. Busca de Personagens de Harry Potter (`buscaHP.js`)
Aplicação que busca informações sobre personagens da saga Harry Potter usando a API HP-Api.

**Funcionalidades:**
- Busca por nome do personagem
- Exibição de espécie, casa, data de nascimento, patrono e ator/atriz

**Como executar:**
```bash
node buscaHP.js
```

## Dependências
- `inquirer`: Para prompts interativos no terminal
- `nodemon`: Para desenvolvimento (monitora mudanças nos arquivos)

Instale as dependências com:
```bash
npm install
```

## Scripts Disponíveis
- `npm start`: Executa o script `buscaHP.js` com nodemon
- `npm test`: (Não implementado)

## Como Contribuir
Este é um repositório pessoal para estudos. Sinta-se à vontade para explorar e aprender com os códigos!

## Licença
ISC