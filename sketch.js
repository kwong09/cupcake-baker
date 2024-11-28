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
let sparklySound, popSound, dingSound, buttonSound;
let cupcakeTrayImageList, font;
let bg1, bg2, bg3;
let cupcakeBase, cupcakeFrosting, cupcakeWrapper;

function preload() {
	sparklySound = loadSound('/sfx/sparkleSFX.mov');
	bg1 = loadImage('/assets/screen1Background.png');
	bg2 = loadImage('/assets/screen2Background.png');
	bg3 = loadImage('/assets/screen3Background.png');

	font = loadFont('/assets/gentleRemindFont.ttf');

	popSound = loadSound('/sfx/popSFX.mov');
	dingSound = loadSound('/sfx/ovenDing.mov');
	buttonSound = loadSound('/sfx/buttonSFX.mp3');
	bowlAni = loadAni("/animation/bowlFrame0.PNG", "/animation/bowlFrame1.PNG", "/animation/bowlFrame2.PNG", "/animation/bowlFrame5.PNG", "/animation/bowlFrame7.PNG", "/animation/bowlFrame4.PNG", "/animation/bowlFrame3.PNG", "/animation/bowlFrame6.PNG", "/animation/bowlFrame8.PNG");
}

function setup() {
	new Canvas(1000, 500);
	displayMode('centered');
	background('white');
	textFont(font);
	strokeWeight(0);

	homeScreenStart = new Sprite(500, 250, 100, 50, 's');
	homeScreenStart.text = 'START';
	homeScreenStart.color = 'white';

	bowl = new Sprite(-100, -100, 650, 400, 'k');
	bowl.addAni(bowlAni);
	bowl.scale = 0.2;
	bowlAni.frameDelay = 9;
	bowl.ani.offset.y = -70;

	egg = new Sprite(-100, -100);
	egg.image = '/assets/egg0.png';
	egg.scale = 0.07;
	egg.diameter = 45;
	egg.rotationLock = 'true';

	sugar = new Sprite(-100, -100, 500, 600);
	sugar.image = '/assets/sugarImg.PNG';
	sugar.scale = 0.15;
	sugar.image.offset.y = -30;
	sugar.image.offset.x = 30;
	sugar.rotationLock = 'true';

	butter = new Sprite(-100, -100, 400, 300);
	butter.image = '/assets/butterImg.PNG';
	butter.scale = 0.15;
	butter.rotationLock = 'true';

	vanilla = new Sprite(-100, -100, 280, 420);
	vanilla.image = '/assets/vanillaImg.PNG';
	vanilla.scale = 0.15;
	vanilla.rotationLock = 'true';

	flour = new Sprite(-100, -100, 430, 400);
	flour.image = '/assets/flourImg.PNG';
	flour.scale = 0.15;
	flour.rotationLock = 'true';

	bakingSoda = new Sprite(-100, -100, 470, 570);
	bakingSoda.image = '/assets/bakingSodaImg.PNG';
	bakingSoda.scale = 0.15;
	bakingSoda.image.offset.y = 20;
	bakingSoda.image.offset.x = 20;
	bakingSoda.rotationLock = 'true';

	salt = new Sprite(-100, -100, 200, 300);
	salt.image = '/assets/saltImg.PNG';
	salt.scale = 0.15;
	salt.rotationLock = 'true';

	milk = new Sprite(-100, -100, 400, 650);
	milk.image = '/assets/milkImg.PNG';
	milk.scale = 0.15;
	milk.rotationLock = 'true';

	ingredientList = [egg, sugar, butter, vanilla, flour, bakingSoda, salt, milk];

	oven = new Sprite(-200, -100, 400, 600, 'k');
	oven.image = '/assets/ovenOpen.PNG';
	oven.scale = 0.5;

	cupcakeTray = new Sprite(-100, -100, 790, 420, 'k');
	cupcakeTray.image = '/assets/pan0.PNG';
	cupcakeTray.scale = 0.35;

	cupcakeTrayImageList = ['/assets/pan0.PNG', '/assets/pan1.PNG', '/assets/pan2.PNG', '/assets/pan3.PNG', '/assets/pan4.PNG', '/assets/pan5.PNG', '/assets/pan6.PNG', '/assets/pan7.PNG', '/assets/pan8.PNG', '/assets/pan9.PNG', '/assets/pan10.PNG', '/assets/pan11.PNG', '/assets/pan12.PNG']

	pipingBag = new Sprite(-100, -100, 300, 650);
	pipingBag.image = "/assets/pipingBagEmptyImg.PNG";
	pipingBag.scale = 0.15;
	pipingBag.rotationLock = 'true';
	
	instructions = ["Add In The Ingredients!", "Fill The Cupcake Tray!", "Put The Tray In The Oven!"];

	screen1Next = new Sprite(-100, -100, 100, 50, 's');
	screen1Next.color = "white";
	screen1Next.text = "NEXT";

	screen2Next = new Sprite(-100, -100, 100, 50, 's');
	screen2Next.color = "white";
	screen2Next.text = "NEXT";

	screen3Next = new Sprite(-100, -100, 100, 50, 's');
	screen3Next.color = "white";
	screen3Next.text = "NEXT";

}

function draw() {
	textFont(font);
	textSize(30);
	
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

			buttonSound.play();
		}
	}

	if (screen == 1) {
		clear();
		background(bg1);

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
				bowl.ani = '/assets/bowlFilled.PNG';
				bowl.moveTo(200, 400);
				pipingBag.pos = {x: 500, y: 250};
				cupcakeTray.pos = {x: 750, y: 220};
				screen1Next.pos = {x: -100, y: -100};
				instructionsCounter += 1;

				buttonSound.play();
			}
		}

	}

	if (screen == 2) {
		clear();
		background(bg2);
		text(instructions[instructionsCounter], 500, 70);

		dragPipingBag(pipingBag);
		xMax(pipingBag);
		xMin(pipingBag);
		yMax(pipingBag);
		yMin(pipingBag);

	}

	if (screen == 3) {
		clear();
		background(bg3);
		text(instructions[instructionsCounter], 500, 70);
		text("Timer: " + round(ovenTimer), 500, 150);

		cupcakeTray.scale = 0.2;

		dragCupcakeTray(cupcakeTray);
		xMax(cupcakeTray);
		xMin(cupcakeTray);
		yMax(cupcakeTray);
		yMin(cupcakeTray);

		if (timerStart == true) {
			if (ovenTimer > 0) {
				ovenTimer -= 1/60;
				cupcakeTray.pos = {x: -100, y: -100};
			}

			if (ovenTimer < 0) {
				ovenTimer = 0;
				ovenOpen = true;
				oven.image = '/assets/ovenOpen.PNG';
				cupcakeTray.image = '/assets/cupcakeTrayBaked.PNG';
				cupcakeTray.pos = {x: 800, y: 400};
				screen3Next.pos = {x: 175, y: 350};
				dingSound.play();

			}
		}

		if (screen3Next.mouse.presses()) {
			oven.remove();
			cupcakeTray.remove();
			screen += 1;
			screen3Next.remove();
			instructionsCounter += 1;

			buttonSound.play();
		}

	}

	if (screen == 4) {
		clear();
		background('skyblue');
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
			sparklySound.play();
		}
	}
}

function dragPipingBag(object) {
	if (object.mouse.dragging()) {
		object.x = mouse.x;
		object.y = mouse.y;

		if (object.overlaps(bowl)) {
			object.image = '/assets/pipingBagFullImg.PNG';
			bowl.color = 'red';
			pipingBagFull = true;
			popSound.play();
		}

		if (object.overlaps(cupcakeTray)) {
			if (pipingBagFull === true) {
				cupcakeBatterCount += 1;
				cupcakeTray.image = cupcakeTrayImageList[cupcakeBatterCount];
				object.image = "/assets/pipingBagEmptyImg.PNG";
				pipingBagFull = false;
				popSound.play();
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

		buttonSound.play();
		instructionsCounter += 1;
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
				oven.image = '/assets/ovenClosed.PNG';
			}
		}
	
	}

	

}
