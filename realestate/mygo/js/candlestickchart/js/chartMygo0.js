var theme = {
          color: [
              '#3cabff', '#00425f', '#b32426', '#46dac0',
              '#b32426', '#aaa', '#b5b5ed', '#ec4747'
          ],

          title: {
              itemGap: 8,
              textStyle: {
                  fontWeight: 'normal',
                  color: '#222'
              }
          },

          dataRange: {
              color: ['#1f610a', '#97b58d']
          },

          toolbox: {
              color: ['#222', '#222', '#222', '#222']
          },

          tooltip: {
              backgroundColor: 'rgba(0,0,0,0.5)',
              axisPointer: {
                  type: 'line',
                  lineStyle: {
                      color: '#00425f',
                      type: 'dashed'
                  },
                  crossStyle: {
                      color: '#eee'
                  },
                  shadowStyle: {
                      color: 'rgba(200,200,200,0.3)'
                  }
              }
          },

          dataZoom: {
              dataBackgroundColor: '#eee',
              fillerColor: 'rgba(64,136,41,0.2)',
              handleColor: '#222'
          },
          grid: {
              borderWidth: 0
          },

          categoryAxis: {
              axisLine: {
                  lineStyle: {
                      color: '#222'
                  }
              },
              splitLine: {
                  lineStyle: {
                      color: ['#fff']
                  }
              }
          },

          timeline: {
              lineStyle: {
                  color: '#222'
              },
              controlStyle: {
                  normal: {color: '#222'},
                  emphasis: {color: '#222'}
              }
          },

          k: {
              itemStyle: {
                  normal: {
                      color: '#68a54a',
                      color0: '#a9cba2',
                      lineStyle: {
                          width: 1,
                          color: '#222',
                          color0: '#86b379'
                      }
                  }
              }
          },
          map: {
              itemStyle: {
                  normal: {
                      areaStyle: {
                          color: '#fff'
                      },
                      label: {
                          textStyle: {
                              color: '#c12e34'
                          }
                      }
                  },
                  emphasis: {
                      areaStyle: {
                          color: '#99d2dd'
                      },
                      label: {
                          textStyle: {
                              color: '#c12e34'
                          }
                      }
                  }
              }
          },
          force: {
              itemStyle: {
                  normal: {
                      linkStyle: {
                          strokeColor: '#222'
                      }
                  }
              }
          },
          chord: {
              padding: 4,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          width: 1,
                          color: 'rgba(255, 255, 255, 0.5)'
                      },
                      chordStyle: {
                          lineStyle: {
                              width: 1,
                              color: 'rgba(255, 255, 255, 0.5)'
                          }
                      }
                  },
                  emphasis: {
                      lineStyle: {
                          width: 1,
                          color: 'rgba(128, 128, 128, 0.5)'
                      },
                      chordStyle: {
                          lineStyle: {
                              width: 1,
                              color: 'rgba(128, 128, 128, 0.5)'
                          }
                      }
                  }
              }
          },
          gauge: {
              startAngle: 225,
              endAngle: -45,
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#222']],
                      width: 8
                  }
              },
              axisTick: {
                  splitNumber: 10,
                  length: 12,
                  lineStyle: {
                      color: 'auto'
                  }
              },
              axisLabel: {
                  textStyle: {
                      color: 'auto'
                  }
              },
              splitLine: {
                  length: 18,
                  lineStyle: {
                      color: 'auto'
                  }
              },
              pointer: {
                  length: '90%',
                  color: 'auto'
              },
              title: {
                  textStyle: {
                      color: '#333'
                  }
              },
              detail: {
                  textStyle: {
                      color: 'auto'
                  }
              }
          },
          textStyle: {
              fontFamily: 'Calibre,sans-serif, sans-serif'
          }
      };

      var echartBarLine = echarts.init(document.getElementById('maina'), theme);

      echartBarLine.setOption({
        title: {
          x: 'center',
          y: 'top',
          padding: [0, 0, 20, 0],
          text: '別墅價格指數',
          textStyle: {
            fontSize: 14,
            fontWeight: 'normal'
          }
        },
        calculable: true,
        legend: {
          data: ['月營收', '月增率%', '價格(月底)'],
          y: 'bottom',
		  y: '358',
        },
        xAxis: [{
          type: 'category',
          data: ['202003', '202004', '202005', '202006', '202007', '202008', '202009', '202010', '202011', '202012', '202101', '202102']
        }],
        yAxis: [{
          type: 'value',
          name: '泰銖',
          axisLabel: {
            formatter: '{value}'
          }
        }, {
          type: '',
          name: '',
          axisLabel: {
            formatter: ''
          }
        }],
        series: [{
          name: '',
          type: 'line',
          data: [, , , , , , , , , , , ]
        }, {
          name: '',
          type: 'line',
          yAxisIndex: 1,
          data: [, , , , , , , , , , , ]

        }, {
          name: '',
          type: 'line',
          yAxisIndex: 1,
          data: [20.0, 22.2, 33.3, 44.5, 56.3, 67.2, 78.3, 89.4, 100.0, 112.5, 120.0, 130.2]

        }]
      });