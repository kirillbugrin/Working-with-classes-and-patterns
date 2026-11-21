class Drink {
  constructor(name) {
    this.name = name;
  }

  price() {
    return 0;
  }

  describe() {
    return `${this.name} — ${this.price()} руб.`;
  }
}

class Coffee extends Drink {
  price() {
    return 150;
  }
}

class Tea extends Drink {
  price() {
    return 100;
  }
}


class Latte extends Coffee {
  price() {
    return super.price() + 50;
  }
}


class Cafe {
  constructor(payment) {
    this.payment = payment;
  }

  order(drink) {
    return `${drink.describe()} ${this.payment.pay(drink.price())}`;
  }
}

class CardPayment {
  pay(sum) {
    return `Оплачено картой: ${sum} руб.`;
  }
}

class CashPayment {
  pay(sum) {
    return `Оплачено наличными: ${sum} руб.`;
  }
}


console.log(new Coffee('Кофе').describe());
console.log(new Tea('Чай').describe());
console.log(new Latte('Латте').describe());

const cafe1 = new Cafe(new CardPayment());
const cafe2 = new Cafe(new CashPayment());

console.log(cafe1.order(new Latte('Латте')));
console.log(cafe2.order(new Tea('Чай')));