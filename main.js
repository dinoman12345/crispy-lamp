function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(dinoe);
    dinof=window.speechSynthesis;
}
function preload(){
    x=ml5.imageClassifier('DoodleNet');
}
function dinob(){
    background("white");
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function dinoe(){
    x.classify(canvas,dinog);
}
function dinog(error,result){
if(error){
console.log(error);
}
console.log(result);
document.getElementById("label").innerHTML="label:"+result[0].label;
document.getElementById("Confidence").innerHTML="Confidence"+Math.round(result[0].confidence*100)+"%";
utterThis = new SpeechSynthesisUtterance(result[0].label);
dinof.speak(utterThis);
}