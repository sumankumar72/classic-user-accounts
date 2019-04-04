$(document).ready(function() {

    //Area Chart Example
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

   //Area Chart 2 Example
    Morris.Area({
        element: 'morris-area-chart2',
        data: [{
            period: '2010',
            SiteA: 750,
            SiteB: 700,
            
        }, {
            period: '2011',
            SiteA: 1500,
            SiteB: 1200,
            
        }, {
            period: '2012',
            SiteA: 750,
            SiteB: 700,
            
        }, {
            period: '2013',
            SiteA: 1700,
            SiteB: 1200,
            
        }, {
            period: '2014',
            SiteA: 800,
            SiteB: 500,
            
        }, {
            period: '2015',
            SiteA: 1500,
            SiteB: 1000,
            
        },
         {
            period: '2016',
            SiteA: 2350,
            SiteB: 1500,
           
        }],
        xkey: 'period',
        ykeys: ['SiteA', 'SiteB'],
        labels: ['Site A', 'Site B'],
        pointSize: 0,
        fillOpacity: 0.5,
        pointStrokeColors:['#b4becb', '#01c0c8'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#f44336', '#01c0c8'],
        resize: true
        
    });

    //Area Chart 3 Example
    Morris.Area({
        element: 'morris-area-chart3',
        data: [{
            y: '2010',
            a: 1000,
            b: 900
        }, {
            y: '2011',
            a: 750,
            b: 650
        }, {
            y: '2012',
            a: 500,
            b: 400
        }, {
            y: '2013',
            a: 750,
            b: 650
        }, {
            y: '2014',
            a: 500,
            b: 400
        }, {
            y: '2015',
            a: 750,
            b: 650
        }, {
            y: '2016',
            a: 1000,
            b: 900
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#0090d9', '#ff5f5f'],
        lineWidth: '0',
        grid: 'false',
        fillOpacity: '0.5'
    });

    //Donut Chart Example
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        colors:['#60bfb6','#91cdec','#99d683'],
        resize: true
    });

    //Bar Chart Example
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2010',
            a: 100,
            b: 90
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 50,
            b: 40
        }, {
            y: '2013',
            a: 75,
            b: 65
        }, {
            y: '2014',
            a: 50,
            b: 40
        }, {
            y: '2015',
            a: 75,
            b: 65
        }, {
            y: '2016',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        barColors:['#2196f3','#ff9800'],
        resize: true
    });
    
    //Line Chart Example
    Morris.Line({
      element: 'morris-line-chart',
      data: [
        { y: '2010', a: 100, b: 90 },
        { y: '2011', a: 75,  b: 65 },
        { y: '2012', a: 50,  b: 40 },
        { y: '2013', a: 75,  b: 65 },
        { y: '2014', a: 50,  b: 40 },
        { y: '2015', a: 75,  b: 65 },
        { y: '2016', a: 100, b: 90 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
      lineColors:['#7266ba','#23b7e5']
    });
});
