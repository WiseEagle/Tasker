<?php
  $h = "eagleb00.mysql.tools";
  $d = "eagleb00_php";
  $p = "V(4zD56yu@";
  $u = "eagleb00_php";
  $link = mysqli_connect($h, $u, $p, $d);
  $link->set_charset("utf8");
  if (!$link) {
      echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
      echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
      echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
      exit;
  }
?>
