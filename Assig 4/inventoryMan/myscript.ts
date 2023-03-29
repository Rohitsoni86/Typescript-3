function decreaseQuantity() {
   var Quantiy = document.getElementById("Quantity") as HTMLInputElement
   var realQuantity_Value = parseInt(Quantiy.innerHTML)
    let count: number = realQuantity_Value
    
    console.log(count)

    if (count > 5) {
        count -=  1
        let result = count
        // console.log(count)
         Quantiy.innerHTML = `${result}`
    }

    else {
        alert("Add Stock In the Inventory")
    }
}