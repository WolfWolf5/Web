

$(document).ready( ( ) => {

alert("Proyecto integrador - ICONOS")


imgLiquid()

} )

function imgLiquid() {
    $(".imgLiquid.imgLiquidFill").imgLiquid()
$(".imgLiquid.imgLiquidNoFill").imgLiquid({
    fill:false
})

$(".imgLiquid.imgLiquidNoFillLeft").imgLiquid({
    fill:false, 
    horizontalAling: "left"
})

$(".imgLiquid.imgLiquidNoFillRight").imgLiquid({
    fill:false, 
    horizontalAling: "right"
})


}
