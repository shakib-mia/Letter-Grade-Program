var resultSection = $('.result_section');
var mainContent = $('.main_content');
var closeButton = $('.fa-times');
var resultButton = $('button');
var result = $('#result')
resultSection.hide();
closeButton.click(function (){
    resultSection.slideUp();
    mainContent.fadeIn(900)
})

resultButton.click(function () {
    var input = $('#input').val();
    
    if(input.length == 0 || input<0){
        alert('Insert A Valid Number');
    }

    else{
        resultSection.slideDown();
        mainContent.fadeOut();
        if(input<33)
            result.text("Failed");
        else if(input<40)
            result.text('D');
        else if(input<50)
            result.text('C');
        else if(input<60)
            result.text('B');
        else if(input<70)
            result.text('A-');
        else if(input<80)
            result.text('A');
        else if(input<=100)
            result.text('A+');
        else
            result.text("Chapabaji");
    }
})