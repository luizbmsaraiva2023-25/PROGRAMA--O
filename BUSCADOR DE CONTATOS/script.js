let p = document.querySelector('p');
let input = document.querySelector('input');


const contacts = [
    { name: 'Alice', phone: '123-456-7890'},
    { name: 'Bob', phone: '987-654-3210'},
    { name: 'Charlie', phone: '555-555-5555'},
    { name: 'Diana', phone: '444-444-4444'},
    { name: 'Eve', phone: '333-333-3333'},
    { name: 'Frank', phone: '222-222-2222'},
    { name: 'Luiz', phone: '111-111-1111'},
]


function search(){

for(let i = 0; i < contacts.length; i++){

    if(input.value.toLowerCase() === contacts[i].name.toLowerCase()){
        p.innerHTML = `Contato Encontrado Nome:${contacts[i].name} Tel:${contacts[i].phone}`
    
        break
    
    } else {
        p.innerHTML = 'Contato Não Encontrado'

    }


}




}