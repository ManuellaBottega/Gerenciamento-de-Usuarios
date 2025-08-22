function remocaoUsuarios(menu, prompt, usuarios) {
    if (usuarios.length === 0) {
        console.log('\nNenhum usuário cadastrado para remover.');
        console.log ('Pressione enter para retornar ao menu. ')
        let voltarMenu = prompt ('')
        if (voltarMenu == '') {
            menu()
        }
    }

    console.log('\n-----USUARIOS-----')
    usuarios.forEach(usuario => {
        console.log(`ID: ${usuario.ID}, Nome: ${usuario.nome}`)
    });

    const idParaRemover = prompt('Digite o ID do usuário que deseja remover: ')

    const usuarioIndex = usuarios.findIndex(usuario => usuario.ID == idParaRemover)

    if (usuarioIndex === -1) {
        console.log('\nUsuário não encontrado. Tente novamente.')
    } else {
        const usuario = usuarios[usuarioIndex]
        const confirmacao = prompt(`Tem certeza que deseja remover o usuário ${usuario.nome}? (s/n) `)

        if (confirmacao.toLowerCase() === 's') {
            usuarios.splice(usuarioIndex, 1)
            console.log('Usuário removido com sucesso!')
        } else {
            console.log('Remoção cancelada.')
        }
    }

    console.log ('Pressione enter para retornar ao menu. ')
    let voltarMenu = prompt ('')
    if (voltarMenu == '') {
        menu()
    }
}

module.exports = remocaoUsuarios