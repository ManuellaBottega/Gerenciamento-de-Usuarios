let listaEmails = []

function cadastroUsuarios (menu, prompt, usuarios){
    const nome = prompt('Digite o nome do usuario: ')
    if (nome.trim() === '') {
        console.log('nome invalido\n')
        cadastroUsuarios(menu, prompt)
    }

    let telefonesUsuario = []

    function telefones(prompt) {
        
        const telefone = prompt('Digite o telefone do usuario: ')
        if (telefone.trim() === '' || isNaN(telefone)) {
            console.log('telefone invalido\n')
            telefones(prompt)
        } else {
            telefonesUsuario.push(telefone)

            console.log('Telefone cadastrado com sucesso!')
            respostaTelefone = prompt ('Deseja cadastrar outro telefone? (s/n) ')
            if (respostaTelefone.toLowerCase() === 's') {
                telefones(prompt)
            }
        }
    }
    telefones(prompt)

    let emailAtual

    function emailCadastro() {
    const emailUsuario = prompt('Digite seu email: ')
    if (listaEmails.includes(emailUsuario)) {
            console.log('Este email já esta cadastrado! Digite outro.')
            emailCadastro()
    } else if (emailUsuario === '') {
            console.log('Email invalido! Tente novamente.')
            emailCadastro()
    } else {
            emailAtual = emailUsuario
            listaEmails.push(emailAtual)
    }
    }

    emailCadastro()

    const usuario = {
        nome,
        telefonesUsuario,
        emailAtual,
        ID: Date.now()
        }
        
    usuarios.push(usuario)

    respostaCadastro = prompt('Deseja cadastrar outro usuario? (s/n) ')
    if (respostaCadastro.toLowerCase() === 's') {
        cadastroUsuarios(menu, prompt, usuarios)
    } else {
        console.log ('Pressione enter para retornar ao menu. ')
        let voltarMenu = prompt ('')
        if (voltarMenu == '') {
            menu()
        }
    }

    
}

module.exports = {
    cadastroUsuarios, 
    listaEmails
}