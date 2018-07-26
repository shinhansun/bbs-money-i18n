const config = require('../common/helpers').getConfig();

module.exports = {
    'must_agree_tos': 'You must agree the terms of use and conditions',
    'email_address_registered': 'The email address has been registered',
    'invalid_recaptcha': 'reCAPTCHA is not invalid',
    'verification_email_subject': 'BBS.money Account Activation',
    'verification_email_body': ({ email, code }) => `
        <p>Hi:</p>
        <p>To complete the registration process on BBS.money, you will need to go to the URL below in your web browser.</p>
        <p>Please note the verification code only validates for 24 hours.</p>
        <p><a href="${config.www.baseUrl}/verify.html?email=${encodeURIComponent(email)}&amp;code=${code}">${config.www.baseUrl}/verify.html?email=${email}&amp;code=${code}</a></p> 
        <p>If the above link doesn't work correctly, please go to:</p>
        <p><a href="${config.www.baseUrl}/verify.html ">${config.www.baseUrl}/verify.html</a></p>
        <p>You will need to enter the following information:<br>Email: ${email}<br>Verification Code: ${code}<br></p>
        <p>Thank you, <br>BBS.money <br>${config.www.baseUrl}</p>`,
    'wrong_account_password': 'Unable to verify account or password',
    'wrong_wallet_password': 'Unable to verify wallet password',
    'account_not_verified': 'Account is not verified',
    'missing_wallet_password': 'Missing wallet password',
    'missing_address_or_wallet_password': 'Missing address or wallet password',
    'cannot_find_address': 'Cannot find address',
    'wallet_password_too_short': 'Wallet password should contain at least 6 characters',
    'max_address_count_reached': (count) => `An account can only create ${count} addresses`,
    'need_both_view_and_spend': 'Need both view and spend secret keys',
    'incorrect_view': 'Incorrect view key',
    'incorrect_spend': 'Incorrect spend key',
    'tx_too_big': 'Transaction size is too big. Try to lower the amount or mixin count',
    'fee_too_low': (minimum) => `Transaction fee is lower than the minimum: ${minimum}`,
    'amount_too_big': 'Total transfer amount is too big',
    'insufficient_balance': ({ needed, found }) => `Insufficient balance. Needed ${needed}. Found ${found}`,
    'invalid_payment_id': (paymentId) => `Invalid payment id: ${paymentId}`,
    'missing_destination_address': 'Missing destination address',
    'invalid_destination_address': (address) => `Invalid destination address: ${address}`,
    'missing_amount': `Missing transfer amount`,
    'wrong_amount': `Wrong transfer amount`,
    'invalid_amount': (amount) => `Invalid transfer amount: ${amount}`,
    'missing_required_field': 'Missing a required field',
    'wrong_mixing_level': 'Wrong mixin level',
    'wrong_tx_fee': 'Wrong transaction fee',
    'spending_address_not_authorized': 'Authorized address is not matching with the source address',
    'mixin_too_big': (mixin) => `Mixin is too big ${mixin}`,
    'same_new_password': 'New password cannot be the same as the old password',
    'reset_password_email_subject': 'BBS.money Password Reset',
    'reset_password_email_body': ({ email, code }) => `
        <p>Hi:</p>
        <p>To complete the phase of resetting your account password at BBS.money, you will need to go to the URL below in your web browser. </p>
        <p>Please note the verification code only validates for 24 hours.</p>
        <p><a href="${config.www.baseUrl}/reset-password.html?email=${encodeURIComponent(email)}&amp;code=${code}">${config.www.baseUrl}/reset-password.html?email=${email}&amp;code=${code}</a></p> 
        <p>If the above link doesn't work correctly, please go to:</p>
        <p><a href="${config.www.baseUrl}/reset-password.html">${config.www.baseUrl}/reset-password.html</a></p>
        <p>You will need to enter the following information:<br>Email: ${email}<br>Verification Code: ${code}<br></p>
        <p>Thank you, <br>BBS.money <br>${config.www.baseUrl}</p>`,
    'reset_unverified_user_email_subject': 'BBS.money Password Reset',
    'reset_unverified_user_email_body': (email) => `
        <p>Hi:</p>
        <p>We cannot reset password for an unverified account: ${email}</p>
        <p>You can simply go to the URL below to register your account again with the same email address.</p>
        <p><a href="${config.www.baseUrl}/register.html">${config.www.baseUrl}/register.html</a></p> 
        <p>Thank you, <br>BBS.money <br>${config.www.baseUrl}</p>`,
    'tmp_password_email_subject': 'BBS.money New Password',
    'tmp_password_email_body': ({ email, newPassword}) => `
        <p>Hi:</p>
        <p>Your password for account ${email} at BBS.money has been reset. </p>
        <p>Your new password is: ${newPassword}</p>
        <p>Please go to the URL below to login into BBS.money. <br>You should change your password in the user profile by clicking your avatar at the top right corner.</p>
        <p><a href="${config.www.baseUrl}/login.html">${config.www.baseUrl}/login.html</a></p>
        <p>Thank you, <br>BBS.money <br>${config.www.baseUrl}</p>`,
    'too_many_unverified_tx': (left) => `Transaction verification interrupted. This address has ${left} unverified transactions left. Please try again.`,
    'fail_to_send': 'Failed to send transaction. Please lower your amount and try again.',
    'cannot_find_app_id': 'Cannot find app id or site id',
    'wait_before_create_new_address': (time) => `You need to wait for ${parseInt(time / 1000)} seconds before creating a new address`,
    'invalid_address': (address) => `Invalid address: ${address}`,
    'missing_appid': 'Missing app id',
    'unsupported_webhook_action': (action) => `Unsupported webhook action ${action}`,
    'missing_required_param': (action, param) => `Missing required parameter ${param} for webhook action ${action}` 
}