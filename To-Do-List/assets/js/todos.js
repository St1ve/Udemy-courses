//Check of Specific Todos By Clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
	$(this)
		.parent()
		.fadeOut(400, function() {
			$(this).remove();
		});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	// Enter = 13
	if (event.which === 13) {
		//grabbing a new todo text from input
		var todoText = $(this).val();
		//Clear input
		$(this).val("");
		//create new li and add to ul
		$("ul").append(
			"<li><span><i class='far fa-trash-alt'></i></span> " +
				todoText +
				"</li>"
		);
	}
});

$(".fa-pencil-alt").click(function(e) {
	$("input[type='text']").fadeToggle(600);
});
