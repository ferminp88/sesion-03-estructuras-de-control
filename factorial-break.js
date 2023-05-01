let dato = 4;
let pos = dato-1;


while(dato){
    dato *= pos;
    pos--;
    if (pos <= 1) break;
}
console.log(dato); 