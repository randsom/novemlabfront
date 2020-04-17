$("button.closeNovemVoice").css("opacity",0);

function novemCall(message, nodeDom) {
        nodeDom.empty();
        indChar = 0;
        function changeMessage(){
            nodeDom.append(message.substr(indChar, 1));
            indChar++;
            if (indChar < message.length){setTimeout(changeMessage, 20)}else{$("button.closeNovemVoice").fadeTo("slow",1);
            } ;
        }
        setTimeout(function(){
            setTimeout(changeMessage, 10);
        },400);
}

function showMessage(){
    var message = $("#novemText").html();
    // novemCall(message, $('#novemText'));
}

$('figure.ball').click(function(){
 	$('.novemVoice').fadeToggle( "fast", "linear" );
});

$('button.closeNovemVoice').click(function(){
    $('.novemVoice').hide();
});
