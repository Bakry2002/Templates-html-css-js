let allLinks = document.querySelectorAll('.our-work ul li'); 
let imgsBox = Array.from(document.querySelectorAll('.our-work .box')); 
console.log(imgsBox)


allLinks.forEach((li) => {
    li.addEventListener('click', removeActive);
    li.addEventListener('click', manageImgs);
});

// Remove active class from all links and put it on tghe clicked link
function removeActive() {
    allLinks.forEach((li) => {
        li.classList.remove('active'); 
        this.className = 'active rounded-pill';
    });
}

// Filter images depends on the class name 
function manageImgs() {
    imgsBox.forEach((img) => {
        img.style.display= 'none'; 
    }); 
    document.querySelectorAll(this.dataset.type).forEach((img) => {
        img.style.display = 'block'; 
    })
    
}