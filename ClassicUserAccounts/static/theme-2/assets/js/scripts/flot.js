
//Flot Line Chart
$(function(){

    // Graph Data
    var graphData = [{
            // Visits
            data: [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ],
            color: '#71c73e'
        }, {
            // Returning Visits
            data: [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ],
            color: '#77b7c5',
            points: { radius: 4, fillColor: '#77b7c5' }
        }
    ];

    // Lines Graph
    $.plot($('#graph-lines'), graphData, {
        series: {
            points: {
                show: true,
                radius: 5
            },
            lines: {
                show: true
            },
            shadowSize: 0
        },
        grid: {
            color: '#646464',
            borderColor: 'transparent',
            borderWidth: 20,
            hoverable: true
        },
        xaxis: {
            tickColor: 'transparent',
            tickDecimals: 2
        },
        yaxis: {
            tickSize: 1000
        }
    });

    // Bars Graph
    $.plot($('#graph-bars'), graphData, {
        series: {
            bars: {
                show: true,
                barWidth: .9,
                align: 'center'
            },
            shadowSize: 0
        },
        grid: {
            color: '#646464',
            borderColor: 'transparent',
            borderWidth: 20,
            hoverable: true
        },
        xaxis: {
            tickColor: 'transparent',
            tickDecimals: 2
        },
        yaxis: {
            tickSize: 1000
        }
    });

    // Graph Toggle
    $('#graph-bars').hide();

    $('#lines').on('click', function (e) {
        $('#bars').removeClass('active');
        $('#graph-bars').fadeOut();
        $(this).addClass('active');
        $('#graph-lines').fadeIn();
        e.preventDefault();
    });

    $('#bars').on('click', function (e) {
        $('#lines').removeClass('active');
        $('#graph-lines').fadeOut();
        $(this).addClass('active');
        $('#graph-bars').fadeIn().removeClass('hidden');
        e.preventDefault();
    });

    // Tooltip
    function showTooltip(x, y, contents) {
        $('<div id="tooltip">' + contents + '</div>').css({
            top: y - 16,
            left: x + 20
        }).appendTo('body').fadeIn();
    }

    var previousPoint = null;

    $('#graph-lines, #graph-bars').bind('plothover', function (event, pos, item) {
        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;
                $('#tooltip').remove();
                var x = item.datapoint[1]
                    showTooltip(item.pageX, item.pageY, x + ' visitors');
            }
        } else {
            $('#tooltip').remove();
            previousPoint = null;
        }
    });
});

 // Line Chart Color Example
$(function() {
      var d1 = [];
      for (var i = 0; i <= 16; i++) {
        d1.push([i, parseInt((Math.floor(Math.random() * (1 + 20 - 10))) + 10)]);
      }
      var plot = $.plot($("#linechart-color"), [{
              data: d1
          }], 
          {
            series: {
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    color: "#e3e3e3"
                },
                points: {
                    radius: 5,
                    show: true
                },
                shadowSize: 2
            },
            grid: {
                color: "#fff",
                hoverable: true,
                clickable: true,
                tickColor: "#f0f0f0",
                borderWidth: 0
            },
            colors: ["#a6d0e9"],
            xaxis: {
                mode: "categories",
                tickDecimals: 0            
            },
            yaxis: {
                ticks: 5,
                tickDecimals: 0,            
            },
            tooltip: true,
            tooltipOpts: {
              content: "Day %x: %y Views",
              defaultTheme: false,
              shifts: {
                x: 0,
                y: 20
              }
            }
          }
      );
});

 // Live Update Chart Example
$(function() {
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
                label: "Server Process Data",
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

});

//Flot Pie Chart
$(function() {

    var data1 = [{
        label: "Series 0",
        data: 1
    }, {
        label: "Series 1",
        data: 3
    }, {
        label: "Series 2",
        data: 9
    }, {
        label: "Series 3",
        data: 12
    }, {
        label: "Series 4",
        data: 20
    }];

    //Pie Chart
    var plotObj = $.plot($("#flot-pie-chart"), data1, {
        series: {
          pie: {
            combine: {
                  color: "#999",
                  threshold: 0.05
                },
            show: true
          }
        },    
        colors: ["#13c4a5","#3fcf7f","#5191d1","#f4c414","#ff5f5f"],
        legend: {
          show: false
        },
        grid: {
            hoverable: true,
            clickable: false
        },
        tooltip: true,
        tooltipOpts: {
          content: "%s: %p.0%"
        }
    });

});


// Flot Donut Pie Chart 

$(function() {

    var data2 = [{
        label: "Series 0",
        data: 9
    }, {
        label: "Series 1",
        data: 18
    }, {
        label: "Series 2",
        data: 35
    }, {
        label: "Series 3",
        data: 58
    }, {
        label: "Series 4",
        data: 80
    }];

    var plotObj = $.plot($("#flot-pie-donut-chart"), data2, {
        series: {
          pie: {
            innerRadius: 0.5,
            show: true
          }
        },
        colors: ["#d87a80","#2ec7c9","#b6a2de","#5ab1ef","#ffb980"],
        grid: {
            hoverable: true,
            clickable: false
        },
        tooltip: true,
        tooltipOpts: {
          content: "%s: %p.0%"
        }
    });

});
