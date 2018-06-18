var RetiredForagerBee = function() {
	Grub.call(this);
	ForagerBee.call(this);
	//overwrite superclass
	this.age = 40;
	this.job = 'gamble';
	this.canFly = false;
	this.color = 'grey';
	this.treasureChest = [];
};

RetiredForagerBee.prototype = Object.create(Grub.prototype);
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

//overwrite superclass
RetiredForagerBee.prototype.forage = function(){
	return 'I am too old, let me play cards instead';
};

//new methods
RetiredForagerBee.prototype.gamble = function(treasure){
	this.treasureChest.push(treasure);
};