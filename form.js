// const form = document.getElementById('cadastroForm');
// const senhaInput = document.getElementById('senha');
// const confirmarSenhaInput = document.getElementById('confirmarSenha');
// const ruleLength = document.getElementById('ruleLength');
// const ruleSpecial = document.getElementById('ruleSpecial');
// const passwordMatch = document.getElementById('passwordMatch');

// senhaInput.addEventListener('input', function () {
//     validarSenha(senhaInput.value);
// });

// confirmarSenhaInput.addEventListener('input', function () {
//     verificarSenhas(senhaInput.value, confirmarSenhaInput.value);
// });

function validarSenha(senha) {
    let senhaValida = true;

    // Verifica se a senha tem pelo menos 3 caracteres
    if (senha.length >= 3) {
        //validationMessage.textContent = "Senha válida";
        //validationMessage.style.color = "green";
    } else {
        //validationMessage.textContent = "Senha inválida";
        //validationMessage.style.color = "red";
        senhaValida = false;
    }

    // Verifica se a senha tem pelo menos um caractere especial
    const caracteresEspeciais = /[!@#$%^&*]/;
    if (caracteresEspeciais.test(senha)) {
        //ruleSpecial.classList.add('Senha válida.');
        //ruleSpecial.classList.remove('Senha inválida.');
    } else {
        //ruleSpecial.classList.add('Senha inválida.');
        //ruleSpecial.classList.remove('Senha válida.');
        senhaValida = false;
    }

    return senhaValida;
}

function verificarSenhas(senha, confirmarSenha) {
    if (senha === confirmarSenha) {
        //passwordMatch.classList.remove('hidden');
        //passwordMatch.classList.add('visible');
        return true;
    } else {
        //passwordMatch.classList.remove('visible');
        //passwordMatch.classList.add('hidden');
        return false;
    }
}

    module.exports = { validarSenha, verificarSenhas };