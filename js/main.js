console.log("JS file connected");

const badge = document.querySelector("#diamond");

function logId() {
    console.log(this.id);
}


diamond.addEventListener("click", logId);