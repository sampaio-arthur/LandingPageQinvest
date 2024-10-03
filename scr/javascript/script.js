$(document).ready(function() {

    $('#mobile_btn').on('click', function() {

        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
        
    });

});

document.getElementById('nav_logo').addEventListener('click', function() {
    location.reload(); // Recarrega a página
});
