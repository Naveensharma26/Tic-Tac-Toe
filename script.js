const b1 = document.getElementById("box1")
const b2 = document.getElementById("box2")
const b3 = document.getElementById("box3")
const b4 = document.getElementById("box4")
const b5 = document.getElementById("box5")
const b6 = document.getElementById("box6")
const b7 = document.getElementById("box7")
const b8 = document.getElementById("box8")
const b9 = document.getElementById("box9")
const resetBtn = document.getElementById("resetBtn");

resetBtn.onclick = resetVal;

function resetVal()
{
  location.reload()
}

let flag = 1;

clickBox1 = () =>{
  if(flag===1 && b1.innerHTML!="X" && b1.innerHTML!="O")
  {
    b1.innerHTML = "X"
    document.getElementById("box9").disabled = true
    flag = 0;
  }
  else if(flag===0 && b1.innerHTML!="X" && b1.innerHTML!="O")
  {
    b1.innerHTML = "O";
    flag = 1;
  }
}
clickBox2 = () =>{
  if(flag===1 && b2.innerHTML!="X" && b2.innerHTML!="O")
  {
    b2.innerHTML = "X"
    flag = 0;
  }
  else if(flag===0 && b2.innerHTML!="X" && b2.innerHTML!="O")
  {
    b2.innerHTML = "O";
    flag = 1;
  }
}
clickBox3 = () =>{
  if(flag===1 && b3.innerHTML!="X" && b3.innerHTML!="O")
  {
    b3.innerHTML = "X"
    flag = 0;
  }
  else if(flag===0 && b3.innerHTML!="X" && b3.innerHTML!="O")
  {
    b3.innerHTML = "O";
    flag = 1;
  }
}
clickBox4 = () =>{
  if(flag===1 && b4.innerHTML!="X" && b4.innerHTML!="O")
  {
    b4.innerHTML = "X"
    flag = 0;
  }
  else if(flag===0 && b4.innerHTML!="X" && b4.innerHTML!="O")
  {
    b4.innerHTML = "O";
    flag = 1;
  }
}
clickBox5 = () =>{
  if(flag===1 && b5.innerHTML!="X" && b5.innerHTML!="O")
  {
    b5.innerHTML = "X"
    flag = 0;
  }
  else if(flag===0 && b5.innerHTML!="X" && b5.innerHTML!="O")
  {
    b5.innerHTML = "O";
    flag = 1;
  }
}
clickBox6 = () =>{
  if(flag===1 && b6.innerHTML!="X" && b6.innerHTML!="O")
  {
    b6.innerHTML = "X"
    flag = 0;
  }
  else if(flag===0 && b6.innerHTML!="X" && b6.innerHTML!="O")
  {
    b6.innerHTML = "O";
    flag = 1;
  }
}
clickBox7 = () =>{
  if(flag===1 && b7.innerHTML!="X" && b7.innerHTML!="O")
  {
    b7.innerHTML = "X"
    flag = 0;
  }
  else if(flag===0 && b7.innerHTML!="X" && b7.innerHTML!="O")
  {
    b7.innerHTML = "O";
    flag = 1;
  }
}
clickBox8 = () =>{
  if(flag===1 && b8.innerHTML!="X" && b8.innerHTML!="O")
  {
    b8.innerHTML = "X"
    flag = 0;
  }
  else if(flag===0 && b8.innerHTML!="X" && b8.innerHTML!="O")
  {
    b8.innerHTML = "O";
    flag = 1;
  }
}
clickBox9 = () =>{
  if(flag===1 && b9.innerHTML!="X" && b9.innerHTML!="O")
  {
    b9.innerHTML = "X"
    flag = 0;
  }
  else if(flag===0 && b9.innerHTML!="X" && b9.innerHTML!="O")
  {
    b9.innerHTML = "O";
    flag = 1;
  }
  mark()
}

mark = ()=>{

  //Case - 1 2 3 horizontal
  if(b1.innerText === "X" && b2.innerText === "X" && b3.innerText === "X")
  {
    alert("Player 1 Win")
    b1.style.backgroundColor = "#00ff00"
    b2.style.backgroundColor = "#00ff00"
    b3.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  if(b1.innerText === "O" && b2.innerText === "O" && b3.innerText === "O")
  {
    alert("Player 2 WIN")
    b1.style.backgroundColor = "#00ff00"
    b2.style.backgroundColor = "#00ff00"
    b3.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }

  //Case - 1 5 9 Diagonal 
  if(b1.innerText === "X" && b5.innerText === "X" && b9.innerText === "X")
  {
    alert("Player 1 Win")
    b1.style.backgroundColor = "#00ff00"
    b5.style.backgroundColor = "#00ff00"
    b9.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  if(b1.innerText === "O" && b5.innerText === "O" && b9.innerText === "O")
  {
    alert("Player 2 WIN")
    b1.style.backgroundColor = "#00ff00"
    b5.style.backgroundColor = "#00ff00"
    b9.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }

  //Case - 1 4 7 Vertical
  if(b1.innerText === "X" && b4.innerText === "X" && b7.innerText === "X")
  {
    alert("Player 1 Win")
    b1.style.backgroundColor = "#00ff00"
    b4.style.backgroundColor = "#00ff00"
    b7.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  if(b1.innerText === "O" && b4.innerText === "O" && b7.innerText === "O")
  {
    alert("Player 2 WIN")
    b1.style.backgroundColor = "#00ff00"
    b4.style.backgroundColor = "#00ff00"
    b7.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }

  //Case - 2 5 8
  if(b2.innerText === "X" && b5.innerText === "X" && b8.innerText === "X")
  {
    alert("Player 1 Win")
    b2.style.backgroundColor = "#00ff00"
    b5.style.backgroundColor = "#00ff00"
    b8.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  if(b2.innerText === "O" && b5.innerText === "O" && b8.innerText === "O")
  {
    alert("Player 2 WIN")
    b2.style.backgroundColor = "#00ff00"
    b5.style.backgroundColor = "#00ff00"
    b8.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }

  //Case - 3 5 7 
  if(b3.innerText === "X" && b5.innerText === "X" && b7.innerText === "X")
  {
    alert("Player 1 Win")
    b3.style.backgroundColor = "#00ff00"
    b5.style.backgroundColor = "#00ff00"
    b7.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  if(b3.innerText === "O" && b5.innerText === "O" && b7.innerText === "O")
  {
    alert("Player 2 WIN")
    b3.style.backgroundColor = "#00ff00"
    b5.style.backgroundColor = "#00ff00"
    b7.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }

  //Case 4 5 6
  if(b4.innerText === "X" && b5.innerText === "X" && b6.innerText === "X")
  {
    alert("Player 1 Win")
    b4.style.backgroundColor = "#00ff00"
    b5.style.backgroundColor = "#00ff00"
    b6.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  if(b4.innerText === "O" && b5.innerText === "O" && b6.innerText === "O")
  {
    alert("Player 2 WIN")
    b4.style.backgroundColor = "#00ff00"
    b5.style.backgroundColor = "#00ff00"
    b6.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  //Case 7 8 9 
  if(b7.innerText === "X" && b8.innerText === "X" && b9.innerText === "X")
  {
    alert("Player 1 Win")
    b7.style.backgroundColor = "#00ff00"
    b8.style.backgroundColor = "#00ff00"
    b9.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  if(b7.innerText === "O" && b8.innerText === "O" && b9.innerText === "O")
  {
    alert("Player 2 WIN")
    b7.style.backgroundColor = "#00ff00"
    b8.style.backgroundColor = "#00ff00"
    b9.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  if ((b1.innerText == 'X' || b1.innerText == 'O') && (b2.innerText == 'X'
        || b2.innerText == 'O') && (b3.innerText == 'X' || b3.innerText == 'O') &&
        (b4.innerText == 'X' || b4.innerText == 'O') && (b5.innerText == 'X' ||
        b5.innerText == 'O') && (b6.innerText == 'X' || b6.innerText == 'O') &&
        (b7.innerText == 'X' || b7.innerText == 'O') && (b8.innerText == 'X' ||
        b8.innerText == 'O') && (b9.innerText == 'X' || b9.innerText == 'O')) {
            alert('Match Tie');
            setTimeout(() => {
              resetVal()
            }, 1000);
        }
}