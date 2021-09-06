let key = document.getElementById("key");
let goBtn = document.getElementById("goBtn");

let sendToSite = () => {
    console.log("button clicked")
    switch (key.value) {
        case "o1h0#":
            window.location.href = "happy.html";
            break;
        case "o2s1#":
            window.location.href = "sadness.html";
            break;
        case "o3h1e":
            window.location.href = "enthusiasm.html";
            break;
        case "o4h2L":
            window.location.href = "love.html";
            break;
        case "o5s2h":
            window.location.href = "hate.html";
            break;
        case "o6s3@":
            window.location.href = "anger.html";
    }
}