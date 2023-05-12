let user_no=prompt("Enter number");
let num = Number(user_no);

function timeConvert(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    alert(`${hours} hours and ${minutes} minutes`);
}

timeConvert(num);
  


  