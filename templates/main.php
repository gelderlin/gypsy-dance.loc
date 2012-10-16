<table  class="main_table" align="center" height="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td valign="top">
                <div class="logo_block">
                    <?php include("logo.php"); 
					?>
                </div>
                <div class="menu_block">
                    <?php include("menu.php"); ?>
                </div>
            </td>
            <td align="left" valign="top" height="300px">
                <div class="phone_block">
                    <?php include("phone.php"); ?>
                </div>
                <div class="studio_block">
                    <?php 
					$uri = $_SERVER['REQUEST_URI'];
					if(strpos($uri, 'gypsy_costume') === false)
					include("studio.php");?>
                </div>
            </td>
            <td rowspan="3" align="left" valign="top" width="250">
                <div class="news_block">
                    <?php include("news.php"); ?>
                </div>
            </td>    
        </tr>
        <tr>
            <td colspan="2" valign="top">
                <div class="content_block">
               
				
        
          