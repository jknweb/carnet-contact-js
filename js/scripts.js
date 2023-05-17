let btnAjout = document.getElementById("btnAjout");
let form = document.getElementById("form");
let btnSubmit = document.getElementById("btn-submit");
let listItem = document.getElementById("list-item");
let annuler = document.getElementById("annuler");


let contacts = [];

btnAjout.addEventListener("click", (e) => {
  btnAjout.classList.toggle("d-none");
  form.classList.toggle("display");
});

annuler.addEventListener("click", (e) => {
  btnAjout.classList.toggle("d-none");
  form.style.display.toggle(".formulaireSaisie")
});

// Ajout des contacts

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = new FormData(e.target);
  //let avatarImg = document.getElementById('avatar')
  //let avatar = document.createElement('img')
  
  //let timestamp = Date.parse(data.DateNaiss);
  //let dateBirth = new Date(timestamp);

  let contact = {
    'nom': data.get("nom"),
    'prenom': data.get("prenom"),
    'pays': data.get("pays"),
    'genre': data.get("genre"),
    'email': data.get("email"),
    'telephone': data.get("fone"),
   // 'avatar' : avatar.src = url.createObjectUrl(data.get('avatarImg')
  };

  contacts.push(contact);
  renderListView() 
});

function renderListView() {
  listItem.innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    let temp = `

        <div class="contact-item d-flex" onclick ="showmore(this)">
              <div class="profile">
                <img src="/images/profile.png" width="100px" alt="" class="img-fluid rounded-circle bg-dark"/>
              </div>
              <div class="info flex-grow-1 ms-3">
                <h2 class="h4 contact-name">${contacts[i].nom} ${contacts[i].prenom}</h2>
                <p class="m-0"></p>
                <p class="m-0">${contacts[i].pays}</p>
                <p class="m-0">${contacts[i].genre} </p>
                <p class="m-0 more d-none">${contacts[i].email}</p>
                <p class="m-0 more d-none">${contacts[i].telephone}</p>
                <p class="m-0 more d-none">${contacts[i].DateNaiss} ans</p>
                
              </div>

              <div class="actions">
                <button class="btn btn-secondary" onclick="editContact(${i} )">
                  <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-danger" onclick="deleteContact(${i} )">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
            `;
            listItem.innerHTML +=temp
  }
  
}

function deleteContact(i) {
  contacts.splice(i, 1)

  renderListView();
}

function editContact(i) {
  let contact = contacts[i];

  renderListView();
}

function showmore(e) {
    let more = e.getElementsByClassName('more')
    for (const m of more) {
       m.classList.toggle('d-none')

    }
}
renderListView();
