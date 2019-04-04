$('document').ready(function(){

	//Morris Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2014 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2014 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2014 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2014 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2015 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2015 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2015 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2015 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2016 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2016 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        lineColors:['#7266ba','#23b7e5', '#fad733'],
        lineWidth:'0',
        grid:'false',
        fillOpacity:'0.8',
        resize: true
    });

    //Flot Charts Live Update
      var data = [],
      totalPoints = 300;

      function getRandomData() {

        if (data.length > 0)
          data = data.slice(1);
        // Ramdom
        while (data.length < totalPoints) {

          var prev = data.length > 0 ? data[data.length - 1] : 50,
            y = prev + Math.random() * 10 - 5;

          if (y < 0) {
            y = 0;
          } else if (y > 100) {
            y = 100;
          }

          data.push(y);
        }
        var res = [];
        for (var i = 0; i < data.length; ++i) {
          res.push([i, data[i]])
        }

        return res;
      }
      var updateInterval = 30;
      var plot = $.plot("#live-chart", [ getRandomData() ], {
          series: {
                lines: {
                    show: 1,
                    lineWidth: .2,
                    fill: .6
                },
                color: "#fbc5c5",
                shadowSize: 0
            },
            yaxis: {
                min: 0,
                max: 100,
                tickColor: "#eee",
                font: {
                    lineHeight: 13,
                    style: "normal",
                    color: "#9f9f9f"
                },
                shadowSize: 0
            },
            xaxis: {
                tickColor: "#eee",
                show: 1,
                font: {
                    lineHeight: 13,
                    style: "normal",
                    color: "#9f9f9f"
                },
                shadowSize: 0,
                min: 0,
                max: 250
            },
            tooltip: true,
            tooltipOpts: {
              content: "Server Process Data %x.2 = %y.2",
              defaultTheme: false,
              shifts: {
                x: 0,
                y: 20
              }
            },
            grid: {
                borderWidth: 1,
                borderColor: "#eee",
                labelMargin: 10,
                hoverable: 1,
                clickable: 1,
                mouseActiveRadius: 6
            },
            legend: {
                backgroundOpacity: .5,
                noColumns: 0,
                backgroundColor: "white",
                lineWidth: 0
            },
      });

      function update() {
        plot.setData([getRandomData()]);
        plot.draw();
        setTimeout(update, updateInterval);
      }
      update();

	//World Map
	$('#world-map').vectorMap(
	{
	    map: 'world_mill',
	    backgroundColor: '#fff',
	    borderColor: '#818181',
	    borderOpacity: 0.25,
	    borderWidth: 1,
	    color: '#f4f3f0',
	    regionStyle : {
	        initial : {
	          fill : '#60d1df'
	        }
	      },
	    markerStyle: {
	     initial: {
            r: 9,
            'fill': '#fff',
            'fill-opacity':1,
            'stroke': '#000',
            'stroke-width' : 5,
            'stroke-opacity': 0.4
	        },
	    },
	    enableZoom: true,
	    hoverColor: '#c9dfaf',
	    markers: [
	      {latLng: [41.90, 12.45], name: 'Vatican City'},
	      {latLng: [43.73, 7.41], name: 'Monaco'},
	      {latLng: [21.00, 78.00], name: 'India'},
	      {latLng: [7.11, 171.06], name: 'Marshall Islands'},
	      {latLng: [20, 105], name: 'Vietnam'},
	      {latLng: [3.2, 73.22], name: 'Maldives'},
	      {latLng: [35.88, 14.5], name: 'Malta'}
	    ],
	    hoverOpacity: null,
	    normalizeFunction: 'linear',
	    scaleColors: ['#b6d6ff', '#005ace'],
	    selectedColor: '#c9dfaf',
	    selectedRegions: [],
	    showTooltip: true,
	    onRegionTipShow: function(e, el, code){
            el.html(el.html()+' (GDP - '+gdpData[code]+')');
         }
	});


	//Calendar
	$('#db-calendar').fullCalendar({
		header: {
			left: '',
			center: 'prev, title, next',
			right: ''
		},
		defaultDate: '2016-06-12',
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		events: [
					{
						title: 'All Day',
						start: '2016-06-01',
						color: '#5CB71A'
					},
					{
						title: 'Concert',
						start: '2016-06-07'
					},
					{
						title: 'Party',
						start: '2016-06-12',
						color: '#F44336'
					},
					{
						title: 'Cinema',
						start: '2016-06-15',
						color: '#CDDC39'
					},
					{
						title: 'Birthday',
						start: '2016-06-24',
						color: '#009688'
					},
					{
						title: 'Google',
						url: 'http://google.com/',
						start: '2016-06-28',
						color: '#FF9800'
					}
		]
	});

    //Galery
    $("#lightgallery").lightGallery(); 
    $('#lightgallery').justifiedGallery({ rowHeight: 90});
    $('#video-gallery').lightGallery(); 

});