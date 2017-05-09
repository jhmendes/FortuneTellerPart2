// add some Javascript Life to the page:


$('form').on('submit', (event) => {
  event.preventDefault();

  let newFortuneContent = $('#fortune-content').val();


  let request = $.ajax ({
    method: 'POST',
    url: '/api/v1/fortunes.json',
    data: { content: newFortuneContent }

  });

// call back function
  request.done(() => {
    $('ul.fortunes').prepend('<li>' + newFortuneContent + '</li>');
    $('#fortune-content').val('');

  });

});
//
$('h1').hide().slideDown(2000);
$('ul').hide().slideDown(2000);
$('#fortune-form').hide().fadeIn(4000);
