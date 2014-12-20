
$(document).ready(function (){
	$(".abc").hide();
	//$('').

	$('#selectAll').attr('checked', false);
	$("#place").on("keypress" ,function(e){
		if(e.which === 13) {
			$(".abc").show();
			var checkboxValue= $("#place").val();
			$("#app").append("<div class='dhk' ><hr><input class='ket1' id = 'dh' type='checkbox' value='text'>" +  checkboxValue + " <img class='img1' src='http://png-5.findicons.com/files/icons/766/base_software/128/deletered.png'></div>");
			$ ('#place').val('');
		}
		//keypress tag
	});
	$('#all').on('click', function(){
		$('.dhk').show();	
	});

	$('#completed').on('click',function (){
		$('.colorred').show();
		$('.dhk').not('.colorred').hide();
		
	});

	$('#pending').on('click',function (){
		$('.dhk').not('.colorred').show();
		$('.colorred').hide();
	});

	$('#app').on('click', '.dhk', function (e) {

		if(e.target.checked){
			//console.log(e.target);
		$(this).addClass('colorred');
		}
		else{

		$(this).removeClass('colorred');	
		}
		if( $(".ket1").filter(':not(:checked)').length === 0){
	 	$("#selectAll").prop("checked",true);
		}else{
		$("#selectAll").prop("checked",false);
		}



	});

	$('#selectAll').on('click', function () {
	   	$(this).closest('#todo1').find('div input:checkbox').prop('checked', this.checked);
	   	if(this.checked){ 
	   		$('.dhk').addClass('colorred');
		}else{
			$('.dhk').removeClass('colorred');
		}



	    
	});

	$('.remove').on('click',function (){
	$('.colorred').remove();
	//console.log(this);

	});
	$("#app").on("click",".img1",function(){
	$(this).parent(".dhk").remove();
	});

});


//deletebutton