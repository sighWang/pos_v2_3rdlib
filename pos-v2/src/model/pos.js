function Pos(){
    this.scanner = new Scanner();
}

Pos.prototype.getShoppingList = function (inputs){
    var barcodeCountList = this.scanner.scanInputs(inputs);
    this.cart = new Cart(barcodeCountList);
    var customItemList = this.cart.getCustItemList(barcodeCountList);
    var shoppingList = this.createShoppingList(customItemList);

    return shoppingList;
}

Pos.prototype.createShoppingList = function (customItemList){

    var shoppingList = '***<没钱赚商店>购物清单***\n' +
    '打印时间：' + Utils.formatter.getCurrentFormatTime() + '\n' ;
    var customList = this.getCustomList(customItemList);
    var freeList = this.getFreeList(customItemList);
    var subtotalAndSave = this.getSubtotalAndSave(customItemList);

    return shoppingList + customList + freeList + subtotalAndSave;
}

Pos.prototype.getFreeList = function (customItemList){

    var freeList = '挥泪赠送商品：\n';
    _.each(customItemList, function(customItem) {
        var item = customItem.getItem();
        var promotion = customItem.getPromotion();
        if(promotion.type === 'BUY_TWO_GET_ONE_FREE'){
           freeList += '名称：' + item.name + '，数量：' + promotion.number + item.unit + '\n';
         }
    })

    return freeList;
}

Pos.prototype.getTotal = function(customItem){
    var total = customItem.item.price * (customItem.num - customItem.promotion.num);
    return Utils.formatter.formatPrice(total);
}

Pos.prototype.getSubtotalAndSave = function (customItemList){

    var subtotal = 0;
    var saveUp = 0;
    _.each(customItemList,function(customItem) {
      var item = customItem.getItem();
      var promotion = customItem.getPromotion();

      subtotal += item.price * (customItem.number - promotion.number);
      saveUp += item.price * promotion.number;
    })

    return '----------------------\n' +
    '总计：' + Utils.formatter.formatPrice(subtotal) + '(元)\n' +
    '节省：' + Utils.formatter.formatPrice(saveUp) + '(元)\n' +
    '**********************';
}

Pos.prototype.getCustomList = function (customItemList){

     var customList = '----------------------\n';

     _.each(customItemList, function(customItem) {
     var item = customItem.getItem();
     var promotion = customItem.getPromotion();
     var total = item.price * (customItem.number - promotion.number);
     customList += '名称：' + item.name + '，数量：' + customItem.number + item.unit +
     '，单价：' + Utils.formatter.formatPrice(item.price) + '(元)，小计：' + Utils.formatter.formatPrice(total) + '(元)\n';
     })

     return customList + '----------------------\n';
}
