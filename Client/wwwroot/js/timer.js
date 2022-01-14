var Timer = {};

Timer.nowTime;
Timer.timerTimeTemp;
Timer.timerTime;

Timer.InitializeTimer = function() {  
    nowTime = new Date();//관리자 or MC의 의견 만들기 완료한 시간 
    var nowCopy = new Date(); //== nowTime

    timerTimeTemp = nowCopy.setMinutes(nowCopy.getMinutes() + 3);// 3은 설정된 타이머 Minutes를 의미 
    timerTime = new Date(timerTimeTemp);
    console.log(nowTime);
    console.log(timerTime);


    Timer.startTimerTest();

}



Timer.startTimerTest = function() {
    let current = new Date();//(매 초마다 변동) 현재시간 
    let diff = timerTime - current;

    if (diff < 0) {
        document.getElementById('timer').style.color = "red";
        return;
    }

    let displayTime = new Date(diff);
    //console.log(displayTime);
    let displayMunutes = displayTime.getMinutes().toLocaleString();//UI로 보여질 Minutes
    let displaySeconds = displayTime.getSeconds().toLocaleString();//UI로 보여질 Seconds
    if (displayMunutes < 10) {
        displayMunutes = "0" + displayMunutes;
    }
    if (displaySeconds < 10) {
        displaySeconds = "0" + displaySeconds;
    }
    console.log(displayMunutes);
    console.log(displaySeconds);
    document.getElementById('timer').innerHTML = displayMunutes + ":" + displaySeconds;

    setTimeout(Timer.startTimerTest, 1000);
}


