function dobott(){
    console.log("---------------------------")
    var list = [];
    var ide = document.getElementById("eredmeny");
    for (let index = 0; index < 5; index++) {
        const rnd = Math.floor(Math.random() * 6)+1;
        list.push(parseInt(rnd));
        var img = document.createElement("img");
        img.src="kepek/"+rnd+".png";
        img.style.width="50px";
        ide.appendChild(img)
    }
    vizsgaljukCsakMeg(list)
}
function vizsgaljukCsakMeg(lista){
    let sameCountsv;
    let sameCount =0;
    let par =0;
    let drill =0;
    let sor =false;
    console.log("Kockak:")
    console.log(lista)
    var ide = document.getElementById("eredmeny");
    for (let i = 1; i <= 6; i++) {
        sameCountsv = 0;
        for (let inside = 0; inside < lista.length; inside++) {
            if(i==lista[inside]){ 
                sameCountsv++;
                console.log("jo")
            }   
        }
        var ki = document.createElement("p");
        if (sameCountsv>1) {
            if (sameCountsv==2) {
                par++;
                sor=true;
            }
            if (sameCountsv==3) {
                drill++;
                sor=true;
            }
            if (sameCountsv==4) {
                ki.innerHTML="kis póker";
                sor=true;
            }
            if (sameCountsv==5) {
                ki.innerHTML="nagy póker(szinte lehetetlen lmao)";
                alert("nem bekövetkező esemény");
                sor=true;
            }
            
            ide.appendChild(ki);
        }
    }
    if (!sor) {
        if(lista.includes(6)&&!(lista.includes(1))){
            ki.innerHTML="nagy sor";
        }else{
            ki.innerHTML="kis sor";
        }

    }
    if (par==1) {
        if (drill==1) {
            ki.innerHTML="full";
        }else{
            ki.innerHTML="pár";
        }
    }else if(par==2){
        ki.innerHTML="2 pár";
    }
    if (drill ==1) {
        ki.innerHTML="drill";
    }
    ide.appendChild(ki);
    console.log("Ennyi párod van: ", sameCount)
}





