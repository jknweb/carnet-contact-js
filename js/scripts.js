let btnAjout = document.getElementById("btnAjout");
let form = document.getElementById("form");
let btnSubmit = document.getElementById("btn-submit");
let listItem = document.getElementById("list-item");
let annuler = document.getElementById("annuler");

let contacts = [];

btnAjout.addEventListener("click", (e) => {
  btnAjout.classList.toggle("d-none");
  form.classList.toggle("d-none");
});

annuler.addEventListener("click", (e) => {
  btnAjout.classList.toggle("d-none");
  form.classList.toggle("d-none");
});

// Ajout des contacts

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = new FormData(e.target);
  //let timestamp = Date.parse(data.DateNaiss);
  //let dateBirth = new Date(timestamp);

  let contact = {
    'nom': data.get("nom"),
    'prenom': data.get("prenom"),
    'pays': data.get("pays"),
    'genre': data.get("genre"),
    'email': data.get("email"),
    'telephone': data.get("fone")
    //'age': (new Date().getFullYear()) - (dateBirth.getFullYear())
    //'avatar' : data.get('avatar')
  };

  contacts.push(contact);
  renderListView() 
});

function renderListView() {
  listItem.innerHTML = "";

  for (const contact of contacts) {
    let temp = `

        <div class="contact-item d-flex" onclick ="showmore(this)">
              <div class="profile">
                <img src="/images/profile.png" width="100px" alt="" class="img-fluid rounded-circle bg-dark"/>
              </div>
              <div class="info flex-grow-1 ms-3">
                <h2 class="h4 contact-name">${contact.nom} ${contact.prenom}</h2>
                <p class="m-0"></p>
                <p class="m-0">${contact.pays}</p>
                <p class="m-0">${contact.genre} </p>
                <p class="m-0 more d-none">${contact.email}</p>
                <p class="m-0 more d-none">${contact.telephone}</p>
                <p class="m-0 more d-none">${contact.DateNaiss} ans</p>
                
              </div>

              <div class="actions">
                <button class="btn btn-secondary">
                  <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-danger">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
            `;
            listItem.innerHTML +=temp
  }
  
}

function showmore(e) {
    let more = e.getElementsByClassName('more')
    for (const m of more) {
       m.classList.toggle('d-none')

    }
}
renderListView();
