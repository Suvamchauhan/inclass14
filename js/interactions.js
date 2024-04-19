/* jQuery UI Interactions */
$(function() {
	// ➐ Make red and blue boxes draggable, and change cursor to 'move' by adding CSS class (see interactions.css)
	$("#draggable").draggable({ snap: "#droppable" }).addClass("move");
	$("#draggable2").draggable({ grid: [ 25, 25 ] }).addClass("move");
	// ➒ Add snapping to the above draggable elements

	// ➑ Make the grey box droppable, responding to hover with a draggble element, and also to being dropped on
	$("#droppable").droppable({
		hoverClass: "ui-state-hove",
		drop: function(event, ui) {
			$(this)
			.addClass("ui-state-highlight")
			.find("p")
			.html("Dropped!");
		}
	});

	// STEP 10: Make the list items sortable
	$("#sortable").sortable();
	$("#sortable").disableSelection();
});
