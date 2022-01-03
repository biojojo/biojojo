<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link href="favicon.ico" rel="Shortcut Icon" type="image/x-icon" />
    <title>盤後資料 - 資增個股排行 - 0055元大MSCI金融</title>

    <!-- Bootstrap -->
    <link href="js/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="js/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- twse -->
    <link href="js/twse/css/twse.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="js/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="js/iCheck/skins/flat/green.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="build/css/custom.min.css" rel="stylesheet">
    <link href="css/style_add.css" rel="stylesheet">
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
                <h1 class="logo"></h1>
            </div>
            <div class="clearfix"></div>
              <?php require_once("./menu.php"); ?>
          </div>
        </div>
        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav>
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>
              <h1>盤後資料 - 0055<br class="rwd_1"> 元大MSCI金融</h1>
              <ul class="nav navbar-nav navbar-right">
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    瀏覽紀錄
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="javascript:;">上一頁 1234 黑松</a></li>
                    <li><a href="javascript:;">上一頁 2330 台積電</a></li>
                    <li><a href="javascript:;">下一頁 1301 台塑</a>
                    </li>
                  </ul>
                </li>
                <li role="presentation" class="dropdown" style="display:none;">
                  <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-bell"></i>
                    <span class="badge bg-green">6</span>
                  </a>
                  <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                    <li>
                      <a class="red">
                        <span class="image"><i class="fa fa-arrow-up"></i></span>
                        <span>
                          <span>上漲快報</span>
                          <span class="time">3 分鐘前</span>
                        </span>
                        <span class="message">拉回1再上1爆量4</span>
                      </a>
                    </li>
                    <li>
                      <a class="green">
                        <span class="image"><i class="fa fa-arrow-down"></i></span>
                        <span>
                          <span>下跌快報</span>
                          <span class="time">3 分鐘前</span>
                        </span>
                        <span class="message">頂1跌破1爆量1</span>
                      </a>
                    </li>
                    <li>
                      <a class="red">
                        <span class="image"><i class="fa fa-arrow-up"></i></span>
                        <span>
                          <span>上漲快報</span>
                          <span class="time">3 分鐘前</span>
                        </span>
                        <span class="message">拉回1再上1爆量4</span>
                      </a>
                    </li>
                    <li>
                      <a class="green">
                        <span class="image"><i class="fa fa-arrow-down"></i></span>
                        <span>
                          <span>下跌快報</span>
                          <span class="time">3 分鐘前</span>
                        </span>
                        <span class="message">頂1跌破1爆量1</span>
                      </a>
                    </li>
                    <li>
                      <div class="text-center">
                        <a>
                          <strong>詳細</strong>
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="twse00 twse">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                    <div class="page-title">
                      <div class="title_left">
                        <h3>資增個股排行<div class="clearfix"></div><cite class="downer-Numbers">(單位：張)</cite></h3>
                      </div>
                      <div class="title_right">
                        <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="股票代號">
                            <span class="input-group-btn">
                              <button class="btn btn-default" type="button">搜尋</button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="x_content">
                        <div class="well">
                          <form class="form-horizontal">
                            <div class="row">
                            	<div class="col-sm-4 col-xs-6">
                                	<div class="pull-left"><h4>市場別：</h4></div>
                                        <select class="select2_single form-control select2-hidden-accessible">
                                            <option>集中市場</option>
                                            <option>店頭市場</option>
                                        </select>
                                </div>
                                <div class="col-sm-4 col-xs-6">
                                	<div class="pull-left"><h4>排名：</h4></div>
                                        <select class="select2_single form-control select2-hidden-accessible">
                                            <option>前30</option>
                                            <option>前50</option>
                                        </select>
                                </div>
                                <div class="col-sm-4 col-xs-12 marTop_20">
                                	<div class="pull-left"><h4>過濾條件：</h4></div>
                                        <select class="select2_single form-control select2-hidden-accessible">
                                            <option>全部</option>
                                            <option>上漲(含平盤)</option>
                                            <option>下跌 之股票</option>
                                        </select>
                                </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    <div class="clearfix"></div>
                    <!-- 線圖 Start -->
                    <div class="row">
            		  <div class="col-xs-12">
                      		<div id="mainb" style="height:400px;"></div>
                      </div>
                  </div><!-- 線圖 END -->
                  <div class="x_content">
                  	<h3>融資增加排行 - <strong>集中市場 / 前30 / 全部</strong> 日期：2017/3/28 </h3>
                    <div class="table-responsive">
                      <table class="table StackTable" id="function_25">
                        <thead>
                          <tr>
                            <th>名次</th>
                            <th>代碼</th>
                            <th>股票名稱</th>
                            <th>融資增加</th>
                            <th>融資餘額</th>
                            <th>融券增加</th>
                            <th>融券餘額</th>
                            <th>資券相抵</th>
                            <th>收盤價</th>
                            <th>漲跌</th>
                            <th>漲跌比例</th>
                            <th>成交量</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="idCode">1</td>
                            <td class="idCode">1437</td>
                            <td class="idCode">友達</td>
                            <td class="nums">4,609</td>
                            <td class="nums">280,784</td>
                            <td class="nums">-977</td>
                            <td class="nums">3463</td>
                            <td class="nums">5,586</td>
                            <td class="nums red">12.5</td>
                            <td class="nums red">▲0.1</td>
                            <td class="nums red">0.80%</td>
                            <td class="nums">53,004</td>
                          </tr>
                          <tr>
                            <td class="idCode">2</td>
                            <td class="idCode">2302</td>
                            <td class="idCode">元大S&amp;P原油正2</td>
                            <td class="nums">2,597</td>
                            <td class="nums">29,928</td>
                            <td class="nums">-647</td>
                            <td class="nums">5,718</td>
                            <td class="nums">3,244</td>
                            <td class="nums red">16.34</td>
                            <td class="nums green">▼0.17</td>
                            <td class="nums green">-1.04%</td>
                            <td class="nums">5,955</td>
                          </tr>
                          <tr>
                            <td class="idCode">3</td>
                            <td class="idCode">2303</td>
                            <td class="idCode">群創</td>
                            <td class="nums">1,805</td>
                            <td class="nums">346,434</td>
                            <td class="nums">3,807</td>
                            <td class="nums">3,807</td>
                            <td class="nums">-2002</td>
                            <td class="nums red">14.05</td>
                            <td class="nums green">▼0.05</td>
                            <td class="nums green">-0.36%</td>
                            <td class="nums">81,007</td>
                          </tr>
                          <tr>
                            <td class="idCode">4</td>
                            <td class="idCode">2311</td>
                            <td class="idCode">漢平</td>
                            <td class="nums">1,230</td>
                            <td class="nums">7,692</td>
                            <td class="nums">206</td>
                            <td class="nums">206</td>
                            <td class="nums">1,024</td>
                            <td class="nums red">49.55</td>
                            <td class="nums red">▲1.75</td>
                            <td class="nums red">3.53%</td>
                            <td class="nums">7,536</td>
                          </tr>
                          <tr>
                            <td class="idCode">5</td>
                            <td class="idCode">2325</td>
                            <td class="idCode">金寶</td>
                            <td class="nums">1,149</td>
                            <td class="nums">33,540</td>
                            <td class="nums">0</td>
                            <td class="nums">0</td>
                            <td class="nums">1,149</td>
                            <td class="nums red">11.4</td>
                            <td class="nums green">▼0.05</td>
                            <td class="nums green">-0.44%</td>
                            <td class="nums">1,282</td>
                          </tr>
                          <tr>
                            <td class="idCode">6</td>
                            <td class="idCode">2329</td>
                            <td class="idCode">恩德</td>
                            <td class="nums">1,052</td>
                            <td class="nums">5,228</td>
                            <td class="nums">5</td>
                            <td class="nums">5</td>
                            <td class="nums">1,047</td>
                            <td class="nums red">11.1</td>
                            <td class="nums green">▼0.15</td>
                            <td class="nums green">-1.35%</td>
                            <td class="nums">2,606</td>
                          </tr>
                          <tr>
                            <td class="idCode">7</td>
                            <td class="idCode">2303</td>
                            <td class="idCode">帆宣</td>
                            <td class="nums">1,012</td>
                            <td class="nums">11,361</td>
                            <td class="nums">238</td>
                            <td class="nums">1,666</td>
                            <td class="nums">774</td>
                            <td class="nums red">37.75</td>
                            <td class="nums red">▲1.8</td>
                            <td class="nums red">4.77%</td>
                            <td class="nums">8,096</td>
                          </tr>
                          <tr>
                            <td class="idCode">8</td>
                            <td class="idCode">2311</td>
                            <td class="idCode">希華</td>
                            <td class="nums">972</td>
                            <td class="nums">12,980</td>
                            <td class="nums">8</td>
                            <td class="nums">26</td>
                            <td class="nums">964</td>
                            <td class="nums red">20.45</td>
                            <td class="nums red">▲0.2</td>
                            <td class="nums red">0.98%</td>
                            <td class="nums">1,051</td>
                          </tr>
                          <tr>
                            <td class="idCode">9</td>
                            <td class="idCode">2325</td>
                            <td class="idCode">景碩</td>
                            <td class="nums">957</td>
                            <td class="nums">11,877</td>
                            <td class="nums">456</td>
                            <td class="nums">1,165</td>
                            <td class="nums">501</td>
                            <td class="nums red">73.6</td>
                            <td class="nums red">▲0.6</td>
                            <td class="nums red">0.82%</td>
                            <td class="nums">876</td>
                          </tr>
                          <tr>
                            <td class="idCode">10</td>
                            <td class="idCode">2329</td>
                            <td class="idCode">凌陽</td>
                            <td class="nums">930</td>
                            <td class="nums">22,150</td>
                            <td class="nums">35</td>
                            <td class="nums">225</td>
                            <td class="nums">895</td>
                            <td class="nums red">11.95</td>
                            <td class="nums green">▼0.1</td>
                            <td class="nums green">-0.84%</td>
                            <td class="nums">2,754</td>
                          </tr>
                        </tbody>
                    </table>

                    </div>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <!-- /page content -->
        <!-- footer content -->
        <footer>
          <div class="pull-right">
             &copy; Copyright 2017 <a href="http://www.sound.com.tw/" target="_blank">聲達資訊</a> All rights reserved.
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>

    <!-- jQuery -->
    <script src="js/jquery/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="js/bootstrap/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="js/fastclick/fastclick.js"></script>
    <!-- NProgress -->
    <script src="js/nprogress/nprogress.js"></script>
    <script src="js/vendorsA.js"></script>
    <!-- iCheck -->
    <script src="js/iCheck/icheck.min.js"></script>
	<script src="js/backtotop/back-to-top.js"></script>
    <!-- morris.js -->
    <script src="js/raphael/raphael.min.js"></script>
    <script src="js/morris.js/morris.min.js"></script>
    <!-- ECharts -->
    <script src="js/echarts/echarts.min.js"></script>
    <!-- Custom Theme Scripts -->
    <script src="build/js/custom.min.js"></script>
    <script src="js/candlestickchart/js/chart_14.js"></script>
  </body>
</html>