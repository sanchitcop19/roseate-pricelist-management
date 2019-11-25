function create_field(){
  
  let div = document.createElement('div');
  div.setAttribute('class', 'group');
  
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Organization');
  let price = document.createElement('input');
  price.setAttribute('type', 'text');
  price.setAttribute('placeholder', 'Price');
  
  let span_highlight = document.createElement('span');
  //span_highlight.setAttribute('class', 'highlight');
   
  let span_bar = document.createElement('span');
  span_bar.setAttribute('class', 'bar');
  
  let label = document.createElement('label');
  label.innerHTML = "Organization";
  
  div.appendChild(input);
  div.appendChild(price);
  div.appendChild(span_highlight);
  div.appendChild(span_bar);
///  div.appendChild(label);
  
  return div;
}

function add_organization(){
  let form = document.querySelector('form');
  form.appendChild(create_field());
}

function remove_organization(){
  let groups = document.getElementsByClassName('group');
  
  let last_child = groups[groups.length-1];
  last_child.parentNode.removeChild(last_child);
}

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
 
plus.addEventListener('click', add_organization);
minus.addEventListener('click', remove_organization);
 
let form = document.querySelector('form#specform');
console.log(form);

let specification = {
  
}