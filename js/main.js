// 메인 퀵메뉴 클래스 바꾸기
let quickBtns = document.querySelectorAll('.aside-menu>li');
quickBtns.forEach(qBtn =>{
    qBtn.addEventListener('click',()=>{
        quickBtns.forEach(q=>q.classList.remove('active'))        
        qBtn.classList.add('active')
    })
})