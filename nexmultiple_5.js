<html>
<head>
<title>
</head>
</title>
<script>
 var x = 105;
 var result1 = 0;
 var result2 =0;
 var result3=0;
 
 if (x % 5 == 0) {
	result1 = Math.floor(x / 5) * 5;
 } else {
	result1 = (Math.floor(x / 5) * 5) + 5;
 }
 
  x = 108;
 if (x % 5 == 0) {
	result2 = Math.floor(x / 5) * 5;
 } else {
	result2 = (Math.floor(x / 5) * 5) + 5;
 }
 
 x = 1;
 if (x % 5 == 0) {
	result3 = Math.floor(x / 5) * 5;
 } else {
	result3 = (Math.floor(x / 5) * 5) + 5;
 }
 
 alert("Results: " + result1 + ", " + result2 + ", " + result3);
</script>
<body></body>
</html>