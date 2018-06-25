const config = require('../common/helpers').getConfig();

module.exports = {
    'must_agree_tos': '서비스 및 이용 약관에 동의 해주세요',
    'email_address_registered': '이메일이 등록 되었습니다',
    'invalid_recaptcha': 'reCAPTCHA를 다시 확인 해주세요',
    'verification_email_subject': 'BBS.money 계정 활성화',
    'verification_email_body': ({ email, code }) => `
        <p>안녕하세요.</p>
        <p>BBS.money 등록 완료를 위해 아래 링크를 클릭하여 주세요.</p>
        <p>참고로 확인 코드는 24시간 이내로만 유효합니다.</p>
        <p><a href="${config.www.baseUrl}/verify.html?email=${encodeURIComponent(email)}&amp;code=${code}">${config.www.baseUrl}/verify.html?email=${email}&amp;code=${code}</a></p> 
        <p>문제가 발생시, 아래 링크를 참고하세요.</p>
        <p><a href="${config.www.baseUrl}/verify.html ">${config.www.baseUrl}/verify.html</a></p>
        <p>이와 같은 정보를 입력해주셔야 합니다.<br>이메일: ${email}<br>확인 코드: ${code}<br></p>
        <p>감사합니다.<br>BBS.money <br>${config.www.baseUrl}</p>`,
    'wrong_account_password': '계정 또는 암호를 다시 확인해 주세요',
    'wrong_wallet_password': '지갑 암호를 다시 확인해 주세요',
    'account_not_verified': '계정 검증이 확인되지 않았습니다',
    'missing_wallet_password': '지갑 암호를 다시 확인해 주세요',
    'missing_address_or_wallet_password': '주소 또는 지갑 암호를 다시 확인해 주세요',
    'cannot_find_address': '주소를 찾을 수 없습니다',
    'wallet_password_too_short': '지갑 주소 암호는 최소한 6자 이상이여야 합니다',
    'max_address_count_reached': (count) => `계정은 ${count}개의 주소만 개설이 가능합니다`,
    'need_both_view_and_spend': '열람과 전송을 가능하게 할 비밀 키(Secret Key)가 필요합니다',
    'incorrect_view': '열람 키가 정확하지 않습니다',
    'incorrect_spend': '전송 키가 정확하지 않습니다',
    'tx_too_big': '전송 크기가 너무 큽니다. 보내실 수량이나 믹싱 수(Mixin Count)를 줄여주세요',
    'fee_too_low': (minimum) => `전송 수수료가 최저 수수료보다 작습니다: ${minimum}`,
    'amount_too_big': '전송할 수량이 너무 큽니다',
    'insufficient_balance': ({ needed, found }) => '잔액이 모자랍니다. 필요개수 ${needed}. 잔여개수 ${found}',
    'invalid_payment_id': (paymentId) => `미확인 Payment ID: ${paymentId}`,
    'missing_destination_address': '수신자 지갑 주소 오류',
    'invalid_destination_address': (address) => `수신자 지갑 주소 오류: ${address}`,
    'missing_amount': `전송 수량 미확인`,
    'wrong_amount': `전송 수량 오류`,
    'invalid_amount': (amount) => `전송할 수량을 확인 할 수 없습니다: ${amount}`,
    'missing_required_field': '필수 입력란이 누락 되었습니다',
    'wrong_mixing_level': '믹싱 레벨(Mixin Level) 오류',
    'wrong_tx_fee': '전송 수수료 오류',
    'spending_address_not_authorized': '승인된 주소가 발신자 주소와 일치하지 않습니다',
    'mixin_too_big': (mixin) => `믹싱(Mixin)이 너무 큽니다 ${mixin}`,
    'same_new_password': '새 암호는 예전 암호와 같을 수 없습니다',
    'reset_password_email_subject': 'BBS.money 암호 재설정',
    'reset_password_email_body': ({ email, code }) => `
        <p>안녕하세요.</p>
        <p>BBS.money 암호를 재설정 하기 위해 아래 링크를 클릭하여 주세요.</p>
        <p>참고로 확인 코드는 24시간 이내로만 유효합니다.</p>
        <p><a href="${config.www.baseUrl}/reset-password.html?email=${encodeURIComponent(email)}&amp;code=${code}">${config.www.baseUrl}/reset-password.html?email=${email}&amp;code=${code}</a></p> 
        <p>문제가 발생시, 아래 링크를 참고하세요.</p>
        <p><a href="${config.www.baseUrl}/reset-password.html">${config.www.baseUrl}/reset-password.html</a></p>
        <p>이와 같은 정보를 입력해주셔야 합니다.<br>이메일: ${email}<br>확인 코드: ${code}<br></p>
        <p>감사합니다.<br>BBS.money <br>${config.www.baseUrl}</p>`,
    'reset_unverified_user_email_subject': 'BBS.money 미검증 계정 암호 설',
    'reset_unverified_user_email_body': (email) => `
        <p>안녕하세요.</p>
        <p>검증이 안된 계정의 암호를 재설정 할 수 없습니다. ${email}</p>
        <p>아래 링크를 클릭하여 계정 검증을 먼저 확인해 주세요. </p>
        <p><a href="${config.www.baseUrl}/register.html">${config.www.baseUrl}/register.html</a></p> 
        <p>감사합니다.<br>BBS.money <br>${config.www.baseUrl}</p>`,
    'tmp_password_email_subject': 'BBS.money 임시 암호 설정',
    'tmp_password_email_body': ({ email, newPassword}) => `
        <p>안녕하세요.</p>
        <p>${email} 주소로 확인된 계정의 암호가 리셋 되었습니다. </p>
        <p>임시 암호는 ${newPassword} 입니다.</p>
        <p>아래 링크를 클릭하여 BBS.money로 다시 로그인 할 수 있습니다. <br>오른쪽 상단 코너에 있는 본인 사진을 클릭하여 프로필에서 신규 암호를 등록할 수 있습니다.</p>
        <p><a href="${config.www.baseUrl}/login.html">${config.www.baseUrl}/login.html</a></p>
        <p>감사합니다.<br>BBS.money <br>${config.www.baseUrl}</p>`,
    'too_many_unverified_tx': (left) => `전송 검증을 중단합니다. 이 주소에 ${left}의 미검증된 전송이 남았습니다. 다시 시도하여 주세요.`,
    'fail_to_send': '전송이 불가합니다. 수량을 줄여서 다시 시도하여 주세요',
    'cannot_find_app_id': 'App ID와 Site ID를 찾을 수 없습니다',
    'wait_before_create_new_address': (time) => `새로운 주소를 생성하기 위해 ${parseInt(time / 1000)}초를 기다려 주세요`,
    'invalid_address': (address) => `주소 오류: ${address}`,
}
