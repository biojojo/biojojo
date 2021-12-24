<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="apple-touch-icon" href="apple-touch-icon.png">
	<link href="favicon.ico" rel="Shortcut Icon" type="image/x-icon" />
    <title>Uranus IDE - 技術支援</title>

    <!-- Bootstrap -->
    <link href="../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- twse -->
    <link href="../vendors/twse/css/twse.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="../vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="../vendors/iCheck/skins/flat/green.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/imagehover.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <!-- Custom Theme Style -->
    <link href="../build/css/custom.min.css" rel="stylesheet">
    <link href="css/style_add.css" rel="stylesheet">
  </head>

  <body class="nav-md">
  	<!--Navigation bar-->
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <i class="fa fa-cog"></i>
            </button>
            <a class="navbar-brand" href="index.php" id="uranusLogo"></a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
              <li><a>技術支援</a></li>
              <li><a href="index.php">首頁</a></li>
            </ul>
            </div>
          </div>
        </nav>
        <!--/ Navigation bar-->
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <!-- sidebar menu -->
            <!-- 技術子頁menu 選單開始 -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <ul class="nav side-menu" id="twseIcon">
                  <li><a href="original.php"><i class="fa fa-cogs"></i> 基本操作 </a>
                  </li>
                  <li><a><i class="fa fa-object-ungroup"></i> 技術說明 <span class="fa fa-chevron-up"></span></a>
                  		<ul class="nav child_menu disBlock">
                          <li><a>API<span class="fa fa-chevron-up"></span></a>
                          		<ul class="nav child_menu">
                                    <li class="sub_menu"><a href="StandardObjectPascalAPI.php">Standard Object Pascal API</a>
                                    </li>
                                    <li class="sub_menu"><a href="API_Global.php">API_Global</a></li>
                                    <li class="sub_menu"><a href="API_OS.php">API_OS</a></li>
                                    <li class="sub_menu"><a href="API_Internet.php">API_Internet</a></li>
                                  </ul>
                          </li>
                          <li class="active"><a>Components<span class="fa fa-chevron-up"></span></a>
                          		<ul class="nav child_menu disBlock">
                                    <li class="sub_menu"><a>Standard<span class="fa fa-chevron-down"></span></a>
                                    	<ul class="nav child_menu">
                                            <li class="sub_menu"><a href="IFrame.php">IFrame</a></li>
                                            <li class="sub_menu"><a href="AniIndicator.php">AniIndicator</a></li>
                                            <li class="sub_menu"><a href="Button.php">Button</a></li>
                                            <li class="sub_menu"><a href="Checkbox.php">Checkbox</a></li>
                                            <li class="sub_menu"><a href="ComboBox.php">ComboBox</a></li>
                                            <li class="sub_menu"><a href="Edit.php">Edit</a></li>
                                            <li class="sub_menu"><a href="GroupBox.php">GroupBox</a></li>
                                            <li class="sub_menu"><a href="Memo.php">Memo</a></li>
                                            <li class="sub_menu"><a href="Panel.php">Panel</a></li>
                                            <li class="sub_menu"><a href="ProgressBar.php">ProgressBar</a></li>
                                            <li class="sub_menu"><a href="RadioButton.php">RadioButton</a></li>
                                            <li class="sub_menu"><a href="Switch.php">Switch</a></li>
                                        </ul>
                                    </li>
                                    <li class="sub_menu"><a>Finance<span class="fa fa-chevron-down"></span></a>
                                    	<ul class="nav child_menu">
                                            <li class="sub_menu"><a href="FinProvider.php">FinProvider</a></li>
                                            <li class="sub_menu"><a href="FinLabel.php">FinLabel</a></li>
                                            <li class="sub_menu"><a href="FinBoard.php">FinBoard</a></li>
                                            <li class="sub_menu"><a href="FinNews.php">FinNews</a></li>
                                            <li class="sub_menu"><a href="FinChart.php">FinChart</a></li>
                                            <li class="sub_menu"><a href="FinFive.php">FinFive</a></li>
                                        </ul>
                                    </li>
                                    <li class="sub_menu"><a>System<span class="fa fa-chevron-down"></span></a>
                                    	<ul class="nav child_menu">
                                            <li class="sub_menu"><a href="Timer.php">Timer</a></li>
                                        </ul>
                                    </li>
                                    <li class="sub_menu"><a>Additional<span class="fa fa-chevron-down"></span></a>
                                    	<ul class="nav child_menu">
                                            <li class="sub_menu"><a href="Chart.php">Chart</a></li>
                                            <li class="sub_menu"><a href="StringGrid.php">StringGrid</a></li>
                                            <li class="sub_menu"><a href="Image.php">Image</a></li>
                                            <li class="sub_menu"><a href="NumberBox.php">NumberBox</a></li>
                                            <li class="sub_menu"><a href="SpinBox.php">SpinBox</a></li>
                                            <li class="sub_menu"><a href="ComboEdit.php">ComboEdit</a></li>
                                            <li class="sub_menu"><a href="ComboTrackBar.php">ComboTrackBar</a></li>
                                            <li class="sub_menu"><a href="Calendar.php">Calendar</a></li>
                                            <li class="sub_menu"><a href="DateEdit.php">DateEdit</a></li>
                                            <li class="sub_menu"><a href="TimeEdit.php">TimeEdit</a></li>
                                            <li class="sub_menu"><a href="ArcDial.php">ArcDial</a></li>
                                        </ul>
                                    </li>
                                    <li class="sub_menu"><a>DataControl<span class="fa fa-chevron-down"></span></a>
                                    	<ul class="nav child_menu">
                                            <li class="sub_menu"><a href="DataGrid.php">DataGrid</a></li>
                                        </ul>
                                    </li>
                                    <li class="sub_menu"><a>DataAccess<span class="fa fa-chevron-down"></span></a>
                                    	<ul class="nav child_menu">
                                            <li class="sub_menu"><a href="FDQuery.php">FDQuery</a></li>
                                            <li class="sub_menu"><a href="BindNavigator.php">BindNavigator</a></li>
                                        </ul>
                                    </li>
                                    <li class="sub_menu"><a>CommonControls<span class="fa fa-chevron-down"></span></a>
                                    	<ul class="nav child_menu">
                                            <li class="sub_menu"><a href="Rectangle.php">Rectangle</a></li>
                                            <li class="sub_menu"><a href="TabControl.php">TabControl</a></li>
                                        </ul>
                                    </li>
                                    <li class="sub_menu"><a>Sample<span class="fa fa-chevron-down"></span></a>
                                    	<ul class="nav child_menu">
                                            <li class="sub_menu"><a href="BarCodeScanner.php">BarCodeScanner</a></li>
                                            <li class="sub_menu"><a href="Flashlight.php">Flashlight</a></li>
                                            <li class="sub_menu"><a href="Weather.php">Weather</a></li>
                                            <li class="sub_menu"><a href="LocationSensor.php">LocationSensor</a></li>
                                        </ul>
                                    </li>
                                    <li class="sub_menu"><a>Internet<span class="fa fa-chevron-down"></span></a>
                                    	<ul class="nav child_menu">
                                            <li class="sub_menu"><a href="WebBrowser.php">WebBrowser</a></li>
                                        </ul>
                                    </li>
                                  </ul>
                          </li>
                          <li><a href="Sample.php">Sample</a></li>
                        </ul>
                  </li>
                  <li><a href="mv.php"><i class="fa fa-youtube-play"></i> 影片教學 </a>
                  </li>
                  <li><a href="upload.php"><i class="fa fa-upload"></i> 發布作業 </a>
                  </li>
                  <li><a href="production.php"><i class="fa fa-code"></i>商品銷售 </a>
                  </li>
                  <li><a href="resolution.php"><i class="fa fa-question-circle-o"></i> 常見問題</a>
                  </li>
                </ul>
              </div>

            </div>
            <!-- 技術子頁menu 選單結束 -->
            <!-- /sidebar menu -->
          </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav>
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bar"></i></a>
              </div>
              <h1>技術說明</h1><!-- 技術子頁主標題 -->
            </nav>
          </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel x_panel_2">
                    <div class="page-title">
                      <div>
                        <h3>Components</h3>
                      </div>
                    </div>
                    <div class="clearfix mart20"></div>
                    <!-- Button1: KButton toggle區開始 -->
                    <div class="gd lh mart20">
                        <iframe src="Button1_KButton.php" frameborder="0" id="iFrame1" name="iFrame1" width="100%" onload="this.height=iFrame1.document.body.scrollHeight" scrolling="no"></iframe>
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Button1: KButton toggle區結束 -->
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
        </div>
        <!-- /page content -->
      </div>
    </div>
	<!--Footer-->
        <footer id="footer" class="footer">
          <div class="container text-center">
          <!-- <ul class="social-links">
            <li><a href="#link"><i class="fa fa-twitter fa-fw"></i></a></li>
            <li><a href="#link"><i class="fa fa-facebook fa-fw"></i></a></li>
            <li><a href="#link"><i class="fa fa-google-plus fa-fw"></i></a></li>
          </ul> 社群 -->
            &copy; Copyright 2017 <a href="http://www.sound.com.tw/" target="_blank">聲達資訊</a> All rights reserved.
          </div>
        </footer>
        <!--/ Footer-->
    <!-- jQuery -->
    <script src="../vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="../vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="../vendors/nprogress/nprogress.js"></script>
    <!-- iCheck -->
    <script src="../vendors/iCheck/icheck.min.js"></script>
	<script src="../vendors/backtotop/js/back-to-top.js"></script>
    <!-- Custom Theme Scripts -->
    <script src="../build/js/custom.min.js"></script>
  </body>
</html>