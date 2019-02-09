const config = require('../common/helpers').getConfig();

module.exports = {
    'must_agree_tos': 'Вы должны согласиться с условиями использования и условиями',
    'email_address_registered': 'Адрес электронной почты был зарегистрирован',
    'invalid_recaptcha': 'reCAPTCHA не является недействительным',
    'verification_email_subject': 'Активация учетной записи BBS.money',
    'verification_email_body': ({ email, code }) => `
        <p>Привет:</p>
        <p>Чтобы завершить процесс регистрации на BBS.money, вам нужно перейти по указанному ниже URL-адресу в вашем веб-браузере.</p>
        <p>Обратите внимание, что проверочный код действует только в течение 24 часов.</p>
        <p><a href="${config.www.baseUrl}/verify.html?email=${encodeURIComponent(email)}&amp;code=${code}">${config.www.baseUrl}/verify.html?email=${email}&amp;code=${code}</a></p> 
        <p>Если приведенная выше ссылка не работает должным образом, перейдите по ссылке:</p>
        <p><a href="${config.www.baseUrl}/verify.html ">${config.www.baseUrl}/verify.html</a></p>
        <p>Вам нужно будет ввести следующую информацию:<br>Email: ${email}<br>Verification Code: ${code}<br></p>
        <p>Спасибо, <br>BBS.money <br>${config.www.baseUrl}</p>`,
    'wrong_account_password': 'Невозможно подтвердить учетную запись или пароль',
    'wrong_wallet_password': 'Невозможно подтвердить пароль кошелька',
    'account_not_verified': 'Аккаунт не подтвержден',
    'missing_wallet_password': 'Отсутствует пароль к кошельку',
    'missing_address_or_wallet_password': 'Отсутствует адрес или пароль кошелька',
    'cannot_find_address': 'Не могу найти адрес',
    'wallet_password_too_short': 'Пароль кошелька должен содержать не менее 6 символов',
    'max_address_count_reached': (count) => `Аккаунт может только создать ${count} адреса`,
    'need_both_view_and_spend': 'Просмотр и использование ваших ключей безопасности',
    'incorrect_view': 'Неверный ключ просмотра',
    'incorrect_spend': 'Неверный ключ',
    'tx_too_big': 'Размер транзакции слишком велик. Уменьшите количество или количество mixin.',
    'fee_too_low': (minimum) => `Комиссия за транзакцию ниже минимальной суммы.: ${minimum}`,
    'amount_too_big': 'Общая сумма перевода слишком велика.',
    'insufficient_balance': ({ needed, found }) => `Недостаточный баланс. необходимо ${needed}. Found ${found}`,
    'invalid_payment_id': (paymentId) => `Invalid payment id: ${paymentId}`,
    'missing_destination_address': 'Отсутствует адрес назначения',
    'invalid_destination_address': (address) => `Неверный адрес назначения: ${address}`,
    'missing_amount': `Недостающая сумма перевода`,
    'wrong_amount': `Неверная сумма перевода`,
    'invalid_amount': (amount) => `Неверная сумма перевода: ${amount}`,
    'missing_required_field': 'Отсутствует обязательное поле',
    'wrong_mixing_level': 'Неправильный уровень миксина',
    'wrong_tx_fee': 'Неправильный комиссионный сбор',
    'spending_address_not_authorized': 'Авторизованный адрес не совпадает с адресом источника',
    'mixin_too_big': (mixin) => `Mixin слишком большой ${mixin}`,
    'same_new_password': 'Новый пароль не может совпадать со старым паролем',
    'reset_password_email_subject': 'BBS.money Password Reset',
    'reset_password_email_body': ({ email, code }) => `
        <p>Привет:</p>
        <p>Чтобы завершить этап сброса пароля учетной записи на BBS.money, вам необходимо перейти по указанному ниже URL-адресу в веб-браузере. </p>
        <p>Обратите внимание, что проверочный код действует только в течение 24 часов.</p>
        <p><a href="${config.www.baseUrl}/reset-password.html?email=${encodeURIComponent(email)}&amp;code=${code}">${config.www.baseUrl}/reset-password.html?email=${email}&amp;code=${code}</a></p> 
        <p>Если приведенная выше ссылка не работает должным образом, перейдите по ссылке:</p>
        <p><a href="${config.www.baseUrl}/reset-password.html">${config.www.baseUrl}/reset-password.html</a></p>
        <p>Вам нужно будет ввести следующую информацию:<br>Email: ${email}<br>Verification Code: ${code}<br></p>
        <p>Спасибо, <br>BBS.money <br>${config.www.baseUrl}</p>`,
    'reset_unverified_user_email_subject': 'BBS.money Password Reset',
    'reset_unverified_user_email_body': (email) => `
        <p>Привет:</p>
        <p>Мы не можем сбросить пароль для непроверенной учетной записи: ${email}</p>
        <p>Вы можете просто перейти по указанному ниже URL-адресу, чтобы снова зарегистрировать свою учетную запись с тем же адресом электронной почты.</p>
        <p><a href="${config.www.baseUrl}/register.html">${config.www.baseUrl}/register.html</a></p> 
        <p>Спасибо, <br>BBS.money <br>${config.www.baseUrl}</p>`,
    'tmp_password_email_subject': 'BBS.money New Password',
    'tmp_password_email_body': ({ email, newPassword}) => `
        <p>Привет:</p>
        <p>Ваш пароль для учетной записи ${email} на BBS.money был сброшен. </p>
        <p>Ваш новый пароль: ${newPassword}</p>
        <p>Пожалуйста, перейдите по указанному ниже URL, чтобы войти в BBS.money <br>Вы должны изменить свой пароль в профиле пользователя, нажав ваш аватар в правом верхнем углу.</p>
        <p><a href="${config.www.baseUrl}/login.html">${config.www.baseUrl}/login.html</a></p>
        <p>Спасибо, <br>BBS.money <br>${config.www.baseUrl}</p>`,
    'too_many_unverified_tx': (left) => `Проверка транзакции прервана. Этот адрес имеет ${left} непроверенные транзакции остались. Пожалуйста, попробуйте еще раз.`,
    'fail_to_send': 'Не удалось отправить транзакцию. Пожалуйста, уменьшите сумму и попробуйте снова.',
    'cannot_find_app_id': 'Не удается найти идентификатор приложения или идентификатор сайта',
    'wait_before_create_new_address': (time) => `Вам нужно ждать ${parseInt(time / 1000)} секунд до создания нового адреса`,
    'invalid_address': (address) => `Неверный адрес: ${address}`,
    'missing_appid': 'Отсутствует идентификатор приложения',
    'unsupported_webhook_action': (action) => `Неподдерживаемое действие веб-хука ${action}`,
    'missing_required_param': (action, param) => `Отсутствует обязательный параметр ${param} для действия webhook ${action}` 
}