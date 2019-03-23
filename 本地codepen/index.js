$(function(){
    $('iframe').contents().find('head').append('<style></style>');
    $('iframe').contents().find('html').append('_<script defer><\/script>');
    var html = $('iframe').contents().find('body');
    var style = $('iframe').contents().find('style');
    var script = $('iframe').contents().find('script');
    
    
    $('#html').keyup(function(){
        $('iframe').contents().find('body').html($(this).val())
    })
    $('#css').keyup(function(){
        style.html($(this).val());
    })
    $('#js').keyup(function(){
        script.html($(this).val());
    })
    
})