//task 1
document.getElementById("task1").innerText = "Changed using 'innerText'.";
//task 2
document.getElementById("task2").innerHTML = "<button>Submit</button>";
//task 3
document.body.style.backgroundColor = "#232323";
//task 4
document.querySelectorAll(".item").forEach(item => {
    item.style.border = "1px solid black";
});
//task 5
document.getElementById("task5").href = "https://www.springboard.com";
//task 6
document.getElementById("task6").value = "DOM Master";
//task 7
document.getElementById("task7").classList.add("new-class");
//task 8
document.getElementById("task8").appendChild(document.createElement("button"));
//task 9
let task9El = document.getElementById("task9");
task9El.parentNode.removeChild(task9El);