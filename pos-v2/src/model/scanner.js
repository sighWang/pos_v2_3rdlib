function Scanner (){
}
Scanner.prototype.scanInputs = function (inputs){
    var barcodeCountLists = [];
    for (var i = 0; i < inputs.length; ){

      var num = 0;
      var idx = inputs.indexOf(inputs[i]);

      while(idx != -1){
        num++;
        idx = inputs.indexOf( inputs[i] , idx + 1 );
        }

      var goods = inputs[i].split('-');
      num = goods[1] * num || num;
      var barcodeCount = new CustomCount(goods[0], num);

      function isElement(element){
        return element != inputs[i];
      }
      inputs = inputs.filter(isElement);

     barcodeCountLists.push(barcodeCount);
     }
   return barcodeCountLists;
}
