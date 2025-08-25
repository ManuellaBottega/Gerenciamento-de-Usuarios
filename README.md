Gerenciamento de usuarios
- Menu principal:
O menu deve ser exibido ao iniciar o programa e apresentar as cinco opções disponíveis: Cadastrar, Listar, Atualizar, Remover e Sair.
O sistema deve solicitar que o usuário digite o número correspondente à ação desejada e tratar opções inválidas, exibindo uma mensagem de erro e retornando ao menu.

- Cadastro de usuarios:
Nome: O nome não pode ser vazio.
Telefone: O telefone não pode ser vazio e deve conter apenas números, e deve ser possível cadastrar mais de um telefone para o mesmo usuário.
Email: O email não pode ser vazio e o sistema deve impedir o cadastro de emails duplicados.
ID do Usuário: Um ID único deve ser gerado para cada usuário.
Após cada cadastro, o sistema deve perguntar se deve cadastrar outro usuário ou voltar ao menu.

- Listagem de usuarios:
O sistema deve exibir todos os usuários cadastrados, mostrando o ID, nome, telefones e email.
Após listar, o sistema deve perguntar se deve voltar ao menu.

- Atualização de usuarios:
Se não houver usuários cadastrados, o sistema deve exibir uma mensagem informando que não há usuários para atualizar, e se tiver deve listar os IDs
e nomes dos usuários, e então, solicitar o ID do usuário a ser atualizado, se o ID não seja encontrado, uma mensagem de erro deve ser exibida.
Atualização de Nome: O novo nome do usuário não pode ser vazio.
Atualização de Telefone: O usuário deve escolher se deseja adicionar ou remover um telefone. Se escolher adicionar, o novo telefone não pode ser vazio e
deve conter apenas números, e se remover, o sistema deve verificar se o telefone a ser removido existe na lista do usuário antes de remover.
Atualização de Email: O novo email não pode ser vazio. O sistema deve verificar se o novo email nao está duplicado.
Após cada atualização, o sistema deve perguntar se deve voltar ao menu.

- Remoção de usuarios:
Se não houver usuários cadastrados, o sistema deve exibir uma mensagem informando que não há usuários para remover, e se tiverdeve listar os IDs
e nomes dos usuários, e então, solicitar o ID do usuário a ser removido, se o ID não seja encontrado, uma mensagem de erro deve ser exibida. Antes de remover,
o sistema deve pedir uma confirmação (s/n).
Após cada remoção, o sistema deve perguntar se deve voltar ao menu.
