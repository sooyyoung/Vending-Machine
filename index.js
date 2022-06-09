const depositInput = document.querySelector('.deposit-input');
const depositBtn = document.querySelector('.deposit-btn');
const pocketMoney = document.querySelector('.money-txt');

// 1. 소지금 입금하기
// 1-1. 금액이 빈 상태로 입금 버튼 클릭 시 입금 안내 창 출력
depositBtn.addEventListener('click', () => {
    if(depositInput.value == ''){
        alert('입금액을 입력해주세요!')
    } else {
        // 1-2. 입금액 입력 시 소지금에 반영
        pocketMoney.textContent = depositInput.value
        depositInput.value = ''
    }
})
