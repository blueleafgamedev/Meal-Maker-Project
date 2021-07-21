const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },

    get appetizers() {
      return this._courses.appetizers;
    },

    set appetizers(appetizers) {
      this._courses.appetizers = appetizers
    },

    get mains() {
      return this._courses.mains;
    },

    set mains(mains) {
      this._courses.mains = mains
    },

    get desserts() {
      return this._courses.desserts;
    },

    set desserts(desserts) {
      this._courses.desserts = desserts
    },

    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },

  addDishToCourse(courseName, dishName, dishPrice) {
     const dish = {
       name: dishName,
       price: dishPrice
    };
    return menu._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal consisted of the ${appetizer.name}, ${main.name}, and ${dessert.name}. The total cost is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'House Salad', 5.00);
menu.addDishToCourse('mains', 'Fillet Mignon', 32.00);
menu.addDishToCourse('mains', 'Lobster Pasta', 22.50);
menu.addDishToCourse('desserts', 'Chocolate Brownie Volcano Cake', 7.00);

console.log(menu.generateRandomMeal());
