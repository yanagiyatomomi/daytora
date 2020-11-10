$(function(){
    $('.js-menu_item_link').each(function(){
        $(this).on('click',function(){
            $("+.sub_menu",this).slideToggle();
            return false;
        });
    });
});

 /*=================
       top page
    =================*/
   
    $( function()
    {
        $( window ).scroll(
            function()
            {
               // 最上部から現在位置までの距離を取得して、変数[now]に格納
var now = $( window ).scrollTop() ;

// 最上部から現在位置までの距離(now)が1500px以上だったら
if( now > 80 )
{
	// [#page-top]をゆっくりフェードインする
	$( '#page-top' ).fadeIn( "300ms" ) ;
}

// 80px以下だったら
else
{
	// [#page-top]をゆっくりフェードアウトする
	$( '#page-top' ).fadeOut( '300ms' ) ;
}
            }
           
        )
        $( '#move-page-top' ).click(
            function()
            {
                // [id:move-page-top]をクリックしたら起こる処理
                $( 'html,body' ).animate( {scrollTop:0} , '500ms' ) ;
            }
        ) ;
    } ) ;

   
    