player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1score=0;
player2score=0;
turnopregunta="player1";
turnoresponder="player2";
document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";
document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;
document.getElementById("pregunta").innerHTML="turno para preguntar - "+player1_name;
document.getElementById("respuesta").innerHTML="turno para responder - "+player2_name;
function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log("minusculas= "+word);
    letra1=word.charAt(1);
    console.log(letra1);
    divide=Math.floor(word.length/2);
    letra2=word.charAt(divide);
    console.log(letra2);
    menos=word.length-1;
    letra3=word.charAt(menos);
    console.log(letra3);
    quitaletra1=word.replace(letra1,"_");
    quitaletra2=quitaletra1.replace(letra2,"_");
    quitaletra3=quitaletra2.replace(letra3,"_");
    palabrapregunta="<h4 id='word_display'> P."+quitaletra3+"</h4>";
    input="<br>Respuesta: <input type = 'text' id='input_check_box'>";
    botonchecar="<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    fila=palabrapregunta+input+botonchecar;
    document.getElementById("output").innerHTML=fila;
    document.getElementById("word").value="";
}
function check(){
    getanswer=document.getElementById("input_check_box").value;
    answer=getanswer.toLowerCase();
    console.log("minusculasrespuesta"+answer);
    if(answer==word){
        document.body.style.background="green";
        if(turnoresponder=="player1"){
            player1score=player1score+1;
            document.getElementById("player1_score").innerHTML=player1score;
            
        }
        else{
            player2score=player2score+1;
            document.getElementById("player2_score").innerHTML=player2score; 
        }
    }
    else{
        document.body.style.background="red";
    }
    setTimeout(function(){document.body.style.background="lightblue"},3000);
    if(turnopregunta=="player1"){
        turnopregunta="player2";
        document.getElementById("pregunta").innerHTML="turno para preguntar: "+player2_name;
    }
    else{
        turnopregunta="player1";
        document.getElementById("pregunta").innerHTML="turno para preguntar: "+player1_name;    
    }
    if(turnoresponder=="player1"){
        turnoresponder="player2";
        document.getElementById("respuesta").innerHTML="turno para responder: "+player2_name;
    }
    else{
        turnoresponder="player1";
        document.getElementById("respuesta").innerHTML="turno para responder: "+player1_name;
    }
}
function syncDelay(miliseconds){
    start
}