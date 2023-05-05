
let btnAjout = document.getElementById('ajouter');
let inputName = document.getElementById('nom');
let inputPostNom = document.getElementById('postNom');
let inputPrenom = document.getElementById('prenom');
let inputPays = document.getElementById('pays');
let inputGenre = document.getElementById('genre');
let inputMail = document.getElementById('mail');
let inputPhone = document.getElementById('phone');
let inputDate = document.getElementById('date');
let srcImage = document.getElementById('image');
//let inputImage = document.getElementById('img-item');
let saveButton = document.getElementById('envoyer');
let cancelButton = document.getElementById('annuler');
let contactItem = document.querySelector('.items');
let deleteItem = document.getElementById('#delete');
let modifItem = document.getElementById('#maj');
//let deleteItem = document.querySelector('.delete');
//let modifItem = document.querySelector('.maj');

let titreForm = document.querySelector('.header-form');

let formulaire = document.getElementById('formList');

let contacts = [];


btnAjout.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Fait');
    formulaire.style.display = "flex";
    formulaire.style.flexDirection = "row";
    //titreForm.style.display = "flex";
    //formulaire.style.display != 'none'; 
})

function supprItem() {

        //Event.preventDefault();
        console.log('Item Supprimé')

}

deleteItem.addEventListener('click', supprItem())
modifItem.addEventListener('click', updateItem())

function updateItem() {

        //Event.preventDefault();
        console.log('Item Mise à jour');

}
/*


deleteItem.addEventListener('click', function(event){
    
    console.log("Element supprimé")
    //loadUser();
    //formulaire.style.
    //formulaire.style.display != 'none'; 
})

saveButton.addEventListener('click', function(e){
    e.preventDefault();
    

})*/

saveButton.addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    let newName = inputName.value ; 
    let newPost = inputPostNom.value ; 
    let newPrenom = inputPrenom .value ; 
    let newPays = inputPays.value ;  
    let newGenre = inputGenre.value ;  
    let newMail = inputMail.value ; 
    let newPhone = inputPhone.value ;  
    let newDate = inputDate.value ;  
    //let newImage = inputImage.value;
    //let img = srcImage.value;   

    let newContact = [
        {
            "name" : newName, 
            "postnom" : newPost, 
            "prenom"  : newPrenom ,
            "pays" :newPays,  
            "genre" : newGenre,  
            "mail" : newMail, 
            "phone" : newPhone,  
            "date" : newDate,  
            //"image" : newImage 
        }
    ];

    /*img.onchange = (e) => {
        if (img.files[0])
        newImage.src = URL.createObjectURL(img.files[0]);
    }*/

        contacts.push(newContact);
        loadUser();
        console.log(contacts)

})

function loadUser(){
    contactItem.innerHTML = ''
 
    for (let [contact,val] of contacts){
        let contactUser = `
        <div class="items-gen">
                <div class="profil">
                <img src="${contact.image}" id="img-item">
                    <div class="item-details">
                        <div class="item-data">
                            <h3>${contact.name}</h3>
                            <p>${contact.postnom}</p>
                            <p>${contact.prenom}</p>
                            <p>${contact.pays}</p>
                            <p>${contact.genre}</p>
                            <p>${contact.mail}</p>
                            <p>${contact.phone}</p>
                            <p>${contact.date}</p>
                        </div>
                    </div>
                </div>
                <div class="btn-edit">
                            <button id="maj"><i class="bi bi-pencil-square btnSize"></i></button>
                            <button id="delete"><i class="bi bi-trash3-fill  btnSizeDel"></i></button>
                </div>
        </div>
                `
        
        contactItem.innerHTML += contactUser
    }
}

loadUser();