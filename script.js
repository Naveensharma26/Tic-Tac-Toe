let flag = 1;
let n = 0;

const choices = ["box1","box2","box3","box4","box5","box6","box7","box8","box9"]

const b1 = document.getElementById("box1")
const b2 = document.getElementById("box2")
const b3 = document.getElementById("box3")
const b4 = document.getElementById("box4")
const b5 = document.getElementById("box5")
const b6 = document.getElementById("box6")
const b7 = document.getElementById("box7")
const b8 = document.getElementById("box8")
const b9 = document.getElementById("box9")
const modal = document.getElementById("myModal")
const startbtn = document.getElementById("start-btn")
const player1div = document.getElementById("input-div1")
const player2div = document.getElementById("input-div2")
const player1btn = document.getElementById("btn-pl1")
const player2btn = document.getElementById("btn-pl2")
const player1nameshow = document.getElementById("player1name")
const player2nameshow = document.getElementById("player2name")
const playername1 = document.getElementById("name1")
const playername2 = document.getElementById("name2")

player1btn.addEventListener("click",player1clicked)
player2btn.addEventListener("click",player2clicked)

startbtn.addEventListener("click",startClicked)


function startClicked(){
 
  if(n===0)
  {
        alert("Choose One player or Two player Game")
  }
  else if(n===1)
  {
    if(playername1.value!="")
    {
      player1nameshow.innerText = playername1.value
      player2nameshow.innerText = "Computer"
      modal.style.display = "none"
    }
    else
    {
      alert("Enter Players Name")
    }
  }
  else if(n===2){
    if(playername1.value!="" && playername2.value!="")
    {
      player1nameshow.innerText = playername1.value
      player2nameshow.innerText = playername2.value
      modal.style.display = "none"
      console.log(playername2.value)
    }
    else
    {
      alert("Enter Players Name")
    }
  }
}

function player1clicked(){
  n = 1;
  player1btn.style.border = "4px solid black"
  player2btn.style.border = "none"
  player2div.style.display = "none"
}

function player2clicked(){
  n=2;
  player2btn.style.border = "4px solid black"
  player1btn.style.border = "none"
  player2nameshow.innerText = "Computer"
  player2div.style.display = "flex"
}

const resetBtn = document.getElementById("resetBtn");

resetBtn.onclick = resetVal;

function resetVal()
{
  location.reload()
}


clickBox1 = () =>{
  if(n===2)
  {
    if(flag===1 && b1.innerHTML!="X" && b1.innerHTML!="O")
    {
      b1.innerHTML = "X"
      flag = 0;
    }
    else if(flag===0 && b1.innerHTML!="X" && b1.innerHTML!="O")
    {
      b1.innerHTML = "O";
      flag = 1;
    }
  }
  else if(n===1){
    if(b1.innerHTML!="X" && b1.innerHTML!="O")
    {
      b1.innerHTML = "X"
      const j = choices.indexOf("box1")
      choices.splice(j,1)
      if(choices.length!=0)
      {

        let k = choices[Math.floor(Math.random()*choices.length)]
        console.log(k)
        let obj = document.getElementById(k)
        obj.innerHTML = "O"
        const i = choices.indexOf(k)
        if(i > -1 )
        {
          choices.splice(i,1)
        }
      }
      console.log(choices)
      flag=1
    }
  }
  else
  {
    alert("Choose Number of players")
  }
}

clickBox2 = () =>{
  if(n===2)
  {

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
  else if(n===1){
    if(b2.innerHTML!="X" && b2.innerHTML!="O")
    {
      b2.innerHTML = "X"
      const j = choices.indexOf("box2")
      choices.splice(j,1)
      if(choices.length!=0)
      {

        let k = choices[Math.floor(Math.random()*choices.length)]
        let obj = document.getElementById(k)
        obj.innerHTML = "O"
        console.log(obj)
        const i = choices.indexOf(k)
        if(i > -1 )
        {
          choices.splice(i,1)
          console.log(choices[i])
        }
        flag=1
      }
    }
  }
  else
  {
    alert("Choose Number of players")
  }
}
clickBox3 = () =>{
  if(n===2)
  {

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
  else if(n===1){
    if(b3.innerHTML!="X" && b3.innerHTML!="O")
    {
      b3.innerHTML = "X"
      const j = choices.indexOf("box3")
      choices.splice(j,1)
      if(choices.length!=0){

        let k = choices[Math.floor(Math.random()*choices.length)]
        console.log(k)
        let obj = document.getElementById(k)
        obj.innerHTML = "O"
        const i = choices.indexOf(k)
        if(i > -1 )
        {
          choices.splice(i,1)
        }
        flag=1
      }
    }
  }
  else
  {
    alert("Choose Number of players")
  }
}
clickBox4 = () =>{
  if(n==2)
  {

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
  else if(n===1){
    if(b4.innerHTML!="X" && b4.innerHTML!="O")
    {
      b4.innerHTML = "X"
      const j = choices.indexOf("box4")
      choices.splice(j,1)
      if(choices.length!=0)
      {

        let k = choices[Math.floor(Math.random()*choices.length)]
        console.log(k)
        let obj = document.getElementById(k)
        obj.innerHTML = "O"
        const i = choices.indexOf(k)
        if(i > -1 )
        {
          choices.splice(i,1)
        }
        flag=1
      }
    }
  }
  else
  {
    alert("Choose Number of players")
  }
}
clickBox5 = () =>{
  if(n===2)
  {

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
  else if(n===1){
    if(b5.innerHTML!="X" && b5.innerHTML!="O")
    {
      b5.innerHTML = "X"
      const j = choices.indexOf("box5")
      choices.splice(j,1)
      if(choices.length!=0)
      {
        
        let k = choices[Math.floor(Math.random()*choices.length)]
        console.log(k)
        let obj = document.getElementById(k)
        obj.innerHTML = "O"
        const i = choices.indexOf(k)
        if(i > -1 )
        {
          choices.splice(i,1)
        }
        flag=1
      }
    }
  }
  else
  {
    alert("Choose Number of players")
  }
}
clickBox6 = () =>{
  if(n===2)
  {

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
  else if(n===1){
    if(b6.innerHTML!="X" && b6.innerHTML!="O")
    {
      b6.innerHTML = "X"
      const j = choices.indexOf("box6")
      choices.splice(j,1)
      if(choices.length!=0)
      {

        let k = choices[Math.floor(Math.random()*choices.length)]
        console.log(k)
        let obj = document.getElementById(k)
        obj.innerHTML = "O"
        const i = choices.indexOf(k)
        if(i > -1 )
        {
          choices.splice(i,1)
        }
      }
      flag=1
    }
  }
  else
  {
    alert("Choose Number of players")
  }
}
clickBox7 = () =>{
  if(n===2)
  {

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
  else if(n===1){
    if(b7.innerHTML!="X" && b7.innerHTML!="O")
    {
      b7.innerHTML = "X"
      const j = choices.indexOf("box7")
      choices.splice(j,1)
      if(choices.length!=0){

        let k = choices[Math.floor(Math.random()*choices.length)]
        console.log(k)
        let obj = document.getElementById(k)
        obj.innerHTML = "O"
        const i = choices.indexOf(k)
        if(i > -1 )
        {
          choices.splice(i,1)
        }
        flag=1
      }
    }
  }
  else
  {
    alert("Choose Number of players")
  }
}
clickBox8 = () =>{
  if(n===2)
  {

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
  else if(n===1){
    if(b8.innerHTML!="X" && b8.innerHTML!="O")
    {
      b8.innerHTML = "X"
      const j = choices.indexOf("box8")
      choices.splice(j,1)
      if(choices.length!=0)
      {

        let k = choices[Math.floor(Math.random()*choices.length)]
        console.log(k)
        let obj = document.getElementById(k)
        obj.innerHTML = "O"
        const i = choices.indexOf(k)
        if(i > -1 )
        {
          choices.splice(i,1)
        }
        flag=1
      }
    }
  }
  else
  {
    alert("Choose Number of players")
  }
}
clickBox9 = () =>{
  if(n===2)
  {

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
}
else if(n===1){
  if(b9.innerHTML!="X" && b9.innerHTML!="O")
  {
    b9.innerHTML = "X"
    const j = choices.indexOf("box9")
    choices.splice(j,1)
    if(choices.length!=0){

      let k = choices[Math.floor(Math.random()*choices.length)]
      console.log(k)
      let obj = document.getElementById(k)
      obj.innerHTML = "O"
      const i = choices.indexOf(k)
      if(i > -1 )
      {
        choices.splice(i,1)
      }
      flag=1
    }
  }
}
else
{
  alert("Choose Number of players")
}
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
  else if(b1.innerText === "O" && b2.innerText === "O" && b3.innerText === "O")
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
  else if(b1.innerText === "X" && b5.innerText === "X" && b9.innerText === "X")
  {
    alert("Player 1 Win")
    b1.style.backgroundColor = "#00ff00"
    b5.style.backgroundColor = "#00ff00"
    b9.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  else if(b1.innerText === "O" && b5.innerText === "O" && b9.innerText === "O")
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
  else if(b1.innerText === "X" && b4.innerText === "X" && b7.innerText === "X")
  {
    alert("Player 1 Win")
    b1.style.backgroundColor = "#00ff00"
    b4.style.backgroundColor = "#00ff00"
    b7.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  else if(b1.innerText === "O" && b4.innerText === "O" && b7.innerText === "O")
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
  else if(b2.innerText === "X" && b5.innerText === "X" && b8.innerText === "X")
  {
    alert("Player 1 Win")
    b2.style.backgroundColor = "#00ff00"
    b5.style.backgroundColor = "#00ff00"
    b8.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  else if(b2.innerText === "O" && b5.innerText === "O" && b8.innerText === "O")
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
  else if(b3.innerText === "X" && b5.innerText === "X" && b7.innerText === "X")
  {
    alert("Player 1 Win")
    b3.style.backgroundColor = "#00ff00"
    b5.style.backgroundColor = "#00ff00"
    b7.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  else if(b3.innerText === "O" && b5.innerText === "O" && b7.innerText === "O")
  {
    alert("Player 2 WIN")
    b3.style.backgroundColor = "#00ff00"
    b5.style.backgroundColor = "#00ff00"
    b7.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }

  //Case - 3 6 9
  else if(b3.innerText === "X" && b6.innerText === "X" && b9.innerText === "X")
  {
    alert("Player 1 Win")
    b3.style.backgroundColor = "#00ff00"
    b6.style.backgroundColor = "#00ff00"
    b9.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  else if(b3.innerText === "O" && b6.innerText === "O" && b9.innerText === "O")
  {
    alert("Player 2 WIN")
    b3.style.backgroundColor = "#00ff00"
    b6.style.backgroundColor = "#00ff00"
    b9.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }

  //Case 4 5 6
  else if(b4.innerText === "X" && b5.innerText === "X" && b6.innerText === "X")
  {
    alert("Player 1 Win")
    b4.style.backgroundColor = "#00ff00"
    b5.style.backgroundColor = "#00ff00"
    b6.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  else if(b4.innerText === "O" && b5.innerText === "O" && b6.innerText === "O")
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
  else if(b7.innerText === "X" && b8.innerText === "X" && b9.innerText === "X")
  {
    alert("Player 1 Win")
    b7.style.backgroundColor = "#00ff00"
    b8.style.backgroundColor = "#00ff00"
    b9.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  else if(b7.innerText === "O" && b8.innerText === "O" && b9.innerText === "O")
  {
    alert("Player 2 WIN")
    b7.style.backgroundColor = "#00ff00"
    b8.style.backgroundColor = "#00ff00"
    b9.style.backgroundColor = "#00ff00"
    setTimeout(() => {
      resetVal()
    }, 1000);
  }
  else if ((b1.innerText == 'X' || b1.innerText == 'O') && (b2.innerText == 'X'
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
