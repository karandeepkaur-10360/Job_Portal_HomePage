let form = document.querySelector("#jobForm");
let div = document.querySelector("#sub");

form.addEventListener("submit", addTask);

function addTask(event) {
    event.preventDefault();

    let name1 = document.querySelector("#name1").value;
    let cname = document.querySelector("#cname").value;
    let loc1 = document.querySelector("#loc").value;
    let description = document.querySelector("#description").value;
    let contact = document.querySelector("#contact").value;

    
    let newdiv = document.createElement("div");
    newdiv.classList.add("job-card");

    newdiv.innerHTML = `
        <h2>${name1}</h2>
        <p><strong>Company:</strong> ${cname}</p>
        <p><strong>Location:</strong> ${loc1}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    div.appendChild(newdiv);

   
    newdiv.querySelector(".delete-btn").addEventListener("click", function () {
        newdiv.remove();
    });

  
    newdiv.querySelector(".edit-btn").addEventListener("click", function () {
        document.querySelector("#name1").value = name1;
        document.querySelector("#cname").value = cname;
        document.querySelector("#loc").value = loc1;
        document.querySelector("#description").value = description;
        document.querySelector("#contact").value = contact;

        newdiv.remove(); // remove old card
    });

    form.reset(); 
}