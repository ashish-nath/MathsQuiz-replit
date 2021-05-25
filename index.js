var readlineSync=require('readline-sync')
const chalk = require('chalk');
const log=console.log;
var score=0;

var greeting='Welcome to CARDINAL Maths Quiz!!';
log(chalk.yellow.bgBlack.bold(greeting));

var question=readlineSync.question('\nMention your Name?.... ')

var welMsg='\nWelcome '+ question.toUpperCase()+' To this fun Quiz Game' ;
log(chalk.green(welMsg));

var text="\nLet's start the Quiz and test your skills";
log(chalk.red.bold(text));
log(chalk.blue("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ "))


//play 
function play(question,answer)
{var userAnswer=readlineSync.question(question);
 
  if(userAnswer.toUpperCase()==answer.toUpperCase())
  {
    score+=1;
    log(chalk.green('Correct!'))
  }
  else
  {
    score-=1;
    log(chalk.red.bold('Wrong!'))
  }
}

//array of questions
var questions=[
 {question:(" \nAll natural numbers and 0 are called the ……………… numbers?\n->"),answer:"whole"},
 {question:"\n50 times 5 is equal to?\n->",answer:"250"}, 
 {question:"\nWhat is 121 times 11?\n->",answer:"1331"},
 {question:"\nIf ‘+’ means ‘×’, ‘-‘ means ‘+’, ‘×’ means ‘÷’ and ,‘÷’ means ‘-‘ then find the value of \n\t6 – 9 + 8 × 3 ÷ 20 = ……\n->",answer:"10"},
 {question:"\nThe cube root of 1331 ?\n->",answer:"11"},
 {question:"\n100-1?\n->",answer:"99"}
 ]


 //loop

 for(i=0;i<questions.length;i++)
 {
   var currentquestion=questions[i];
   play(currentquestion.question,currentquestion.answer);
   log('_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _')
 }

 if(score==questions.length)
 {
   log('\nYAY!! You got A perfect score','\nScore:',score)
   log('\nStar triangle formation from the score you acquired')
   var a = '';
   var n = score;
   var m = (n-1); 
   for(i=1; i <= n; i++)
      {
        a = a.trim();
        a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
        console.log(a);
        m--;
      }
 }
 else
 {
   log('\nNice Try!! Try again if not satisfied with your score','\nScore:',score)
 }