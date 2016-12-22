<form method="get">
    <div>
        <input type="text" name="name" value="Aleks"><br>
    </div>
    <div>
        <input type="number" name="age" value="12"><br>
    </div>
    <div>
        <input type="radio" name="drink" value="Male">Male<br>
    </div>
    <div>
        <input type="radio" name="drink" value="Female">Female<br>
    </div>
    <div>
        <input type="submit">
    </div>
</form>

<?php

if (isset($_GET['drink']) && (isset($_GET['age']) || isset($_GET['name']))) {
    echo "My name is {$_GET['name']}. I am {$_GET['age']} years old.I am {$_GET['drink']}." ;
}
?>
