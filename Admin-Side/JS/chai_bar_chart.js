var data = [
    { y: 'Jan', a: 1400, b: 750},
    { y: 'Feb', a: 700,  b: 590},
    { y: 'Mar', a: 1000,  b: 220},
    { y: 'Apr', a: 1200,  b: 1100},
    { y: 'May', a: 400,  b: 230},
    { y: 'Jun', a: 1200,  b: 615},
    { y: 'Jul', a: 900, b: 180},
    { y: 'Aug', a: 750, b: 200},
    { y: 'Sep', a: 1100, b: 10},
    { y: 'Oct', a: 800, b: 200},
    { y: 'Nov', a: 900, b: 420},
    { y: 'Dec', a: 700, b: 10}
  ],
  config = {
      data: data,
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Bookings', 'Cancellations'],
      barColors: ['#76a8f0', '#f0b7aa'],
      grid: false,
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['gray','red']
  };

  config.element = 'bar-chart';
  Morris.Bar(config);

  document.getElementById('chai-chart').src = document.getElementById('bar-chart').innerHTML;

//   let rects = document.getElementsByTagName('rect');
//   for(let i = 0; i < rects.length; i++){
//       console.log(rects[i]);
//       document.getElementsByTagName(rects[i]).setAttribute("width", "15");
//   }
  // rects.forEach(element => {
  //     document.querySelector(element).setAttribute("width", "15");
  // });
  // document.querySelector('rect').setAttribute("width", "15");
  //rect