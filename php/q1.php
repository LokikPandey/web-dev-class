<?php
    echo "hello world";
    setcookie("name","lokik",time()+10,"/");
    if(isset("name")) echo "set";
    else echo "unset";
?>