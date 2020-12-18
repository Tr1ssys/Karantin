$(function(){
	var dTable = $('#tResult').DataTable({
		'searching': false,
        'stateSave': true,
        'language': {
            'paginate': {
                'next': 'след.',
                'previous': 'пред.',
            },
            "emptyTable": 'Записи отсутствуют (͡ ͡° ͜ つ ͡͡°)',
            'zeroRecords': 'Ничего не найдено ლ(ಠ益ಠლ)',
            "infoEmpty": 'Показано от 0 до 0 из 0 записей',
            "info": 'Показано от _START_ до _END_ из _TOTAL_ записей',
            "lengthMenu": 'Показано _MENU_ записей'	
        }

    });
	$.ajax({
		type : "POST",
		url: "../php/db.php",
		dataType:"json",

		success:function(response){
			for(let key in response){
				dTable.row.add([response[key].status,response[key].text,response[key].date]).draw(false);
			}
		}
	});
});