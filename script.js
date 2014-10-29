$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField);
	$.getJSON('data.json', function(data) {
		var output = '<ul class = "searchresults">';
		$.each(data, function(key, val) {
			if((val.name.search(myExp) != -1) || (val.zip.search(myExp) != -1)) {
		output += '<li>';
		output += '<h2>'+ val.name + '</h2>';
		output += '<h3>'+ val.street + '</h3>';
		output += '<h4>'+ val.zip + '</h4>';
		output += '</li>';

	}
});
	output += '</ul>';
	$('#update').html(output);
}); //get JSON

});
