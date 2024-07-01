$(document).ready(function(){
    //gnb메뉴
    const header = $('#header')
    const gnb = $('#gnb')
    const gnbLi = gnb.children('li')
    const depth1 = gnbLi.children('a.depth1')
    const depth2 = gnbLi.children('ul.depth2')
    const gnbBg = $('.gnb_bg')

    gnb.on('mouseenter', function(){
        console.log('마우스가 들어감')
        header.addClass('on')
        depth2.show()
    })
    gnb.on('mouseleave', function(){
        console.log('마우스가 나감')
        header.removeClass('on')
        depth2.hide()
    })

    //faq
    const faqBx = $('.faq_box')
    const faqUl = faqBx.children('ul')
    const faqLi = faqUl.children('li')
    const faqDl = faqLi.children('dl')
    const faqDt = faqDl.children('dt')
    const faqDd = faqDl.children('dd')

    //faqDt.click(function(){})

    faqDt.on('click', function(){

        if( $(this).parent().parent().hasClass('active') ){
            $(this).parent().parent().removeClass('active')
        } else {
            $(this).parent().parent().addClass('active')
            $(this).parent().parent().siblings().removeClass('active')
        }

        console.log( $(this).parent().parent().hasClass('active') )
        console.log( $(this).next().css('height') )
        console.log( $(this).next().css('height') == '0px' )
        console.log( $(this).next() )
        console.log( $(this).parent().parent() )
        console.log( $(this).parent().parent().siblings() )
        console.log( $(this).parent().parent().siblings().children() )
        console.log( $(this).parent().parent().siblings().children().children('dt') )
        console.log( $(this).parent().parent().siblings().find('dt') )
    })
    // form태그안에 button이 있을때 전송할경우
    // type="submit" 버튼을 클릭하면 submit이벤트가 발생함
    // form태그안에서 폼요소 위에서 엔터를 쳐도 submit이벤트가 발생함
    // form태그에 action에 연결된 페이지가 실행될수 있다. retrun false 작성해야 실행을 방지할수 있다
    // form에 값이 유효한지 확인 끝나면 retrun true로 바꿔주어 action에 연결된 페이지가 실행되도록 해야한다
    $('#loginForm').on('submit', function () {

        if($('#userId').val().length == 0){ // if( $('#userId').val() == "" ) 도 가능
            alert('아이디를 입력하세요');
            $('#userId').focus(); // 이건 그냥 마우스 커서가 여기로 오게 하는것
            return false;
        } 
        if( !($('#userId').val().length >= 3  && $('#userId').val().length <= 12) ){
            alert('아이디 3자 이상 12자 이하로 입력하세요');
            $('#userId').focus();
            return false;
        }
        if($('#userId').val().length >= 3  && $('#userId').val().length <= 12){
            if($('#userId').val() == '김승아'){
                alert('김승아님 확인');
            }else{
                alert('회원정보없음');
                return false
            }
        }

        if(!$('#userPw').val()){
            alert('비밀번호를 입력하세요');
            $('#userPw').focus();
            return false;
        }

        if( !($('#userPw').val().length >= 4 && $('#userPw').val().length <= 8) ){
            alert('비밀번호를 4자이상 8자이하로 설정하세요');
            return false;
        }
        
        if($('#userPw').val().length >= 4 && $('#userPw').val().length <= 8){
            if($('#userPw').val()== '1234'){
                alert('비밀번호 일치');
            }else{
                alert('비밀번호를 불일치');
                return false;
            }
        }

        return true
       
    })

    // 로그인
    //$('#loginForm').submit(function(){})
    //$('#loginForm').on('submit',function(){})

    //함수생성
    //function test(){ console.log('테스트함수 실행됨') }

    // 약관전체동의
    $('#chkAll').on('click', function(){
        let chk = $('#chkAll').is(':checked')
        if(chk){
            $('input[type=checkbox]').prop('checked' , true)
        }else{
            $('input[type=checkbox]').prop('checked' , false)
        }
    })

    // 약관내용보기
    $('.btn_view').on('click', function(){
        $(this).parent().next('.scroll_wrap').stop().slideToggle()
    })

    //페이지이동
    /* $('.btn_next').on('click',function(){
        window.location.href = "join_step2.html"; 
        $(location).attr("href", "join_step2.html");
    }) */

    //회원정보입력
    const email = $('#userEmail')
    const pw1 = $('#userPw')
    const pw2 = $('#userPwRe')
    const phone = $('#userPhone') 

    email.on('blur', function(){ 
        console.log('이메일 입력한 값 ', email.val())
        console.log('이메일 입력한 값이 빈문자열이냐? ', email.val() === '')
        console.log('이메일 입력한 값의 길이가 0이냐? ', email.val().length == 0)
        console.log('이메일 입력했냐를 느낌로 부정하면 안했냐? ', !email.val())

        if( email.val() === '' ){
            $('.email_msg').html('<em>이메일을 입력하세요</em>')
        }else{
            alert('이메일 확인됨')
            $('.email_msg').html('')
        }
        console.log('이메일 체크 함수실행') 
    })

    pw1.on('blur', function(){ 
        if( !pw1.val() ){
            $('.pw_msg').html('<em>비밀번호를 입력하세요</em>')
        }else{
            alert('비밀번호 확인됨')
            $('.pw_msg').html('')
        }
        console.log('비밀번호 체크 함수실행') 
    })

    pw2.on('blur', function(){ 
        console.log('비밀번호 재입력 빈문자열이다, 느낌표로 부정했음, 입력한 상태를 의미함', pw2.val() != ""  )
        console.log( '비밀번호 입력과 재입력 값이 일치하냐?', pw1.val() === pw2.val() )
        console.log( pw2.val() != "" && pw1.val() === pw2.val() )

        if( pw2.val() != "" && pw1.val() === pw2.val() ){
            alert('비밀번호가 일치된것을 확인함')
            $('.pw_msg').html('')
        }else{
            $('.pw_msg').html('<em>비밀번호가 일치하지 않습니다</em>')
        }

        console.log('비밀번호 재입력 체크 함수실행') 
    })

    phone.on('blur', function(){ 
        if( phone.val().length == 0 ){
            $('.phone_msg').html('<em>전화번호를 입력하세요</em>')
        }else{
            alert('전화번호 확인됨')
            $('.phone_msg').html('')
        }
        console.log('전화번호 함수실행') 
    })
    
    // 이메일 수신여부체크 안했을 때 체크된것이 0개
    /* console.log( '체크된것이 0개이냐??', $('.mailing:checked').length  == 0 )

    if( $('.mailing:checked').length  == 0 ){
        alert('수신여부를 선택하세요')
    } */


    // 메인슬라이드
    const swiper1 = new Swiper('.mainSlide', {
        loop: true,

        pagination: {
            el: '.mainSlide .swiper-pagination',
        },

        navigation: {
            nextEl: '.mainSlide .swiper-button-next',
            prevEl: '.mainSlide .swiper-button-prev',
        },
    });

    // 브랜드스토리슬라이드
    const swiper2 = new Swiper('.brandSlide', {
        loop: true,
        /* slidesPerView: 'auto', */
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.brandSlide .swiper-button-next',
            prevEl: '.brandSlide .swiper-button-prev',
        },
    });

    //메뉴슬라이드
    var swiper3 = new Swiper(".menuSlide", {
        slidesPerView: 3,
        spaceBetween: 80,
        navigation: {
            nextEl: '.menu_wrap .swiper-button-next',
            prevEl: '.menu_wrap .swiper-button-prev',
        },
        pagination: {
            el: ".menuSlide .swiper-pagination",
            clickable: true,
        },
    });

    


})