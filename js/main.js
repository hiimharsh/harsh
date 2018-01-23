var projects = (function() {
	var json = null;
	$.ajax({
		'async': false,
		'global': false,
		'url': "js/projects.json",
		'dataType': "json",
		'success': function (data) {
			json = data;
		}
	});
	return json;
})();

$.each(projects, function (index, project) {
	var li = '<li><div><h4 class="project-title"><a href="' + project.url + '" target="_blank">' + project.name + '</a></h4><p class="project-duration">' + project.language + ' // ' + project.duration + '</p></div></li>'
	$('#projects ul').append(li);
});