// Your JS goes here

function tile(color){
let box = document.createElement('div')
box.style.width = "11.1%";
box.style.float = "left";
box.style.paddingBottom = "11.1%";
box.style.backgroundColor = color
document.body.append(box);
}


for(let i = 0; i < 10000; i++){
    if(i % 2 === 0){
        tile('pink')
    }
    else if(i % 2 === 1){
        tile('blue')
    }
}