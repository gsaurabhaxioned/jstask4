let search = document.querySelector(".searchbutton"),

    searchname = document.querySelector('.searchname'),
    searchname_hide = document.querySelector('.searchname-hide');

search.addEventListener('click', function () {
    searchname.classList.toggle('searchname-hide');
    searchname.style.animationDuration = "0.2s";
});