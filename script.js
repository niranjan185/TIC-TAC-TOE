let box = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-game");
let msgcontainer =document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turn0 = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetgame = () =>{
    turn0 = true;
    enablebtn();
    msgcontainer.classList.add("hide");
}

box.forEach((box1) =>{
    box1.addEventListener("click", ()=>{
        console.log("button clicked");
        if(turn0){
            box1.innerText = "O";
            turn0 = false;   
        }else{
            box1.innerText = "x";
            turn0 = true;
        }
        box1.disabled = true;
        checkwinner();

    })
});
const disablebtn = () =>{
    for(let boxes of box){
        boxes.disabled = true;
    }
}
const enablebtn = () =>{
    for(let boxes of box){
        boxes.disabled = false;
        boxes.innerText ="";
    }
}
const showwinner = (winner) => {
    msg.innerText = `congratulations , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
};


const checkwinner = () =>{
    for(let pattern of winpatterns){
            let pos1 =box[pattern[0]].innerText;
            let pos2 =box[pattern[1]].innerText;
            let pos3 =box[pattern[2]].innerText;

            if(pos1 != "" && pos2 !="" &&pos3 !="" ){
                if(pos1===pos2 && pos2===pos3){
                    console.log("winner",pos1);
                    showwinner(pos1);
                }
            }
    }       
}

resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);
