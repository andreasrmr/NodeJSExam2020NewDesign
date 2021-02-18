$('#login').click(function(event) {
    const url = '/login';
    event.preventDefault();
    $('.content').load(url);
});


$('#about').click(function(event) {
    const url = '/about';
    event.preventDefault();
    $('.content').load(url);
});

$('#home').click(function(event) {
    const url = '/home';
    event.preventDefault();
    $('.content').load(url);
});
