const config = require('../common/helpers').getConfig();

module.exports = {
    'must_agree_tos': '会員規約をお読みになり、すべての内容に同意のうえ、次へ進んでください。',
    'email_address_registered': '指定されたメールアドレスは既に登録されています',
    'invalid_recaptcha': '認証チェックを入れてください',
    'verification_email_subject': 'BBSちゃん  認証メール',
    'verification_email_body': ({ email, code }) => `
        <p>ご登録いただきまして、ありがとうございました。</p>
        <p>登録手続きを完了するには、この認証用のリンクをクリックしてください：</p>
        <p><a href="${config.www.baseUrl}/verify.html?email=${encodeURIComponent(email)}&amp;code=${code}">${config.www.baseUrl}/verify.html?email=${email}&amp;code=${code}</a></p> 
        <p>認証コードの有効期限は２４時間以内です、ご注意ください。</p>
        <p>上記のリンクが正しく動作しない場合、次のリンクをクリックしてください：</p>
        <p><a href="${config.www.baseUrl}/verify.html ">${config.www.baseUrl}/verify.html</a></p>
        <p>このページで、以下の情報を入力してください:<br>メールアドレス: ${email}<br>認証コード: ${code}<br></p>
        <p>ご登録いただきありがとうございます！<br>BBSちゃん スタッフ<br>${config.www.baseUrl}</p>`,
    'wrong_account_password': 'メールアドレスまたはパスワードが間違っています',
    'wrong_wallet_password': 'ウォレットのパスワードが間違っています',
    'account_not_verified': 'アカウント未認証',
    'missing_wallet_password': 'パスワードを入力してください',
    'missing_address_or_wallet_password': 'ウォレットのアドレスとパスワードを入力してください',
    'cannot_find_address': 'アドレスが見つかりません',
    'wallet_password_too_short': 'ウォレットのパスワードは必ず6文字以上',
    'max_address_count_reached': (count) => `一つのアカウントには、ウォレットのアドレス数は最大 ${count} 個まで`,
    'need_both_view_and_spend': 'View Key と Spend Key が必要です',
    'incorrect_view': '無効なView Key',
    'incorrect_spend': '無効なSpend Key',
    'tx_too_big': 'トランザクションが大きすぎる。金額と匿名のレベルを減少してください。',
    'fee_too_low': (minimum) => `手数料の最低限は ${minimum}`,
    'amount_too_big': '金額が大きすぎる',
    'insufficient_balance': ({ needed, found }) => `残高不足。必要は ${needed}、支出可能は ${found}`,
    'invalid_payment_id': (paymentId) => `無効なPayment ID: ${paymentId}`,
    'missing_destination_address': '宛先アドレスを入力してください',
    'invalid_destination_address': (address) => `無効な宛先アドレス： ${address}`,
    'missing_amount': `金額を入力してください`,
    'wrong_amount': `無効な金額`,
    'invalid_amount': (amount) => `無効な金額： ${amount}`,
    'missing_required_field': '必須項目を入力してください',
    'wrong_mixing_level': '無効な匿名のレベル',
    'wrong_tx_fee': '無効な手数料',
    'spending_address_not_authorized': 'ログインしたアドレスと支出アドレスがミスマッチ',
    'mixin_too_big': (mixin) => `匿名のレベルが大きすぎる ${mixin}`,
    'same_new_password': '古いパスワードと同じにならないようにする',
    'reset_password_email_subject': 'BBSちゃん パスワードのリセット',
    'reset_password_email_body': ({ email, code }) => `
        <p>ご協力いただきありがとうございます！</p>
        <p>リセット手続きを完了するには、この認証用のリンクをクリックしてください：</p>
        <p><a href="${config.www.baseUrl}/reset-password.html?email=${encodeURIComponent(email)}&amp;code=${code}">${config.www.baseUrl}/reset-password.html?email=${email}&amp;code=${code}</a></p> 
        <p>認証コードの有効期限は２４時間以内です、ご注意ください。</p>
        <p>上記のリンクが正しく動作しない場合、次のリンクをクリックしてください：</p>
        <p><a href="${config.www.baseUrl}/reset-password.html">${config.www.baseUrl}/reset-password.html</a></p>
        <p>このページで、以下の情報を入力してください:<br>メールアドレス: ${email}<br>認証コード: ${code}<br></p>
        <p>ありがとうございます！ <br>BBSちゃん スタッフ <br>${config.www.baseUrl}</p>`,
    'reset_unverified_user_email_subject': 'BBSちゃん パスワードのリセット',
    'reset_unverified_user_email_body': (email) => `
        <p>ご協力いただきありがとうございます！</p>
        <p>このアカウントは未認証です。パスワードのリセットできない: ${email}</p>
        <p>このリンクをクリック、登録してください。</p>
        <p><a href="${config.www.baseUrl}/register.html">${config.www.baseUrl}/register.html</a></p> 
        <p>ご登録いただきありがとうございます！<br>BBSちゃん スタッフ<br>${config.www.baseUrl}</p>`,
    'tmp_password_email_subject': 'BBSちゃん 新しいパスワード',
    'tmp_password_email_body': ({ email, newPassword}) => `
        <p>ご協力いただきありがとうございます！</p>
        <p>アカウント${email}のパスワードが正常にリセットされました。</p>
        <p>新しいパスワードは: ${newPassword}</p>
        <p>このリンクをクリック、ログインしてください <br>ログイン後すぐに変更する必要があります</p>
        <p><a href="${config.www.baseUrl}/login.html">${config.www.baseUrl}/login.html</a></p>
        <p>ありがとうございます！ <br>BBSちゃん スタッフ <br>${config.www.baseUrl}</p>`,
    'too_many_unverified_tx': (left) => `トランザクションの確認が中断されました。まだ ${left} 件の未確認トランザクションがあります。もう一度試してみてください。`,
    'fail_to_send': '送金に失敗しました。金額を減少して再度実行してください。',
    'cannot_find_app_id': 'app id または site id が見つからない',
    'wait_before_create_new_address': (time) => `次のウォレットを作成できるまで、あと ${parseInt(time / 1000)} 秒、お待ちください`,
    'invalid_address': (address) => `無効なアドレス: ${address}`,
}