$(function() {
  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/sergiocruz.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      $.each(response.courses.completed, function(i, course){
        var div = $('<div class="course"><h3>'+course.title+'</h3><img src="'+course.badge+'"><a href="'+course.url+'" target="_blank" class="btn btn-primary">See Course</a></div>');
        $('#badges').append(div);
      });
    }
  });
});
