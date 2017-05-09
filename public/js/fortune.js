
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
    $('ul.fortunes').append('<li>' + newFortuneContent + '</li>');
    $('#fortune-content').val('');

  });

});
