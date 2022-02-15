let search = document.querySelector(".searchbutton"),

    searchname = document.querySelector('.searchname');

search.addEventListener('click', function () {
    searchname.classList.toggle('searchname-hide');
});

