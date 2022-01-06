
//이거 사용중... 
function screenCaptureTest() {
    //html2canvas(document.querySelector("#capture")).then(canvas => {
    //    document.body.appendChild(canvas)
    //});
    html2canvas(document.querySelector("#capture")).then(canvas => {
        var img = document.createElement('img');
        img.src = canvas.toDataURL("image/jpeg");
        document.body.appendChild(img);
    });
    //html2canvas(document.querySelector("#capture")).then(canvas => {
    //    drawImg(canvas.toDataURL('image/jpeg'));
    //    saveAs(canvas.toDataURL('image/png'), "capture-test.png");
    //});

}

function saveAs(uri, filename) {
    // 캡쳐된 파일을 이미지 파일로 내보낸다.
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        console.log("와와아"+link);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}


function drawImg(imgData) {
    console.log(imgData);
    //imgData의 결과값을 console 로그롤 보실 수 있습니다.
    return new Promise(function reslove() {
        //내가 결과 값을 그릴 canvas 부분 설정
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        //canvas의 뿌려진 부분 초기화
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var imageObj = new Image();
        imageObj.onload = function () {
            ctx.drawImage(imageObj, 10, 10);
            //canvas img를 그리겠다.
        };
        imageObj.src = imgData;
        //그릴 image데이터를 넣어준다.

    }, function reject() { });

}


