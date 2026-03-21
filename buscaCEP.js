const cep = "21.521-200"

// remove os caracteres que nao sao aceitos
const cepTratado = cep.replace(/\D/g, "")

// Indica a quantidade de caracteres que deve ter
if (cepTratado.length === 8){

//criar uma função assincrona (async)

const buscaCEP = async(numeroCEP) => {

// colocar a url com o parametro e aguardar a resposta

    const url = `https://viacep.com.br/ws/${numeroCEP}/json/`;
const resposta = await fetch(url);

// converter para json

const dados = await resposta.json();

//fazer a descentralização

const { logradouro, bairro, localidade, uf, regiao } = dados;

// criar a condição pra não voltar 'undefined'

if (dados.erro === "true") {

    console.log(`CEP não existe`)

} else {

console.log(`--- Informações ---`)
console.log(`Rua: ${logradouro},
Bairro: ${bairro},
Cidade: ${localidade},
Estado: ${uf},
Região: ${regiao}`)

}}

// chamar a função

buscaCEP(cepTratado)

} else {
    console.log(`O CEP deve conter 8 caracteres númericos`)
}