let chartData = null

fetch("./data.json")
    .then(res => res.json())
    .then(data => chartData = data)
    .then(() => makeChart(chartData))

function makeChart(data) {
    const graphItems = document.getElementsByClassName("graph")
    const amounts = document.getElementsByClassName("chart-amount")
    let max
    max = data[0].amount
    for (let i = 0; i < data.length; i++) {
        if (data[i].amount > max) {
            max = data[i].amount
        }
        amounts[i].style.visibility = "hidden"
    }
    let maxHeight = max + 10

    for (let i = 0; i < data.length; i++) {
        graphItems[i].style.height = `${data[i].amount / maxHeight * 115}px`
        data[i].amount == max ? 
        graphItems[i].style.backgroundColor = "hsl(186, 34%, 60%)" :
        graphItems[i].style.backgroundColor = "hsl(10, 79%, 65%)"
        graphItems[i].addEventListener("mouseover", function() {
            amounts[i].textContent = "$" + data[i].amount
            amounts[i].style.visibility = "visible"
        })
        graphItems[i].addEventListener("mouseleave", function() {
            amounts[i].style.visibility = "hidden"
        })
    }
}

