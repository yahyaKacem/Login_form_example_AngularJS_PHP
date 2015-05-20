<?php
$postdata = file_get_contents("php://input");
$user     = json_decode($postdata, true);
if ($user["username"] == "azerty" && $user["password"] == "azerty") {
  echo "loggedin";
} else {
  echo "error";
}
