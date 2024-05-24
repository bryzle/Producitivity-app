let counts = setInterval(updated, 40);
let upto = document.getElementById("time");

function updated() {
  const count = document.getElementById("counter");
  --upto;
  count.innerText = "loading" + upto + "%";
  if (upto == 100) {
    clearInterval(counts);
    count.innerText = "done";
  }
}
