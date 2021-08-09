const header_top = document.getElementById('header_top');
const header_bottom = document.getElementById('header_bottom');
// const header = document.getElementsByClassName('header')[0];

header_top.addEventListener('mousemove', ()=> {
    header_top.style.background ="#242633";
    header_bottom.style.background = "#10141b"
});
header_top.addEventListener('mouseleave', ()=> {
    header_top.style.background ="none";
    header_bottom.style.background = "none"
});

header_bottom.addEventListener('mousemove', ()=> {
    header_top.style.background ="#242633";
    header_bottom.style.background = "#10141b"
});
header_bottom.addEventListener('mouseleave', ()=> {
    header_top.style.background ="none";
    header_bottom.style.background = "none"
});

// header.addEventListener('mousemove', () => {
//     header_top.style.background = "#242633";
//     header_bottom.style.background = "#10141b"
// });
// header.addEventListener('mouseleave', () => {
//     header_top.style.background = "none";
//     header_bottom.style.background = "none"
// });

window.addEventListener('scroll', ()=> {
    header_top.style.background ="#242633";
    header_bottom.style.background = "#10141b"
})
