
(async function () {
    "use strict";

    const r = await fetch("hw.json");
    const data = await r.json();
    
    const par = document.querySelector("#vid");
    const loadButton = document.querySelector("#button");
    const v1 = document.querySelector('#v');
    let loaded =true;
    document.querySelector("#hide").addEventListener("click", () => {par.innerHTML = "";
        loaded=true;
    });
    loadButton.addEventListener('click',()=>{
    
    loadv();}
)
    // Populate the dropdown
    
    function loadv(){
        if (loaded){
            par.innerHTML="";
        data.videos.forEach(v=>load(v.name))
    }
    loaded=false;
    }
    data.videos.forEach(function (video) {
        const op = document.createElement("option");
        op.value = video.name; // Assuming video.name holds the correct source
        op.textContent = video.name;
        v1.appendChild(op);
    });

    v1.addEventListener('change', () => load(v1.value,r)); // Use 'change' event

    function load(videoSource,r) {
        
        par.style.display = "inline-block";
        if(r){
           
        par.innerHTML ='' }; // Clear previous video

        const f = document.createElement("video");
        f.src = videoSource; // Set the video source
        f.controls = true; // Optional: add controls
        par.appendChild(f);
        f.addEventListener('click', () => f.play());
        if(r){
            const css=document.querySelector("video");
            css.style.width="100%";
            css.style.height="100%";
            css.style.overflow="none";
        }
    }

}());