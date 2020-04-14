const{input} = require('console-input')
const{randomChoice}= require('home-on-the-range')
const{cond}= require('hamda')
function main()
     {
        const {userChoice, computerChoice} = getChoices()
        const {win,tie}= getCondition(userChoice,computerChoice)
        const message='You => ${userChoice} vs. ${computerChoice} <= computerChoice: '
        const result = message + cond(win,'you win|',tie,'Tie.','Sorry.you lose!')
        return result
     }
function getChoices(){
 const userChoice = input('choice your weapon:').toLowerCase()
 const computerChoice = randomChoice(['rock','paper','scissor'])
 return {userChoice,computerChoice}


}


function getConditions(userChoice,computerchoice){
    const win = makeWinConditions(userChoice,computerChoice)
    const tie = makeTieCondition(userChoice,computerChoice)
    return{win,tie}
}
 function makeWinConditions(userChoice,computerchoice){
 const wc1 = userChoice === 'paper' && computerChoice === 'rock'
 const wc2 = userChoice === 'scissor' && computerChoice === 'paper'
 const wc3 = userChoice === 'rock' && computerChoice === 'scissor'
 const win = wc1||wc2||wc3
 return win

 }
 const makeTiecondition= (userchoice,computerChoice) => userChoice === computerChoice
 console.log(main())

