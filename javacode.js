const callHistory=[];

// function to get innerText value 

function getInnerText(id) {
    let innerText = parseInt(document.getElementById(id).innerText);
    return innerText;
}
function getInnerText2(id) {
    let innerText = document.getElementById(id).innerText;
    return innerText;
}


// function to Set innerText value


function setInnerText(value) {
    let countElemet = document.getElementById("heartCount")
    countElemet.innerText = value
}
function setInnerText2(value) {
    let countElemet = document.getElementById("total-coin")
    countElemet.innerText = value
}
function setInnerText3(value) {
    let countElemet = document.getElementById("copyCount")
    countElemet.innerText = value
}
// National Emergency Number 

document.getElementById("nationalClick").addEventListener("click", function () {
    const heart = getInnerText("heartCount");

    const heartCount = heart + 1;

    setInnerText(heartCount);



})
document.getElementById("national-copy").addEventListener("click", function () {
    alert("The number has been copied 999")
    const copy = getInnerText("copyCount");

    const copyCount = copy + 1;

    setInnerText3(copyCount);

const number = getInnerText2("national-number");

navigator.clipboard.writeText(number);


})

document.getElementById("national-call").addEventListener('click', function () {
    const coin = getInnerText('total-coin');
      if (coin === 0) {
        alert('❌আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return ;
    }
    alert("Calling National Emergency Service 999...")
  
   const totalCoin = coin-20;
    

setInnerText2(totalCoin);

const history ={
    name:"National Emergency Number",
    Number:999,
    Date:new Date().toLocaleTimeString("en-BD")
}
callHistory.push(history)



const newHistory = document.getElementById("call-history");


    const div = document.createElement("div")
    div.innerHTML = `
        <div class="flex justify-between mt-4 bg-[#FAFAFA] p-5 items-center rounded-xl">
                <div>
                    <h1 class="font-bold">${history.name}</h1>
                    <p>${history.Number}</p>
                </div>
                <p>${history.Date}</p>
              </div>
    `
    newHistory.appendChild(div)





})
//   <!-- Police --> 
document.getElementById("police-click").addEventListener("click", function () {
    const heart = getInnerText("heartCount");

    const heartCount = heart + 1;

    setInnerText(heartCount);


})

document.getElementById("police-copy").addEventListener("click", function () {
    alert("The number has been copied 999")
    const copy = getInnerText("copyCount");

    const copyCount = copy + 1;

    setInnerText3(copyCount);

const number = getInnerText2("police-number");

navigator.clipboard.writeText(number);


})

document.getElementById("police-call").addEventListener('click', function () {
    const coin = getInnerText('total-coin');
      if (coin === 0) {
        alert('❌আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return ;
    }
    alert("Calling Police Helpline Service 999...")
  
   const totalCoin = coin-20;
    

setInnerText2(totalCoin);

const history ={
    name:"Police Helpline Service",
    Number:999,
    Date:new Date().toLocaleTimeString("en-BD")
}

callHistory.push(history)



const newHistory = document.getElementById("call-history");


    const div = document.createElement("div")
    div.innerHTML = `
        <div class="flex justify-between mt-4 bg-[#FAFAFA] p-5 items-center rounded-xl">
                <div>
                    <h1 class="font-bold">${history.name}</h1>
                    <p>${history.Number}</p>
                </div>
                <p>${history.Date}</p>
              </div>
    `
    newHistory.appendChild(div)




})

//   <!-- fire-service --> 
document.getElementById("fire-service-click").addEventListener("click", function () {
    const heart = getInnerText("heartCount");

    const heartCount = heart + 1;

    setInnerText(heartCount);


})

document.getElementById("fire-service-copy").addEventListener("click", function () {
    alert("The number has been copied 999")
    const copy = getInnerText("copyCount");

    const copyCount = copy + 1;

    setInnerText3(copyCount);

const number = getInnerText2("fire-service-number");

navigator.clipboard.writeText(number);


})

document.getElementById("fire-service-call").addEventListener('click', function () {
    const coin = getInnerText('total-coin');
      if (coin === 0) {
        alert('❌আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return ;
    }
    alert("Calling Fire Service 999...")
  
   const totalCoin = coin-20;
    

setInnerText2(totalCoin);

const history ={
    name:"Fire Service Number",
    Number:999,
    Date:new Date().toLocaleTimeString("en-BD")
}
callHistory.push(history)



const newHistory = document.getElementById("call-history");


    const div = document.createElement("div")
    div.innerHTML = `
        <div class="flex justify-between mt-4 bg-[#FAFAFA] p-5 items-center rounded-xl">
                <div>
                    <h1 class="font-bold">${history.name}</h1>
                    <p>${history.Number}</p>
                </div>
                <p>${history.Date}</p>
              </div>
    `
    newHistory.appendChild(div)


})


//   <!-- ambulance --> 
document.getElementById("ambulance-click").addEventListener("click", function () {
    const heart = getInnerText("heartCount");

    const heartCount = heart + 1;

    setInnerText(heartCount);


})

document.getElementById("ambulance-copy").addEventListener("click", function () {
    alert("The number has been copied 1994-999999")
    const copy = getInnerText("copyCount");

    const copyCount = copy + 1;

    setInnerText3(copyCount);

const number = getInnerText2("ambulance-number");

navigator.clipboard.writeText(number);


})

document.getElementById("ambulance-call").addEventListener('click', function () {
    const coin = getInnerText('total-coin');
      if (coin === 0) {
        alert('❌আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return ;
    }
    alert("Calling Ambulance Service 1994-999999...")
  
   const totalCoin = coin-20;
    

setInnerText2(totalCoin);

const history ={
    name:"Ambulance Service",
    Number: 1994999999,
    Date:new Date().toLocaleTimeString("en-BD")
}
callHistory.push(history)



const newHistory = document.getElementById("call-history");


    const div = document.createElement("div")
    div.innerHTML = `
        <div class="flex justify-between mt-4 bg-[#FAFAFA] p-5 items-center rounded-xl">
                <div>
                    <h1 class="font-bold">${history.name}</h1>
                    <p>${history.Number}</p>
                </div>
                <p>${history.Date}</p>
              </div>
    `
    newHistory.appendChild(div)


})

//   <!-- Women & Child --> 
document.getElementById("Women-click").addEventListener("click", function () {
    const heart = getInnerText("heartCount");

    const heartCount = heart + 1;

    setInnerText(heartCount);


})

document.getElementById("Women-copy").addEventListener("click", function () {
    alert("The number has been copied 109")
    const copy = getInnerText("copyCount");

    const copyCount = copy + 1;

    setInnerText3(copyCount);

const number = getInnerText2("Women-number");

navigator.clipboard.writeText(number);


})

document.getElementById("Women-call").addEventListener('click', function () {
    const coin = getInnerText('total-coin');
      if (coin === 0) {
        alert('❌আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return ;
    }
    alert("Calling Women & Child Helpline 109...")
  
   const totalCoin = coin-20;
    

setInnerText2(totalCoin);

const history ={
    name:"Women & Child Helpline",
    Number: 109,
    Date:new Date().toLocaleTimeString("en-BD")
}
callHistory.push(history)



const newHistory = document.getElementById("call-history");


    const div = document.createElement("div")
    div.innerHTML = `
        <div class="flex justify-between mt-4 bg-[#FAFAFA] p-5 items-center rounded-xl">
                <div>
                    <h1 class="font-bold">${history.name}</h1>
                    <p>${history.Number}</p>
                </div>
                <p>${history.Date}</p>
              </div>
    `
    newHistory.appendChild(div)

})

//  <!-- Anti Corruption --> 
document.getElementById("anti-click").addEventListener("click", function () {
    const heart = getInnerText("heartCount");

    const heartCount = heart + 1;

    setInnerText(heartCount);

})


document.getElementById("anti-copy").addEventListener("click", function () {
    alert("The number has been copied 106")
    const copy = getInnerText("copyCount");

    const copyCount = copy + 1;

    setInnerText3(copyCount);

const number = getInnerText2("anti-number");

navigator.clipboard.writeText(number);


})

document.getElementById("anti-call").addEventListener('click', function () {
    const coin = getInnerText('total-coin');
      if (coin === 0) {
        alert('❌আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return ;
    }
    alert("Calling Anti-Corruption Helpline 106...")
  
   const totalCoin = coin-20;
    

setInnerText2(totalCoin);

const history ={
    name:"Anti-Corruption Helpline",
    Number: 106,
    Date:new Date().toLocaleTimeString("en-BD")
}
callHistory.push(history)



const newHistory = document.getElementById("call-history");


    const div = document.createElement("div")
    div.innerHTML = `
        <div class="flex justify-between mt-4 bg-[#FAFAFA] p-5 items-center rounded-xl">
                <div>
                    <h1 class="font-bold">${history.name}</h1>
                    <p>${history.Number}</p>
                </div>
                <p>${history.Date}</p>
              </div>
    `
    newHistory.appendChild(div)

})

//  <!-- Electricity --> 
document.getElementById("electricity-click").addEventListener("click", function () {
    const heart = getInnerText("heartCount");

    const heartCount = heart + 1;

    setInnerText(heartCount);

})


document.getElementById("electricity-copy").addEventListener("click", function () {
    alert("The number has been copied 16216")
    const copy = getInnerText("copyCount");

    const copyCount = copy + 1;

    setInnerText3(copyCount);

const number = getInnerText2("electricity-number");

navigator.clipboard.writeText(number);


})

document.getElementById("electricity-call").addEventListener('click', function () {
    const coin = getInnerText('total-coin');
      if (coin === 0) {
        alert('❌আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return ;
    }
    alert("Calling Electricity Helpline 16216...")
  
   const totalCoin = coin-20;
    

setInnerText2(totalCoin);

const history ={
    name:"Electricity Helpline",
    Number: 16216,
    Date:new Date().toLocaleTimeString("en-BD")
}
callHistory.push(history)



const newHistory = document.getElementById("call-history");


    const div = document.createElement("div")
    div.innerHTML = `
        <div class="flex justify-between mt-4 bg-[#FAFAFA] p-5 items-center rounded-xl">
                <div>
                    <h1 class="font-bold">${history.name}</h1>
                    <p>${history.Number}</p>
                </div>
                <p>${history.Date}</p>
              </div>
    `
    newHistory.appendChild(div)

})

//  <!-- Brac --> 
document.getElementById("brac-click").addEventListener("click", function () {
    const heart = getInnerText("heartCount");

    const heartCount = heart + 1;

    setInnerText(heartCount);

})

document.getElementById("brac-copy").addEventListener("click", function () {
    alert("The number has been copied 16445")
    const copy = getInnerText("copyCount");

    const copyCount = copy + 1;

    setInnerText3(copyCount);

const number = getInnerText2("brac-number");

navigator.clipboard.writeText(number);


})


document.getElementById("brac-call").addEventListener('click', function () {
    const coin = getInnerText('total-coin');
      if (coin === 0) {
        alert('❌আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return ;
    }
    alert("Calling Brac Helpline 16445...")
  
   const totalCoin = coin-20;
    

setInnerText2(totalCoin);

const history ={
    name:"Brac Helpline",
    Number: 16445,
    Date:new Date().toLocaleTimeString("en-BD")
}
callHistory.push(history)



const newHistory = document.getElementById("call-history");


    const div = document.createElement("div")
    div.innerHTML = `
        <div class="flex justify-between mt-4 bg-[#FAFAFA] p-5 items-center rounded-xl">
                <div>
                    <h1 class="font-bold">${history.name}</h1>
                    <p>${history.Number}</p>
                </div>
                <p>${history.Date}</p>
              </div>
    `
    newHistory.appendChild(div)

})

//  <!-- Railway --> 
document.getElementById("railway-click").addEventListener("click", function () {
    const heart = getInnerText("heartCount");

    const heartCount = heart + 1;

    setInnerText(heartCount);

})


document.getElementById("railway-copy").addEventListener("click", function () {
    alert("The number has been copied 163")
    const copy = getInnerText("copyCount");

    const copyCount = copy + 1;

    setInnerText3(copyCount);

const number = getInnerText2("railway-number");

navigator.clipboard.writeText(number);


})


document.getElementById("railway-call").addEventListener('click', function () {
    const coin = getInnerText('total-coin');
      if (coin === 0) {
        alert('❌আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return ;
    }
    alert("Calling Bangladesh Railway Helpline 163...")
  
   const totalCoin = coin-20;
    

setInnerText2(totalCoin);


const history ={
    name:"Bangladesh Railway Helpline",
    Number: 163,
    Date:new Date().toLocaleTimeString("en-BD")
}
callHistory.push(history)



const newHistory = document.getElementById("call-history");


    const div = document.createElement("div")
    div.innerHTML = `
        <div class="flex justify-between mt-4 bg-[#FAFAFA] p-5 items-center rounded-xl">
                <div>
                    <h1 class="font-bold">${history.name}</h1>
                    <p>${history.Number}</p>
                </div>
                <p>${history.Date}</p>
              </div>
    `
    newHistory.appendChild(div)

})


document.getElementById("clear-history").addEventListener('click',function (){
     const newHistory = document.getElementById("call-history");
    newHistory.innerHTML = " ";
   
    
})