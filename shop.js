
let catalog = []
let catalogObj = {}

let basket = []
let basketObj ={}


function addItem (name, desc, sizes, price, available) {
    let index = catalog.length
    let item = {
        id: index,
        description: desc,
        'sizes': sizes,
        'price': price,
        'available': available,
    }
    catalog.push(item)
    catalogObj[index] = catalog[index]
}

function addBasket (itemID, amount) {
    basketObj[itemID] = amount
    let item = {good: catalog[itemID], 'amount': amount}
    basket[itemID] = item

}

function delItemBasket (itemID) {   
    delete basketObj[itemID]
    delete basket[itemID]
    }


function delBasket() { 
    basketObj = {}
    basket = []
}

function totalSumm() {
    const totalAmount = Object.keys(basketObj).length
    let totalCost = 0
    for ( let [key, val] of Object.entries(basketObj)) {
        totalCost +=  catalogObj[key].price * val
    }
    return {"totalAmount" : totalAmount, "totalSumm": totalCost}
}


addItem("Апельсин", "Желтый, круглый", ["Маленький", "Большой", "Без размера"], 238, true)
addItem("Киви", "Зеленый, круглый", ["Маленький", "Большой","Огромный", "Без размера"], 435, true)
addItem("Томат ", "Зеленый, желтый, разный", ["Спелый", "Неспелый"], 64, false)
addItem("Виноград ", "Круглый, много", ["С косточкой", "Без косточки"], 99, true)
addItem("Банан ", "Длинный, желтый", ["Большой", "Маленький", "Мини"], 17, true)
addBasket(2, 5)
addBasket(0, 8)
console.log('------Каталог------')
console.log(catalog)
console.log('-----Корзина-------')
console.log(basket)
delItemBasket(0)
console.log('------Удалить элемент------')
console.log(basket)
delBasket()
console.log('------Удалить карзину------')
console.log(basket)
addBasket(2, 10)
addBasket(1, 10)
console.log('-----Корзина-------')
console.log(basket)
delItemBasket(2)
console.log('------Удалить элемент------')
console.log(basket)
addBasket(2, 10)
addBasket(0, 8)
console.log('------Итого :------')
console.log(totalSumm())


// id            Код товара
// name          Наименование
// description   Описание
// sizes         массив возможных размеров
// price         цена товара
// available     Признак доступности для продажи
