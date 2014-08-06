function CustomItem(item, number, promotion){
  this.item = item;
  this.number = number;
  this.promotion = promotion;
}
CustomItem.prototype.getItem = function(){
    return this.item;
};
CustomItem.prototype.getNumber = function (){
    return this.number;
};
CustomItem.prototype.getPromotion = function (){
    return this.promotion;
};
