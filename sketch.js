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
let sparklySound, popSound, dingSound, buttonSound, ovenSound, yaySound;
let cupcakeTrayImageList, font;
let bg1, bg2, bg3, bg4, bg5, bg6;
let cupcakeFlavor, cupcakeFrosting, cupcakeWrapper, cupcakeDeco;
let vanillaFlavor, chocolateFlavor, confettiFlavor, strawberryFlavor, matchaFlavor, redVelvetFlavor;
let whiteFrosting, purpleFrosting, blueFrosting, greenFrosting, orangeFrosting, pinkFrosting;
let blackWrapper, whiteWrapper, pinkWrapper, greenWrapper, purpleWrapper, blueWrapper;
let candleDeco, flowersDeco, heartsDeco, sprinklesDeco, duckDeco, noDeco;

function preload() {
	sparklySound = loadSound('https://kwong09.github.io/cupcake-baker/sfx/sparkleSFX.mov');
	bg1 = loadImage('https://kwong09.github.io/cupcake-baker/assets/screen1Background.png');
	bg2 = loadImage('https://kwong09.github.io/cupcake-baker/assets/screen2Background.png');
	bg3 = loadImage('https://kwong09.github.io/cupcake-baker/assets/screen3Background.png');
	bg4 = loadImage('https://kwong09.github.io/cupcake-baker/assets/startBackground.PNG');
	bg5 = loadImage('https://kwong09.github.io/cupcake-baker/assets/finishedBackground.PNG');
	bg6 = loadImage('https://kwong09.github.io/cupcake-baker/assets/personalizationBackground.PNG');

	font = loadFont('https://kwong09.github.io/cupcake-baker/assets/gentleRemindFont.ttf');

	popSound = loadSound('https://kwong09.github.io/cupcake-baker/sfx/popSFX.mov');
	dingSound = loadSound('https://kwong09.github.io/cupcake-baker/sfx/ovenDing.mov');
	buttonSound = loadSound('https://kwong09.github.io/cupcake-baker/sfx/buttonSFX.mp3');
	ovenSound = loadSound('https://kwong09.github.io/cupcake-baker/sfx/ovenTick.mov');
	yaySound = loadSound('https://kwong09.github.io/cupcake-baker/sfx/fanfareMusic.mp3');
	bowlAni = loadAni("https://kwong09.github.io/cupcake-baker/animation/bowlFrame0.PNG", "https://kwong09.github.io/cupcake-baker/animation/bowlFrame1.PNG", "https://kwong09.github.io/cupcake-baker/animation/bowlFrame2.PNG", "https://kwong09.github.io/cupcake-baker/animation/bowlFrame5.PNG", "https://kwong09.github.io/cupcake-baker/animation/bowlFrame7.PNG", "https://kwong09.github.io/cupcake-baker/animation/bowlFrame4.PNG", "https://kwong09.github.io/cupcake-baker/animation/bowlFrame3.PNG", "https://kwong09.github.io/cupcake-baker/animation/bowlFrame6.PNG", "https://kwong09.github.io/cupcake-baker/animation/bowlFrame8.PNG");
}

function setup() {
	new Canvas(1000, 500);
	displayMode('centered');
	background('white');
	textFont(font);
	strokeWeight(0);

	homeScreenStart = new Sprite(500, 270, 100, 50, 's');
	homeScreenStart.text = 'START';
	homeScreenStart.color = 'white';

	bowl = new Sprite(-100, -100, 650, 400, 'k');
	bowl.addAni(bowlAni);
	bowl.scale = 0.2;
	bowlAni.frameDelay = 9;
	bowl.ani.offset.y = -70;

	egg = new Sprite(-100, -100);
	egg.image = 'https://kwong09.github.io/cupcake-baker/assets/egg0.png';
	egg.scale = 0.07;
	egg.diameter = 45;
	egg.rotationLock = 'true';

	sugar = new Sprite(-100, -100, 500, 600);
	sugar.image = 'https://kwong09.github.io/cupcake-baker/assets/sugarImg.PNG';
	sugar.scale = 0.15;
	sugar.image.offset.y = -30;
	sugar.image.offset.x = 30;
	sugar.rotationLock = 'true';

	butter = new Sprite(-100, -100, 400, 300);
	butter.image = 'https://kwong09.github.io/cupcake-baker/assets/butterImg.PNG';
	butter.scale = 0.15;
	butter.rotationLock = 'true';

	vanilla = new Sprite(-100, -100, 280, 420);
	vanilla.image = 'https://kwong09.github.io/cupcake-baker/assets/vanillaImg.PNG';
	vanilla.scale = 0.15;
	vanilla.rotationLock = 'true';

	flour = new Sprite(-100, -100, 430, 400);
	flour.image = 'https://kwong09.github.io/cupcake-baker/assets/flourImg.PNG';
	flour.scale = 0.15;
	flour.rotationLock = 'true';

	bakingSoda = new Sprite(-100, -100, 470, 570);
	bakingSoda.image = 'https://kwong09.github.io/cupcake-baker/assets/bakingSodaImg.PNG';
	bakingSoda.scale = 0.15;
	bakingSoda.image.offset.y = 20;
	bakingSoda.image.offset.x = 20;
	bakingSoda.rotationLock = 'true';

	salt = new Sprite(-100, -100, 200, 300);
	salt.image = 'https://kwong09.github.io/cupcake-baker/assets/saltImg.PNG';
	salt.scale = 0.15;
	salt.rotationLock = 'true';

	milk = new Sprite(-100, -100, 400, 650);
	milk.image = 'https://kwong09.github.io/cupcake-baker/assets/milkImg.PNG';
	milk.scale = 0.15;
	milk.rotationLock = 'true';

	ingredientList = [egg, sugar, butter, vanilla, flour, bakingSoda, salt, milk];

	oven = new Sprite(-200, -100, 400, 600, 'k');
	oven.image = 'https://kwong09.github.io/cupcake-baker/assets/ovenOpen.PNG';
	oven.scale = 0.5;

	cupcakeTray = new Sprite(-100, -100, 790, 420, 'k');
	cupcakeTray.image = 'https://kwong09.github.io/cupcake-baker/assets/pan0.PNG';
	cupcakeTray.scale = 0.35;

	cupcakeTrayImageList = ['https://kwong09.github.io/cupcake-baker/assets/pan0.PNG', 'https://kwong09.github.io/cupcake-baker/assets/pan1.PNG', 'https://kwong09.github.io/cupcake-baker/assets/pan2.PNG', 'https://kwong09.github.io/cupcake-baker/assets/pan3.PNG', 'https://kwong09.github.io/cupcake-baker/assets/pan4.PNG', 'https://kwong09.github.io/cupcake-baker/assets/pan5.PNG', 'https://kwong09.github.io/cupcake-baker/assets/pan6.PNG', 'https://kwong09.github.io/cupcake-baker/assets/pan7.PNG', 'https://kwong09.github.io/cupcake-baker/assets/pan8.PNG', 'https://kwong09.github.io/cupcake-baker/assets/pan9.PNG', 'https://kwong09.github.io/cupcake-baker/assets/pan10.PNG', 'https://kwong09.github.io/cupcake-baker/assets/pan11.PNG', 'https://kwong09.github.io/cupcake-baker/assets/pan12.PNG']

	pipingBag = new Sprite(-100, -100, 300, 650);
	pipingBag.image = "https://kwong09.github.io/cupcake-baker/assets/pipingBagEmptyImg.PNG";
	pipingBag.scale = 0.15;
	pipingBag.rotationLock = 'true';
	
	instructions = ["Add In The Ingredients!", "Fill The Cupcake Tray!", "Put The Tray In The Oven!", "Pick A Flavor!", "Choose Your Frosting!", "Pick A Wrapper!", "Add A Decoration!"];

	screen1Next = new Sprite(-100, -100, 100, 50, 's');
	screen1Next.color = "white";
	screen1Next.text = "NEXT";

	screen2Next = new Sprite(-100, -100, 100, 50, 's');
	screen2Next.color = "white";
	screen2Next.text = "NEXT";

	screen3Next = new Sprite(-100, -100, 100, 50, 's');
	screen3Next.color = "white";
	screen3Next.text = "NEXT";

	screen4Next = new Sprite(-100, -100, 100, 50, 's');
	screen4Next.color = "white";
	screen4Next.text = "NEXT";

	screen5Next = new Sprite(-100, -100, 100, 50, 's');
	screen5Next.color = "white";
	screen5Next.text = "NEXT";

	screen6Next = new Sprite(-100, -100, 100, 50, 's');
	screen6Next.color = "white";
	screen6Next.text = "NEXT";

	screen7Next = new Sprite(-100, -100, 100, 50, 's');
	screen7Next.color = "white";
	screen7Next.text = "NEXT";

	cupcakeFlavor = new Sprite();
	cupcakeFlavor.image = 'https://kwong09.github.io/cupcake-baker/assets/vanillaFlavor.PNG';
	cupcakeFlavor.image.scale = 0.4;
	cupcakeFlavor.collider = 's';
	cupcakeFlavor.pos = {x: -200, y: -200};

	cupcakeFrosting = new Sprite();
	cupcakeFrosting.image = 'https://kwong09.github.io/cupcake-baker/assets/pinkFrosting.PNG';
	cupcakeFrosting.image.scale = 0.4;
	cupcakeFrosting.collider = 's';
	cupcakeFrosting.pos = {x: -200, y: -200};

	cupcakeWrapper = new Sprite();
	cupcakeWrapper.image = 'https://kwong09.github.io/cupcake-baker/assets/blueWrapper.PNG';
	cupcakeWrapper.image.scale = 0.4;
	cupcakeWrapper.collider = 's';
	cupcakeWrapper.pos = {x: -200, y: -200};

	cupcakeDeco = new Sprite();
	cupcakeDeco.image = 'https://kwong09.github.io/cupcake-baker/assets/blank0.PNG';
	cupcakeDeco.image.scale = 0.4;
	cupcakeDeco.collider = 's';
	cupcakeDeco.pos = {x: -200, y: -200};

	flavorButtons();
	frostingButtons();
	wrapperButtons();
	decorationButtons();

}

function draw() {
	textFont(font);
	textSize(30);
	
	if (screen == 0) {
		clear();
		background(bg4);



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
				bowl.ani = 'https://kwong09.github.io/cupcake-baker/assets/bowlFilled.PNG';
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
				oven.image = 'https://kwong09.github.io/cupcake-baker/assets/ovenOpen.PNG';
				cupcakeTray.image = 'https://kwong09.github.io/cupcake-baker/assets/cupcakeTrayBaked.PNG';
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

			cupcakeFlavor.pos = {x: 250, y: 250};

			vanillaFlavor.pos = {x: 650, y: 190};
			chocolateFlavor.pos = {x: 770, y: 190};
			confettiFlavor.pos = {x: 650, y: 270};
			strawberryFlavor.pos = {x: 770, y: 270};
			matchaFlavor.pos = {x: 650, y: 350};
			redVelvetFlavor.pos = {x: 770, y: 350};

			screen4Next.pos = {x: 875, y: 425};

			buttonSound.play();
		}

	}

	if (screen == 4) {
		clear();
		background(bg6);

		text(instructions[instructionsCounter], 500, 70);

		
		if (vanillaFlavor.mouse.presses()) {
			cupcakeFlavor.image = 'https://kwong09.github.io/cupcake-baker/assets/vanillaFlavor.PNG';
			cupcakeFlavor.image.scale = 0.4;
			buttonSound.play();
		}
		if (chocolateFlavor.mouse.presses()) {
			cupcakeFlavor.image = 'https://kwong09.github.io/cupcake-baker/assets/chocolateFlavor.PNG';
			cupcakeFlavor.image.scale = 0.4;
			buttonSound.play();
		}
		if (confettiFlavor.mouse.presses()) {
			cupcakeFlavor.image = 'https://kwong09.github.io/cupcake-baker/assets/confettiFlavor.PNG';
			cupcakeFlavor.image.scale = 0.4;
			buttonSound.play();
		}
		if (strawberryFlavor.mouse.presses()) {
			cupcakeFlavor.image = 'https://kwong09.github.io/cupcake-baker/assets/strawberryFlavor.PNG';
			cupcakeFlavor.image.scale = 0.4;
			buttonSound.play();
		}
		if (matchaFlavor.mouse.presses()) {
			cupcakeFlavor.image = 'https://kwong09.github.io/cupcake-baker/assets/matchaFlavor.PNG';
			cupcakeFlavor.image.scale = 0.4;
			buttonSound.play();
		}
		if (redVelvetFlavor.mouse.presses()) {
			cupcakeFlavor.image = 'https://kwong09.github.io/cupcake-baker/assets/redVelvetFlavor.PNG';
			cupcakeFlavor.image.scale = 0.4;
			buttonSound.play();
		}

		if (screen4Next.mouse.presses()) {
			screen += 1;
			vanillaFlavor.remove();
			chocolateFlavor.remove();
			confettiFlavor.remove();
			strawberryFlavor.remove();
			matchaFlavor.remove();
			redVelvetFlavor.remove();

			instructionsCounter += 1;

			screen5Next.pos = {x: 875, y: 425};
			cupcakeFrosting.pos = {x: 250, y: 250};

			whiteFrosting.pos = {x: 650, y: 190};
			pinkFrosting.pos = {x: 770, y: 190};
			orangeFrosting.pos = {x: 650, y: 270};
			greenFrosting.pos = {x: 770, y: 270};
			blueFrosting.pos = {x: 650, y: 350};
			purpleFrosting.pos = {x: 770, y: 350};

			buttonSound.play();
		}
	}

	if (screen == 5) {
		clear();
		background(bg6);

		text(instructions[instructionsCounter], 500, 70);

		
		if (whiteFrosting.mouse.presses()) {
			cupcakeFrosting.image = 'https://kwong09.github.io/cupcake-baker/assets/whiteFrosting.PNG';
			cupcakeFrosting.image.scale = 0.4;
			buttonSound.play();
		}
		if (pinkFrosting.mouse.presses()) {
			cupcakeFrosting.image = 'https://kwong09.github.io/cupcake-baker/assets/pinkFrosting.PNG';
			cupcakeFrosting.image.scale = 0.4;
			buttonSound.play();
		}
		if (orangeFrosting.mouse.presses()) {
			cupcakeFrosting.image = 'https://kwong09.github.io/cupcake-baker/assets/orangeFrosting.PNG';
			cupcakeFrosting.image.scale = 0.4;
			buttonSound.play();
		}
		if (greenFrosting.mouse.presses()) {
			cupcakeFrosting.image = 'https://kwong09.github.io/cupcake-baker/assets/greenFrosting.PNG';
			cupcakeFrosting.image.scale = 0.4;
			buttonSound.play();
		}
		if (blueFrosting.mouse.presses()) {
			cupcakeFrosting.image = 'https://kwong09.github.io/cupcake-baker/assets/blueFrosting.PNG';
			cupcakeFrosting.image.scale = 0.4;
			buttonSound.play();
		}
		if (purpleFrosting.mouse.presses()) {
			cupcakeFrosting.image = 'https://kwong09.github.io/cupcake-baker/assets/purpleFrosting.PNG';
			cupcakeFrosting.image.scale = 0.4;
			buttonSound.play();
		}

		if (screen5Next.mouse.presses()) {
			screen += 1;
			whiteFrosting.remove();
			pinkFrosting.remove();
			orangeFrosting.remove();
			greenFrosting.remove();
			blueFrosting.remove();
			purpleFrosting.remove();

			instructionsCounter += 1;

			screen6Next.pos = {x: 875, y: 425};
			cupcakeWrapper.pos = {x: 250, y: 250};

			whiteWrapper.pos = {x: 650, y: 190};
			blackWrapper.pos = {x: 770, y: 190};
			pinkWrapper.pos = {x: 650, y: 270};
			greenWrapper.pos = {x: 770, y: 270};
			blueWrapper.pos = {x: 650, y: 350};
			purpleWrapper.pos = {x: 770, y: 350};

			buttonSound.play();
		}

	}

	if (screen == 6) {
		clear();
		background(bg6);

		text(instructions[instructionsCounter], 500, 70);

		
		if (whiteWrapper.mouse.presses()) {
			cupcakeWrapper.image = 'https://kwong09.github.io/cupcake-baker/assets/whiteWrapper.PNG';
			cupcakeWrapper.image.scale = 0.4;
			buttonSound.play();
		}
		if (blackWrapper.mouse.presses()) {
			cupcakeWrapper.image = 'https://kwong09.github.io/cupcake-baker/assets/blackWrapper.PNG';
			cupcakeWrapper.image.scale = 0.4;
			buttonSound.play();
		}
		if (pinkWrapper.mouse.presses()) {
			cupcakeWrapper.image = 'https://kwong09.github.io/cupcake-baker/assets/pinkWrapper.PNG';
			cupcakeWrapper.image.scale = 0.4;
			buttonSound.play();
		}
		if (greenWrapper.mouse.presses()) {
			cupcakeWrapper.image = 'https://kwong09.github.io/cupcake-baker/assets/greenWrapper.PNG';
			cupcakeWrapper.image.scale = 0.4;
			buttonSound.play();
		}
		if (blueWrapper.mouse.presses()) {
			cupcakeWrapper.image = 'https://kwong09.github.io/cupcake-baker/assets/blueWrapper.PNG';
			cupcakeWrapper.image.scale = 0.4;
			buttonSound.play();
		}
		if (purpleWrapper.mouse.presses()) {
			cupcakeWrapper.image = 'https://kwong09.github.io/cupcake-baker/assets/purpleWrapper.PNG';
			cupcakeWrapper.image.scale = 0.4;
			buttonSound.play();
		}

		if (screen6Next.mouse.presses()) {
			screen += 1;
			whiteWrapper.remove();
			blackWrapper.remove();
			pinkWrapper.remove();
			greenWrapper.remove();
			blueWrapper.remove();
			purpleWrapper.remove();

			instructionsCounter += 1;

			screen7Next.pos = {x: 875, y: 425};
			cupcakeDeco.pos = {x: 250, y: 250};

			candleDeco.pos = {x: 650, y: 190};
			flowersDeco.pos = {x: 770, y: 190};
			heartsDeco.pos = {x: 650, y: 270};
			sprinklesDeco.pos = {x: 770, y: 270};
			duckDeco.pos = {x: 650, y: 350};
			noDeco.pos = {x: 770, y: 350};

			buttonSound.play();
		}

	}

	if (screen == 7) {
		clear();
		background(bg6);

		text(instructions[instructionsCounter], 500, 70);

		
		if (candleDeco.mouse.presses()) {
			cupcakeDeco.image = 'https://kwong09.github.io/cupcake-baker/assets/candleDeco.PNG';
			cupcakeDeco.image.scale = 0.4;
			buttonSound.play();
		}
		if (flowersDeco.mouse.presses()) {
			cupcakeDeco.image = 'https://kwong09.github.io/cupcake-baker/assets/flowersDeco.PNG';
			cupcakeDeco.image.scale = 0.4;
			buttonSound.play();
		}
		if (heartsDeco.mouse.presses()) {
			cupcakeDeco.image = 'https://kwong09.github.io/cupcake-baker/assets/heartsDeco.PNG';
			cupcakeDeco.image.scale = 0.4;
			buttonSound.play();
		}
		if (sprinklesDeco.mouse.presses()) {
			cupcakeDeco.image = 'https://kwong09.github.io/cupcake-baker/assets/sprinklesDeco.PNG';
			cupcakeDeco.image.scale = 0.4;
			buttonSound.play();
		}
		if (duckDeco.mouse.presses()) {
			cupcakeDeco.image = 'https://kwong09.github.io/cupcake-baker/assets/duckDeco.PNG';
			cupcakeDeco.image.scale = 0.4;
			buttonSound.play();
		}
		if (noDeco.mouse.presses()) {
			cupcakeDeco.image = 'https://kwong09.github.io/cupcake-baker/assets/blank0.PNG';
			cupcakeDeco.image.scale = 0.4;
			buttonSound.play();
		}

		if (screen7Next.mouse.presses()) {
			screen += 1;
			candleDeco.remove();
			flowersDeco.remove();
			heartsDeco.remove();
			sprinklesDeco.remove();
			duckDeco.remove();
			noDeco.remove();

			instructionsCounter += 1;

			buttonSound.play();

			cupcakeFlavor.pos = {x: 500, y: 250};
			cupcakeFrosting.pos = {x: 500, y: 250};
			cupcakeWrapper.pos = {x: 500, y: 250};
			cupcakeDeco.pos = {x: 500, y: 250};

			screen7Next.remove();
			screen6Next.remove();
			screen5Next.remove();
			screen4Next.remove();

			yaySound.play();

		}

	}

	if (screen == 8) {
		clear();
		background(bg5);
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
			object.image = 'https://kwong09.github.io/cupcake-baker/assets/pipingBagFullImg.PNG';
			bowl.color = 'red';
			pipingBagFull = true;
			popSound.play();
		}

		if (object.overlaps(cupcakeTray)) {
			if (pipingBagFull === true) {
				cupcakeBatterCount += 1;
				cupcakeTray.image = cupcakeTrayImageList[cupcakeBatterCount];
				object.image = "https://kwong09.github.io/cupcake-baker/assets/pipingBagEmptyImg.PNG";
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
				oven.image = 'https://kwong09.github.io/cupcake-baker/assets/ovenClosed.PNG';
				ovenSound.play();

			}
		}
	
	}

	

}

function flavorButtons() {

	vanillaFlavor = new Sprite(-200, -200, 100, 50, 's');
	vanillaFlavor.color = "white";
	vanillaFlavor.text = "Vanilla";

	chocolateFlavor = new Sprite(-200, -200, 100, 50, 's');
	chocolateFlavor.color = "white";
	chocolateFlavor.text = "Chocolate";

	confettiFlavor = new Sprite(-200, -200, 100, 50, 's');
	confettiFlavor.color = "white";
	confettiFlavor.text = "Confetti";

	strawberryFlavor = new Sprite(-200, -200, 100, 50, 's');
	strawberryFlavor.color = "white";
	strawberryFlavor.text = "Strawberry";

	matchaFlavor = new Sprite(-200, -200, 100, 50, 's');
	matchaFlavor.color = "white";
	matchaFlavor.text = "Matcha";

	redVelvetFlavor = new Sprite(-200, -200, 100, 50, 's');
	redVelvetFlavor.color = "white";
	redVelvetFlavor.text = "Red Velvet";
}

function frostingButtons() {

	whiteFrosting = new Sprite(-200, -200, 100, 50, 's');
	whiteFrosting.color = "white";
	whiteFrosting.text = "White";

	pinkFrosting = new Sprite(-200, -200, 100, 50, 's');
	pinkFrosting.color = "white";
	pinkFrosting.text = "Pink";

	orangeFrosting = new Sprite(-200, -200, 100, 50, 's');
	orangeFrosting.color = "white";
	orangeFrosting.text = "Orange";

	greenFrosting = new Sprite(-200, -200, 100, 50, 's');
	greenFrosting.color = "white";
	greenFrosting.text = "Green";

	blueFrosting = new Sprite(-200, -200, 100, 50, 's');
	blueFrosting.color = "white";
	blueFrosting.text = "Blue";

	purpleFrosting = new Sprite(-200, -200, 100, 50, 's');
	purpleFrosting.color = "white";
	purpleFrosting.text = "Purple";

}

function wrapperButtons() {

	whiteWrapper = new Sprite(-200, -200, 100, 50, 's');
	whiteWrapper.color = "white";
	whiteWrapper.text = "White";

	blackWrapper = new Sprite(-200, -200, 100, 50, 's');
	blackWrapper.color = "white";
	blackWrapper.text = "Black";

	pinkWrapper = new Sprite(-200, -200, 100, 50, 's');
	pinkWrapper.color = "white";
	pinkWrapper.text = "Pink";

	greenWrapper = new Sprite(-200, -200, 100, 50, 's');
	greenWrapper.color = "white";
	greenWrapper.text = "Green";

	blueWrapper = new Sprite(-200, -200, 100, 50, 's');
	blueWrapper.color = "white";
	blueWrapper.text = "Blue";

	purpleWrapper = new Sprite(-200, -200, 100, 50, 's');
	purpleWrapper.color = "white";
	purpleWrapper.text = "Purple";

}

function decorationButtons() {

	candleDeco = new Sprite(-200, -200, 100, 50, 's');
	candleDeco.color = "white";
	candleDeco.text = "Candle";

	flowersDeco = new Sprite(-200, -200, 100, 50, 's');
	flowersDeco.color = "white";
	flowersDeco.text = "Flowers";

	heartsDeco = new Sprite(-200, -200, 100, 50, 's');
	heartsDeco.color = "white";
	heartsDeco.text = "Hearts";

	sprinklesDeco = new Sprite(-200, -200, 100, 50, 's');
	sprinklesDeco.color = "white";
	sprinklesDeco.text = "Sprinkles";

	duckDeco = new Sprite(-200, -200, 100, 50, 's');
	duckDeco.color = "white";
	duckDeco.text = "Ducks";

	noDeco = new Sprite(-200, -200, 100, 50, 's');
	noDeco.color = "white";
	noDeco.text = "None";

}