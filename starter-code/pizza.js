// Buttons
let pepperoniBtn = $(".btn.btn-pepperonni")
let mushroomBtn = $(".btn.btn-mushrooms")
let greenPepperBtn = $(".btn.btn-green-peppers")
let whiteSauceBtn = $(".btn.btn-sauce")
let glutenFreeCrustBtn = $(".btn.btn-crust")

// show/hide pepperonis on pepperoni button click
pepperoniBtn.click(function(){
    if ($(".pep").css("display") != "none"){
        $(".pep").hide()
        pepperoniBtn.removeClass("active")
        $("li:contains($1 pepperonni)").hide()
        $("strong").text("$" + (parseInt($("strong").text().slice(-2)) - 1).toString())
        // parseInt($("strong").text().slice(-2)) - 1
    }
  else {
    $(".pep").show()
    pepperoniBtn.addClass("active")
    $("li:contains($1 pepperonni)").show()
    $("strong").text("$" + (parseInt($("strong").text().slice(-2)) + 1).toString())
  }
})
// show/hide mushrooms on mushroom button click
mushroomBtn.click(function(){
    if ($(".mushroom").css("display") != "none"){
        $(".mushroom").hide()
        mushroomBtn.removeClass("active")
        $("li:contains($1 mushrooms)").hide()
        $("strong").text("$" + (parseInt($("strong").text().slice(-2)) - 1).toString())
    } else {
        $(".mushroom").show()
        mushroomBtn.addClass("active")
        $("li:contains($1 mushrooms)").show()
        $("strong").text("$" + (parseInt($("strong").text().slice(-2)) + 1).toString())
    }
})
// show/hide green peppers on green pepper buton click
greenPepperBtn.click(function(){
    if($(".green-pepper").css("display") != "none") {
        $(".green-pepper").hide()
        greenPepperBtn.removeClass("active")
        $("li:contains($1 green peppers)").hide()
        $("strong").text("$" + (parseInt($("strong").text().slice(-2)) - 1).toString())
    } else {
        $(".green-pepper").show()
        greenPepperBtn.addClass("active")
        $("li:contains($1 green peppers)").show()
        $("strong").text("$" + (parseInt($("strong").text().slice(-2)) + 1).toString())
    }
})
// show/hide white sauce on white sauce button click
whiteSauceBtn.click(function(){
    if($(".sauce.sauce-white").css("display") != "none"){
        $(".sauce.sauce-white").hide()
        whiteSauceBtn.removeClass("active")
        $("li:contains($3 white sauce)").hide()
        $("strong").text("$" + (parseInt($("strong").text().slice(-2)) - 3).toString())
    } else {
        $(".sauce.sauce-white").show()
        whiteSauceBtn.addClass("active")
        $("li:contains($3 white sauce)").show()
        $("strong").text("$" + (parseInt($("strong").text().slice(-2)) + 3).toString())
    }
})
// show/hide gluten free crust on gluten free crust button click
glutenFreeCrustBtn.click(function(){
    if($(".crust.crust-gluten-free").css("display") != "none"){
        $(".crust.crust-gluten-free").hide()
        glutenFreeCrustBtn.removeClass("active")
        $("li:contains($5 gluten-free crust)").hide()
        $("strong").text("$" + (parseInt($("strong").text().slice(-2)) - 5).toString())
    } else {
        $(".crust.crust-gluten-free").show()
        glutenFreeCrustBtn.addClass("active")
        $("li:contains($5 gluten-free crust)").show()
        $("strong").text("$" + (parseInt($("strong").text().slice(-2)) + 5).toString())
    }
})


