const { listaEmails } = require('./cadastro');

function atualizacaoUsuarios(menu, prompt, usuarios) {
    if (usuarios.length === 0) {
        console.log('\nNenhum usuário cadastrado.')
        prompt('Pressione enter para retornar ao menu. ')
        return menu();
    }

    console.log('\n-----USUÁRIOS-----');
    usuarios.forEach(usuario => {
        console.log(`ID: ${usuario.ID}, Nome: ${usuario.nome}`)
    });

    const idParaAtualizar = prompt('\nDigite o ID do usuário que deseja atualizar: ')
    const usuarioIndex = usuarios.findIndex(usuario => usuario.ID == idParaAtualizar)

    if (usuarioIndex === -1) {
        console.log('\nUsuário não encontrado. Tente novamente.');
        return atualizacaoUsuarios(menu, prompt, usuarios);
    }

    const usuario = usuarios[usuarioIndex]

    const novoNome = prompt('Digite o novo nome do usuário: ');
    if (novoNome.trim() !== '') {
        usuario.nome = novoNome;
    } else {
        console.log('Nome inválido. Voltando ao menu...');
        return menu();
    }

    console.log('Telefones atuais:', usuario.telefonesUsuario.join(', ') || 'Nenhum');
    console.log('1. Adicionar telefone');
    console.log('2. Remover telefone');
    const escolhaTelefone = prompt('Digite sua escolha: ');

    switch (escolhaTelefone) {
        case '1':
            const novoTelefone = prompt('Digite o novo telefone para adicionar: ');
            if (novoTelefone.trim() !== '' && !isNaN(novoTelefone)) {
                usuario.telefonesUsuario.push(novoTelefone);
                console.log('Telefone adicionado com sucesso!');
            } else {
                console.log('Telefone inválido.Tente novamente.');
                atualizacaoUsuarios(menu, prompt, usuarios)
            }
            break;

        case '2':
            if (usuario.telefonesUsuario.length === 0) {
                console.log('O usuário não possui telefones para remover.');
            } else {
                const telefoneParaRemover = prompt('Digite o telefone que deseja remover: ');
                const indexTelefone = usuario.telefonesUsuario.indexOf(telefoneParaRemover);
                if (indexTelefone > -1) {
                    usuario.telefonesUsuario.splice(indexTelefone, 1)
                    console.log('Telefone removido com sucesso!')
                } else {
                    console.log('Telefone não encontrado. Tente novamente.')
                    atualizacaoUsuarios(menu, prompt, usuarios)
                }
            }
            break;

        default:
            console.log('Opção inválida. Tente novamente.');
            atualizacaoUsuarios(menu, prompt, usuarios)
    }

   const novoEmail = prompt('Digite o novo email do usuário: ');
    if (novoEmail.trim() !== '') {
    const indexEmailAntigo = listaEmails.indexOf(usuario.emailAtual?.toLowerCase())
    if (indexEmailAntigo > -1) {
        listaEmails.splice(indexEmailAntigo, 1);
    }

    if (listaEmails.includes(novoEmail.toLowerCase())) {
        console.log('Este email já foi cadastrado. Tente novamente.');
        atualizacaoUsuarios(menu, prompt, usuarios);
    } else {
        usuario.emailAtual = novoEmail;
        listaEmails.push(novoEmail.toLowerCase());
    }
}

    console.log('\nUsuário atualizado com sucesso!');

    prompt('Pressione enter para retornar ao menu. ');
    return menu()
}

module.exports = atualizacaoUsuarios;
