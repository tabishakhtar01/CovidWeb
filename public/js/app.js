function myfun()
{
    var gdata = document.getElementById('gdat').value;
    // console.log(gdata);
    if((gdata<0 || gdata>189) || isNaN(gdata)) 
    {
        document.getElementById('welcome').innerHTML = "Wrong Input";
        document.getElementById('hehe').innerHTML = ``
        document.getElementById('hehe1').innerHTML = ``
        document.getElementById('hehe2').innerHTML = ``
        document.getElementById('hehe3').innerHTML = ``
        document.getElementById('hehe4').innerHTML = ``
        document.getElementById('hehe5').innerHTML = ``
        document.getElementById('hehe6').innerHTML = ``
    }
    else
    {
        document.getElementById('welcome').innerHTML = "Hii there,Hope you doing good and Healthy";
        

function covid19(index)
{   
    fetch('https://api.covid19api.com/summary').then((actdata)=>
{
   console.log(actdata);
   return actdata.json();
}).then((actualdata)=>
{    console.log(actualdata);
    const dataget = actualdata.Countries[`${index}`];
    console.log(dataget.Countries);
    document.getElementById('hehe').innerHTML = `${dataget.Country}`

    document.getElementById('hehe1').innerHTML = `New Confirmed cases are : ${dataget.NewConfirmed}`
    document.getElementById('hehe2').innerHTML = `New Recovereds are : ${dataget.NewRecovered}`
    document.getElementById('hehe3').innerHTML = `New Deaths are : ${dataget.NewDeaths}`
    
    document.getElementById('hehe4').innerHTML = `Worldwide Confirmed cases are : ${actualdata.Global.TotalConfirmed}`
    document.getElementById('hehe5').innerHTML = `Worldwide Recovereds are : ${actualdata.Global.TotalRecovered}`
    document.getElementById('hehe6').innerHTML = `Worldwide Deaths are : ${actualdata.Global.TotalDeaths}`
}).catch((error) =>
{
   console.log(`Your selected option may not exist or ${error}.`);
   

});
}
}
covid19(gdata);
} 
myfun();