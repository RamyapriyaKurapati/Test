$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});
$("p").focus(function(){
    $(this).css("background-color", "red");
});