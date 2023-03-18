    let screen= document.querySelector('.screen');
    let buttons= document.querySelectorAll('.btn');
    let clear= document.querySelector('.clr-btn');
    let equal= document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value =e.target.dataset.num;
            screen.value += value;
            console.log(value);
        })
    });

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click',function(e){
        if(screen.value !== ''){
            screen.value = '';
        }
    })