var score=0;
function update_score(){
    score=score+1;
    document.getElementById("score").innerHTML="score:"+score;
}
function save_score(){
    localStorage.setItem("score_value",score); 
}
function next_page(){
    window.location="activity2.html"
}