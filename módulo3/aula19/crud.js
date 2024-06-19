const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let funcionarios = []
let salarioMaximo
exibirMenu()

function exibirMenu(){
    console.log(`
    Menu:;
    1. Cadastrar funcionário
    2. Listar funcionários cadastrados
    3. Funcionário com maio salário
    4. Editar funcionário
    5. Excluir funcionário
    6. Sair
    `)

    rl.question('Escolha uma opção: ', (opcao) => {
        switch(opcao){
            case '1':
                cadastrarFuncionario()
                break
            case '2':
                listarFuncionarios()
                break
            case '3':
                maiorSalario()
                break
            case '4':
                editarFuncionario()
                break
            case '5':
                removerFuncionario()
                break
            case '6':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')
                exibirMenu()
                break
        }
    })
}

function cadastrarFuncionario(){
    rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function listarFuncionarios(){
    if(funcionarios.length == 0){
        console.log('Não há nenhum funcionário cadastrado')
    } else {
        console.log('Lista de funcionários: ')
        funcionarios.forEach((funcionarios, index) => {
            console.log(`${index + 1}. Nome: ${funcionarios.nome}. 
    Cargo: ${funcionarios.cargo}.
    Salário: R$${funcionarios.salario.toFixed(2)}`)
        })
    }
    exibirMenu()
}

function maiorSalario(){
    if(funcionarios.length == 0){
        console.log('Não há nenhum funcionário cadastrado')
    } else {
        salarioMaximo = funcionarios[0]
        for(let i = 0; i < funcionarios.length; i++){
            if(funcionarios[i].salario > salarioMaximo.salario){
            salarioMaximo = funcionarios[i]
            }
        }
        console.log(`Nome: ${salarioMaximo.nome}
Cargo: ${salarioMaximo.cargo}
Salário: R$${salarioMaximo.salario.toFixed(2)}`)
    }
    exibirMenu()
}

function editarFuncionario(){
    if(funcionarios.length == 0){
        console.log('Não há nenhum funcionário cadastrado')
        exibirMenu()
    } else {
        console.log(`Lista de funcionários: `)
        funcionarios.forEach((funcionario, index) => {
            console.log(`${index + 1}. Nome: ${funcionario.nome}.`)
        })
        rl.question('Digite o número do funcionário que deseja editar: ', (numero) => {
            if(numero > 0 && numero <= funcionarios.length){
                rl.question('Digite o novo nome: ', (nome) => {
                    rl.question('Digite o novo cargo: ', (cargo) => {
                        rl.question('Digite o novo salário: ', (salario) => {
                            funcionarios[numero-1] = {
                                nome,
                                cargo,
                                salario
                            }
                            console.log('Funcionário editado com sucesso!')
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

function removerFuncionario(){
    if(funcionarios.length == 0){
        console.log('Não há nenhum funcionário cadastrado')
    } else {
        console.log('Lista de funcionarios: ')
        funcionarios.forEach((funcionario, index) => {
            console.log(`${index + 1}. ${funcionario.nome}.`)
        })
        rl.question('Digite o número do funcionário que deseja remover: ', (numero) => {
            if(numero > 0 && numero <= funcionarios.length) {
                funcionarios.splice(numero-1, 1)
                console.log('Elemento removido com sucesso!')
                exibirMenu()
            } else {
                console.log('Número inválido, tente novamente')
                exibirMenu()
            }
        })
    }
}