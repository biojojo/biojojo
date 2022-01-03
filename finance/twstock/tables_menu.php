<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link href="favicon.ico" rel="Shortcut Icon" type="image/x-icon" />
    <title>盤後資料 - 董監持股 - 0055元大MSCI金融</title>

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
            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <ul class="nav side-menu" id="twseIcon">
                  <li><em class="menuBar">個 股</em></li>
                  <li class="active"><a href="tables_001.php"><i class="twse00 twse01"></i> 公司資料 </a>
                  </li>
                  <li><a href="tables_002.php"><i class="twse00 twse02"></i> 相關新聞 </a>
                  </li>
                  <li><a><i class="twse00 twse03"></i> 營利財報 <span class="fa fa-chevron-down"></span></a>
                  		<ul class="nav child_menu">
                          <li><a href="tables_003.php">歷年股利</a></li>
                          <li><a href="tables_012.php">每月營收</a></li>
                          <li><a href="tables_013.php">營益比率</a></li>
                          <li><a href="tables_014.php">損益表</a></li>
                          <li><a href="tables_015.php">資產負債表</a></li>
                          <li><a href="tables_016.php">現金流量表</a></li>
                        </ul>
                  </li>
                  <li><a><i class="twse00 twse04"></i> 股本結構 <span class="fa fa-chevron-down"></span></a>
                  		<ul class="nav child_menu">
                          <li><a href="tables_004.php">董監持股</a></li>
                          <li><a href="tables_005.php">集保餘額</a></li>
                          <li><a href="tables_006.php">質借概況</a></li>
                        </ul>
                  </li>
                  <li><a><i class="twse00 twse11"></i> 籌碼變化 <span class="fa fa-chevron-down"></span></a>
                  		<ul class="nav child_menu">
                          <li><a href="tables_007.php">持股轉讓</a></li>
                          <li><a href="tables_008.php">三大法人</a></li>
                          <!-- <li><a href="tables_009.php">主力庫存</a></li> -->
                          <li><a href="tables_011.php">融資融券</a></li>
                        </ul>
                  </li>
                  <li><a href="tables_010.php"><i class="twse00 twse10"></i> 壓力支撐 </a>
                  </li>
                  <li><em class="menuBar">大 盤</em></li>
                  <li><a><i class="twse00 twse17"></i> 類股個股<br class="rwd_1">收盤 </a>
                  </li> 
                  <li><a href="tables_018.php"><i class="twse00 twse16"></i> 熱門排行 </a>
                  </li>
                  <li><a><i class="twse00 twse08"></i> 三大法人 <span class="fa fa-chevron-down"></span></a>
                  		<ul class="nav child_menu">
                          <li><a href="tables_019.php">買賣彙總表</a></li>
                          <li><a href="tables_020.php">外資</a></li>
                          <li><a href="tables_021.php">投信</a></li>
                          <li><a href="tables_022.php">自營商</a></li>
                        </ul>
                  </li>
                  <li><a href="tables_023.php"><i class="twse00 twse35"></i> 股市<br class="rwd_1">行事曆 </a>
                  </li>
                  <li><a><i class="twse00 twse24"></i> 融資融券 <span class="fa fa-chevron-down"></span></a>
                  		<ul class="nav child_menu">
                  		  <li><a href="tables_024.php">市場融資融券餘額</a></li>
                          <li><a href="tables_025.php">資增</a></li>
                          <li><a href="tables_026.php">資減</a></li>
                          <li><a href="tables_027.php">券增</a></li>
                          <li><a href="tables_028.php">券減</a></li>
                          <li><a href="tables_029.php">資券互抵</a></li>
                          <li><a href="tables_030.php">融資率排行</a></li>
                          <li><a href="tables_031.php">券資比排行</a></li>
                        </ul>
                  </li> 
                  <li><a href="tables_032.php"><i class="twse00 twse18"></i> 主力進出 </a>
                  </li> 
                  <li><em class="menuBar">公 告</em></li>
                  <li><a href="tables_033.php"><i class="twse00 twse19"></i> 漲跌停<br class="rwd_1">未成交 </a>
                  </li> 
                  <li><a href="tables_034.php"><i class="twse00 twse07"></i> 持股轉讓<br class="rwd_1">總表 </a>
                  </li> 
                  <li><a href="tables_035.php"><i class="twse00 twse20"></i> 警示股 </a>
                  </li> 
                  <li><a href="tables_036.php"><i class="twse00 twse21"></i> 停資停券 </a>
                  </li>
                  <li><a href="tables_037.php"><i class="twse00 twse22"></i> 除權除息 </a>
                  </li> 
                  <li><a href="tables_038.php"><i class="twse00 twse23"></i> 股東會 </a>
                  </li> 
                  <li><a href="tables_039.php"><i class="twse00 twse12"></i> 增資股<br class="rwd_1">上市 </a>
                  </li>
                  <li><a href="tables_040.php"><i class="twse00 twse13"></i> 準<br class="rwd_1">上市上櫃 </a>
                  </li> 
                  <li><a href="tables_041.php"><i class="twse00 twse14"></i> 公開申購 </a>
                  </li>
                  <li><em class="menuBar">選 股</em></li>
                  <li><a href="tables_042.php"><i class="twse00 twse25"></i> 技術指標<br class="rwd_1">選股 </a>
                  </li> 
                  <li><em class="menuBar">金融行情</em></li>
                  <li><a><i class="twse00 twse32"></i> 商品行情 <span class="fa fa-chevron-down"></span></a>
                  		<ul class="nav child_menu">
                  		  <li><a href="tables_043.php">金屬期貨</a></li>
                          <li><a href="tables_044.php">能源期貨</a></li>
                          <li><a href="tables_045.php">農產品期貨</a></li>
                          <li><a href="tables_046.php">DRAM現貨報價</a></li>
                          <li><a href="tables_047.php">遠東區塑膠原料報價</a></li>
                          <li><a href="tables_048.php">航運指數價格</a></li>
                        </ul>
                  </li>   
                  <li><a href="tables_049.php"><i class="twse00 twse29"></i> 國際指數 </a>
                  </li>    
                  <li><a href="tables_050.php"><i class="twse00 twse33"></i> 主要匯率 </a>
                  </li>   
                  <li><a href="tables_051.php"><i class="twse00 twse34"></i> 債市行情 </a>
                  </li>
                  
                </ul>
              </div>

            </div>
            <!-- /sidebar menu -->
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
                        <h3>董監持股</h3>
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
                    <div class="table-responsive">
                          <table class="table StackTable" id="function_04">
                            <thead>
                              <tr>
                                <th>項次</th>
                                <th>年度-月份</th>
                                <th>姓名</th>
                                <th>身分別</th>
                                <th>本月實際持有股數</th>
                                <th>設質股數</th>
                                <th>設質比例％</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="idCode">1</td>
                                <td class="date">201701</td>
                                <td>林健男</td>
                                <td>董事長本人</td>
                                <td class="nums">0</td>
                                <td class="nums">0</td>
                                <td class="nums">0.00%</td>
                              </tr>
                              <tr>
                                <td class="idCode">2</td>
                                <td class="date">201701</td>
                                <td>臺灣化學纖維股份有限公司</td>
                                <td>常務董事之法人代表人</td>
                                <td class="nums">486,978,692</td>
                                <td class="nums">0</td>
                                <td class="nums">0.00%</td>
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
    <!-- Custom Theme Scripts -->
    <script src="build/js/custom.min.js"></script>
  </body>
</html>