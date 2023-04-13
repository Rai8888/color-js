const COLORS = [
  { hexii: 'CD5C5C', rgb: 'RGB: (205, 92, 92)',}, 
  { hexi: 'ADFF2F', rgb: 'RGB: (173, 255, 47)',},
  { hexi: 'F08080', rgb: 'RGB: (240, 128, 128)',},
  { hexi: 'DC143C', rgb: 'RGB: (220, 20, 60)',},
  { hexi: 'FF0000', rgb: 'RGB: (255, 0, 0)',},
  { hexi: '8B0000', rgb: 'RGB: (139, 0, 0)',},
  { hexi: '00FA9A', rgb: 'RGB: (0, 250, 154)',},
  { hexi: 'FF1493', rgb: 'RGB: (255, 20, 147)',},
  { hexi: 'DB7093', rgb: 'RGB: (219, 112, 147)',},
  { hexi: 'FF7F50', rgb: 'RGB: (255, 127, 80)',},
  { hexi: 'FF4500', rgb: 'RGB: (255, 69, 0)',},
  { hexi: '008000', rgb: 'RGB: (0, 128, 0)',},
  { hexi: '66CDAA', rgb: 'RGB: (102, 205, 170)',},
  { hexi: '20B2AA', rgb: 'RGB: (32, 178, 170)',},
  { hexi: 'FFFF00', rgb: 'RGB: (255, 255, 0)',},
  { hexi: '00FFFF', rgb: 'RGB: (0, 255, 255)',},
  { hexi: '7FFFD4', rgb: 'RGB: (127, 255, 212)',},
  { hexi: '00CED1', rgb: 'RGB: (0, 206, 209)',},
  { hexi: '4682B4', rgb: 'RGB: (70, 130, 180)',},
  { hexi: 'FF00FF', rgb: 'RGB: (255, 0, 255)',},
  { hexi: '8A2BE2', rgb: 'RGB: (138, 43, 226)',},
  { hexi: '800080', rgb: 'RGB: (128, 0, 128)',},
  { hexi: '4B0082', rgb: 'RGB: (75, 0, 130)',},
  { hexi: 'FF00FF', rgb: 'RGB: (255, 0, 255)',},
  { hexi: '00FF7F', rgb: 'RGB: (0, 255, 127)',},
  { hexi: '9ACD32', rgb: 'RGB: (154, 205, 50)',},
  { hexi: '8B0000', rgb: 'RGB:(139, 0, 0)',},
  { hexi: '7B68EE', rgb: 'RGB:(123, 104, 238)',},
  { hexi: '483D8B', rgb: 'RGB:(72, 61, 139)',},
  { hexi: 'DAA520', rgb: 'RGB:(218, 165, 32)',},
];
 


    let screen = '';

    const body = document.getElementById('body');
	const textColorName = document.getElementById('name');
	const header = document.getElementById('header');
	const buttonHex = document.getElementById('hexBtn');
	const buttonRgb = document.getElementById('rgbBtn');



  
    function changeBgColor() {
  
	const changeBg = COLORS[Math.floor(Math.random() * COLORS.length)];
  
	body.style.backgroundColor = '#' + changeBg.hexi;

	
	changeTextColor(changeBg.hexi);
	
  
	let display = '';

	if (screen === 'hex' ) {display = `HEX: #${changeBg.hexi}`}
	else if (screen === 'rgb') { display = changeBg.rgb;}
	else {screen = changeBg.hexi || changeBg.rgb;}
	
  	textColorName.innerHTML = display;

    buttonHex.addEventListener('click', () => {
		screen = 'hex';
	});

	buttonRgb.addEventListener('click', () => {
		screen = 'rgb';
	});
  
	textColorName.addEventListener('click', () => {
		navigator.clipboard.writeText(`${changeBg.hexi} + ${changeBg.rgb}`);
	  });
  }
  


  
  function changeTextColor(color) {
	const r = parseInt(color.substring(0, 2), 16);
	const g = parseInt(color.substring(2, 4), 16);
	const b = parseInt(color.substring(4, 6), 16);

	const brightness = Math.round(((r * 299) + (g * 587) + (b * 114)) / 1000);
  
	const textColor = (brightness > 125) ? '#000' : '#fff';
	
	header.style.color = textColor;
	textColorName.style.color = textColor;
  }

