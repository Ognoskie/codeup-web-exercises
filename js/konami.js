jQuery === $

$(() => {

    $(document).ready(function(event){
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'enter'];

        let konamiIndex = 0;

        $(document).keydown(function(event){
            const key = event.key;
            console.log(key);
            if (key.toLowerCase() === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    alert("You gained 30 lives!");
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }

        });

    });



    // $(document).on('keyup', (e) => {
    //     console.log(e.key);
    // });













































































































})