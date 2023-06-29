(function() {
    "use strict";

    var detonationTimer = 5;

    // TODO: This function needs to be called once every second
    function updateTimer() {
        if (detonationTimer == 0) {
            alert('EXTERMINATE!');
            document.body.innerHTML = '';
        } else if (detonationTimer > 0) {
            document.getElementById('timer').innerHTML = detonationTimer;
        }

        detonationTimer--;
    }

    setInterval(updateTimer, 1000);

    // TODO: When this function runs, it needs to
    // cancel the interval/timeout for updateTimer()
    function defuseTheBOM() {
        clearTimeout(updateTimer());
    }


    // Don't modify anything below this line!
    //
    // This causes the defuseTheBOM() function to be called
    // when the "defuser" button is clicked.
    // We will learn about events in the DOM lessons
    var defuser = document.getElementById('defuser');
    defuser.addEventListener('click', defuseTheBOM);
})();