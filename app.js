
//array to hold both my questions and populate my answer's constant not to change

const questionArray=[["Which city was founded by Vikings ?","Cairo","Sofia","Dublin","New York"],
    ["Which is the best college in the Universe ?","Griffith College","Moscow State University","The School of Life","UCLA"],
    ["What is Harry Potters middle name ?","Jim","Naruto","Fred","James"],
    ["How many seasons does the show Rick and Morty have as of 2019?","1","2","3","4"],
    ["According to Albert Einstein two things are infinite one is the universe, at the other is ?","Time","Stupidity","Intellect","Relativity"],
    ["Where is it illegal to own a single guinea pig, but by law people are obliged to buy two?","China","Switzerland","United States","Trinidad and Tobago"],
    ["Which one of these flowers is a white Orchid ?","orchid","lilly","rose","marg"],
    ["Which one of these cute balls of cuteness is a Siamese cat ?","cat1","cat2","cat3","scat"],
    ["Solve:  2 + 4 = ?","6"],
    ["Solve:  10 - 15*60/4 = ?","-215"]];

// second array matches contains all teh correct answer's

const answersArray = ["Dublin", "Griffith College", "James", "4", "Stupidity", "Switzerland", "orchid", "scat", "6", "-215", "six", "Six", "\"6\"", "\'6\'", "negative two hundred and fifteen",
    "Negative two hundred and fifteen", "\"-215\"", "\'-215\'"];

// all mi variables decided to use var in the end as it suits me fine

var pageCounter = 1;
var userName,userChoice;
var userScore=1,question5="";
var date = new Date();
var startTime = date.getTime();
var timer,submitResult=true;
var medal;

// purely for testing left it out as it might be helpful when checking the code

document.getElementById("p10").innerHTML = "Questions Array length  "+questionArray.length; //TESTER REMOVE
document.getElementById("p11").innerHTML = "Answers Array length  "+answersArray.length; //TESTER REMOVE


//function gets the user name if empty will display alert initially had success with the undefined method istead of this but i encountered bugs later and changed to empty string

function getUserName(x) {

    userName=document.getElementById("userName").value;
    document.getElementById("p6").innerHTML = "The user name set is "+userName; //TESTER REMOVE
    if (userName === ""){
        alert("Please enter your name its not fun to call you user !")
    }else {
        // the italian clause :)

        if (userName === "Italy" || userName ==="italy" || userName === "italia" || userName ==="Italia") {
            document.body.style.backgroundColor = "#f3f3f3";
            document.body.style.background = "url('images/Italy.jpg')";
            document.body.style.backgroundSize="cover";
            document.body.style.position="center"+"center";
            document.body.style.backgroundAttachment="fixed";
            document.getElementById("DivButton7").style.background="url('images/flag.jpg')"+"center";
            document.getElementById("DivButton7").style.backgroundSize="cover";
            for (var i=1;i<6;i++) {
                document.getElementById("Head"+i).style.backgroundImage = "url('images/col.jpg')";
                document.getElementById("Head"+i).style.backgroundPositionX = "0px";
                document.getElementById("Head"+i).style.backgroundPositionY = "-100px";
            }
            document.getElementById("goodGame").innerHTML = "Bel giuoco, presto tutto andrà meglio!!!";

            // the italian clause :)
        }
        nextNavigation(0)
    }

}

// this function build my random quiz 3 separate loops and they are 3 types of questions each

function buildQuiz() {
    var min=0;
    var max=1;
    for(var i=1;i<4;i++) {

    // the formula is a bit complicated but basicaly below im calling a whole random number between 0-2 while also using i in the loop as a variable
        // and then incrementing to continue thru the 2d array raising it by 2 please use Testing window to make more sense

        var randomArr = Math.floor(Math.random() * (max - min + 1)+min);

        document.getElementById('Question' + i).innerHTML = questionArray[randomArr][0];
        document.getElementById("label"+i+"A").innerHTML = questionArray[randomArr][1];
        document.getElementById("answer"+i+"A").value = questionArray[randomArr][1];
        document.getElementById("label"+i+"B").innerHTML = questionArray[randomArr][2];
        document.getElementById("answer"+i+"B").value = questionArray[randomArr][2];
        document.getElementById("label"+i+"C").innerHTML = questionArray[randomArr][3];
        document.getElementById("answer"+i+"C").value = questionArray[randomArr][3];
        document.getElementById("label"+i+"D").innerHTML = questionArray[randomArr][4];
        document.getElementById("answer"+i+"D").value = questionArray[randomArr][4];

        document.getElementById("p"+i ).innerHTML="Random Choose question "+randomArr+" from the array"; // TESTER REMOVE ME
        min+=2;
        max+=2;
    }
    for(var i=4;i<5;i++) {

// same as above but random number min-max range cahnges and pictures get matched to answer values

        var randomArr = Math.floor(Math.random() * (max - min + 1)+min);
        document.getElementById('Question' + i).innerHTML = questionArray[randomArr][0];
        document.getElementById("answer"+i+"A").value = questionArray[randomArr][1];
        document.getElementById("answer"+i+"B").value = questionArray[randomArr][2];
        document.getElementById("answer"+i+"C").value = questionArray[randomArr][3];
        document.getElementById("answer"+i+"D").value = questionArray[randomArr][4];

        document.getElementById("p"+i ).innerHTML="Random Choose question "+randomArr+" from the array"; // TESTER REMOVE ME

        if (document.getElementById("answer4A").value === "orchid")
            document.getElementById("myImg").src = "images/orchid.jpg";
        if (document.getElementById("answer4B").value === "lilly")
            document.getElementById("myImg2").src = "images/lilly.jpg";
        if (document.getElementById("answer4C").value === "rose")
            document.getElementById("myImg3").src = "images/rose.jpg";
        if (document.getElementById("answer4D").value === "marg")
            document.getElementById("myImg4").src = "images/marg.jpg";
        if (document.getElementById("answer4A").value === "cat1")
            document.getElementById("myImg").src = "images/cat1.jpg";
        if (document.getElementById("answer4B").value === "cat2")
            document.getElementById("myImg2").src = "images/cat2.jpg";
        if (document.getElementById("answer4C").value === "cat3")
            document.getElementById("myImg3").src = "images/cat3.jpg";
        if (document.getElementById("answer4D").value === "scat")
            document.getElementById("myImg4").src = "images/scat.jpg";

        min+=2;
        max+=2;
    }

    //same as above exept we dont need a label here and they are n multiple choice which makes the code look much simple

    for(var i=5;i<6;i++) {

        document.getElementById("p"+i ).innerHTML="Random Choose question "+questionArray[randomArr][1]+" from the array"; // TESTER REMOVE ME
        var randomArr = Math.floor(Math.random() * (max - min + 1)+min);

        document.getElementById("equation").innerHTML=questionArray[randomArr][0];
        question5=questionArray[randomArr][1];


        min+=2;
        max+=2;
    }


}
buildQuiz();

//This function is present in all pages its job is to match selected answeres get values and then send them for verification.Page counter is used for navigation and is incremented here
// that gives the option to use the next button for navigation as well once values are sent to be checked if clauses no longer apply and function skips to the navigation function

function checked(x) {
    document.getElementById("p8").innerHTML = "value of x-" +x+ ",value of Page counter " + pageCounter +" is same " + (x === pageCounter); //TESTER REMOVE
    if ( x === pageCounter) {
        if (document.getElementById("answer"+pageCounter+"A").checked == true){
            userChoice=document.getElementById("answer"+pageCounter+"A").value;
            pageCounter++;
            checkAnswer1(x);
        }else if(document.getElementById("answer"+pageCounter+"B").checked == true){
            userChoice=document.getElementById("answer"+pageCounter+"B").value;
            pageCounter++;
            checkAnswer1(x);
        }else if(document.getElementById("answer"+pageCounter+"C").checked == true){
            userChoice=document.getElementById("answer"+pageCounter+"C").value;
            pageCounter++;
            checkAnswer1(x);
        }else if(document.getElementById("answer"+pageCounter+"D").checked == true){
            userChoice=document.getElementById("answer"+pageCounter+"D").value;
            pageCounter++;
            checkAnswer1(x);
        }else if (userChoice === undefined){
            alert("Please choose an answer first "+userName)
        }else{
            alert(userChoice);
            checkAnswer1(x);
        }


    }else {
        nextNavigation(x);
    }
    document.getElementById("p7").innerHTML = "Page Counter is - "+pageCounter; //TESTER REMOVE
}

//checks the answer's by getting value then matching it to the answers array after which calculating the users score, resenting the choice to undefined
// to be used for the next question and using  formula to alter the user Points variable based on time passed and answers given

function checkAnswer1(x) {


        for(var i = 0; i < answersArray.length; i++) {
        if (userChoice === answersArray[i]) {
            userScore += 1;
            userChoice = undefined;
            timer=Math.floor(10000-(((date.getTime() - startTime) / 1000))/userScore);
            document.getElementById("p13").innerHTML = timer;// TESTER REMOVE ME
            nextNavigation(x);
            break;
        }else if (i === answersArray.length-1){
            timer= Math.floor(10000-(((date.getTime() - startTime) / 1000))*(100-userScore));
            document.getElementById("p14").innerHTML=timer;// TESTER REMOVE ME
            document.getElementById("p15").innerHTML = "The User Score " + userScore; // TESTER REMOVE ME
            userChoice = undefined;
            nextNavigation(x);
        }
    }



}

// initially next navigation looked much simpler like previous navigation below it, checks a window and then based on visibility changes it
// however at end i added 2/3 to it to populate the feedback sreen as i found this to be the best place to do it since my functions were all becoming
// interdependent adding one boolean and an if clause would trigger the final screen and then bypas it again if the user decided to use the same button for navigation later


function nextNavigation (x) {
    document.getElementById("p22").innerHTML="Next navigation "+x; // TESTER REMOVE ME
    if (x === 5 && submitResult === true) {
    submitResult = false;
    if (userScore === 5) {
        document.getElementById("medal").src="images/silver.png"
        medal="Silver";
        document.getElementById("scoreParagraph3").innerHTML= "Medal "+ medal;
    }
        if (userScore === 6) {
            document.getElementById("medal").src="images/gold.png"
            medal="Gold";
            document.getElementById("scoreParagraph3").innerHTML= "Medal "+ medal;
        }
        if (userScore < 5) {
            document.getElementById("medal").src="images/bronze.png"
            medal="Bronze";
            document.getElementById("scoreParagraph3").innerHTML= "Medal "+ medal;
        }


            document.getElementById("scoreParagraph1").innerHTML = "Points "+ timer;
        document.getElementById("scoreParagraph2").innerHTML= userName+"'s Correct percentage "+ ((userScore*20)-20)+"%";
        document.getElementById("scoreParagraph4").innerHTML= "Hello "+userName+" great job on completing the game!!!" +"You got a total of "+timer+
            " points which get calculated by adding and removing points for answers and timing."+"In short the faster you are and the more correct answers you have the more points you will get."+
            "You correct percentage is "+((userScore*20)-20)+"%."+"And you got a "+medal+" medal, i like giving prizes.";

    }

    var choice="DivButton"+x;
    var page = document.getElementById(choice);
        if (page.style.display === "none") {
        page.style.display = "flex";
        document.getElementById("p16").innerHTML="if else";
    } else {
        page.style.display = "none";
        document.getElementById("p17").innerHTML="else";
    }
}

//Originaly the above function looked much like this one, an if - else clause to change window visibility

function previousNavigation (n) {
    document.getElementById("p23").innerHTML="Previous  navigation "+n; // TESTER REMOVE ME
    var choice="DivButton"+n;
    var page = document.getElementById(choice);
    if (page.style.display === "none") {
        page.style.display = "flex";
    } else {
        page.style.display = "none";
    }

}

//This was meant to be teh Original Submit function but in debuging i had to change that

function submit(x) {
    userChoice=document.getElementById("answer5A").value;
    if (userChoice === ""){
        alert("Please choose an answer first "+userName)
    }else {
        pageCounter++;
        date = new Date();
       checkAnswer1(x)
    }


}

// purely for testing left it out as it might be helpful when checking the code

function testMenu () {
    var choice="testSub";
    var page = document.getElementById(choice);
    if (page.style.display === "none") {
        page.style.display = "block";
    } else {
        page.style.display = "none";
    }
}


function test() {


    userChoice=document.getElementById("Answer1A").value;
    document.getElementById("p19").innerHTML = "The User Choice A " + userChoice; // TESTER REMOVE ME
    document.getElementById("p20").innerHTML = questionArray[0][3]===answersArray[5]; // TESTER REMOVE ME

        function valueRadioButtons() {
            var a = document.getElementById("answer1A").value;
            document.getElementById("p11").innerHTML="Question 1 a button value "+a;
            var b = document.getElementById("answer1B").value;
            document.getElementById("p12").innerHTML="Question 1 b button value "+b;
            var c = document.getElementById("answer1C").value;
            document.getElementById("p13").innerHTML="Question 1 c button value "+c;
            var d = document.getElementById("answer1D").value;
            document.getElementById("p14").innerHTML="Question 1 d button value "+d;

        }
        valueRadioButtons();

}
test();



