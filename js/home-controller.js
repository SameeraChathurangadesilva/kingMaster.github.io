
////////////////////////////
var Letters =["A","B","C","D","E","F","G","H"];
var numbers =[1,2,3,4,5,6,7,8];

var currentPossition;
var suares;
var chesspieces;

var pondCount;
var CountArray = new Array(9);

$(document).ready(function () {
    suares=$('.square');
    chesspieces=$('.chesspieces');
    pondCount=0;
    for (var i =0; i<CountArray.length;i++){
        CountArray[i]=0;
    }
});


///////////////////////////////////////////////////////////////////

$('.chesspieces').on("click",function (eventData) {
    currentPossition=$(this);

    if (! (currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('blackpond')){
        pondCount=0;
        Blackpond(currentPossition);
    }

    if (! (currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('whitepond')){
        pondCount=0;
        whitepond(currentPossition);
    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('blackrock')){
        pondCount=0;
        BlackRock(currentPossition);
    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('whiterock')){
        pondCount=0;
        whitekRock(currentPossition);
    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('blackking')){
        pondCount=0;
        BlackKing(currentPossition);
    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('whiteking')){
        pondCount=0;
        whiteking(currentPossition);
    }

});

// path of blackpond

function Blackpond(eventData) {
    currentPossition = eventData;
    suares.removeClass('selectpath');
    playAudio2();
    chesspieces.removeClass('clickpiece');
    var currentId = currentPossition.parents().attr('id');
    var letter = currentId.charAt(0);
    var no = currentId.charAt(1);
    var LettersArray = ($.inArray(letter, Letters));
    var numberArray = ($.inArray(parseInt(no), numbers));
    var tempId = Letters[LettersArray] + numbers[numberArray + 1];
    var tempId1 = Letters[LettersArray + 1] + numbers[numberArray + 1];
    var tempId2 = Letters[LettersArray - 1] + numbers[numberArray + 1];
    var x = LettersArray;

    for (var y = numberArray + 1; y < 4; y++) {
        tempId = Letters[x] + numbers[y];
        if (!($("#" + tempId).children().hasClass('img chesspieces'))) {
            $("#" + tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId).children().hasClass('chesspieces'))) {
        $("#" + tempId).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId1).children().hasClass('whitec')) {
        $("#" + tempId1).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }

    if ($("#" + tempId2).children().hasClass('whitec')) {
        $("#" + tempId2).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
}
// path of blackRock

function BlackRock(eventData) {
    currentPossition = eventData;
    suares.removeClass('selectpath');
    playAudio2();
    chesspieces.removeClass('clickpiece');
    var currentId = currentPossition.parents().attr('id');
    var letter = currentId.charAt(0);
    var no = currentId.charAt(1);
    var LettersArray = ($.inArray(letter, Letters));
    var numberArray = ($.inArray(parseInt(no), numbers));
    var tempId = Letters[LettersArray] + numbers[numberArray + 1];
    var tempId1 = Letters[LettersArray ] + numbers[numberArray + 1];
    var tempId2 = Letters[LettersArray ] + numbers[numberArray + 1];
    var tempId3 = Letters[LettersArray+1] + numbers[numberArray];
    var tempId4 = Letters[LettersArray+1 ] + numbers[numberArray];
    var tempId5 = Letters[LettersArray+1 ] + numbers[numberArray ];
    var tempId6 = Letters[LettersArray-1] + numbers[numberArray];
    var tempId7 = Letters[LettersArray-1 ] + numbers[numberArray];
    var tempId8 = Letters[LettersArray-1 ] + numbers[numberArray ];
    var x = LettersArray;
    var q=numberArray;


    for (var y = LettersArray + 1; y < 8; y++) {
        tempId3 = Letters[y] + numbers[q];
        if (!($("#" + tempId3).children().hasClass('img chesspieces'))) {
            $("#" + tempId3).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId3).children().hasClass('chesspieces'))) {
        $("#" + tempId3).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId4).children().hasClass('whitec')) {
        $("#" + tempId4).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }

    if ($("#" + tempId5).children().hasClass('whitec')) {
        $("#" + tempId5).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    for (var y = LettersArray - 1; y > 0; y--) {
        tempId6 = Letters[y] + numbers[q];
        if (!($("#" + tempId6).children().hasClass('img chesspieces'))) {
            $("#" + tempId6).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId6).children().hasClass('chesspieces'))) {
        $("#" + tempId6).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId7).children().hasClass('whitec')) {
        $("#" + tempId7).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }

    if ($("#" + tempId8).children().hasClass('whitec')) {
        $("#" + tempId8).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }

    for (var y = numberArray + 1; y < 8; y++) {
        tempId = Letters[x] + numbers[y];
        if (!($("#" + tempId).children().hasClass('img chesspieces'))) {
            $("#" + tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId).children().hasClass('chesspieces'))) {
        $("#" + tempId).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId1).children().hasClass('whitec')) {
        $("#" + tempId1).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }

    if ($("#" + tempId2).children().hasClass('whitec')) {
        $("#" + tempId2).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    for (var y = numberArray - 1; y > 0; y--) {
        tempId = Letters[x] + numbers[y];
        if (!($("#" + tempId).children().hasClass('img chesspieces'))) {
            $("#" + tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId).children().hasClass('chesspieces'))) {
        $("#" + tempId).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId1).children().hasClass('whitec')) {
        $("#" + tempId1).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }

    if ($("#" + tempId2).children().hasClass('whitec')) {
        $("#" + tempId2).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
}
// path of blackking

function BlackKing(eventData) {
    currentPossition = eventData;
    suares.removeClass('selectpath');
    playAudio2();
    chesspieces.removeClass('clickpiece');
    var currentId = currentPossition.parents().attr('id');
    var letter = currentId.charAt(0);
    var no = currentId.charAt(1);
    var LettersArray = ($.inArray(letter, Letters));
    var numberArray = ($.inArray(parseInt(no), numbers));
    var tempId = Letters[LettersArray] + numbers[numberArray + 1];
    var tempId1 = Letters[LettersArray ] + numbers[numberArray + 1];
    var tempId2 = Letters[LettersArray ] + numbers[numberArray + 1];
    var tempId3 = Letters[LettersArray+1] + numbers[numberArray];
    var tempId4 = Letters[LettersArray+1 ] + numbers[numberArray];
    var tempId5 = Letters[LettersArray+1 ] + numbers[numberArray ];
    var tempId6 = Letters[LettersArray-1] + numbers[numberArray];
    var tempId7 = Letters[LettersArray-1 ] + numbers[numberArray];
    var tempId8 = Letters[LettersArray-1 ] + numbers[numberArray ];
    var x = LettersArray;
    var q=numberArray;


    for (var y = LettersArray + 1; y < 2; y++) {
        tempId3 = Letters[y] + numbers[q];
        if (!($("#" + tempId3).children().hasClass('img chesspieces'))) {
            $("#" + tempId3).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId3).children().hasClass('chesspieces'))) {
        $("#" + tempId3).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId4).children().hasClass('whitec')) {
        $("#" + tempId4).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }

    if ($("#" + tempId5).children().hasClass('whitec')) {
        $("#" + tempId5).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    for (var y = LettersArray - 1; y > LettersArray+2; y--) {
        tempId6 = Letters[y] + numbers[q];
        if (!($("#" + tempId6).children().hasClass('img chesspieces'))) {
            $("#" + tempId6).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId6).children().hasClass('chesspieces'))) {
        $("#" + tempId6).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId7).children().hasClass('whitec')) {
        $("#" + tempId7).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }

    if ($("#" + tempId8).children().hasClass('whitec')) {
        $("#" + tempId8).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }

    for (var y = numberArray + 1; y < 2; y++) {
        tempId = Letters[x] + numbers[y];
        if (!($("#" + tempId).children().hasClass('img chesspieces'))) {
            $("#" + tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId).children().hasClass('chesspieces'))) {
        $("#" + tempId).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId1).children().hasClass('whitec')) {
        $("#" + tempId1).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }

    if ($("#" + tempId2).children().hasClass('whitec')) {
        $("#" + tempId2).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    for (var y = numberArray - 1; y > numberArray+2; y--) {
        tempId = Letters[x] + numbers[y];
        if (!($("#" + tempId).children().hasClass('img chesspieces'))) {
            $("#" + tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId).children().hasClass('chesspieces'))) {
        $("#" + tempId).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId1).children().hasClass('whitec')) {
        $("#" + tempId1).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }

    if ($("#" + tempId2).children().hasClass('whitec')) {
        $("#" + tempId2).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
}
// path of whiteKing

function whiteking(eventData) {
    currentPossition = eventData;
    suares.removeClass('selectpath');
    playAudio2();
    chesspieces.removeClass('clickpiece');
    var currentId = currentPossition.parents().attr('id');
    var letter = currentId.charAt(0);
    var no = currentId.charAt(1);
    var LettersArray = ($.inArray(letter, Letters));
    var numberArray = ($.inArray(parseInt(no), numbers));
    var tempId = Letters[LettersArray] + numbers[numberArray - 1];
    var tempId1 = Letters[LettersArray] + numbers[numberArray - 1];
    var tempId2 = Letters[LettersArray] + numbers[numberArray - 1];
    var tempId3 = Letters[LettersArray + 1] + numbers[numberArray];
    var tempId4 = Letters[LettersArray + 1] + numbers[numberArray];
    var tempId5 = Letters[LettersArray + 1] + numbers[numberArray];
    var tempId6 = Letters[LettersArray - 1] + numbers[numberArray];
    var tempId7 = Letters[LettersArray - 1] + numbers[numberArray];
    var tempId8 = Letters[LettersArray - 1] + numbers[numberArray];
    var x = LettersArray;
    var q = numberArray;

    for (var y = LettersArray - 1; y > numberArray+2; y--) {
        tempId6 = Letters[y] + numbers[q];
        if (!($("#" + tempId6).children().hasClass('img chesspieces'))) {
            $("#" + tempId6).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId6).children().hasClass('chesspieces'))) {
        $("#" + tempId6).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId7).children().hasClass('black1')) {
        $("#" + tempId7).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }

    if ($("#" + tempId5).children().hasClass('black1')) {
        $("#" + tempId5).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    for (var y = LettersArray + 1; y < 2; y++) {
        tempId6 = Letters[y] + numbers[q];
        if (!($("#" + tempId6).children().hasClass('img chesspieces'))) {
            $("#" + tempId6).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId6).children().hasClass('chesspieces'))) {
        $("#" + tempId6).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId7).children().hasClass('black1')) {
        $("#" + tempId7).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }
    if ($("#" + tempId8).children().hasClass('black1')) {
        $("#" + tempId8).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }

    for (var y = numberArray - 1; y > LettersArray+2; y--) {
        tempId = Letters[x] + numbers[y];
        if (!($("#" + tempId).children().hasClass('img chesspieces'))) {
            $("#" + tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId).children().hasClass('chesspieces'))) {
        $("#" + tempId).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId1).children().hasClass('black1')) {
        $("#" + tempId1).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }
    for (var y = LettersArray + 1; y < 2; y++) {
        tempId = Letters[y] + numbers[q];
        if (!($("#" + tempId).children().hasClass('img chesspieces'))) {
            $("#" + tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId).children().hasClass('chesspieces'))) {
        $("#" + tempId).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId1).children().hasClass('black1')) {
        $("#" + tempId1).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }

    if ($("#" + tempId2).children().hasClass('black1')) {
        $("#" + tempId2).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
}
// path of whiterock

function whitekRock(eventData) {
    currentPossition = eventData;
    suares.removeClass('selectpath');
    playAudio2();
    chesspieces.removeClass('clickpiece');
    var currentId = currentPossition.parents().attr('id');
    var letter = currentId.charAt(0);
    var no = currentId.charAt(1);
    var LettersArray = ($.inArray(letter, Letters));
    var numberArray = ($.inArray(parseInt(no), numbers));
    var tempId = Letters[LettersArray] + numbers[numberArray - 1];
    var tempId1 = Letters[LettersArray ] + numbers[numberArray - 1];
    var tempId2 = Letters[LettersArray ] + numbers[numberArray - 1];
    var tempId3 = Letters[LettersArray +1] + numbers[numberArray];
    var tempId4 = Letters[LettersArray +1] + numbers[numberArray ];
    var tempId5 = Letters[LettersArray +1] + numbers[numberArray];
    var tempId6 = Letters[LettersArray -1] + numbers[numberArray];
    var tempId7 = Letters[LettersArray -1] + numbers[numberArray ];
    var tempId8 = Letters[LettersArray -1] + numbers[numberArray];
    var x = LettersArray;
    var q=numberArray;

    for (var y = LettersArray - 1; y > 0; y--) {
        tempId6 = Letters[y] + numbers[q];
        if (!($("#" + tempId6).children().hasClass('img chesspieces'))) {
            $("#" + tempId6).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId6).children().hasClass('chesspieces'))) {
        $("#" + tempId6).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId7).children().hasClass('black1')) {
        $("#" + tempId7).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }

    if ($("#" + tempId5).children().hasClass('black1')) {
        $("#" + tempId5).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    for (var y = LettersArray + 1; y < 8; y++) {
        tempId6 = Letters[y] + numbers[q];
        if (!($("#" + tempId6).children().hasClass('img chesspieces'))) {
            $("#" + tempId6).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId6).children().hasClass('chesspieces'))) {
        $("#" + tempId6).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId7).children().hasClass('black1')) {
        $("#" + tempId7).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }
    if ($("#" + tempId8).children().hasClass('black1')) {
        $("#" + tempId8).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }

    for (var y = numberArray - 1; y > 0; y--) {
        tempId = Letters[x] + numbers[y];
        if (!($("#" + tempId).children().hasClass('img chesspieces'))) {
            $("#" + tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId).children().hasClass('chesspieces'))) {
        $("#" + tempId).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId1).children().hasClass('black1')) {
        $("#" + tempId1).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }
    for (var y = LettersArray + 1; y < 8; y++) {
        tempId = Letters[y] + numbers[q];
        if (!($("#" + tempId).children().hasClass('img chesspieces'))) {
            $("#" + tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#" + tempId).children().hasClass('chesspieces'))) {
        $("#" + tempId).addClass('selectpath');
        playAudio2();
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
        // $("#"+tempId).addClass('selectpath');
        // currentPossition.addClass('clickpiece');
    }
    if ($("#" + tempId1).children().hasClass('black1')) {
        $("#" + tempId1).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }

    if ($("#" + tempId2).children().hasClass('black1')) {
        $("#" + tempId2).addClass('crosspices');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }

    // if ($("#" + tempId2).children().hasClass('black1')) {
    //     $("#" + tempId2).addClass('crosspices');
    //     currentPossition.addClass('clickpiece');
    //     currentPossition.removeClass('selectpath');
    // }
}

// path of whitepond

    function whitepond(eventData) {
        currentPossition =eventData;
        suares.removeClass('selectpath');
        chesspieces.removeClass('clickpiece');
        var currentId = currentPossition.parent().attr('id');
        console.log(currentId);
        var letter = currentId.charAt(0);
        var no = currentId.charAt(1);
        var LettersArray=($.inArray(letter,Letters));
        var numberArray =($.inArray(parseInt(no),numbers));
        var tempId1 =Letters[LettersArray]+numbers[numberArray-1];
        var tempId2 =Letters[LettersArray]+numbers[numberArray-2];

        switch (currentPossition.attr('id')){
            case "whitepondA":CountArray[0]++; break;
            case "whitepondB":CountArray[1]++;break;
            case "whitepondC":CountArray[2]++;break;
            case "whitepondD":CountArray[3]++;break;
            case "whitepondE":CountArray[4]++;break;
            case "whitepondF":CountArray[5]++;break;
            case "whitepondG":CountArray[6]++;break;
            case "whitepondH":CountArray[7]++;break;
        }

        if(CountArray[0]==1) {
            if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
                $("#" + tempId1).addClass('selectpath');
                playAudio2();
                currentPossition.addClass('clickpiece');
            }
            if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
                $("#" + tempId2).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
        }else{
            if(!($("#"+tempId1).children().hasClass('chesspieces'))){
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
                currentPossition.removeClass('selectpath');
            }
        }
        if(CountArray[1]==1){
            if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
            if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
                $("#" + tempId2).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
        }else{
            if(!($("#"+tempId1).children().hasClass('chesspieces'))){
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
                currentPossition.removeClass('selectpath');
            }
        }
        if(CountArray[2]==1){
            if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
            if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
                $("#" + tempId2).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
        }else{
            if(!($("#"+tempId1).children().hasClass('chesspieces'))){
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
                currentPossition.removeClass('selectpath');
            }
        }
        if(CountArray[4]==1){
            if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
            if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
                $("#" + tempId2).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
        }else{
            if(!($("#"+tempId1).children().hasClass('chesspieces'))){
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
                currentPossition.removeClass('selectpath');
            }
        }
        if(CountArray[5]==1){
            if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
            if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
                $("#" + tempId2).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
        }else{
            if(!($("#"+tempId1).children().hasClass('chesspieces'))){
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
                currentPossition.removeClass('selectpath');
            }
        }
        if(CountArray[6]==1){
            if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
            if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
                $("#" + tempId2).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
        }else{
            if(!($("#"+tempId1).children().hasClass('chesspieces'))){
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
                currentPossition.removeClass('selectpath');
            }
        }
        if(CountArray[7]==1){
            if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
            if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
                $("#" + tempId2).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
        }else{
            if(!($("#"+tempId1).children().hasClass('chesspieces'))){
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
                currentPossition.removeClass('selectpath');
            }
        }
        if(CountArray[8]==1){
            if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
            if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
                $("#" + tempId2).addClass('selectpath');
                currentPossition.addClass('clickpiece');
            }
        }else{
            if(!($("#"+tempId1).children().hasClass('chesspieces'))){
                $("#" + tempId1).addClass('selectpath');
                currentPossition.addClass('clickpiece');
                currentPossition.removeClass('selectpath');
            }
        }
    }
////////////////////////////////
// remove and cutting
    $(".square").on("click",function (eventData) {
        var currentSquare=$(this);
        var currentpiece=$(".chesspieces.clickpiece");
        if($(currentSquare).hasClass('selectpath')){
            playAudio();
            currentSquare.append(currentpiece);
            chesspieces.removeClass('clickpiece');
            suares.removeClass('selectpath');
            playAudio();
        }
        if ($(currentSquare).hasClass('crosspices')){
            var y =$(currentpiece).clone();
            $(currentpiece).remove();
            $(currentSquare).children().remove();
            currentSquare.append(currentpiece);
            suares.removeClass('selectpath');
            chesspieces.removeClass('clickpiece');
            suares.removeClass('crosspices');
            cuttingpiece();
        }
    });



// sound
    var x = document.getElementById("myAudio");

    function playAudio() {
        x.play();
    }
    var y = document.getElementById("myAudio2");

    function playAudio2() {
        y.play();
    }

    var a = document.getElementById("cutting");

    function cuttingpiece() {
        a.play();
    }


