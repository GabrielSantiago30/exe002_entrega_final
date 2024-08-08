const { validarSenha, verificarSenhas } = require('./form')

it('Testando se a senha tem 3 ou mais caracteres sendo um deles um caracter especial', () => {
    expect(validarSenha('abc!')).toBe(true);
})

it('Testando se a senha tem mais de 3 caracteres sem um caracter especial', () => {
    expect(validarSenha('abcdef')).toBe(false);
})

it('Testando se a senha tem menos de 3 caracteres', () => {
    expect(validarSenha('aa')).toBe(false);
})

it('Testando se a senha tem caractere especial', () => {
    expect(validarSenha('ab!')).toBe(true);
})

it('Testando se a senha não tem caractere especial', () => {
    expect(validarSenha('abc')).toBe(false); 
});

it('Testando se as duas senhas são iguais', () => {
    expect(verificarSenhas('ab!', 'ab!')).toBe(true);
})

it('Testando se as duas senhas são diferentes', () => {
    expect(verificarSenhas('aaa', 'ab!')).toBe(false);
})

