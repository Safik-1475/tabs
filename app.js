const about = document.querySelector('.about');
const btnAll = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
// console.log(about);

// when click about
about.addEventListener('click',event=>{
    const id = event.target.dataset.id;
    if(id){
        btnAll.forEach(btn=>{
            btn.classList.remove('active');
        });
        event.target.classList.add('active');

        // hidden articles 
        articles.forEach(function(article){
            article.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active')
    }
})