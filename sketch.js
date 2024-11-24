let screen = 0;
let homeScreenStart;
let bowl, egg, sugar, butter, vanilla, flour, bakingSoda, salt, milk;
let ingredientList;
let ingredientCounter;

function setup() {
	new Canvas(1000, 500);
	displayMode('centered');
	background('white');

	homeScreenStart = new Sprite(500, 250, 100, 50, 's');
	homeScreenStart.text = 'Start';
	homeScreenStart.color = 'white';

	bowl = new Sprite(-100, -100, 100, 50, 'k');
	bowl.color = 'skyblue';

	egg = new Sprite(-100, -100);
	egg.image = '/ingredients/egg0.png';
	egg.scale = 0.07;
	egg.diameter = 45;
	egg.rotationLock = 'true';

	sugar = new Sprite(-100, -100, 100, 50);
	sugar.color = 'purple';
	sugar.rotationLock = 'true';

	butter = new Sprite(-100, -100, 100, 50);
	butter.color = 'yellow';
	butter.rotationLock = 'true';

	vanilla = new Sprite(-100, -100, 100, 50);
	vanilla.color = 'green';
	vanilla.rotationLock = 'true';

	flour = new Sprite(-100, -100, 100, 50);
	flour.color = 'red';
	flour.rotationLock = 'true';

	bakingSoda = new Sprite(-100, -100, 100, 50);
	bakingSoda.color = 'orange';
	bakingSoda.rotationLock = 'true';

	salt = new Sprite(-100, -100, 100, 50);
	salt.color = 'pink';
	salt.rotationLock = 'true';

	milk = new Sprite(-100, -100, 100, 50);
	milk.color = 'lavender';
	milk.rotationLock = 'true';

	ingredientList = [egg, sugar, butter, vanilla, flour, bakingSoda, salt, milk];
}

function draw() {
	if (screen == 0) {
		clear();
		background('skyblue');

		if (homeScreenStart.mouse.presses()) {
			screen += 1;
			homeScreenStart.pos = {x: -100, y: -100};

			bowl.pos = {x: 500, y: 400};

			egg.pos = {x: 110, y: 200};
			sugar.pos = {x: 220, y: 250};
			butter.pos = {x: 330, y: 200};
			vanilla.pos = {x: 440, y: 250};
			flour.pos = {x: 550, y: 200};
			bakingSoda.pos = {x: 660, y: 250};
			salt.pos = {x: 770, y: 200};
			milk.pos = {x: 880, y: 250};
		}
	}

	if (screen == 1) {
		clear();
		background('white');


		for (i = 0; i < ingredientList.length; i++) {
			ingredientDrag(ingredientList[i]);
		}
		
		//setting limits for x and y
		xMaxAll();
		yMaxAll();
		xMinAll();
		yMinAll();

	}

}


//functions
let ingredient;
function xMax(ingredient) {
	if (ingredient.x > 1000) {
		ingredient.x = 1000;
	}
}
function yMax(ingredient) {
	if (ingredient.y > 500) {
		ingredient.y = 500;
	}
}
function xMin(ingredient) {
	if (ingredient.x < 0) {
		ingredient.x = 0;
	}
}
function yMin(ingredient) {
	if (ingredient.y < 0) {
		ingredient.y = 0;
	}
}


function xMaxAll() {
	for (let i = 0; i < ingredientList.length; i++ ) {
		xMax(ingredientList[i]);
	}
}
function yMaxAll() {
	for (let i = 0; i < ingredientList.length; i++ ) {
		yMax(ingredientList[i]);
	}
}
function xMinAll() {
	for (let i = 0; i < ingredientList.length; i++ ) {
		xMin(ingredientList[i]);
	}
}
function yMinAll() {
	for (let i = 0; i < ingredientList.length; i++ ) {
		yMin(ingredientList[i]);
	}
}

function ingredientDrag(ingredient) {
	if (ingredient.mouse.dragging()) {
		ingredient.x = mouse.x;
		ingredient.y = mouse.y;

		if (ingredient.overlaps(bowl)) {
			ingredient.remove();
			ingredientCounter += 1;
		}
	}
}
