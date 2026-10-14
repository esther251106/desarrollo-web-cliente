for (let i = 1; i <= 50; i++) {
    //Creamos set
    let miSet = new Set();
    while (miSet.size < 6){ // mientras set sea <6 añade el nº aleatorio
        let nAleatorio = Math.floor(Math.random()*49) +1;
        miSet.add(nAleatorio);
    }
    console.log("Combinación ",[i],": ", miSet);
}