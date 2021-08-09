const header_top = document.getElementById('header_top');//ヘッダー上部のid取得
const header_bottom = document.getElementById('header_bottom');//ヘッダー下部のid取得
const header = document.getElementsByClassName('header')[0];

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