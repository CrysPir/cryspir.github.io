
	var trigger=0, name, age, sex, education, mathematic, asu, cutting, programming; // обьявляем переменные которые понадобятся в ходе работы
		document.getElementById("startTest").addEventListener("click",test) // добавляем слушателя события click к элементу с id startTest
		function test(){ // Функция которая опрашивает пользователя
			document.getElementById("startTest").style.visibility = 'hidden';

			name = prompt("Введите имя");
			while (!(/^([a-zA-Zа-яёА-ЯЁ])/.test(name))) {
				name = prompt("Введите имя");
			}
			age = Number(prompt("Введите возраст"));
			while (!(/\d/.test(age))) {
				age = prompt("Введите возраст");
			}
			sex = prompt("Введите пол");
			while ((sex != "М") && (sex != "Ж")) {
				sex = prompt("Введите пол");
			}
			surname = prompt("Введите фамилию");
			while (!(/^([a-zA-Zа-яёА-ЯЁ])/.test(surname))) {
				surname = prompt("Введите имя");
			}
			education = confirm("У вас есть высше образование?");
			mathematic = confirm("Вы знаете математику?");
			asu = confirm("Вы знаете АСУ ТП?");
			cutting = confirm("Вы знаете теорию резания?");
			programming = confirm("Умеете программировать?");
			dancing = confirm("Умеете тацневать?");
			writeToPage();
		}
		function writeToPage(){ // функция которая записывает значение из наших переменных в элементы на странице
			/*
			document.getElementById("name") - возвращает элемент с id name
			document.getElementById("name").innerText - текст этого элемента
			У ЧЕКБОКСОВ НЕТ ТЕКСТА, поэтому мы пишем в свойство checked значения true или false
			document.getElementById("education").checked = education;
			*/
			$("#name").val(name)
			$("#age").val(age)
			$("#sex").val(sex)
			$("#surname").val(surname)
			$("#surname").focus();
			$("#sex").focus();
			$("#age").focus();
			$("#name").focus();
			document.getElementById("education").checked = education;
			document.getElementById("education").disabled = true;
			document.getElementById("mathematic").checked = mathematic;
			document.getElementById("mathematic").disabled = true;
			document.getElementById("asu").checked = asu;
			document.getElementById("asu").disabled = true;
			document.getElementById("cutting").checked = cutting;
			document.getElementById("cutting").disabled = true;
			document.getElementById("programming").checked = programming;
			document.getElementById("programming").disabled = true;
			document.getElementById("dancing").checked = dancing;
			document.getElementById("dancing").disabled = true;
			trigger=1;
			myFunction();
		}
		x.style.display = "none";
		function myFunction() { // эта функция автоматически проверяет подходит ли наш кандидат: "кандидаты со знанем АСУ ТП и высшим
					//образованием".
	    	var x = document.getElementById("div1");
		if (trigger==1) {
		if (programming == true && mathematic ==true)
		{
       		var text ='<p class="stroke">ВЫ НАМ ПОДОШЛИ!</p>'
		x.innerHTML = text;
		x.style.display = "block";
		}
		else 	{
        	var text ='<p class="stroke">ВЫ НАМ НЕ НУЖНЫ!</p>'
		x.innerHTML = text;
			}
		}
		}
