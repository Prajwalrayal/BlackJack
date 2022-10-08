let player={
    name: "Prajwal",
    chips: 200,
    sayHello : function(){
        
    }
}
let hasBlackJack=false
let isAlive=false
let s=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let playEl=document.getElementById("player-el")
playEl.textContent=player.name+" $"+player.chips;
let cards=[]
let sum=0

function reset()
{
    cards=[getRandom(),getRandom()]
    sum=cards[0]+cards[1];
}
function getRandom()
{
    let randomnumber=Math.ceil(Math.random()*13)
    if(randomnumber===1)
        return 11;
    if(randomnumber>=11 && randomnumber<=13 )
        return 10;
    return randomnumber;
}
function renderGame()
{
    if(sum<=20)
    {
        s="Do you want to draw a new card?"
    }
    else if(sum===21)
    {
        s="Wohoo! You've got BlackJack"
        hasBlackJack=true   
    }
    else
    {
        s="You're out of game!"
        isAlive=false   
    }
    messageEl.textContent=s;
    sumEl.textContent=("Sum : "+sum);
    cardEl.textContent="Cards :";
    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent+=(cards[i]+" ");
    }
}
function startGame()
{   
    isAlive=true;
    reset();
    renderGame();    
}
function newCard()
{   
    if(isAlive && !hasBlackJack)
    {
        let newcard=getRandom();
        sum+=newcard;
        cards.push(newcard);
        renderGame();
    }
    else
        return
  
    // drawn=false
}




