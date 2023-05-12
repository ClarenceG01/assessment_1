// let user_first=prompt("Enter first number");
// let user_second=prompt("Enter second number");

// let first_number=Number(user_first);
// let second_number=Number(user_second);
// function check(first_number,second_number) {
//     if(first_number==8){
//         console.log(`${first_number} is 8`);
//     }else if(second_number==8){
//         console.log(`${second_number} is 8`);
//     }else{
//         if(first_number+second_number==8){
//             console.log("Their sum is 8");
//         }else if(first_number-second_number==8){
//             console("Their difference is 8");
//         }
//     }
// }

function check(first_number,second_number) {
    if(first_number==8){
        console.log(`first number is 8`);
    }else if(second_number==8){
        console.log(`second number is 8`);
    }else{
        if(first_number+second_number==8){
            console.log("Their sum is 8");
        }else if(first_number-second_number==8 || second_number-first_number==8){
            console.log("Their difference is 8");
        }else{
            console.log("Both are not 8");
            console.log("Their sum is not 8");
            console.log("Their difference is not 8");
        }
    }
}
check(1,1);