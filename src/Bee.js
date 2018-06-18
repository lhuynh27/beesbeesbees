var Bee = function() {
	//inherit this.food and this.eat
	Grub.call(this);
	//overwrite superclass
	this.age = 5;
	this.color = 'yellow';
	//new property
	this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.constructor = Bee;