const config = require('../common/helpers').getConfig();

module.exports = {
    'must_agree_tos': 'Por favor, concorde com os Termos e Condições de Uso',
    'email_address_registered': 'O email informado já foi registrado.',
    'invalid_recaptcha': 'reCAPTCHA inválida',
    'verification_email_subject': 'Ativação de sua conta BBS.money',
    'verification_email_body': ({ email, code }) => `
        <p>Olá:</p>
        <p>Para concluir o processo de registro de sua carteira no BBS.money, você precisará clicar no URL abaixo ou Acessar o link através de seu navegador</p>
        <p>ATENÇÃO! O Código de Verificação é válido por apenas 24h</p>
        <p><a href="${config.www.baseUrl}/verify.html?email=${encodeURIComponent(email)}&amp;code=${code}">${config.www.baseUrl}/verify.html?email=${email}&amp;code=${code}</a></p> 
        <p>Se o link acima não funcionar corretamente, acesse:</p>
        <p><a href="${config.www.baseUrl}/verify.html ">${config.www.baseUrl}/verify.html</a></p>
        <p>Você precisará inserir as seguintes informações:<br>Email: ${email}<br>Código de Verificação: ${code}<br></p>
        <p>Obrigado, <br>BBS.money <br>${config.www.baseUrl}</p>`,
    'wrong_account_password': 'Não é possível confirmar conta ou senha',
    'wrong_wallet_password': 'Não é possível confirmar a senha da carteira',
    'account_not_verified': 'Conta Não Verificada',
    'missing_wallet_password': 'Falta a senha da carteira',
    'missing_address_or_wallet_password': 'O Endereço ou Senha da carteira estão ausentes',
    'cannot_find_address': 'Endereço Não Encontrado',
    'wallet_password_too_short': 'A senha da carteira deverá conter no mínimo 6 caracteres',
    'max_address_count_reached': (count) => `Uma conta só pode criar ${count} endereços`,
    'need_both_view_and_spend': 'Precisa de ver e gastar chaves secretas',
    'incorrect_view': 'Chave de Visualização',
    'incorrect_spend': 'Chave de Gasto Incorreta',
    'tx_too_big': 'O tamanho da transação é muito grande. Tente diminuir a quantidade',
    'fee_too_low': (minimum) => `Taxa de transação é menor que o mínimo: ${minimum}`,
    'amount_too_big': 'O valor total da transferência é muito grande',
    'insufficient_balance': ({ needed, found }) => `Saldo insuficiente. Necessário ${needed}. Saldo ${found}`,
    'invalid_payment_id': (paymentId) => `Id de Pagameno Inválido: ${paymentId}`,
    'missing_destination_address': 'Falta o Endereço do Destinatáro',
    'invalid_destination_address': (address) => `Endereço de destino inválido: ${address}`,
    'missing_amount': `Falta a Quantidade de Transferência `,
    'wrong_amount': `Quantidade de transferência errada`,
    'invalid_amount': (amount) => `Quantidade de transferência inválida: ${amount}`,
    'missing_required_field': 'Falta um Campo Obrigatório',
    'wrong_mixing_level': 'Nível Errado',
    'wrong_tx_fee': 'Taxa de transação incorreta',
    'spending_address_not_authorized': 'O endereço autorizado não corresponde ao endereço de origem',
    'mixin_too_big': (mixin) => `Mixin é muito grande ${mixin}`,
    'same_new_password': 'A nova senha não pode ser igual à senha antiga',
    'reset_password_email_subject': 'Reset de Senha do BBS.money',
    'reset_password_email_body': ({ email, code }) => `
        <p>Olá:</p>
        <p>Para completar a fase de redefinir a senha da sua conta no BBS.money, você precisará ir para o URL abaixo ou colar no seu navegador.</p>
        <p>Por favor, note que o código de verificação só valida por 24 horas.</p>
        <p><a href="${config.www.baseUrl}/reset-password.html?email=${encodeURIComponent(email)}&amp;code=${code}">${config.www.baseUrl}/reset-password.html?email=${email}&amp;code=${code}</a></p> 
        <p>Se o link acima não funcionar corretamente, acesse:</p>
        <p><a href="${config.www.baseUrl}/reset-password.html">${config.www.baseUrl}/reset-password.html</a></p>
        <p>Você precisará inserir as seguintes informações:<br>Email: ${email}<br>Código de Verificação: ${code}<br></p>
        <p>Obrigado, <br>BBS.money <br>${config.www.baseUrl}</p>`,
    'reset_unverified_user_email_subject': 'Reset de Sebga do BBS.money',
    'reset_unverified_user_email_body': (email) => `
        <p>Olá:</p>
        <p>Não podemos redefinir a senha de uma conta não confirmada: ${email}</p>
        <p>Você pode simplesmente acessar o URL abaixo para registrar sua conta novamente com o mesmo endereço de e-mail.</p>
        <p><a href="${config.www.baseUrl}/register.html">${config.www.baseUrl}/register.html</a></p> 
        <p>Obrigado, <br>BBS.money <br>${config.www.baseUrl}</p>`,
    'tmp_password_email_subject': 'Sua Nova Senha do BBS.money',
    'tmp_password_email_body': ({ email, newPassword}) => `
        <p>Olá:</p>
        <p>Sua senha para conta ${email} em BBS.money foi redefinida com sucesso. </p>
        <p>Sua nova senha é: ${newPassword}</p>
        <p>Por favor, vá para o URL abaixo para fazer o login na sua carteira BBS.money. <br>Você deve alterar sua senha no perfil do usuário clicando no seu avatar no canto superior direito.</p>
        <p><a href="${config.www.baseUrl}/login.html">${config.www.baseUrl}/login.html</a></p>
        <p>Obriado, <br>BBS.money <br>${config.www.baseUrl}</p>`,
    'too_many_unverified_tx': (left) => `Verificação de transação interrompida. Este endereço tem ${left} transações não verificadas restantes. Por favor, tente novamente.`,
    'fail_to_send': 'Falha ao enviar transação. Por favor, diminua o seu valor e tente novamente.',
    'cannot_find_app_id': 'Não é possível encontrar o código do aplicativo ou o código do site',
    'wait_before_create_new_address': (time) => `Você precisa aguardar ${parseInt(time / 1000)} segundos, para criar um novo endereço`,
    'invalid_address': (address) => `Endereço Inválido: ${address}`,
}
