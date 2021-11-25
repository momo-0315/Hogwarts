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

window.addEventListener('scroll', () => { //スクロールするとヘッダーを表示
    header_top.style.background = "#242633";
    header_bottom.style.background = "#10141b"
});

for (let i = 0; i < 4; i++) { //ヘッダー下部の三角マークをクリックするとと回転する
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

login_button.addEventListener('mousemove', () => { //ログインボタンにカーソル当てると色が濃くなる
    login_button.style.background = "#3e3497";
});
login_button.addEventListener('mouseleave', () => {
    login_button.style.background = "#6C63B5";
});

Play_them_all_button.addEventListener('mousemove', () => { //play them all ボタンにカーソルを当てると色が濃くなる
    Play_them_all_button.style.background = "#3e3497";
});
Play_them_all_button.addEventListener('mouseleave', () => {
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
// console.log(height); 座標取得まではできるのにリロードしないと変わらないリアルタイムで変わらない

const next = document.getElementById('next_button');//右のボタンのid取得
const prev = document.getElementById('prev_button');//左のボタンのid取得

const slider_width = document.getElementsByClassName('pictures_li')[0];
let width = slider_width.clientWidth;//liの幅を取得

const slider_list = document.getElementsByClassName('pictures_ul')[0];//動かすのはulタグだから、ulタグを取得
// const slider_list_item = document.querySelectorAll('pictures_li');

let counter = 0;

next.addEventListener('click', () => { //nextボタンをクリックしたら3秒かけて、X座標方向に-liの長さ×カウンターの分進む
    counter++;
    slider_list.style.transition = ".3s";
    slider_list.style.transform = `translateX(${+(-width * counter)}px)`;
    document.getElementById(`slider_dots_${counter}`).style.background = "#ffffff";
    document.getElementById(`slider_dots_${counter - 1}`).style.background = "#353643";
});

prev.addEventListener('click', () => { //prevボタンをクリックしたら3秒かけて、X座標方向に-liの長さ×カウンター(減っていく)の分進む
    counter--;
    slider_list.style.transition = ".3s";
    slider_list.style.transform = `translateX(${+(-width * counter)}px)`;
});

next.addEventListener("click", function () { //一番最後の写真になったら最初の写真にもどる、ゆくゆくcounterの数で取得
    if (counter == 8) { slider_list.style.transform = `translateX(100px)`; };
    //以下省略
});

prev.addEventListener("click", function () {
    if (counter == 1) return;
    //以下省略

});

const view_all_news = document.getElementById("view_all_news");
view_all_news.addEventListener('mousemove', () => {
    view_all_news.classList.add('view_all_news_underline');
})
view_all_news.addEventListener('mouseleave', () => {
    view_all_news.classList.remove('view_all_news_underline');
});

const open = document.getElementById("open");
const close = document.getElementById("close");
const overlay = document.getElementById('overlay');

open.addEventListener("click", () => {
    overlay.classList.add('overlay_show');
    open.classList.add('open_hide');
});

close.addEventListener("click", () => {
    overlay.classList.remove('overlay_show');
    open.classList.remove('open_hide');
    console.log('a');
});

