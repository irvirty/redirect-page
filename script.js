// Redirect page v.1.0.1

let lRedirectUsername= "irvirty";

let lRedirectTime = 10000;
let lRedirectUrl = "https://" + lRedirectUsername + ".pages.dev";
let lRedirectUrlPrint = lRedirectUsername + ".pages.dev";


setTimeout(function(){
location.href = lRedirectUrl; 
}, lRedirectTime); 


document.getElementById("lRedirectTime").innerHTML = "Redirection after " + lRedirectTime / 1000 + " seconds.";
document.getElementById("lRedirectUrl").innerHTML = `<span class="green">New address</span>:<br> <a class="brand" href="${lRedirectUrl}">${lRedirectUrlPrint}</a>`;
