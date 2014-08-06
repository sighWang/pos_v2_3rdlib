var Utils = Utils || {};

Utils.formatter = {
    formatPrice: function (price){
      return price.toFixed(2);
    },
    getCurrentFormatTime: function (){
        var momen = (moment()).format();
        var date = momen.substring(0,10).replace('-','年').replace('-','月') + '日 ';
        var time = momen.substring(11,19);
        return date + time;
    }
};
