// function angle(degree){
//     switch (true) {
//         case degree>0 && degree<90:
//             console.log("Acute angle");
//             break;
//         case degree==90:
//             console.log("Right angle");
//             break;
//         case degree>90 && degree<180:
//             console.log("Obsolute angle");
//             break;
//         case degree==180:
//             console.log("Straigt angle");
//             break;
//         default:
//             console.log("Give any degree between 0 and 180");
//             break;
//     }
// }
// angle(180);
let user_no=prompt("Enter degrees:");
let degree=Number(user_no);

function angle(degree){
    switch (true) {
        case degree>0 && degree<90:
            console.log("Acute angle");
            break;
        case degree==90:
            console.log("Right angle");
            break;
        case degree>90 && degree<180:
            console.log("Obsolute angle");
            break;
        case degree==180:
            console.log("Straigt angle");
            break;
        default:
            console.log("Give any degree between 0 and 180");
            break;
    }
}
angle(180);