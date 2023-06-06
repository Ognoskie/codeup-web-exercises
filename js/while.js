// let i = 2, n = 65537
// while (i <= n ) {
//     console.log(i);
//     i *= 2;
// }


// function doubleInput(num) {
//     while(true) {
//         console.log(num);
//         num *= 2;
//         if (num > 66000) break;
//     }
// }
//
// doubleInput(2)




function sellMyCones(){
    let allCones = Math.floor(Math.random() * 50) + 50;
    do{
        const customerCones = Math.floor(Math.random() * 5) + 1;
        if (allCones - customerCones < 0) {
            console.log(`I can't sell ${customerCones} cones, I only have ${allCones}`);
            continue;
        } else if (allCones - customerCones === 0) {
            console.log('Yay ')
        }
    }
}