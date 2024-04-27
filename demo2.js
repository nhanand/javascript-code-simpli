
/* 
Promcode : JUMBO
30% off on the amount | amount must be greater than 150

Promocode : BINGO
50% off amount should be greater then 300
*/

let amount = 500
let promoCode = "BINGO"

if (promoCode == "JUMBO" && amount > 150) {
  let discountamount = (30 * amount) / 100
  console.log(
    "Promo code Applied Successfully. your original amout is " + amount
  )
  console.log("Your discounted amount is " + discountamount)
  console.log("execution of IF condition")
} else if (promoCode == "BINGO" && amount > 300) {
  let discountamount = (50 * amount) / 100
  console.log(
    "Promo code Applied 50% Successfully. your original amout is " + amount
  )
  console.log("Your discounted amount is " + discountamount)
} else {
  console.log("Invalid Promo code or Amount Insufficient")
}
