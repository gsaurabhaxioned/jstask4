let search = document.querySelectorAll(".searchbutton"),

    searchname = document.querySelectorAll('.searchname');

search[0].addEventListener('click', function () {
    searchname[0].classList.toggle('searchname-hide');
});