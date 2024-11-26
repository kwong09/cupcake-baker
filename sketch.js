let screen = 0;
let homeScreenStart;
let bowl, egg, sugar, butter, vanilla, flour, bakingSoda, salt, milk;
let ingredientList;
let ingredientCounter = 8;
let screen1Next, screen2Next, screen3Next;
let pipingBag, pipingBagFull = false;
let instructions, instructionsCounter = 0;
let cupcakeTray, cupcakeBatterCount = 0;
let bowlAni;
let ovenOpen = true, ovenTimer = 10, timerStart = false, oven;

function preload() {
	bowlAni = loadAni("/animation/bowlFrame0.PNG", "/animation/bowlFrame1.PNG", "/animation/bowlFrame2.PNG", "/animation/bowlFrame5.PNG", "/animation/bowlFrame7.PNG", "/animation/bowlFrame4.PNG", "/animation/bowlFrame3.PNG", "/animation/bowlFrame6.PNG", "/animation/bowlFrame8.PNG");
}

function setup() {
	new Canvas(1000, 500);
	displayMode('centered');
	background('white');

	homeScreenStart = new Sprite(500, 250, 100, 50, 's');
	homeScreenStart.text = 'Start';
	homeScreenStart.color = 'white';

	bowl = new Sprite(-100, -100, 650, 400, 'k');
	bowl.addAni(bowlAni);
	bowl.scale = 0.2;
	bowlAni.frameDelay = 9;
	bowl.ani.offset.y = -70;

	egg = new Sprite(-100, -100);
	egg.image = '/ingredients/egg0.png';
	egg.scale = 0.07;
	egg.diameter = 45;
	egg.rotationLock = 'true';

	sugar = new Sprite(-100, -100, 500, 600);
	sugar.image = '/ingredients/sugarImg.PNG';
	sugar.scale = 0.15;
	sugar.image.offset.y = -30;
	sugar.image.offset.x = 30;
	sugar.rotationLock = 'true';

	butter = new Sprite(-100, -100, 400, 300);
	butter.image = '/ingredients/butterImg.PNG';
	butter.scale = 0.15;
	butter.rotationLock = 'true';

	vanilla = new Sprite(-100, -100, 280, 420);
	vanilla.image = '/ingredients/vanillaImg.PNG';
	vanilla.scale = 0.15;
	vanilla.rotationLock = 'true';

	flour = new Sprite(-100, -100, 430, 400);
	flour.image = '/ingredients/flourImg.PNG';
	flour.scale = 0.15;
	flour.rotationLock = 'true';

	bakingSoda = new Sprite(-100, -100, 470, 570);
	bakingSoda.image = '/ingredients/bakingSodaImg.PNG';
	bakingSoda.scale = 0.15;
	bakingSoda.image.offset.y = 20;
	bakingSoda.image.offset.x = 20;
	bakingSoda.rotationLock = 'true';

	salt = new Sprite(-100, -100, 200, 300);
	salt.image = '/ingredients/saltImg.PNG';
	salt.scale = 0.15;
	salt.rotationLock = 'true';

	milk = new Sprite(-100, -100, 400, 650);
	milk.image = '/ingredients/milkImg.PNG';
	milk.scale = 0.15;
	milk.rotationLock = 'true';

	ingredientList = [egg, sugar, butter, vanilla, flour, bakingSoda, salt, milk];

	oven = new Sprite(-100, -100, 200, 200, 'k');
	oven.color = 'green';

	cupcakeTray = new Sprite(-100, -100, 150, 100, 'k');
	cupcakeTray.color = 'gray';

	pipingBag = new Sprite(-100, -100, 50, 70);
	pipingBag.color = 'yellow';
	pipingBag.rotationLock = 'true';
	
	instructions = ["Add In The Ingredients!", "Fill the Piping Bag"];

	screen1Next = new Sprite(-100, -100, 100, 50, 's');
	screen1Next.color = "pink";
	screen1Next.text = "next";

	screen2Next = new Sprite(-100, -100, 100, 50, 's');
	screen2Next.color = "pink";
	screen2Next.text = "next";

	screen3Next = new Sprite(-100, -100, 100, 50, 's');
	screen3Next.color = "pink";
	screen3Next.text = "next";

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

		textSize(20);
		textAlign("center");
		text(instructions[instructionsCounter], 500, 70);
		text("Ingredients Left: " + ingredientCounter, 500, 100);


		for (i = 0; i < ingredientList.length; i++) {
			ingredientDrag(ingredientList[i]);
		}
		
		//setting limits for x and y
		xMaxAll();
		yMaxAll();
		xMinAll();
		yMinAll();


		if (ingredientCounter == 0) {
			bowl.speed = 5;
			bowl.moveTo(1300, 400);

			screen1Next.pos = {x: 500, y: 250};

			if (screen1Next.mouse.presses()) {
				screen += 1;
				bowl.pos = {x: -100, y: 400};
				bowl.moveTo(200, 400);
				pipingBag.pos = {x: 500, y: 250};
				cupcakeTray.pos = {x: 750, y: 250};
				screen1Next.pos = {x: -100, y: -100};
				instructionsCounter += 1;
			}
		}

	}

	if (screen == 2) {
		clear();
		background("skyblue");
		text(instructions[instructionsCounter], 500, 70);

		dragPipingBag(pipingBag);
		xMax(pipingBag);
		xMin(pipingBag);
		yMax(pipingBag);
		yMin(pipingBag);

	}

	if (screen == 3) {
		clear();
		background("pink");
		text(instructions[instructionsCounter], 500, 70);
		text("Timer: " + round(ovenTimer), 500, 150);

		dragCupcakeTray(cupcakeTray);

		if (timerStart == true) {
			if (ovenTimer > 0) {
				ovenTimer -= 1/60;
				cupcakeTray.pos = {x: -100, y: -100};
			}

			if (ovenTimer < 0) {
				ovenTimer = 0;
				ovenOpen = true;
				cupcakeTray.color = 'purple';
				cupcakeTray.pos = {x: 800, y: 400};
				screen3Next.pos = {x: 500, y: 200};
			}
		}

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
			ingredientCounter -= 1;
		}
	}
}

function dragPipingBag(object) {
	if (object.mouse.dragging()) {
		object.x = mouse.x;
		object.y = mouse.y;

		if (object.overlaps(bowl)) {
			object.color = 'pink';
			bowl.color = 'red';
			pipingBagFull = true;
		}

		if (object.overlaps(cupcakeTray)) {
			if (pipingBagFull === true) {
				cupcakeTray.color = 'red';
				object.color = 'red'
				pipingBagFull = false;
				cupcakeBatterCount += 1;
			}
			
		}

		if (cupcakeBatterCount == 12) {
			bowl.color = 'green';
			bowl.moveTo(-100, 400);
			bowl.speed = 5;
			pipingBag.remove();

			screen2Next.pos = {x: 500, y: 250};
	
			if (bowl.x == -100) {
				bowl.remove();
			}

		}
	}


	if (screen2Next.mouse.presses()) {
		screen += 1;
		screen2Next.pos = {x: -100, y: -100};

		oven.pos = {x: 500, y: 350};
		cupcakeTray.pos = {x: 200, y: 400};
		cupcakeTray.collider = 'd';
		cupcakeTray.rotationLock = 'true';
	}
}

function dragCupcakeTray(object) {
	object.collider = 'd';
	object.rotationLock = 'true';
	if (object.mouse.dragging()) {
		object.x = mouse.x;
		object.y = mouse.y;

		if (object.overlaps(oven)) {
			if (ovenOpen == true) {
				ovenOpen = false;
				timerStart = true;
				cupcakeTray.pos = {x: -100, y: -100};
			}
		}
	
	}

	

}
