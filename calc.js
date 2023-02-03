function display(num){     //input tag
    n1.value+=num
}

function allclear(){     //AC button
    n1.value=""
}

function evalexp(){     //operations
    n1.value=eval(n1.value)
}

function backspace(){     //backspace    
    n1.value=n1.value.slice(0,-1)
}
