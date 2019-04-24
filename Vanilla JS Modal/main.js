$(document).ready(function () {

    $('#modalBtn').click(function () {
        $('.modal').css('display', 'block');
    });

    $('.closeBtn').click(function () {
        $('.modal').css('display', 'none');
    });

    $(document).click(function (e) {
        console.log(e.target);
        if (e.target.className == 'button') {
            return;
        }
        else if (e.target.className == 'modal-content') {
            return;
        }
        else {
            $('.modal').css('display', 'none');
        }
    });


});