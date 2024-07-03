const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
})

let animes = []
let notaAnime
exibirMenu()

function exibirMenu(){
    console.log(`
    Menu:
    1. Cadastrar anime
    2. Listar animes cadastradas
    3. Anime com melhor avaliação
    4. Editar anime
    5. Remover anime
    6. Sair
    `)

    rl.question('Escolha uma opção: ', (opcao) => {
        switch(opcao){
            case '1':
                cadastrarAnime()
                break
            case '2':
                listarAnimes()
                break
            case '3':
                melhorAvaliação()
                break
            case '4':
                editarAnime()
                break
            case '5':
                removerAnime()
                break
            case '6':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente')
                exibirMenu()
                break
        }
    })
}

function cadastrarAnime(){
    rl.question('Digite o nome do anime: ', (nome) => {
        rl.question('Uma nota de 1 a 10 para o anime escolhido:', (avaliacao) => {
            rl.question('Seu persogem preferido desse anime: ', (personagem) => {
                animes.push({nome: nome, avaliacao: parseFloat(avaliacao), personagem: personagem })
                console.log('Anime cadastrado com sucesso!')
                exibirMenu()
            })
        })
    })
}

function listarAnimes(){
    if(animes.length == 0){
        console.log('Nenhum anime cadastrado')
    } else {
        console.log('Lista de animes: ')
        animes.forEach((anime, index) => {
            console.log(`${index + 1}. Nome: ${anime.nome}.
    Avaliação: ${anime.avaliacao}/10.
    Personagem favorito: ${anime.personagem}.`)
        })
    }
    exibirMenu()
}

function melhorAvaliação(){
    if(animes.length == 0){
        console.log('Nenhum anime cadastrado')
    } else {
        notaAnime = animes[0]
        for(let i =0; i < animes.length; i++){
            if(animes[i].avaliacao > notaAnime.avaliacao){
                notaAnime = animes[i]
            }
        }
        console.log(`Nome: ${notaAnime.nome}.
Avaliação: ${notaAnime.avaliacao}/10
Personagem favorito: ${notaAnime.personagem}`)
    }
    exibirMenu()
}

function editarAnime(){
    if(animes.length == 0){
        console.log('Nenhum anime cadastrado')
    } else {
        console.log('Lista de animes: ')
        animes.forEach((anime, index) => {
            console.log(`${index +1}. Nome: ${anime.nome}.`)
        })
        rl.question('Digite o número do anime que deseja editar:', (numero) => {
            if(numero > 0 && numero <= animes.length){
                rl.question('Digite o novo nome: ', (nome) => {
                    rl.question('Digite a nova nota: ', (avaliacao) => {
                        rl.question('Digite o novo personagem favorito: ', (personagem) => {
                            animes[numero-1] = {
                                nome,
                                avaliacao,
                                personagem
                            }
                            console.log('Anime editado com sucesso')
                            exibirMenu()
                        })
                    })
                })
            } else {
                console.log('Número inválido, tente novamente')
                exibirMenu()
            }          
        })
    }
}

function removerAnime(){
    if(animes.length == 0){
        console.log('Nenhum anime cadastrado')
    } else {
        console.log('Lista de animes: ')
        animes.forEach((anime, index) => {
            console.log(`${index + 1}. ${anime.nome}.`)
        })
        rl.question('Digite o número do anime que deseja remover: ', (numero) => {
            if(numero > 0 && numero <= animes.length){
                animes.splice(numero-1,1)
                console.log('Elemento removido com sucesso!')
            } else {
                console.log('número inválido, tente novamente')
            }
            exibirMenu()
        })
    }
}












