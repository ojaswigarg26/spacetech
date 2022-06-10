function setup(){
    canvas=creatCanvas(300, 300);
    canvas.center();
    video=creatCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('');
}
function draw(){
    image(video, 0, 0, 300, 300);

}