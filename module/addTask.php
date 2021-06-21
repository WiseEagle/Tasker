<?php
header("Access-Control-Allow-Origin: *");
  include_once "config.php";
  $taskContent = $_POST["taskContent"];
  $taskColor = $_POST["taskColor"];

  $link->set_charset("utf8");

  if ($link->query("INSERT INTO tasks (taskContent, taskColor) VALUES (\"$taskContent\", \"$taskColor\");") === TRUE) {
    printf("data successfuly writed!<br/>");
  }else if($link->query("CREATE TABLE IF NOT EXISTS `wishes`(
    `ID` int(11) unsigned NOT NULL auto_increment PRIMARY KEY,
    `taskContent` varchar(255),
    `taskColor` varchar(255)
  )")===TRUE){
    printf("table successfuly created!<br/>");
    if ($link->query("INSERT INTO tasks (taskContent, taskColor) VALUES (\"$taskContent\", \"$taskColor\");") === TRUE) {
        printf("data successfuly writed!<br/>");
    }
  }else{
    printf("Error!<br/>");
  }
  mysqli_close($link);

  ?>

  <script type="text/javascript">
    setTimeout(function(){window.history.back();}, 2000);
  </script>
