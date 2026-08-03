const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.35
});

document.querySelectorAll(".hidden").forEach(section=>{

    observer.observe(section);

});