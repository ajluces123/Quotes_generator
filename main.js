console.log('Hello World!');
const body = document.querySelector('.container')
const input = document.getElementById('input');
const inputs = document.querySelector('.input');
const name = document.getElementById('name');
const categ = document.getElementById('categ');
const quote = document.getElementById('quote');
const copy = document.getElementById('copy');
const p = document.querySelector('footer');
const show = document.querySelector('.pop-box')
const share = document.querySelector('#share')
const close = document.querySelector('#close')

const lContain = document.querySelector('.link-container');

document.getElementById('search').addEventListener('click', () => {
  let select = input.value;
  const url = 'https://api.api-ninjas.com/v1/quotes?category=' + select;
  async function getData() {
    const request = new Request(url, {
      headers: {
        'X-Api-Key': '6q11rALx5CjhemYPfRQXug==3mzPOfYF1Wbooy1w'
      }
    })
    const response = await fetch(request)
    const data = await response.json()
    name.innerHTML = 'Author: ' + data[0].author; 
    categ.innerHTML = 'Category: ' + data[0].category;  
    quote.innerHTML = 'Qoute: ' + data[0].quote; 
    lContain.style.display = 'block';
    quote.style.display = 'block';
    p.style.display = 'block';

  }
  getData()
})
copy.addEventListener('click', () => {
  const quote = document.getElementById('quote');
  let textCopy = quote;
  textCopy.select();
  document.execCommand("copy");
  console.log(textCopy.value)
})
share.addEventListener('click', () => {
      show.style.display = 'block';
      body.style.filter = 'blur(3px)';
      inputs.style.filter = 'blur(3px)';
})
close.addEventListener('click', () => {
        body.style.filter = 'blur(0)';
        inputs.style.filter = 'blur(0)';
      show.style.display = 'none';
})