<?php
//start  autoloader
require 'app/bootstrap.php';

$capture = new Ketencek\Capture\Capture;

$capture->load('invoice.php', [
   'order' => '123456',
   'name' => 'Salih Hanifeoglu',
    'amount' => 49.90,
]);

$capture->respond('invoice.pdf');