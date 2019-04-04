$('document').ready(function(){

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

	//USA
	$('#usa').vectorMap({
	    map : 'us_mill',
	    backgroundColor : 'transparent',
	    regionStyle : {
	        initial : {
	            fill : '#99d683'
	        }
	    }
	});

	//UK
     $('#uk').vectorMap({
        map : 'uk_regions_mill',
        backgroundColor : 'transparent',
        regionStyle : {
            initial : {
                fill : '#6164c1'
            }
        }
    });

	//New York
     $('#new-york').vectorMap({
        map : 'us-ny-newyork_mill',
        backgroundColor : 'transparent',
        regionStyle : {
            initial : {
                fill : '#f08175'
            }
        }
    });

	//Russia
     $('#russia').vectorMap({
        map : 'ru_fd_merc',
        backgroundColor : 'transparent',
        regionStyle : {
            initial : {
                fill : '#9c27b0'
            }
        }
    });

	//France
     $('#france').vectorMap({
        map : 'fr_regions_2016_mill',
        backgroundColor : 'transparent',
        regionStyle : {
            initial : {
                fill : '#ffce56'
            }
        }
    });

	//Germany
     $('#germany').vectorMap({
        map : 'de_mill',
        backgroundColor : 'transparent',
        regionStyle : {
            initial : {
                fill : '#009688'
            }
        }
    });

	//Google Maps Basic
    var map;
    map = new GMaps({
    el: '#gmaps',
    lat: -12.043333,
    lng: -77.028333,
    zoomControl : true,
    zoomControlOpt: {
        style : 'SMALL',
        position: 'TOP_LEFT'
    },
    panControl : false,
    streetViewControl : false,
    mapTypeControl: false,
    overviewMapControl: false
  });

    //Google Maps Basic
    prettyPrint();
    map = new GMaps({
        div: '#gmaps',
        lat: -12.043333,
        lng: -77.028333
    });
});