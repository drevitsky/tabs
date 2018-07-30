'use strict';

$(document).ready(function(){

	$('#input').on('input', function(){
		if ($(this).val().length > 3) {
			$('#add').prop('disabled',false);
		} else {
			$('#add').prop('disabled',true);
		}
	})

	$('#add').on('click', function(e) {
		e.preventDefault();
		var text = $('#input').val();

		create(text);

		$('#input').val('');
		$('#add').prop('disabled',true);
	})

	$('body').on('change', 'input[type="checkbox"]', function() {
		var text = $(this).parent().text();

		del($(this));

		$('#completed').append(`<li hidden>${text}</li>`);
		$('#completed li[hidden]').fadeIn(500);
	})	

	$('body').on('click', '.delete', function() {
		del($(this));
	})

	$('body').on('click', '.edit', function() {
		$(this).fadeOut(500, function(){
			var parent = $(this).parent();
			parent.find('label').hide();
			parent.find('form').fadeIn();
		});
	})

	$('body').on('click', '.save', function(e) {
		e.preventDefault();
		var parent = $(this).parent(),
			li 	   = $(this).parents('li'),
			text   = parent.find('input').val();

		li.find('label')
			.html(`<input type="checkbox"> ${text}`);

		parent.fadeOut(500, function(){
			li.find('label').fadeIn();
			li.find('.edit').fadeIn();
		})

	})

	function del(el) {
		el.parents('li').fadeOut(500, function(){
			$(this).remove();
		})
	}

	function create(text) {
		var li = `<li hidden>
					<label><input type="checkbox"> ${text}</label>
						<form hidden>
							<input type="text" value="${text}"> 
							<button type="submit" class="save">Save</button> 
						</form>
					<button class="edit">Edit</button>
					<button class="delete">Delete</button>
				</li>`;

		$('#todos').append(li);
		$('#todos li[hidden]').fadeIn(500);
	}

});