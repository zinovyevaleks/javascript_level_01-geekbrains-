for(var i = 0; i<8; i++){
    var br = document.createElement('br');
    if (i==0){
        for (var x = 0; x<9; x++){
            var div = document.createElement('div'),
                arr = ['','A','B','C','D','E','F','G','H']
            div.className = "noChess";
            div.innerText = arr[x];
            document.body.appendChild(div);
        };
        var br1 = document.createElement('br');
        document.body.appendChild(br1);
    }


    var div = document.createElement('div');
    div.className = "noChess";
    div.innerText = i+1;
    document.body.appendChild(div);
    for(var x = 0; x<8; x++){
       var div = document.createElement('div');
        div.className = (i+x)%2 == 0?"black":"white";
        if (i<2){
        div.innerText = [0,7].indexOf(i)!=-1?[0,7].indexOf(x)!=-1?'Л':[1,6].indexOf(x)!=-1?'К':[2,5].indexOf(x)!=-1?'С':x==3?'Ф':'К':[1,6].indexOf(i)!=-1?'П':'';
        } else {
        div.innerText = [0,7].indexOf(i)!=-1?[0,7].indexOf(x)!=-1?'Л':[1,6].indexOf(x)!=-1?'К':[2,5].indexOf(x)!=-1?'С':x==3?'Ф':'К':[1,6].indexOf(i)!=-1?'П':'';
        }
        document.body.appendChild(div);
    }
    document.body.appendChild(br);
}
