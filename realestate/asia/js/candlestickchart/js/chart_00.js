$(document).ready(function() {
        Morris.Bar({
          element: 'graph_bar',
          data: [
            {device: 'income 4', geekbench: 380},
            {device: 'income 4S', geekbench: 655},
            {device: 'income 3GS', geekbench: 275},
            {device: 'income 5', geekbench: 1571},
            {device: 'income 5S', geekbench: 655},
            {device: 'income 6', geekbench: 2154},
            {device: 'income 6 Plus', geekbench: 1144},
            {device: 'income 6S', geekbench: 2371},
            {device: 'income 6S Plus', geekbench: 1471},
            {device: 'Other', geekbench: 1371}
          ],
          xkey: 'device',
          ykeys: ['geekbench'],
          labels: ['Geekbench'],
          barRatio: 0.4,
          barColors: ['#3cabff', '#00425f', '#ec4747', '#46dac0'],
          xLabelAngle: 35,
          hideHover: 'auto',
          resize: true
        });

        Morris.Bar({
          element: 'graph_bar_group',
          data: [
            {"period": "2016-10-01", "licensed": 807, "sorned": 660},
            {"period": "2016-09-30", "licensed": 1251, "sorned": 729},
            {"period": "2016-09-29", "licensed": 1769, "sorned": 1018},
            {"period": "2016-09-20", "licensed": 2246, "sorned": 1461},
            {"period": "2016-09-19", "licensed": 2657, "sorned": 1967},
            {"period": "2016-09-18", "licensed": 3148, "sorned": 2627},
            {"period": "2016-09-17", "licensed": 3471, "sorned": 3740},
            {"period": "2016-09-16", "licensed": 2871, "sorned": 2216},
            {"period": "2016-09-15", "licensed": 2401, "sorned": 1656},
            {"period": "2016-09-10", "licensed": 2115, "sorned": 1022}
          ],
          xkey: 'period',
          barColors: ['#3cabff', '#00425f', '#ec4747', '#46dac0'],
          ykeys: ['licensed', 'sorned'],
          labels: ['Licensed', 'SORN'],
          hideHover: 'auto',
          xLabelAngle: 60,
          resize: true
        });

        Morris.Bar({
          element: 'graphx',
          data: [
            {x: '2014 Q1', y: 2, z: 3, a: 4, b: 1},
            {x: '2014 Q2', y: 3, z: 5, a: 6, b: 2},
            {x: '2014 Q3', y: 4, z: 3, a: 2, b: 3},
            {x: '2014 Q4', y: 2, z: 4, a: 5, b: 4},
			{x: '2015 Q1', y: 2, z: 3, a: 4, b: 3},
            {x: '2015 Q2', y: 3, z: 5, a: 6, b: 4},
            {x: '2015 Q3', y: 4, z: 3, a: 2, b: 3},
            {x: '2015 Q4', y: 2, z: 4, a: 5, b: 2},
            {x: '2016 Q1', y: 4, z: 3, a: 2, b: 3},
            {x: '2016 Q2', y: 2, z: 4, a: 5, b: 1}
          ],
          xkey: 'x',
          ykeys: ['y', 'z', 'a', 'b'],
          barColors: ['#3cabff', '#00425f', '#ec4747', '#46dac0'],
          hideHover: 'auto',
          labels: ['營業收入', '營業成本', '營業利益', '稅前淨利'],
          resize: true
        }).on('click', function (i, row) {
            console.log(i, row);
        });

        Morris.Area({
          element: 'graph_area',
          data: [
            {period: '2014 Q1', income: 2666, cost: null, benefit: 2647, taxYield: 1111},
            {period: '2014 Q2', income: 2778, cost: 2294, benefit: 2441, taxYield: 2222},
            {period: '2014 Q3', income: 4912, cost: 1969, benefit: 2501, taxYield: 3333},
            {period: '2014 Q4', income: 3767, cost: 3597, benefit: 5689, taxYield: 4444},
            {period: '2015 Q1', income: 6810, cost: 1914, benefit: 2293, taxYield: 3333},
            {period: '2015 Q2', income: 5670, cost: 4293, benefit: 1881, taxYield: 4444},
            {period: '2015 Q3', income: 4820, cost: 3795, benefit: 1588, taxYield: 3333},
            {period: '2015 Q4', income: 15073, cost: 5967, benefit: 5175, taxYield: 2222},
            {period: '2016 Q1', income: 10687, cost: 4460, benefit: 2028, taxYield: 3333},
            {period: '2016 Q2', income: 8432, cost: 5713, benefit: 1791, taxYield: 1111}
          ],
          xkey: 'period',
          ykeys: ['income', 'cost', 'benefit', 'taxYield'],
          lineColors: ['#3cabff', '#', '#ec4747', '#46dac0'],
          labels: ['income', 'cost', 'benefit', 'taxYield'],
          pointSize: 2,
          hideHover: 'auto',
          resize: true
        });

        Morris.Donut({
          element: 'graph_donut',
          data: [
            {label: 'Jam', value: 25},
            {label: 'Frosted', value: 40},
            {label: 'Custard', value: 25},
            {label: 'Sugar', value: 10}
          ],
          colors: ['#3cabff', '#00425f', '#ec4747', '#46dac0'],
          formatter: function (y) {
            return y + "%";
          },
          resize: true
        });

        Morris.Line({
          element: 'graph_line',
          xkey: 'year',
          ykeys: ['value'],
          labels: ['Value'],
          hideHover: 'auto',
          lineColors: ['#3cabff', '#00425f', '#ec4747', '#46dac0'],
          data: [
            {year: '2012', value: 20},
            {year: '2013', value: 10},
            {year: '2014', value: 5},
            {year: '2015', value: 5},
            {year: '2016', value: 20}
          ],
          resize: true
        });

        $MENU_TOGGLE.on('click', function() {
          $(window).resize();
        });
      });