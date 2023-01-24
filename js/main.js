let switchToggle = document.querySelector('.switch__btn');
let price = document.querySelectorAll('.price__cost');
let sale = 20;
let initialPrice = Array.from(price).map(item => +item.innerText);

switchToggle.onclick = () => {
    switchToggle.classList.toggle('active');
     if(switchToggle.classList.contains('active')){
         for(var i = 0; i < price.length; i++) {
             price[i].innerText = Math.round(initialPrice[i] * 12 * (100 - sale) / 100);
         }
     }else{
         for(var k = 0; k < price.length; k++) {
             price[k].innerText = price[k].innerHTML / 12 / (100 - sale) * 100;
             price[k].innerText = initialPrice[k];
         }
     }
}
