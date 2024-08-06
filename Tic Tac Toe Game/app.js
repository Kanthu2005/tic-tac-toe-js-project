let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelectorAll("#reset");
let newGameBtn= document.querySelectorAll("#new-reset");
let msgContinear=document.querySelectorAll(".msg-continear");
let msg=document.querySelectorAll("#msg");

let turnO=true;
const winpatterns=[
[0,1,2],
[0.3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],

];
const resetGame =()=>{
    turnO=true;
    enableBoxes();
    msgContinear.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkwinnwer();

    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
       
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const showWinner=(winner)=>{
    msg.innerText='Congratulation ,Winner is ${winner}';
    msgContinear.classList.remove("hide");
    disableBoxes();
}
 
const checkwinnwer=()=>{
    for( let pattern of winpatterns){
        
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        
        if(pos1val !="" && pos2val !="" && pos3val !="" ){
            if(pos1val === pos2val && pos2val === pos3val){
                
                showWinner(pos1val);
            }

        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);