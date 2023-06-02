console.log("JS file connected");

const diamond = document.querySelector("#diamond");

function logId() {
    console.log(this.id);
}


diamond.addEventListener("click", logId);

const badge = document.querySelector("#badge");

function logId() {
    console.log(this.id);
}


badge.addEventListener("click", logId);

const icon = document.querySelector("#icon");

function logId() {
    console.log(this.id);
}


icon.addEventListener("click", logId);

const tri = document.querySelector("#tri");

function logId() {
    console.log(this.id);
}


tri.addEventListener("click", logId);

const sun = document.querySelector("#Sun");

function logId() {
    console.log(this.id);
}


sun.addEventListener("click", logId);

const messdice = document.querySelector("#messdice");

function logId() {
    console.log(this.id);
}


messdice.addEventListener("click", logId);