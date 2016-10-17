<?php

	// Проверка заполнены ли поля формы и отправка письма на имейл получателя
	// Checking that the fields are not empty and sending an email to receiver
	if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['email'])&&$_POST['email']!="")) {

		// Почта получателя, через запятую можно указать любое количество адресов
		// Any quantity of receivers emails, separated by comma
		$to = 'info@example.com';

		// Загаловок письма
		// Email title
		$subject = 'Заявка на обратный звонок';

		// Тело письма
		// Email body
		$message = '
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<h3>Контактные данные</h3>
					<br>
					<p>Имя: '.$_POST['name'].'</p>
					<p>Телефон: '.$_POST['phone'].'</p>
					<p>Почта: '.$_POST['email'].'</p>
				</body>
			</html>';

		// Кодировка письма
		// Message encoding
		$headers  = "Content-type: text/html; charset=utf-8 \r\n";

		// Поле 'отправитель'. Введите имейл сайта, чтобы понимать откуда пришло письмо
		// 'From' field. Type here an email of this site
		$headers .= "From: rabota-israel.org.ua \r\n";

		// Отправка письма с помощью функции 'mail'
		// Sending email with 'mail' function

		// Check if email is send
		if(mail($to, $subject, $message, $headers)) {
			echo '1';
		} else {
			echo '0';
		}
	}

?>
