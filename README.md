# Desafio TDSA

- [x] Criar uma tela com um grid e alguns filtros.
- [x] Usar os endpoints para poder fazer as requisições: https://jsonplaceholder.typicode.com/
- [x] Cada linha da tabela tem que der um botão de editar e excluir.
- [x] A inserção deve ser feita a partir de um botão que quando clicado deve abrir um modal. O header do modal deve ter um
      titulo dizendo se esta editando ou inserindo um novo item.
- [x] O footer do modal deve ter um botao de fechar, salvar e um salvar e continuar.
- [x] O botao fechar, fecha o modal.
- [x] O de salvar irá fazer submit no form e fechar o modal.
- [ ] O de salvar e continuar ira salvar, limpar os campos e continuar no modal.
- [ ] O modal deve ter 2 forms, sendo o 1º o form principal e o 2º como form secundário.
- [ ] O 2º form deve ter os campos, uma tabela e um botão de inserir.
- [ ] Quando clicar no botão de inserir do segundo form, caso não esteja fazendo uma edição, o mesmo deverá salvar o 1º
      form e só então poderá salvar o 2º form. Caso esteja fazendo uma edição, poderá salvar normalmente.
- [ ] Para cada inserção do segundo form, os campos serão limpos e uma linha sera inserida na tabela.
- [ ] Para poder inserir o 2º form, deve conter o ID do 1º form. Ou seja, quando estiver editando deverá conter o ID
      da edição e quando for inserção, deverá conter o ID retornado da API de inserção.
- [ ] Ao salvar e continuar, deverá limpar todos os campos do primeiro form e do segundo form (a tabela também).
- [ ] Ao fechar o modal, todos os dados que estavam no modal devem ser limpos para quando abrir o modal novamente vir zerado.

Exemplo pratico com as API's do jsonplaceholder:

- [ ] O 1º form será o "POST" e o 2º form os "COMMENTS". Ao abrir o modal para inserção, o usuário irá preencher os
      dados "TITLE" e "BODY". Após preencher, irá no form de "COMMENTS" e irá preencher os campos de
      "NAME", "EMAIL" e "BODY". Ao clicar para inserir um comentário, irá primeiro salvar o post, depois irá pegar o
      ID retornado e irá salvar o comentário passando o "POSTID" o ID retornado e então irá salvar o comentário.
      Ao salvar o comentário irá inserir uma linha na tabela, limpar os campos do comentário e irá manter os do
      post, pois será possível inserir vários comentários.

- [ ] Quando estiver editando um post, será possível inserir comentários também, porém se o usuário não
      modificar nada do form do POST não será necessário fazer a chamada de edição, pois o form já tem um "POSTID"
      que é o ID da edição,
      caso o usuário modifique o form do POST, será necessário chamar a API de edição do post antes de inserir um novo comentário.

- [ ] O botão de salvar / salvar e continuar do modal irá submeter somente o 1º form (POST) e não irá influenciar o 2º form (COMMENTS).

O que usar?

- [x] React, react hooks e react context;
- [x] Fetch (não utilizar Axios)
- [x] Javascript (Typescript é diferencial, não usamos no projeto)
- [x] MaterialUI
- [ ] React-hook-form ou Formik
- [ ] Redux (se necessário)
- [x] Styled-components ou SCSS
- [x] Fazer commits constantes, para cada feature
- [ ] Teste automatizado (Jest + React Testing Library) (Não precisa cobrir o projeto com testes, mas faça alguns
      para poder avaliar seus conhecimentos)

Diferenciais:

- [x] Conseguir fazer modificações nos componentes do MaterialUI com o makeStyle (não utilizar withStyle)
- [x] Responsividade em telas pequenas e grandes.
- [ ] Criar hooks personalizados
- [x] Reutilizar códigos
- [x] Não utilizar ClassComponent / PureComponent
- [ ] Traduções entre idiomas, se fizer 1 só já vale, o importante é saber usar (usar a biblioteca react-i18next)
- [x] Ser criativo nas interfaces
- [ ] Fazer um tema de cores com styled components
