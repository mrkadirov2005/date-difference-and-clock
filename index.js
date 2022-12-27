const startDate=document.getElementById('start-date')
const endDate=document.getElementById('end-date')
const button=document.getElementById('button')
const output=document.getElementById('output')
console.log(startDate,endDate,button,output)
const errStart=document.getElementById('started')
const errEnd=document.getElementById('ended')


button.addEventListener('click',diff)
function diff(e){


errEnd.innerText=  !endDate.value ? 'choose date': '' 
errStart.innerText=  !startDate.value ? 'choose date': '' 

if(startDate.value && endDate.value){
    var start=new Date(startDate.value).getTime()
    var end=new Date(endDate.value).getTime()
    console.log(start,end)
    const result=end-start;
    const days=result/(1000*60*60*24)
    // console.log(days)
    output.innerHTML=`The diffrence between two days is ${days} ${
        days>1? 'days':'day'
    }`

    
}

}



//clock feature
const hours=document.getElementById('hour')
    const minutes=document.getElementById('minute')
    const second=document.getElementById('second')

function clock(){
   
    const today=new Date()
    const hour=today.getHours()
    if(today.getMinutes()<10){
        minute='0'+today.getMinutes()
    }
    const minute=today.getMinutes()
    
    const seconds=today.getSeconds()
    console.log(second)
    


    hours.innerText=hour;
    minutes.innerText=minute;
    second.innerText=seconds;


console.log(hours,minutes,second)
}
setInterval(() => {
    console.log(clock())
}, 1000);

