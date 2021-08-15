const header_top = document.getElementById('header_top');//ヘッダー上部のid取得
const header_bottom = document.getElementById('header_bottom');//ヘッダー下部のid取得
const header = document.getElementsByClassName('header')[0];//ヘッダー全体をクラス名より取得
const login_button = document.getElementsByClassName('login_button_text')[0];//ログインボタンを取得
const Play_them_all_button = document.getElementsByClassName('Home_logo_button')[0];//Play them allボタンを取得

header.addEventListener('mousemove', () => { //ヘッダーにカーソルが乗るとヘッダーを表示
    header_top.style.background = "#242633";
    header_bottom.style.background = "#10141b";
});

header.addEventListener('mouseleave', () => { //ヘッダーからカーソルが外れるとヘッダーを非表示
    header_top.style.background = "none";
    header_bottom.style.background = "none";
});


window.addEventListener('scroll', ()=> { //スクロールするとヘッダーを表示
    header_top.style.background ="#242633";
    header_bottom.style.background = "#10141b"
});

for (let i = 0; i < 4; i++) { //三角マークをクリックするとと回転する
    let svg_rotate = document.getElementById(`svg_rotate_${i}`);

    svg_rotate.addEventListener('click', () => {
        svg_rotate.classList.toggle("svg_rotate_after");
    });
};

for (let i = 0; i < 9; i++) { //ヘッダー下部のリストにカーソルを当てると下線が引かれる
    let header_bottom_list_box = document.getElementsByClassName('header_bottom_list_box')[i];
    header_bottom_list_box.addEventListener('mousemove', () => {
        header_bottom_list_box.classList.add('header_bottom_list_underline');
    });
    header_bottom_list_box.addEventListener('mouseleave', () => {
        header_bottom_list_box.classList.remove('header_bottom_list_underline');
    });
}

login_button.addEventListener('mousemove',()=>{ //ログインボタンにカーソル当てると色が濃くなる
    login_button.style.background = "#3e3497";
});
login_button.addEventListener('mouseleave',()=>{
    login_button.style.background = "#6C63B5";
});

Play_them_all_button.addEventListener('mousemove',()=>{ //play them all ボタンにカーソルを当てると色が濃くなる
    Play_them_all_button.style.background = "#3e3497";
});
Play_them_all_button.addEventListener('mouseleave',()=>{
    Play_them_all_button.style.background = "#6C63B5";
});


// ページトップならヘッダーを非表示にする

// var whole_wrapper = document.getElementsByClassName('whole_wrapper')[0];
// var clientRect = whole_wrapper.getBoundingClientRect() ;
// console.log(clientRect);
// if (clientRect == 0) {
//     header_top.style.background = "none";
//     header_bottom.style.background = "none";
// } if(clientRect != 0) {
//     header_top.style.background = "#242633";
//     header_bottom.style.background = "#10141b";
// };

// var height = window.pageYOffset;
// console.log(height);


const next = document.getElementById('next_button');
const prev = document.getElementById('prev_button');

const slider_width =document.getElementsByClassName('pictures_li')[0];
let width = slider_width.clientWidth;

const slider_list = document.getElementsByClassName('pictures_ul')[0];
const slider_list_item = document.querySelectorAll('pictures_li');

let counter = 0;

next.addEventListener('click', ()=> {
    counter++;
    slider_list.style.transition = ".3s";
    slider_list.style.transform = `translateX(${+(-width*counter)}px)`;
    
});

prev.addEventListener('click', ()=> {
    counter--;
    slider_list.style.transition = ".3s";
    slider_list.style.transform = `translateX(${+(-width*counter)}px)`;
    
});

next.addEventListener("click", function(){
    if(counter == 8) {
        slider_list.style.transform = `translateX(-100px)`   };
    //以下省略
 });
 
 prev.addEventListener("click", function(){
    if(counter == 1) return;
    //以下省略
 });

// let pictures = ["https://images.ctfassets.net/usf1vwtuqyxm/4IUJ6Pc1snjIUg12xnJeeP/ca4564e9630fa380a7e91b299923a514/puzzles-and-spell-club-challenge-header-harry-ron-hermione-web-landscape?w=764&h=426&fit=fill&f=top&fm=webp",
//     "https://images.ctfassets.net/usf1vwtuqyxm/4XMo7sppXCUhYAdx3yeQad/c7e210eed23fa06affa915adf4963334/HP-F8-deathly-hallows-part-two-bill-fleur-shell-cottage-doorway-web-landscape?w=764&h=426&fit=fill&f=top&fm=webp",
//     "https://images.ctfassets.net/usf1vwtuqyxm/3kRVHtUmHKP5DunbbkuUEL/cb03ae8c0845cfe3d743e1738112f0f4/cursed-child-poster-crop?w=764&h=426&fit=fill&f=top&fm=webp",
//     "https://images.ctfassets.net/usf1vwtuqyxm/33ngPxAZr7O17MyBnrImEL/f0731fe6c3da6b3fcfad6aa3abe638fa/HP-F2-chamber-of-secrets-professor-sprout-teaching-herbology-greenhouse-web-landscape.jpg?w=764&h=426&fit=fill&f=top&fm=webp",
//     "https://images.ctfassets.net/usf1vwtuqyxm/6oeX7ycYTZMZYHwhshvsxd/a23995a65174aaa38aa280f5ab768b97/HP-F4-goblet-of-fire-neville-dancing-boys-dormitory-web-landscape?w=764&h=426&fit=fill&f=top&fm=webp"];

// let short_texts = ["News","FEATURE","FEATURE","Quiz",];

// let long_texts = [];

// for(let i = 0; i<; i++) {
// let pictures_slider =
// `
        
//            <li class="pictures_li">
//             <div class="news_">
//                 <div class="">
//                     <a href="https://www.wizardingworld.com/news/puzzles-and-spells-launches-club-challenge-event">

//                         <img src="https://images.ctfassets.net/usf1vwtuqyxm/4IUJ6Pc1snjIUg12xnJeeP/ca4564e9630fa380a7e91b299923a514/puzzles-and-spell-club-challenge-header-harry-ron-hermione-web-landscape?w=764&h=426&fit=fill&f=top&fm=webp"
//                             alt="news" class="news_picture pictures_td">
//                             <span class="picture_short_text">NEWS</span>
//                             <span class="picture_long_text">Harry Potter: <br> Puzzles & Spells launches its new Club Challenge events</span>
//                     </a>
//                 </div>
//             </div>
//         </li>
//     `
// document.getElementById('slide_show').insertAdjacentHTML("beforeend", pictures_slider);
// };