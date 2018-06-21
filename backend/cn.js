const config = require('../common/helpers').getConfig();

module.exports = {
    'must_agree_tos': '你必须同意使用条款和条件',
    'email_address_registered': '邮件地址已经被注册',
    'invalid_recaptcha': '请勾选验证框',
    'verification_email_subject': 'BBS.money  账户激活',
    'verification_email_body': ({ email, code }) => `
        <p>欢迎！</p>
        <p>为了完成注册 BBS.money，请你点击下面的链接。</p>
        <p>请注意认证码有效期为 24 小时。</p>
        <p><a href="${config.www.baseUrl}/verify.html?email=${encodeURIComponent(email)}&amp;code=${code}">${config.www.baseUrl}/verify.html?email=${email}&amp;code=${code}</a></p> 
        <p>如果这个链接不起作用，请手动访问：</p>
        <p><a href="${config.www.baseUrl}/verify.html ">${config.www.baseUrl}/verify.html</a></p>
        <p>请在这个页面输入这些信息:<br>邮箱地址：${email}<br>认证码：${code}<br></p>
        <p>谢谢你的注册<br>BBS.money <br>${config.www.baseUrl}</p>`,
    'wrong_account_password': '账户或密码不对',
    'wrong_wallet_password': '钱包密码错误',
    'account_not_verified': '账户尚未激活',
    'missing_wallet_password': '钱包密码为空',
    'missing_address_or_wallet_password': '钱包地址或密码为空',
    'cannot_find_address': '无法找到地址',
    'wallet_password_too_short': '钱包密码最少应该 6 个字符',
    'max_address_count_reached': (count) => `每个账户最多创建 ${count} 个地址`,
    'need_both_view_and_spend': 'View Key 和 Spend Key 是必须的',
    'incorrect_view': '无效的 View Key',
    'incorrect_spend': '无效的 Spend Key',
    'tx_too_big': '转账数据过大，请尝试降低金额或者匿名等级',
    'fee_too_low': (minimum) => `转账手续费不能低于 ${minimum}`,
    'amount_too_big': '转账金额过大',
    'insufficient_balance': ({ needed, found }) => `余额不足。需要 ${needed}，但余额为 ${found}`,
    'invalid_payment_id': (paymentId) => `无效的支付ID ${paymentId}`,
    'missing_destination_address': '目标地址为空',
    'invalid_destination_address': (address) => `无效的目标地址 ${address}`,
    'missing_amount': `转账金额为空`,
    'wrong_amount': `错误的金额为空`,
    'invalid_amount': (amount) => `无效的转账金额 ${amount}`,
    'missing_required_field': '必填项未填',
    'wrong_mixing_level': '错误的匿名级别',
    'wrong_tx_fee': '错误的手续费',
    'spending_address_not_authorized': '消费地址与登录地址不匹配',
    'mixin_too_big': (mixin) => `匿名级别过高 ${mixin}`,
    'same_new_password': '新密码不能和旧密码相同',
    'reset_password_email_subject': 'BBS.money 密码重置',
    'reset_password_email_body': ({ email, code }) => `
        <p>你好！</p>
        <p>为了完成重置你在 BBS.money 的账户密码，请你点击下面的链接。 </p>
        <p>请注意认证码有效期为 24 小时。</p>
        <p><a href="${config.www.baseUrl}/reset-password.html?email=${encodeURIComponent(email)}&amp;code=${code}">${config.www.baseUrl}/reset-password.html?email=${email}&amp;code=${code}</a></p> 
        <p>如果这个链接不起作用，请手动访问：</p>
        <p><a href="${config.www.baseUrl}/reset-password.html">${config.www.baseUrl}/reset-password.html</a></p>
        <p>请在这个页面输入这些信息:<br>邮箱地址：${email}<br>认证码：${code}<br></p>
        <p>谢谢你的使用<br>BBS.money <br>${config.www.baseUrl}</p>`,
    'reset_unverified_user_email_subject': 'BBS.money 密码重置',
    'reset_unverified_user_email_body': (email) => `
        <p>你好！</p>
        <p>你的账户 ${email} 尚未认证，无法重置密码。</p>
        <p>请直接使用下面的链接继续你的注册流程。</p>
        <p><a href="${config.www.baseUrl}/register.html">${config.www.baseUrl}/register.html</a></p> 
        <p>谢谢你的注册<br>BBS.money <br>${config.www.baseUrl}</p>`,
    'tmp_password_email_subject': 'BBS.money 重置新密码',
    'tmp_password_email_body': ({ email, newPassword}) => `
        <p>你好！</p>
        <p>你在 BBS.money 的账户 ${email} 密码已重置。 </p>
        <p>你的新密码是： ${newPassword}</p>
        <p>请使用下面的链接登录你的账户。 <br>你应该尽快登录后更改你的密码。</p>
        <p><a href="${config.www.baseUrl}/login.html">${config.www.baseUrl}/login.html</a></p>
        <p>谢谢你的使用<br>BBS.money <br>${config.www.baseUrl}</p>`,
    'too_many_unverified_tx': (left) => `交易确认中断，还有 ${left} 个未确认的交易，请重试。`,
    'fail_to_send': '发送失败，请降低发送金额后重试。',
    'cannot_find_app_id': '找不到 app id 或者 site id',
    'wait_before_create_new_address': (time) => `在创建新钱包地址前，你需要等待 ${parseInt(time / 1000)} 秒`,
    'invalid_address': (address) => `无效地址: ${address}`,
}