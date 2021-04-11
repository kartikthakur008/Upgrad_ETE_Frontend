
function get(x) {
    return document.getElementById(x);
}
get('countryname').style.background="lightblue";

document.getElementById("get").addEventListener('click', async()=>{

    

    var country = get('countryname').value;
    var Stdate = get('Startdate').value;
    var Endate = get('Enddate').value;

    if(country ==='' || Stdate===''|| Endate=='')
    {
        return alert("Empty Field");
    }
    get('countryname').style.background="";

    await fetch(`https://api.covid19api.com/country/${country}?from=${Stdate}T00:00:00Z&to=${Endate}T00:00:00Z`).then(response=> response.json()).then(data=>{
        result = data;
        appendData(data);
    });
});


function appendData(data) {
    get('data1').innerHTML='<p> Confirmed cases: '+data[0]["Confirmed"]+
    '<p> Active cases: '+data[0]["Active"]+
    '<p> Deaths cases: '+data[0]["Deaths"];
    get('data1').classList.add("div-style");

    get('data2').innerHTML='<p> Confirmed cases: '+data[0]["Confirmed"]+
    '<p> Active cases: '+data[1]["Active"]+
    '<p> Deaths cases: '+data[1]["Deaths"];
    get('data2').classList.add("div-style");

    get('data3').innerHTML='<p> Confirmed cases: '+data[0]["Confirmed"]+
    '<p> Active cases: '+data[2]["Active"]+
    '<p> Deaths cases: '+data[2]["Deaths"];
    get('data3').classList.add("div-style");

}