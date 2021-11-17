const money=document.querySelector('.money')
const currencyFormatter = new Intl.NumberFormat("en-us",{
    style:"currency",currency:"INR",maximumFractionDigits:0,
})
setupTrash();
async function setupTrash(){
    const amountRaised=await fetch("https://tscache.com/donation_total.json").then(res=>res.json())
    .then(data=>data.count)
    money.innerHTML=currencyFormatter.format(amountRaised*74.28)
}