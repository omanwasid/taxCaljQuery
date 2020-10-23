


 $(document).ready(function () {
    $("#calculate").click(function () {
        calculate()
    })
});


function calculate()
{
    var amount= parseFloat($("#money").val());
    var taxPercentage=parseFloat($("#tax").val());
    var taxAmount=(taxPercentage/100)*amount;
    var finalAmount=amount-taxAmount;
    $("#result").html(finalAmount);
 }
