Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='Captured_image' src='"+data_uri+"'>";
    });
}

console.log("ml5 version is ",ml5.version);
classifier=ml5.imageClassifier("MobileNet",modelloaded);

function modelloaded()
{
    console.log("model is loaded");
}

function check()
{
    img=document.getElementById("Captured_image");
    classifier.classify(img,gotresult);
}

function gotresult(error,results)
{
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}