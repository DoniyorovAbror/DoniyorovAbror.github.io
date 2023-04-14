const collapse = document.querySelectorAll("h2");

collapse.forEach(item=>{
    if(item.textContent!='PROFILE'){
        item.addEventListener("click", ()=> {
            const content = document.querySelector('.' + item.textContent.toLowerCase().replace(' ', '-') + "_content");
            content.classList.toggle(".collabsible");
        });
    }
});