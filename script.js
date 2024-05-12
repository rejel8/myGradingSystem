function gradeChecker() {
    var score = inp.value
    if (score>=70 && score<=100) {
        bodyTag.style.backgroundColor = 'rebeccapurple'
        result.innerHTML = 'A'
        console.log('A')
        result.style.color = 'white'
        console.log(score);
    
    } else if(score>=60 && score < 70) {
        result.style.color = 'blue'
        result.innerHTML = 'B'
    } else if(score>=50 && score < 70) {
        result.innerHTML = 'C'
        result.style.color = 'green'
     } else if(score>=45 && score < 50) {
         result.innerHTML = 'D'
         result.style.color = 'red'
     } else if(score>=40 && score < 45) {
         result.innerHTML = 'E'
     } else if(score>=0 && score < 40) {
         result.innerHTML = 'F'
         result.style.color = 'white'
     } 
        else {
        console.log(score);
        console.log("invalid score");
        result.innerHTML = 'Invalid'
    }
    inp.value = ''

}




// var Song1 = new Audio('audio')