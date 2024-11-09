let answer =document.getElementById('answer');
let elements=document.getElementsByClassName('num');
let a=null;
let b=null;
let operation=null;
for(let i=0;i<elements.length;i++)
{
    elements[i].addEventListener('click',calculate);
}
function calculate()
{
    const value = this.textContent;
    if (value==='AC' || value==='DEL')
    {
        a=null;
        b=null;
        operation=null;
        answer.textContent='';
    }
    else if (value === '+' ||value === '-' ||value === '*' || value === '/')
    {
        operation=value;
        answer.textContent=operation;
    }
    else if (value === '=' )
    {
        if(a!=null && b!= null && operation!=null)
        {
            let result;
            if(operation ==='+')
            {
                result = parseFloat(a) + parseFloat(b);
            }
            else if(operation ==='-')
            {
                result = parseFloat(a) - parseFloat(b);
            }
            else if(operation ==='*')
            {
                result = parseFloat(a) * parseFloat(b);
            }
            else if(operation ==='/')
            {
                result = parseFloat(a) / parseFloat(b);
            }
            answer.textContent=result;
            a=result;
            b=null;
            operation=null;
        }
    }
    else
    {
        if (operation === null)
            {
                a = a === null ? value : a + value;
                answer.textContent=a;
            }
        else
            {
                b= b === null ? value : b + value;
                answer.textContent=b;
            }
        }

    }
