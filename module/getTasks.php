<?php
header("Access-Control-Allow-Origin: *");
include_once "config.php";

if ($result = $link->query("SELECT * FROM tasks")) {

    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $myArray[] = $row;
    }
    echo json_encode($myArray);
}

mysqli_close($link);
 ?>
