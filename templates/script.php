<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <script src="http://api-maps.yandex.ru/1.0/index.xml?key=AF6VtkkBAAAAepuhQAIAxxONGGwzekY9L0e-qVwmaV0rOSMAAAAAAAAAAADt6fiiQ4zed3NCwJBVMekc0VGjFQ==" type="text/javascript">
    </script>
    <script type="text/javascript">
        var mapspb;
        function init_mapspb () {
            mapspb = new YMaps.Map( document.getElementById("YMapsSPb") );
            mapspb.setCenter(new YMaps.GeoPoint(37.623349, 55.765564),
      15, YMaps.MapType.MAP);
        mapspb.addControl(new YMaps.TypeControl());
        mapspb.addControl(new YMaps.ToolBar());
        mapspb.addControl(new YMaps.Zoom());                   
        mapspb.addControl(new YMaps.ScaleLine());
        mapspb.setZoom(16);
        
        var content = document.createElement('span');
                content.innerHTML = "<font size='-2'><strong>Культурный центр</strong></font>";
                mapspb.openBalloon(new YMaps.GeoPoint(37.626124, 55.764926), content);

        
        }

        window.onload = function () { init_mapspb(); }
    </script>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
    <META name="description" content="">
    <link href="/css/main.css" type="text/css" rel="stylesheet">
    <link rel="SHORTCUT ICON" href="/favicon.ico">
    <META name="keywords" content="">
</head> 
<body background="/img/rose_bg.jpg">
<!-- <script type="text/javascript" src="http://arabia-dance.ru/js/snow1.js" ></script> -->

    