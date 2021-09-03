<?php
    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    if(isset($_POST["btnSubmit"])){
        $to      = 'chess2chessphp2@gmail.com';
        $subject = "Message from dijana sajt from - " . $_POST["inputName"];
        $from = $_POST["inputEmail"];
        $message = $_POST["inputMessage"];
        $headers = 'From: ' . $from . "\r\n" .
            'Reply-To: ' . $from . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $message, $headers);

        echo json_encode({message:"Success"})
        header(["status"=>"success"])

    }
?>