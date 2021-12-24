var chart = AmCharts.makeChart( "chartdiv", {
  "type": "serial",
  "addClassNames": true,
  "theme": "light",
  "autoMargins": false,
  "marginLeft": 30,
  "marginRight": 8,
  "marginTop": 10,
  "marginBottom": 26,
  "balloon": {
    "adjustBorderColor": false,
    "horizontalPadding": 10,
    "verticalPadding": 8,
    "color": "#ffffff"
  },

  "dataProvider": [ {
    "year": 201601,
    "income": 26.2,
    "expenses": 5.5,
    "expenses2": 70.5
  }, {
	  "year": 201602,
    "income": 23.5,
    "expenses": 21.1,
	"expenses2": 71.1
  }, {
    "year": 201603,
    "income": 26.2,
    "expenses": 30.5,
    "expenses2": 50.5
  }, {
    "year": 201604,
    "income": 30.1,
    "expenses": 34.9,
    "expenses2": 88.9
  }, {
	  "year": 201605,
    "income": 23.5,
    "expenses": 21.1,
	"expenses2": 81.1
  }, {
    "year": 201606,
    "income": 26.2,
    "expenses": 30.5,
    "expenses2": 60.5
  }, {
	  "year": 201607,
    "income": 23.5,
    "expenses": 21.1,
	"expenses2": 51.1
  }, {
    "year": 201608,
    "income": 26.2,
    "expenses": 30.5,
    "expenses2": 80.5
  }, {
    "year": 201609,
    "income": 30.1,
    "expenses": 34.9,
    "expenses2": 72.9
  }, {
    "year": 201610,
    "income": 29.5,
    "expenses": 31.1,
    "expenses2": 60.1
  }, {
    "year": 201611,
    "income": 30.6,
    "expenses": 28.2,
    "expenses2": 90.2,
  }, {
    "year": 201612,
    "income": 34.1,
    "expenses": 32.9,
    "expenses2": 51.9,
    "alpha": 1,
    "additional": "(projection)"
  } ],
  "valueAxes": [ {
    "axisAlpha": 0,
    "position": "left"
  } ],
  "startDuration": 1,
  "graphs": [ {
    "alphaField": "alpha",
    "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
    "fillAlphas": 1,
    "title": "月營收",
    "type": "column",
    "valueField": "income",
    "dashLengthField": "dashLengthColumn"
  }, {
    "id": "graph2",
    "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "月增率%",
    "valueField": "expenses",
    "dashLengthField": "dashLengthLine"
  }, {
    "id": "graph3",
    "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "股價月底",
    "valueField": "expenses2",
    "dashLengthField": "dashLengthLine"
  } ],
  "categoryField": "year",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "tickLength": 0
  },
  //圖文下方解說
  "legend": {
    "bulletType": "round",
    "equalWidths": false,
    "valueWidth": 120,
    "useGraphSettings": true,
    //"color": "#FFFFFF"
	//圖文下方解說END
  },
  "export": {
    "enabled": true
  }
} );
