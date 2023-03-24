const todotext =document.getElementById("todo-text");
const todoUl=document.getElementById("todoUl");

function addtask()
{
    if(todotext.value.trim() === '')
    {
        alert("enter something");
    }
    else
    {
        console.log(todotext.value.trim());
        const li=document.createElement('li');

        const spantext=document.createElement('span');

        const TextNode=document.createTextNode(todotext.value.trim());

        spantext.appendChild(TextNode);

        const spanClose=document.createElement('span');
        spanClose.classList.add('close');
        spanClose.innerHTML='&times;';

        li.appendChild(spantext);
        li.appendChild(spanClose);
        todoUl.appendChild(li);
   }
}