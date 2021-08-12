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

var height = window.pageYOffset;
console.log(height);