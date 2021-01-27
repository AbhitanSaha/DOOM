Webcam.set({
    width:500,
    height:300,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured-img' src='"+data_uri+"'/>"
    });
}
console.log('ml5.version',ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aCKZP4FQh/model.json',modelLoaded);
function  modelLoaded () {
    console.log("Model Loaded");
}
function check() {
    img =document.getElementById("captured-img");
    classifier.classify(img, gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_name").innerHTML=results[0].label;
        accuracy=results[0].confidence.toFixed(2);
        console.log(accuracy);
        accuracy=accuracy*100;
        document.getElementById("result_accuracy").innerHTML=accuracy+"%";
    }
}