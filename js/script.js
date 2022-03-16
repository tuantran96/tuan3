/*phần js cho sản phẩm trong giỏ hàng*/

var title = $('.cart-title').text();
console.log(title);

$('.btn-delete').on('click', function(){
	$(this).parents('.product-in-cart').remove();
});

function tongtien(){
	var total = 0;
	$('.item-total-price input').each(function(){
		var price = $(this).val();
		total += parseInt(price);
	});
	$('#total').text(formatNumber(total, 0, ',', '.'));
}
$('.btn-cart').on('click', function(){
	var type = $(this).attr('data-type');
	var number_product = $(this).parent().find('input[type="text"]').val();
	number_product = parseInt(number_product);
	if(type == 'up'){
		number_product += 1; 
	}else{
		if(number_product > 1){
			number_product -= 1;
		}
	}

	$(this).parent().find('input[type="text"]').val(number_product);
	var price_product = $(this).parents('.product-in-cart').find('input.price_product').val();
	console.log(price_product);
	var total_item = number_product * parseInt(price_product);
	$(this).parents('.product-in-cart').find('.item-total-price span').text(formatNumber(total_item, 0, ',', '.'));
	$(this).parents('.product-in-cart').find('.item-total-price input').val(total_item);
	tongtien();
});
function formatNumber (number, decimals, dec_point, thousands_sep) {
    number = number.toFixed(decimals);
    var nstr = number.toString();
    nstr += '';
    x = nstr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? dec_point + x[1] : '';
    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + thousands_sep + '$2');

    return x1 + x2 +'đ';
}

/*phần js của register*/

var objTitleForm = document.getElementById('title-form');
// console.log(objTitleForm);

var objInput = document.getElementsByTagName('input');
var objClassName = document.getElementsByClassName('form-control');

// for(var i = 0; i < objClassName.length; i++){
// 	console.log(objClassName[i]);
// }
var selectCss = document.querySelector('#title-form');

var selectCss = document.querySelectorAll('.form-control');
// console.log(selectCss);

// cách lấy nội của thẻ html
var title = objTitleForm.innerHTML;
var title2 = objTitleForm.outerHTML;
// Cách thay đổi nội dung html
// objTitleForm.innerHTML = 'Đăng ký';
// objTitleForm.outerHTML = '<h1 id=\'title-form\'>Đăng ký</h1>';
var fontSizeTitle = objTitleForm.style.fontSize;
objTitleForm.style.fontSize = '50px';
objTitleForm.style.color = '#828282';
objTitleForm.style.fontFamily = "Arial";

// cách get giá trị thuộc tính html
var idTitle = objTitleForm.getAttribute('id');
// cách set hoặc thêm mới thuộc tính html
objTitleForm.setAttribute('id', 'title');
objTitleForm.setAttribute('class', "form-desc");

function submitForm(){
	// var jobFullname = document.getElementById('fullname');
	// var fullname = jobFullname.value;
	// if(fullname == ''){
	// 	var error_fullname = document.getElementById('error_fullname');
	// 	error_fullname.innerHTML = "Vui lòng nhập họ tên!";
	// 	error_fullname.style.display = 'block';
	// 	error_fullname.style.marginTop = '0px';
	// }

	var objs = document.getElementsByClassName('form-control');
	for(var i = 0; i < objs.length; i++){
		var obj = objs[i];
		var objValue = obj.value;
		var nameAttr = obj.getAttribute('name');
		var objError = document.getElementById('error_'+nameAttr);
		var fieldName = obj.getAttribute('field-name');
		if(objValue == ''){
			objError.innerHTML = 'Vui lòng nhập '+fieldName+'!';
			objError.style.display = 'block';
		}else{
			if(nameAttr == 'password_confirm'){
				var password = document.getElementById('password').value;
				if(objValue !== password){
					objError.innerHTML = fieldName+' chưa trùng khớp';
					objError.style.display = 'block';
				}else{
					objError.innerHTML = '';
					objError.style.display = 'none';
				}
			}else{
				objError.innerHTML = '';
				objError.style.display = 'none';
			}
		}
	}
}

function keyupInput(id_input){
	var obj = document.getElementById(id_input);
	var objValue = obj.value;
	var nameAttr = obj.getAttribute('name');
	var fieldName = obj.getAttribute('field-name');
	var objError = document.getElementById('error_'+nameAttr);
	if(objValue == ''){
		objError.innerHTML = 'Vui lòng nhập '+fieldName+'!';
		objError.style.display = 'block';
	}else{
		objError.innerHTML = '';
		objError.style.display = 'none';
	}
}

function hocsinh(hoten, masv, tuoi){
	this.hoten = hoten;
	this.masv = masv;
	this.tuoi = tuoi;

	this.setHoten = function(hoten){
		this.hoten = hoten;
	}

	this.getHoten = function(){
		return this.hoten;
	}
}

// var hs = new hocsinh('Đỗ Văn Tư', '1234', '28');

// var hoten = hs.hoten;

// console.log(hs);
// console.log(hoten);








 

