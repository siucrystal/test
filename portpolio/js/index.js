// console.log(  screen.height  )
// indi 누를때 차라락 넘어가게
$('.indi').click(function(event){
    event.preventDefault();
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top 
    }, 300)

    // indi 누를때 색깔변하고 누른거 색깔 원래대로
    let indi_chk = true;
    $('.indi').removeClass('indi_active')
    if(indi_chk == true) {
        $(this).addClass('indi_active')
        indi_chk = false;
    }
})

// skills에서 화면이 skills에 도착하면 gage가 채워지게
// console.log(skill_o_top,s_top)

$(window).scroll(function(){
    let skill_o_top = $('#skills').offset().top;
    let s_top = $(window).scrollTop();

    if(skill_o_top <= s_top) {
        $('.per1').addClass('per_95')
        $('.per2').addClass('per_90')
    }
    else if(skill_o_top > s_top) {
        $('.per1').removeClass('per_95')
        $('.per2').removeClass('per_90')
    }
})

// header 글씨 한칸씩 (배열-반복)
$(document).ready(function(){
    // let txt = ["1","5","0","억","살"," ","S","u","n",","," ","2","3","살"," ","Y","o","u","n","g"," ","S","u","n"];
    // 150억살 Sun, 23살 Young Sun
    let txt = ["세","상","을"," ","코","드","로"," ","만","드","는"," ","웹","퍼","블","리","셔"," ","황","영","선","입","니","다"];
    // 세상을 코드로 아름답게 만드는 웹퍼블리셔 황영선입니다.
    
    function auto_txt() {
        $('.h_title').text("");
        let count = 0;
        let int_box=""; 
    
        int_box=setInterval(function(){ 
            $('.h_title').append(txt[count])
            count+=1;

            if(txt.length <= count) {
                clearInterval(int_box);

                setTimeout(() => {
                    auto_txt()
                }, 1000);
            }
        }, 100)
    }
    
    auto_txt();

    // setInterval(() => {
    //     auto_txt()
    // }, 2000);
})