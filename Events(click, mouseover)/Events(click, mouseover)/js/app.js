const aElements = document.querySelectorAll('a');

aElements[0].addEventListener('click', function () {
    aElements[0].nextElementSibling.classList.toggle('d-none');
});
aElements[1].addEventListener('mouseover', function (even){
     if (even.currentTarget){
    aElements[1].nextElementSibling.classList.toggle('d-none');}
});
