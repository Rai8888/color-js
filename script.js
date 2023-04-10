const COLORS = [
        { hexi: '#4d004d', rgb: '77, 0, 77',},
        { hexi: '#4BFF33', rgb: '75, 255, 51',},
        { hexi: '#183CC9', rgb: '24, 60, 201',},
        { hexi: '#07A92A', rgb: '7, 169, 42',},
        { hexi: '#07A1A9', rgb: '7, 161, 169',},
    ];

function myFunc() {    
 const changeBg = COLORS[Math.floor(Math.random() * COLORS.length)];      
  document.getElementById('body').style.backgroundColor = changeBg.hexi;

  setRandomColor(changeBg.hexi);   
  

}


