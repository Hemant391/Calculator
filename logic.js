let output=""
let history=""
let buttons=document.querySelectorAll('.btn')
let clean=document.querySelector(".clean")
let row=document.querySelectorAll(".row")
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',(h)=>{
        //by clicking on the equal to button
        if(h.target.innerHTML=="="){
            output=eval(output);
            document.querySelector('input').value=output
        

        }
    //by clicking on the AC button
        else if(h.target.innerHTML=="AC"){
            output=""
            document.querySelector('input').value=output
        }
        else if(h.target.innerHTML=="H"){
            row.classList.add('hide')  
        }
         else {
            
            //  console.log(h.target)
             output=output+ h.target.innerHTML;
             document.querySelector('input').value=output
        }
        
        
        
    })
})

//By clicking on the X button
clean.addEventListener('click',()=>{
    // console.log( output.length)
    if(typeof(output)=='string'){
    let newoutput=output.substring(0,output.length-1)
    output=newoutput
    
    document.querySelector('input').value=newoutput
    }
    else {
        output=''
        
        document.querySelector('input').value=output
    }
    
})