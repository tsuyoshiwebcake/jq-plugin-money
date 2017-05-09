/************************************************************************
 * @Name      : jQuery Money Plugin
 * @Version   : 2.0.0
 * @Author    : Tsuyoshi.
 * @AuthorURI : http://webcake.no003.info/
 * @License   : Open Source - MIT License : http://www.opensource.org/licenses/mit-license.php
 *************************************************************************/
(function ($)
{
  var methods = {
    /**
     * 初期化メソッド
     * @param {object} config
     * @returns {jquery_money.methods}
     */
    init : function(config) {
      // ユーザがオプションを指定した場合は、引き継ぐ
      var options = $.extend(options, config);

      // 初期表示
      $(this).each(function()
      {
        $(this).val($(this).money('to'));
      });

      // フォーカスを受け取った時
      $(this).on('focusin', function ()
      {
        $(this).val($(this).money('del'));
      });

      // フォーカスが外れた時
      $(this).on('focusout',function ()
      {
        $(this).val($(this).money('to'));
      });

      return this;
    },
    /**
     * 3桁のカンマ区切りに変換する
     */
    to : function(num) {
      if(undefined === num) {
        var val = $(this).money('del');
      }
      else {
        var val = num.toString();
        val = $(this).money('del', val);
      }

      // カンマを付ける
      while (val != (val = val.replace(/^(-?\d+)(\d{3})/, "$1,$2")));

      return val;
    },
    /**
     * カンマを削除する
     */
    del : function(num) {
      if(undefined === num) {
        var val = $(this).val().toString();
      }
      else {
        val = num.toString();
      }

      // カンマを消す
      val = val.replace(/,/g, "");

      return val;
    },
  };

/**
  * Method の呼び出しロジック
  * @param {string} method
  */
  $.fn.money = function (method)
  {
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.money');
    }
  };
})(jQuery);
