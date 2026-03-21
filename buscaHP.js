let nomePersonagem = "Severus Snape"

const buscaPersonagem = async (Personagem) => {
    const url = `https://hp-api.onrender.com/api/characters`;
    const resposta = await fetch(url);
    const listaPersonagens = await resposta.json();

    const dados = listaPersonagens.find(item => item.name === Personagem)

    if(dados){
        const {name, species, house, dateOfBirth, patronus, actor, gender} = dados;

        console.log(`
        Nome: ${name},
        Espécie: ${species || "não informado"},
        Casa: ${house || "não informado"},
        Aniversário: ${dateOfBirth || "não informado"},
        Patrono: ${patronus || "não informado"},
            `)

            if (gender==="female"){
                console.log(`Atriz: ${actor || "não informado"}`)
            } else {
                console.log(`Ator: ${actor || "não informado"}`)
            }
    } else {
        console.log("Personagem não encontrado")
    }
}

buscaPersonagem(nomePersonagem)