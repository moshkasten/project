(async function () {
    "use strict";



    const r = await fetch("hw.json");
    const data = await r.json();
    const par = document.querySelector("#vid");
    const load1 = document.querySelector("#button");
    //load1.addEventListener("click", load);
    const v1 = document.querySelector('#v');
    document.querySelector("#hide").addEventListener("click", () => par.style.display = "none")
    let y = true
    let x;
    data.videos.forEach(function (v) {

        const op = document.createElement("option");

        op.value = v.name;
        op.textContent = v.name;
        v1.appendChild(op);
        v1.addEventListener('change', (r) => {


            load(v1.value)
    
    
    
        });


    });
    
function load(v) {

       

            par.style.display = "inline-block"


            const f = document.createElement("video");
            f.src = v.name;
            par.appendChild(f); 
            f.controls = true;

            f.addEventListener('click', () => f.play());
       
    }








}());
/*(async function () {
    "use strict";

    const r = await fetch("hw.json");
    const data = await r.json();
    const par = document.querySelector("#vid");
    const loadButton = document.querySelector("#button");
    const v1 = document.querySelector('#v');
    
    document.querySelector("#hide").addEventListener("click", () => par.style.display = "none");

    // Populate the dropdown
    data.videos.forEach(function (video) {
        const op = document.createElement("option");
        op.value = video.name; // Assuming video.name holds the correct source
        op.textContent = video.name;
        v1.appendChild(op);
    });

    v1.addEventListener('change', () => load(v1.value)); // Use 'change' event

    function load(videoSource) {
        par.style.display = "inline-block";
        par.innerHTML = ''; // Clear previous video

        const f = document.createElement("video");
        f.src = videoSource; // Set the video source
        f.controls = true; // Optional: add controls
        par.appendChild(f);
        f.addEventListener('click', () => f.play());
    }

}());*/