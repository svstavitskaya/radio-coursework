<?php

// подключение файлов
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';


$c = true;

$title = "Тема письма";

foreach ( $_POST as $key => $value ) {
    if ( $value !="" && $key !="name" && $key !="email" && ) {
    $body .= "
    " . ($c = !$c) ? '<tr':'<tr style=background-color: #f8f8f8;">' ) . "
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$value</b></td>
    </tr>
    ";
    }
}

$body = "<table style='width: 100%;'>$body</table>";

// phpmailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;

//Настройка почты
$mail->Host       = 'smtp.mail.ru'; // Настройка сервера почты
$mail->Username   = 'sungirl_av@mail.ru';
$mail->Password   = '';
$mail->SMTPSecure = 'ssl';
$mail->Port       = '465';

$mail->setFrom('sungirl_av@mail.ru', 'Заявка с сайта');
$mail->addAddress('svshcherbakova@mail.ru', 'Joe User');


 //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $title;
    $mail->Body    = $body;

    $mail->send();
    echo 'Письмо успешно отправлено';

} catch (Exception $e) {
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
