let totalCal=0;
function showTab(id){
document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
document.getElementById(id).classList.add('active');
}
function generateWorkout(){
const g=document.getElementById('goal').value;
const p={
"Weight Loss":"30min HIIT + 15min Walk + 100 Jumping Jacks",
"Muscle Gain":"Pushups 4x15, Squats 4x20, Plank 3x60sec",
"Stay Fit":"20min Yoga + 20min Cardio"
};
document.getElementById('workoutResult').innerHTML="<b>"+g+" Plan:</b><br>"+p[g];
}
function addFood(){
const f=document.getElementById('foodInput').value;
if(!f)return;
const c=Math.floor(Math.random()*200+80);
totalCal+=c;
document.getElementById('dietResult').innerHTML+="<div>"+f+" - "+c+" kcal</div>";
document.getElementById('totalCal').innerText=totalCal;
document.getElementById('foodInput').value='';
}
function askAI(){
const q=document.getElementById('chatInput').value;
if(!q)return;
const b=document.getElementById('chatBox');
b.innerHTML+="<p><b>You:</b> "+q+"</p>";
let a="For Indian diet, focus on dal, paneer, eggs. Workout 4x week!";
if(q.toLowerCase().includes('belly'))a="Calorie deficit + HIIT 20min + no sugar + 7hr sleep.";
setTimeout(()=>{b.innerHTML+="<p><b>AI:</b> "+a+"</p>";},500);
document.getElementById('chatInput').value='';
           }
