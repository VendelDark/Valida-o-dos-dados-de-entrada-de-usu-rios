document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    // const cpfCnpj = document.getElementById("cpfCnpj").value;
    // const cidade = document.getElementById("cidade").value;
    // const estado = document.getElementById("estado").value;
    const telefone = document.getElementById("telefone").value;

    // Realiza as validações
    if (!validarNome(nome)) {
        exibirMensagem("Nome inválido!");
        return;
    }

    if (!validarEmail(email)) {
        exibirMensagem("E-mail inválido!");
        return;
    }

    if (!validarSenha(senha)) {
        exibirMensagem("A senha deve conter pelo menos 6 caracteres!");
        return;
    }

    // if (!validarCpfCnpj(cpfCnpj)) {
    //     exibirMensagem("CPF ou CNPJ inválido!");
    //     return;
    // }

    // if (!validarCidade(cidade)) {
    //     exibirMensagem("Cidade inválida!");
    //     return;
    // }

    // if (!validarEstado(estado)) {
    //     exibirMensagem("Estado inválido!");
    //     return;
    // }

    if (!validarTelefone(telefone)) {
        exibirMensagem("Telefone inválido!");
        return;
    }

    // Se todas as validações passaram, exibe mensagem de sucesso
    exibirMensagem("Cadastro realizado com sucesso!");
});

// Funções de validação

function validarNome(nome) {
    // Valida se o nome contém apenas letras e espaços
    const regex = /^[a-zA-ZÀ-ÿ\s]+$/;
    return regex.test(nome);
}

function validarEmail(email) {
    // Valida o formato do e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarSenha(senha) {
    // Valida se a senha tem pelo menos 6 caracteres
    return senha.length >= 6;
}

// function validarCpfCnpj(cpfCnpj) {
//     // Implemente a validação de CPF ou CNPJ conforme suas necessidades
//     return true; // Exemplo: Sem implementação, sempre retorna true
// }

// function validarCidade(cidade) {
//     // Valida se a cidade contém apenas letras e espaços
//     const regex = /^[a-zA-ZÀ-ÿ\s]+$/;
//     return regex.test(cidade);
// }

// function validarEstado(estado) {
//     // Valida se o estado contém apenas letras e está no formato de sigla (ex: SP, RJ)
//     const regex = /^[a-zA-Z]{2}$/;
//     return regex.test(estado);
// }

function validarTelefone(telefone) {
    // Implemente a validação de telefone conforme suas necessidades
    return true; // Exemplo: Sem implementação, sempre retorna true
}

function exibirMensagem(mensagem) {
    const mensagemElement = document.getElementById("mensagem");
    mensagemElement.textContent = mensagem;
}