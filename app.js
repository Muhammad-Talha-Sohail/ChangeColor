function chgcolor()
{  
    let str = "#";
    for(let i=0;i<6;i++)
    {
        let rand = Math.random()*15;
        rnd = rand.toFixed(0)
        if(rnd==='10')
        {
            str +="A";
        }
        else if(rnd==='11')
        {
            str +="B";
        }
        else if(rnd==='12')
        {
            str +="C";
        }
        else if(rnd==='13')
        {
            str +="D";
        }
        else if(rnd==='14')
        {
            str +="E";
        }
        else if(rnd==='15')
        {
            str +="F";
        }
        else
        {
      str += rnd;
        }
    }
    document.getElementById("re").innerText+=" \n"+str;
    document.body.style.background= str; 
}
