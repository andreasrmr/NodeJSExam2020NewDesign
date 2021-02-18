$('#register').click(function(event) {
    const url = '/register';
    event.preventDefault();
    $('.content').load(url);
});
