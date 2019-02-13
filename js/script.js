prod=[];
price=[];
function addItem(){
    var total=0;
        prod.push(document.getElementById('iphone').value);
        alert(prod[0]);
}
$(function(){
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
    var offset =250;
    var duration = 500;
    $(window).scroll(function(){
        if($(this).scrollTop() > offset){
            $('to-top').fadeIn(duration);
        }
        else{
            $('.to-top').fadeOut(duration);
        }
    });
    $('to-top').click(function(){
        $('body').animate({scrollTop:0}, duration);
    });
});