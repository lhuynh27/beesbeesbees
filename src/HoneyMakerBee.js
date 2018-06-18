var HoneyMakerBee = function() {
	//inherit this.food & Grub.prototype.eat from Grub
	Grub.call(this);
	//inherit this.color from Bee
	Bee.call(this);
	//overwrite superclass
	this.age = 10;
	this.job = 'make honey';
	//new properies
	this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Grub.prototype);
HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

//new methods
HoneyMakerBee.prototype.makeHoney = function(){
	this.honeyPot++;
	debugger;
};

HoneyMakerBee.prototype.giveHoney = function(){
	this.honeyPot--;
};	
