var ForagerBee = function() {
	Grub.call(this);
	Bee.call(this);
	//overwite superclas
	this.age = 10;
	this.job = 'find pollen';
	//new properties
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

//new method
ForagerBee.prototype.forage = function(treasure){
	this.treasureChest.push(treasure);
};