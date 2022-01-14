window.addEventListener('DOMContentLoaded', function(){
    let name = document.querySelector('#name');
    let after = document.querySelector('#after');
    let year = document.querySelector('#year');
    let btn = document.querySelector('.btn');
    let boock = document.querySelector('.boock');

 btn.addEventListener('click',(event)=>{
    event.preventDefault()
    if(name.value == '' && after.value == '' && year.value == ''){
       alert("Tuldiring");
    }else{
        const tabletr = document.createElement('tr');

        const taname = document.createElement('td');
        taname.innerHTML = name.value
        tabletr.appendChild(taname);
        console.log(tabletr)

        const taafter = document.createElement('td');
        taafter.innerHTML = after.value
        tabletr.appendChild(taafter);

        const tayear = document.createElement('td');
        tayear.innerHTML = year.value
        tabletr.appendChild(tayear);

        boock.appendChild(tabletr)
        name.value = '';
        after.value = '';
        year.value = '';
    }
 });



});