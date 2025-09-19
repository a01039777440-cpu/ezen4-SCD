// header 불러오기
fetch('header.html')
.then(res => res.text())
.then(data =>{
    document.querySelector('#header').innerHTML=data;
    
    // 스크립트 
    // GNB 언어 서브 펼침 이벤트
    lang = document.querySelector('.lang>a');
    langList = document.querySelector('.lang-list');
    lang.addEventListener('click', () => {
        lang.classList.toggle('active');
        
    })
})

// footer 불러오기
fetch('footer.html')
.then(res =>res.text())
.then(data=>{
    document.querySelector('#footer').innerHTML=data;
    
    // 스크립트 
    
})