<!DOCTYPE html>
<html>
<head>
	<title>Game Đập Chuột</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script type="text/javascript">
		$(function() {
			for (var i = 1; i <= 6; i++) {
				revival('A'+i)
			}
		})
	</script>
</head>
<body>

			<div class="board">
				<h1 id="diem">Điểm : 0</h1>
					<audio controls autoplay>
  						<source src="bgm.mp3" type="audio/mpeg">
					</audio>
			</div>

		<div class="block">
			
			
			<table>
				<tr>
					<td><button id="A1" class="button" onclick="kill('A1')"></button></td>
					<td><button id="A2" class="button" onclick="kill('A2')"></button></td>
					<td><button id="A3" class="button" onclick="kill('A3')"></button></td>
				</tr>

				<tr>
					<td><button id="A4" class="button" onclick="kill('A4')"></button></td>
					<td><button id="A5" class="button" onclick="kill('A5')"></button></td>
					<td><button id="A6" class="button" onclick="kill('A6')"></button></td>
				</tr>
			</table>

		</div>

	<script type="text/javascript" src="code.js"></script>	
</body>
</html>
