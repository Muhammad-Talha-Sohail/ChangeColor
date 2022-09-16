function chgcolor()
{
    const arr =['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
    let str = "#";
  
   
    for(let i=0;i<=5;i++)
    {
        let rand = Math.random()*arr.length;
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
    document.getElementById("re").innerText=str;
    document.body.style.background= str; 
}