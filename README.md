# jQuery Money

jQuery Moneyは数値を3桁カンマ区切りにするjQueryプラグインです。

## License

MIT License

## Usage
``` html
<input type="text" class="money" />
```
``` js
$(document).ready(function() {
  $('.money').money();
});
```

## Example

### カンマ区切りにするメソッドを単体で呼び出す
``` js
var num = $.fn.money('to', 1234);
```

``` js
$('.money').money('to');
```

### カンマを削除するメソッドを単体で呼び出す
``` js
var num = $.fn.money('del', 1234);
```

``` js
$('.money').money('del');
```
