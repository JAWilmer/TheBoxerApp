var mysql=require("mysql2");
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "password",
  database: "boxers"
});
connection.connect(function(err) {
  if (err) throw err;
  
});
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCwh82TllCfD1JUO7YhzGZKT6pVH-HJzbQ",
    authDomain: "boxer-80df3.firebaseapp.com",
    databaseURL: "https://boxer-80df3.firebaseio.com",
    projectId: "boxer-80df3",
    storageBucket: "",
    messagingSenderId: "554092423820"
};
firebase.initializeApp(config);

var qDatabase = firebase.database().ref('survey');
$(".btn-info").on("click", function(){ 
   // let value=($(this).attr('id'));

$('#submitPlz').on('checked', function(event) {
    
    event.preventDefault();
    var q1 = document.getElementById(".q1").checked;
    var q2 = getInputVal('q2');
    var q4 = getInputVal('q3');
    var q3 = getInputVal('q4');
    var q5 = getInputVal('q5');
    var q6 = getInputVal('q6');
    var q7 = getInputVal('q7');
    var q8 = getInputVal('q8');
    var q9 = getInputVal('q9');

    saveQuestions(q1, q2, q3, q4, q5, q6, q7, q8, q9);
    };

   

//})

// function getFormInfo() {

//     var q1 = getInputVal('q1');
//     var q2 = getInputVal('q2');
//     var q4 = getInputVal('q3');
//     var q3 = getInputVal('q4');
//     var q5 = getInputVal('q5');
//     var q6 = getInputVal('q6');
//     var q7 = getInputVal('q7');
//     var q8 = getInputVal('q8');
//     var q9 = getInputVal('q9');

//     saveQuestions(q1, q2, q3, q4, q5, q6, q7, q8, q9);
    

//     console.log('we reached this point')

    
// }

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveQuestions(q1, q2, q3, q4, q5, q6, q7, q8, q9) {
    var newQData = qDatabase.push();
    newQData.set({
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        q6: q6,
        q7: q7,
        q8: q8,
        q9: q9
    });
}


var sql="insert into Favorites (holiday, sport, tv, game, marvel, food, soda, restaurant,lang) values (\'"+holiday+"\',\'"+sport+"\',\'"+tv+"\',\'"+game+"\',\'"+marvel+"\',\'"+food+"\',\'"+soda+"\',\'"+restaurant+"\',\'"+language+"\');"; 
connection.query(sql, function (err, result) {
    if (err) {
      console.log("Users:  "+sql2);
    };

  });