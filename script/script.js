//Search

function openModal() {
    document.getElementById('overlay').style.top = '0px';
}
function closeModal() {
    document.getElementById('overlay').style.top = '-100vh';
}
function openMenu() {
    document.getElementById('overlayMenu').style.top = '0px';
}
function closeMenu() {
    document.getElementById('overlayMenu').style.top = '-100vh';
}

// Tabs

function openTab(event, tabName) {
    var i, tabContent, tabBtns;

    // Скрываем все элементы с классом 'tab-content'
    tabContent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    // Удаляем класс 'active' со всех кнопок с классом 'tab-btn'
    tabBtns = document.getElementsByClassName('tab-btn');
    for (i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove('active');
    }

    // Отображаем текущую вкладку и добавляем класс 'active' к кнопке 
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');

}

//Swiper

var swiper = new Swiper('.feedback-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    }
});