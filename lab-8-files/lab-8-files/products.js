//access the JSON file using XHR object

let requestURL = 'https://Simranjotkaler.github.io/JSON-WEEK8/products.json';

//create new XHR object, XSR object allows to fetch data without a page refresh

let request = new XMLHttpRequest();
//opening a new request
request.open('GET',requestURL);
//request Type
request.responseType = 'json';
//send the request using the send method
request.send();

//wait for the request to be returned, store the respons in a variable, invoke pizzaTypes function with PizzaTypes as argument.
request.onload = function(){
	let weirdproduct = request.response;
	console.log(weirdproduct);
	productTypes(weirdproduct);
};

function productTypes(jsonObj){
	let productTypes = jsonObj.productTypes;
	let section = document.querySelector('section');
	for(let i=0; i<productTypes.length;i++){
		//build HTML elements dynamically
		let article = document.createElement('article');
		let h2 = document.createElement('h2');
		let img = document.createElement('img');
		let p1 = document.createElement('p');
		let p2 = document.createElement('p');
		let ul = document.createElement('ul');

		img.setAttribute('src','https://Simranjotkaler.github.io/JSON-WEEK8/assets/' + productTypes[i].image);
		img.setAttribute('alt',productTypes[i].image);
		h2.textContent = productTypes[i].name;
		p1.textContent = 'description '+productTypes[i].description;
		p2.textContent = 'Price '+productTypes[i].price;
		let features = productTypes[i].features;
		for(let j =0; j<features.length;j++){
			let listItem = document.createElement('li');
			listItem.textContent = features[j];
			ul.appendChild(listItem);
		}

		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(p1);
		article.appendChild(p2);
		article.appendChild(ul);
		section.appendChild(article);

	}
}
