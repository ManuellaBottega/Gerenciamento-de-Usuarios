const { listaEmails } = require ('./cadastro')

function atualizacaoUsuarios(menu, prompt, usuarios) {
    if (usuarios.length === 0) {
        console.log('\nNenhum usuário cadastrado.')
        console.log ('Pressione enter para retornar ao menu. ')
        let voltarMenu = prompt ('')
        if (voltarMenu == '') {
            menu()
        }
    }

    console.log('\n-----USUARIOS-----')
    usuarios.forEach(usuario => {
        console.log(`ID: ${usuario.ID}, Nome: ${usuario.nome}`)
    })

    const idParaAtualizar = prompt('\nDigite o ID do usuário que deseja atualizar: ')
    const usuarioIndex = usuarios.findIndex(usuario => usuario.ID == idParaAtualizar)

    if (usuarioIndex === -1) {
        console.log('\nUsuário não encontrado. Tente novamente.')
    } else {
        const novoNome = prompt('Digite o novo nome do usuário: ')
        if (novoNome.trim() !== '') {
            usuarios[usuarioIndex].nome = novoNome
        } else {
            console.log('Nome inválido. Tente novamente')
            atualizacaoUsuarios(menu, prompt, usuarios)
        }

        function telefones(prompt) {
            console.log('Telefones atuais:', usuario.telefonesUsuario.join(', '))
                console.log('1. Adicionar telefone')
                console.log('2. Remover telefone')
                const escolhaTelefone = prompt('Digite sua escolha: ')

                switch (escolhaTelefone) {
                    case '1':
                    const novoTelefone = prompt('Digite o novo telefone para adicionar: ')
                        if (novoTelefone.trim() !== '' && !isNaN(novoTelefone)) {
                            usuario.telefonesUsuario.push(novoTelefone)
                            console.log('Telefone adicionado com sucesso!')
                        } else {
                            console.log('Telefone inválido. Tente novamente')
                            telefones(prompt)
                        }
                    case '2':
                        if (usuario.telefonesUsuario.length === 0) {
                            console.log('O usuário não possui telefones para remover.')
                        } else {
                            const telefoneParaRemover = prompt('Digite o telefone que deseja remover: ')
                            const indexTelefone = usuario.telefonesUsuario.indexOf(telefoneParaRemover)
                            if (indexTelefone > -1) {
                                usuario.telefonesUsuario.splice(indexTelefone, 1)
                                console.log('Telefone removido com sucesso!')
                            } else {
                                console.log('Telefone não encontrado. Tente novamente')
                                telefones(prompt)
                            }
                    }
            }
        }

        const novoEmail = prompt('Digite o novo email do usuário: ')
        if (novoEmail.trim() !== '') {
            if (listaEmails.includes(novoEmail.toLowerCase())) {
                console.log('Este email já foi cadastrado. Tente novamente.')
                atualizacaoUsuarios(menu, prompt, usuarios)
            } else {
            usuarios[usuarioIndex].emailAtual = novoEmail
            }
        }

        console.log('\nUsuário atualizado com sucesso!');
    }

    console.log ('Pressione enter para retornar ao menu. ')
    let voltarMenu = prompt ('')
    if (voltarMenu == '') {
        menu()
    }
}


module.exports = atualizacaoUsuarios