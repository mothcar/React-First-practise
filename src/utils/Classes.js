class Car {
  constructor(color, name) {
    this.color = color,
    this.name = name
  }

  putPeddal() {
    console.log("Brrr~~~~~~")
  }
}

class Domain {
  constructor(name, type) {
    this.name = name,
    this.type = type
  }
}

export {Car, Domain}

