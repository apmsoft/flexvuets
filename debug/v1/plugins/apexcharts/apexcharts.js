import ApexCharts from "../../../../${debugPath}/plugins/apexcharts/dist/apexcharts.esm.js";
var options = {
  chart: {
    height: 350,
    type: "line",
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#FF1654", "#247BA0"],
  series: [
  {
    name: "Series A",
    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
  },
  {
    name: "Series B",
    data: [20, 29, 37, 36, 44, 45, 50, 58]
  }],

  stroke: {
    width: [4, 4]
  },
  plotOptions: {
    bar: {
      columnWidth: "20%"
    }
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
  },
  yaxis: [
  {
    axisTicks: {
      show: true
    },
    axisBorder: {
      show: true,
      color: "#FF1654"
    },
    labels: {
      style: {
        colors: "#FF1654"
      }
    },
    title: {
      text: "Series A",
      style: {
        color: "#FF1654"
      }
    }
  },
  {
    opposite: true,
    axisTicks: {
      show: true
    },
    axisBorder: {
      show: true,
      color: "#247BA0"
    },
    labels: {
      style: {
        colors: "#247BA0"
      }
    },
    title: {
      text: "Series B",
      style: {
        color: "#247BA0"
      }
    }
  }],

  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false
    }
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 40
  }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
var options2 = {
  series: [
  {
    name: "High - 2013",
    data: [28, 29, 33, 36, 32, 32, 33]
  },
  {
    name: "Low - 2013",
    data: [12, 11, 14, 18, 17, 13, 13]
  }],

  chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Average High & Low Temperature',
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Temperature'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
};
var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();