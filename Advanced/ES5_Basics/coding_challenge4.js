var mark = {
    fullname : 'Mark',
    mass: 80,
    markHeigher : 1.69,
    calcMarkBmi : function (){
        this.markBmi = this.mass / (this.markHeigher * this.markHeigher)
    }
}

mark.calcMarkBmi();
console.log(mark.markBmi);