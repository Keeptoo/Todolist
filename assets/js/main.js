function Todo() {
    let stain = document.querySelector('#stain').value;
    let stainedetails = document.querySelector('#staindetails').value;
    let create = document.createElement('div')/* je creer une div */
    let title = document.createElement('h2')
    create.appendChild(title) /* title devient l'enfant de la variable create */ 
    title.innerText = stain /* j'insérte le variable stain dans la variable title */
    let p = document.createElement('p')
    create.appendChild(p)
    p.innerText = stainedetails
    let div = document.createElement('div')
    create.appendChild(div)
    document.querySelector('#container').appendChild(create)/* create devient l'enfant de l'id container dans la page html selectionner grace a un queryselector*/
    let button = document.createElement('input')
    button.setAttribute('type', 'button') /* j'attribut le type button a mon input creer a prelable*/
    button.value = "Supprimer" /* j'attribue cette fois une valuer a ma variable button qui est mon input de type button*/
    button.addEventListener('click', (event) => { /* => me permet d'appelé un fonction plus facilement*/
        delet(event) /* j'appelle donc la fonction delet en precisent le parametre que je veut lié a ma fonction delete*/
    })
    div.appendChild(button)
    clear() /* j'appelle ma fonction clear dans ma fonction Todo*/
}
function delet(elem) {
    let target = elem.target /* je cible mon element */
    let parent = target.parentNode.parentNode /* je cible le parent du parent de mon element */
    parent.remove()/*je supprime le parent du parent de mon element */
}
function clear() {
    document.querySelector('#stain').value = '';/* je selectionne l'id stain de mon html et dit qu'il est egal a une chaine de caractere vide */
    console.log(document.querySelector('#stain'));
    document.querySelector('#staindetails').value = '';
}
