//bench squat and deadlift records as variables
function PBs (weight = 81.5, bench, squat, deadlift) {
    this.weight = weight;
    this.bench = bench;
    this.squat = squat;
    this.deadlift = deadlift;
}

let latestPBs = new PBs (
    weight=81.5, bench=89.8, squat=170.6, deadlift=197.3);

let elWeight = document.getElementById("weight");
elWeight.textContent = latestPBs.weight; 

let elBP = document.getElementById("benchPB");
elBP.textContent = `${latestPBs.bench}kg`;
let elSQ = document.getElementById("squatPB");
elSQ.textContent = `${latestPBs.squat}kg`;
let elDL = document.getElementById("deadliftPB");
elDL.textContent = `${latestPB.s}kg`;