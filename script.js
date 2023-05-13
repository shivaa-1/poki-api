 // to display the 50 pokemon on the screen
const url =`https://pokeapi.co/api/v2/pokemon/1`;
const cards= document.getElementById('cards');
const pokemons_number = 50;

cards.innerHTML="";

    for (let i = 1; i <=pokemons_number; i++){
        // getpokemons(i);
        async function getpokemons(i){
            const newLocal = await fetch(url.replace(1, i));
            const pokedata = newLocal;
            const data = await pokedata.json();
            console.log(`Name:${data.name}`);
        
            // showdata.innerHTML="";
        
            cards.innerHTML+=`
            <div class="card">
            <div class="imgsection">
            <img src="${data.sprites.back_shiny}">
            </div>
            <div class="about">
            <h4>Name: ${data.name}</h4>
            <p>Move: ${data.moves[0].move.name}</p>
            <p>Weight: ${data.weight}</p>
            <button onclick="${data.id}" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Know More</button>
            </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                 <div class="modal-dialog">
                    <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                <div class="modal-body">
                    <input type="text" id="name" class="" placeholder="Enter Your Username">
                    <input type="text" id="avatar" class="" placeholder="Enter Your Avatar Url">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button onclick="savechanges()" type="button" class="btn btn-primary"  data-bs-dismiss="modal">Save changes</button>
                </div>
                    </div>
                 </div>
            </div>
            `
            console.log(cards);
            // let showdata = document.getElementById('cards');
            // showdata.innerHTML=output ;
        }

        getpokemons(i);
    }
