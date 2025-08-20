function listarUsuarios(menu, prompt, usuarios) {
    console.log('-----USUARIOS-----\n')
    usuarios.forEach(usuario => {
    console.log(`ID: ${usuario.ID}, Nome: ${usuario.nome}, Telefones:
    ${usuario.telefonesUsuario}, Email: ${usuario.emailAtual}\n`);
    });

    console.log ('Pressione enter para retornar ao menu. ')
    let voltarMenu = prompt ('')
    if (voltarMenu == '') {
        menu()
    }
}

module.exports = listarUsuarios