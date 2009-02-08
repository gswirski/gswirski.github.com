<?php

$data = array(
  'apache' => 'It is the most popular HTTP server on the World Wide Web. As of December 2008 Apache served over 51% of all websites. Apache is one of the most frequently encountered environment in business that offer space on network servers',
  'css' => 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in a markup language. CSS can be used locally by the readers of web pages to define colors, fonts, layout, and other aspects of document presentation.',
  'databases' => '',
  'design' => '',
  'interfaces' => '',
  'javascript' => '',
  'merb' => '',
  'mysql' => '',
  'photoshop' => '',
  'php' => '',
  'postgresql' => '',
  'programming' => '',
  'ruby' => '',
  'scripts' => '',
  'symfony' => '',
  'webdesign' => '',
  'zend' => '',
  'xhtml' => ''
);

header('content-type: text/xml');
echo '<?xml version="1.0" encoding="utf-8"?>';
echo '<data>';
	echo '<header>'.$_GET['name'].'</header>';
	echo '<paragraph>Jest to najszerzej stosowany serwer HTTP w Internecie. W maju 2006 jego udział wśród serwerów wynosił prawie 65%. Apache stanowi jedno z najczęściej spotykanych środowisk w firmach oferujących miejsce na serwerach sieciowych.</paragraph>';
echo '</data>';