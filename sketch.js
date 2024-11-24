let screen = 0;
let homeScreenStart;
let bowl, egg, sugar;

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
	egg.image = 'https://kwong09.github.io/cupcake-baker/ingredients/egg0.png';
	egg.scale = 0.07;
	egg.diameter = 45;
	egg.rotationLock = 'true';

	sugar = new Sprite(-100, -100, 100, 50,);
	sugar.color = 'purple';

}

function draw() {
	if (screen == 0) {
		clear();
		background('skyblue');

		if (homeScreenStart.mouse.presses()) {
			screen += 1;
			homeScreenStart.pos = {x: -100, y: -100};

			bowl.pos = {x: 500, y: 250};
			egg.pos = {x: 700, y: 250};
			sugar.pos = {x: 300, y: 250};
		}
	}

	if (screen == 1) {
		clear();
		background('white');



		if (egg.mouse.hovering() || sugar.mouse.hovering()) {
			mouse.cursor = 'grab';
		} else {
			mouse.cursor = 'default';
		}
		
		if (egg.mouse.dragging()) {
			egg.x = mouse.x;
			egg.y = mouse.y;
		}

		if (egg.overlaps(bowl)) {
			egg.remove();
		}


		if (sugar.mouse.dragging()) {
			sugar.x = mouse.x;
			sugar.y = mouse.y;
		}

		if (sugar.overlaps(bowl)) {
			sugar.remove();
		}
		
		


	}

}
