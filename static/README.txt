Validação de E-mail

1. Estrutura do Projeto:
   - O arquivo index.html contém o formulário HTML para inserir o endereço de e-mail e vincula o script.js.
   - O arquivo script.js contém o código JavaScript para validar o endereço de e-mail.

2. Validação de E-mail:
   - A validação do endereço de e-mail é feita utilizando expressões regulares no JavaScript.
   - O padrão de regex verifica se o e-mail possui um formato válido.
   - Quando o formulário é enviado, o JavaScript verifica se o e-mail fornecido pelo usuário corresponde ao padrão definido.
   - Se o e-mail for válido, uma mensagem de alerta é exibida informando que o endereço de e-mail é válido; caso contrário, uma mensagem de alerta é exibida informando que o endereço de e-mail é inválido.

3. Sanitização de Dados:
   - No exemplo atual, a sanitização da entrada de dados não foi aplicada diretamente.
   - Entretanto, o uso do tipo de entrada "email" no HTML já fornece uma validação básica para garantir que o valor inserido seja um endereço de e-mail.
   - Além disso, o JavaScript valida o e-mail utilizando uma expressão regular, o que ajuda a garantir que apenas endereços de e-mail válidos sejam aceitos.
   - Para uma sanitização mais robusta, seria possível implementar uma função de limpeza de dados para remover qualquer entrada maliciosa ou indesejada, como caracteres especiais ou scripts.

