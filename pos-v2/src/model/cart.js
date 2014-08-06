function Cart(scanedInfos){
    var customItem;
    var customItemList = [];
    _.forEach(scanedInfos, function(scanedInfo) {
          var item = _.find(loadAllItems(), {'barcode': scanedInfo.barcode});

          var customPromotion = new CustomPromotion('no',0);
          _.each(loadPromotions(), function(promotion) {
              _.each(promotion.barcodes,function(barcode){
                if(barcode === scanedInfo.barcode){
                  customPromotion = new CustomPromotion(promotion.type, parseInt(scanedInfo.number/3));
                  }
              })
          })

          customItem = new CustomItem(item, scanedInfo.number, customPromotion);
          customItemList.push(customItem);
      });
    this.customItemList = customItemList;
}

Cart.prototype.getCustItemList = function (){
    return this.customItemList;
};
