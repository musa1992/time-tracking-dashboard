let daily = document.querySelector('.daily');
let weekly = document.querySelector('.weekly');
let monthly = document.querySelector('.monthly');
let activities = document.querySelectorAll('.activity')

let getData = function(data){
    daily.addEventListener('click',()=>{
       let x = 0 
       data.forEach(element => {
          
           dailyData = element.timeframes.daily
           let current = activities[x].querySelector('.duration')
           let  previous = activities[x].querySelector('.previous-duration')
           current.innerHTML = dailyData.current + 'hrs'
           previous.innerHTML = 'Yesterday - ' + dailyData.previous + 'hrs'
           x++
       });
    })

    weekly.addEventListener('click',()=>{
        let x = 0 
        data.forEach(element => {
          
           weeklyData = element.timeframes.weekly
           let current = activities[x].querySelector('.duration')
           let  previous = activities[x].querySelector('.previous-duration')
           current.innerHTML = weeklyData.current + 'hrs'
           previous.innerHTML = 'Last week - ' + weeklyData.previous + 'hrs'
           x++
       });
    })

    monthly.addEventListener('click',()=>{
        let x = 0 
        data.forEach(element => {
          
           monthlyData = element.timeframes.monthly
           let current = activities[x].querySelector('.duration')
           let  previous = activities[x].querySelector('.previous-duration')
           current.innerHTML = monthlyData.current + 'hrs'
           previous.innerHTML = 'Last month - ' + monthlyData.previous + 'hrs'
           x++
       });
    })
}

fetch('/data.json').then(Response => Response.json()).then(data => getData(data))