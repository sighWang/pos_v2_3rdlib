var Utils = Utils || {};

Utils.formatter = {
    formatPrice: function (price){
      return price.toFixed(2);
    },
    getCurrentFormatTime: function (){
        return moment().format('YYYY年MM月DD日 HH:mm:ss');
    }
};
