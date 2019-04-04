$(document).ready(function() {
        // Begin Canvas Bar Chart
        var cb = document.getElementById("bar-chart");
        var barchart = new Chart(cb, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: 'Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        }); 
        //End Canvas Bar Chart

        //Begin Canvas Line Chart
        var lc = document.getElementById("line-chart");
        var LineChart = new Chart(lc, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
        //End Canvas Line Chart


        //Begin Canvas Radar Chart
        var rc = document.getElementById("radar-chart");
        var RadarChart = new Chart(rc, {
            type: 'radar',
            data: {
                labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                datasets: [
                    {
                        label: "My First dataset",
                        backgroundColor: "rgba(179,181,198,0.2)",
                        borderColor: "rgba(179,181,198,1)",
                        pointBackgroundColor: "rgba(179,181,198,1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(179,181,198,1)",
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        backgroundColor: "rgba(255,99,132,0.2)",
                        borderColor: "rgba(255,99,132,1)",
                        pointBackgroundColor: "rgba(255,99,132,1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(255,99,132,1)",
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            },
        });
        //End Canvas Radar Chart

        //Begin Canvas Polar Area Chart
        var pac = document.getElementById("polar-area-chart");
        var PolarAreaChart = new Chart(pac, {
            type: 'polarArea',
            data: {
                datasets: [{
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"],
                    label: 'My dataset'
                }],
                labels: ["Red", "Green", "Yellow", "Grey", "Blue"]
            },
        });
        //End Canvas Polar Area Chart


        //Begin Canvas Pie Chart
        var pc = document.getElementById("pie-chart");
        var PieChart = new Chart(pc, {
            type: 'pie',
            data: {
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                    hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
                }]
            },
        });
        //End Canvas Pie Chart

        //Begin Canvas Polar Area Chart
        var dc = document.getElementById("doughnut-chart");
        var DoughnutChart = new Chart(dc, {
            type: 'doughnut',
            data: {
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                    hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
                }]
            },
        });
        //End Canvas Polar Area Chart

        //Begin Canvas Bubble Chart
        var bc = document.getElementById("bubble-chart");
        var BubbleChart = new Chart(bc, {
            type: 'bubble',
            data: {
            datasets: [
                {
                    label: 'First Dataset',
                    data: [
                        {x: 20, y: 30, r: 15},
                        {x: 40, y: 10, r: 10}
                    ],
                    backgroundColor:"#FF6384",
                    hoverBackgroundColor: "#FF6384",
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
        //End Canvas Bubble Chart

}); //End Jquery

