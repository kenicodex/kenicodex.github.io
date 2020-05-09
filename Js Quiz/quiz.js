let score = 0;
var questions = 
[{
    secret : Math.random(),
    quiz : 'What is javascript latest version ',
    opt_A : 'Es6',
    opt_B : 'Es7',
    opt_C : 'Es8',
    answer : this.opt_A,
    work : function(element)
    { 
        if (element.value == this.opt_A) {
            score++
            document.getElementById(this.secret + 4).style = 'background-color : #00bf00';
            document.getElementById(this.secret + 5).style = 'background-color : white';
            document.getElementById(this.secret + 6).style = 'background-color : white';
        }else if(element.value == this.opt_B){
            document.getElementById(this.secret + 4).style = 'background-color : white';
            document.getElementById(this.secret + 5).style = 'background-color : red';
            document.getElementById(this.secret + 6).style = 'background-color : white';
        }else if (element.value == this.opt_C){
            document.getElementById(this.secret + 4).style = 'background-color : white';
            document.getElementById(this.secret + 5).style = 'background-color : white';
            document.getElementById(this.secret + 6).style = 'background-color : red';
        }
    }
},
{
    secret :Math.random(),
    quiz : 'When was javascript found', 
    opt_A : '1938',
    opt_B : '3830',
    opt_C : '1990',
    work : function(element)
    {
        if (element.value == this.opt_A) {
            document.getElementById(this.secret + 4).style = 'background-color : red';
            document.getElementById(this.secret + 5).style = 'background-color : white';
            document.getElementById(this.secret + 6).style = 'background-color : white';
        }else if(element.value == this.opt_B){
            document.getElementById(this.secret + 4).style = 'background-color : white';
            document.getElementById(this.secret + 5).style = 'background-color : red';
            document.getElementById(this.secret + 6).style = 'background-color : white';
        }else if (element.value == this.opt_C){
            document.getElementById(this.secret + 4).style = 'background-color : white';
            document.getElementById(this.secret + 5).style = 'background-color : white';
            document.getElementById(this.secret + 6).style = 'background-color : #00bf00';
            score++
        }
    }
},
{
    secret :Math.random(),
    quiz : 'Is javascript same with java',
    opt_A : 'yes',
    opt_B : 'no',
    opt_C : 'no idea',
    work : function(element)
    {
        if (element.value == this.opt_A) {
            document.getElementById(this.secret + 4).style = 'background-color : red';
            document.getElementById(this.secret + 5).style = 'background-color : white';
            document.getElementById(this.secret + 6).style = 'background-color : white';
        }else if(element.value == this.opt_B){
            document.getElementById(this.secret + 4).style = 'background-color : white';
            document.getElementById(this.secret + 5).style = 'background-color : #00bf00';
            document.getElementById(this.secret + 6).style = 'background-color : white';
            score++
        }else if (element.value == this.opt_C){
            document.getElementById(this.secret + 4).style = 'background-color : white';
            document.getElementById(this.secret + 5).style = 'background-color : white';
            document.getElementById(this.secret + 6).style = 'background-color : red';
        }
    }
},
{
    secret :Math.random(),
    quiz : 'What is javascript best used for',
    opt_A : 'frontend',
    opt_B : 'backend',
    opt_C : 'AI',
    work : function(element)
    {
        if (element.value == this.opt_A) {
            score++
            document.getElementById(this.secret + 4).style = 'background-color : #00bf00';
            document.getElementById(this.secret + 5).style = 'background-color : white';
            document.getElementById(this.secret + 6).style = 'background-color : white';
        }else if(element.value == this.opt_B){
            document.getElementById(this.secret + 4).style = 'background-color : white';
            document.getElementById(this.secret + 5).style = 'background-color : red';
            document.getElementById(this.secret + 6).style = 'background-color : white';
        }else if (element.value == this.opt_C){
            document.getElementById(this.secret + 4).style = 'background-color : white';
            document.getElementById(this.secret + 5).style = 'background-color : white';
            document.getElementById(this.secret + 6).style = 'background-color : red';
        }
    }
},
{
    secret :Math.random(),
    quiz : 'Which is a javascript framework',
    opt_A : 'node.js',
    opt_B : 'angular.js',
    opt_C : 'react.js',
    work : function(element)
    {
        if (element.value == this.opt_A) {
            document.getElementById(this.secret + 4).style = 'background-color : red';
            document.getElementById(this.secret + 5).style = 'background-color : white';
            document.getElementById(this.secret + 6).style = 'background-color : white';
        }else if(element.value == this.opt_B){
            document.getElementById(this.secret + 4).style = 'background-color : white';
            document.getElementById(this.secret + 5).style = 'background-color : red';
            document.getElementById(this.secret + 6).style = 'background-color : white';
        }else if (element.value == this.opt_C){
            document.getElementById(this.secret + 4).style = 'background-color : white';
            document.getElementById(this.secret + 5).style = 'background-color : white';
            document.getElementById(this.secret + 6).style = 'background-color : #00bf00';
            score++
        }
    }
}]
document.getElementById('submit').style.display = 'none';
function start() {
    document.getElementById('submit').style.display = 'block';
    document.getElementById('start').style.display = 'none';
    for (let i = 0; i < questions.length; i++) {
        const element = questions[i];
        document.getElementById('questions').innerHTML +=
        `<div id=${i}>  <h4> ${(i+1)+ "." + " " + element.quiz} ? </h4>
            <label for=${element.secret + 1} id=${element.secret +4} onclick='each()'>
                <input type='radio' onclick='questions[${i}].work(this)' value=${element.opt_A} id=${element.secret + 1} name=${element.secret} />
                ${element.opt_A}
            </label> <br> <br>
            <label for=${element.secret + 2} id=${element.secret + 5}  onclick='each()'>
                <input type='radio' onclick='questions[${i}].work(this)' value=${element.opt_B} id=${element.secret + 2} name=${element.secret} />
                ${element.opt_B}
            </label> <br> <br>
            <label for=${element.secret + 3} id=${element.secret + 6}  onclick='each()'>
                <input type='radio' onclick='questions[${i}].work(this)' value=${element.opt_C} id=${element.secret + 3} name=${element.secret} />
                ${element.opt_C}
            </label> 
        </div>
        `
        ;
    }
}
function submit(){
    document.getElementById('result').innerHTML = ' your score is ' + score;
}
