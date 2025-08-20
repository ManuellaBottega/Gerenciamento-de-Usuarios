const prompt = require ('prompt-sync')()

const cadastroUsuarios = require ('./cadastro')
const listarUsuarios = require ('./listagem')
const atualizacaoUsuarios = require ('./atualizacao')
const remocaoUsuarios = require ('./remocao')

let usuarios = []

function menu () {
    console.log ('\n----- GERENCIAMENTO DE USUÁRIOS -----')
    console.log ('\n1. Cadastrar usuário')
    console.log ('2. Listar usuarios')
    console.log ('3. Atualizar usuario')
    console.log ('4. Remover usuario')
    console.log ('5. Sair\n')

    let escolha = prompt('Digite o numero correspondente a ação que deseja executar: ')
    switch (escolha) {
        case '1':
            cadastroUsuarios (menu, prompt, usuarios)
            break
        case '2':
            listarUsuarios (menu, prompt, usuarios)
            break
        case '3':
            atualizacaoUsuarios (menu, prompt, usuarios)
            break
        case '4':
            remocaoUsuarios (menu, prompt, usuarios)
            break
        case '5':
            console.log('Fim do gerenciamento.') 
            break
        default:
            console.log('Opção inválida.')
            console.log ('Pressione enter para retornar ao menu. ')
            let voltarMenu = prompt ('')
            if (voltarMenu == '') {
                menu()
            }
    }
}

menu()

module.exports = menu