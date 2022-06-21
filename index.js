let colaData = [
    {
      title: "Original_cola",
      img: "./images/original_cola.png",
      price: 1000,
    },
    {
      title: "Violet_cola",
      img: "./images/violet_cola.png",
      price: 1000,
    },
    {
      title: "Yellow_cola",
      img: "./images/yellow_cola.png",
      price: 1000,
    },
    {
      title: "Cool_cola",
      img: "./images/cool_cola.png",
      price: 1000,
    },
    {
      title: "Green_cola",
      img: "./images/green_cola.png",
      price: 1000,
    },
    {
      title: "Orange_cola",
      img: "./images/orange_cola.png",
      price: 1000,
    },
];

const depositInput = document.querySelector('.deposit-input');  // 입금액 입력
const depositBtn = document.querySelector('.deposit-btn');  // 입금 버튼
const pocketMoney = document.querySelector('.money-txt');  // 소지금 
const drinkList = document.querySelector('.drink-list');  // 자판기 아이템 부분


// 입금액 누적
let result = 0;

// 자판기에 콜라 아이템 출력
function printScreen(){
    colaData.forEach((i) => {
        const li = document.createElement('li');
        drinkList.appendChild(li);

        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'drink-btn');
        li.appendChild(button);

        const img = document.createElement('img');
        img.setAttribute('src', `${i.img}`);
        img.setAttribute('alt', '');
        img.setAttribute('class', 'cola-img');
        
        const strong = document.createElement('strong');
        strong.setAttribute('class', 'cola-title');
        strong.textContent = `${i.title}`;

        const span = document.createElement('span');
        span.setAttribute('class', 'cola-price');
        span.textContent = `${i.price}원`;
        button.append(img, strong, span);
    })
}

printScreen();

// 소지금 입금하기
// 금액이 빈 상태로 입금 버튼 클릭 시 입금 안내 창 출력
depositBtn.addEventListener('click', () => {
    if(depositInput.value == ''){
        alert('입금액을 입력해주세요!');
    } else {
    // 입금액 입력 시 소지금에 반영
    let money = parseInt(depositInput.value);
    result += money;
    pocketMoney.innerHTML = result.toLocaleString();
    depositInput.value = '';
    }
})




