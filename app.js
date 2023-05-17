const ul = document.querySelector('.principle');
const listLi = document.querySelectorAll('ul.principle > li > p');
const burger = document.querySelector('.burger');
listLi.forEach(li =>{
    li.addEventListener('click', function(){
        if(!this.parentElement.classList.contains('active')){
            removeActive(listLi);
            this.parentElement.classList.add('active');
        }else{
            removeActive(listLi);
        }
    });
});

function addActive(ele){
    ele.classList.toggle('active');
}


burger.addEventListener('click', function(e){
    addActive(this);
    addActive(ul)
    removeActive(listLi)
})

function removeActive(element){
    element.forEach(ele =>{
        ele.parentElement.classList.remove('active');
    })
}

// document.body.onclick = function(e){
// if(!e.target !== ){
//     removeActive(listLi)
// }
// }
console.log(document.querySelector("header").childNodes)