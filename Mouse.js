function Mouse(name) {
	// body...
	this.name = name;
}
Mouse.prototype.die = function(){
	this.dead = true;
};
module.exports = Mouse;