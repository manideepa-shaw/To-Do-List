// function addnew()
// {
//     if(document.getElementsByClassName('desc')[0].value.length == 0)
//     {
//         alert("Please Enter a Task");
//     }
//     else
//     {
//         let task=document.getElementsByClassName("desc")[0].value;
        
//         //create an array of lists if no. of task is 0
//         if(localStorage.getItem('itemsJson')==null)
//         {
//         arr=[];
//         arr.push(task);
//         localStorage.setItem('itemsJson', JSON.stringify(arr));
//         console.log(localStorage.setItem('itemsJson', JSON.stringify(arr)))

//     }
//     //for creating list when task is greater than 0
//         else{
//             arrstr = localStorage.getItem('itemsJson')
//             arr = JSON.parse(arrstr);
//             arr.push(task);
//             localStorage.setItem('itemsJson', JSON.stringify(arr))
//         }

//         //displaying the table
//         show=document.getElementById('list');
//         let str="";
//         arr.forEach((element,index) => {
//             str +=`
//             <div id="list">
//             <ul>
//             <li class="tasks">${element}</li>
//             <li><button class="del"><i class="fa fa-trash-o"></i></button> </li>
//             </ul>
//             </div>
//             `
//         });
//         show.innerHTML=str;
//         document.getElementsByClassName("desc")[0].value="";
//     }
//     var curr_task=document.getElementsByClassName('del');
//     for(i=0;i<curr_task.length;i++)
//     {
//         curr_task[i].onclick=function()
//         {
//             this.parentNode.remove();
//         }
//     }
//     var t=document.getElementsByClassName("tasks");
//     for(i=0;i<t.length;i++)
//     {
//         t[i].onclick=function()
//         {
//             this.classList.toggle('completed');
//         }
//     }
// }



function addnew(){
    if(document.querySelector('.desc').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('.list').innerHTML += `
            <div class="list">
                <span class="tasks">
                    ${document.querySelector('.desc').value}
                </span>
                <button class="delete">
                    <i class="fa fa-trash-o"></i></button> 
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".tasks");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector(".desc").value = "";
    }
}