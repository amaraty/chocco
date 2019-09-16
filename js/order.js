const form = document.querySelector('#buy');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const data = new FormData();

    data.append('name', document.getElementById('name'));
    data.append('phone', document.getElementById('phone'));
    data.append('comment', document.getElementById('comment'));
    data.append('to', document.getElementById('support@gmail.com'));

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'somewhere', true);
    xhr.send(data);
    xhr.onload = function(){
        
    }

})