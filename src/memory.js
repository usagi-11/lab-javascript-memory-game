class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
      const shuffleCardArr = [];
      while (this.cards.length >0) {
        const randomIndex = Math.floor(Math.random()*this.cards.length)
        const randomCard = this.cards[randomIndex];
        shuffleCardArr.push(randomCard);
        this.cards.splice(randomIndex, 1);
      }
      this.cards = shuffleCardArr;
  }

  checkIfPair(card1, card2) {
      this.pairsClicked +=1;
      if (card1 === card2) {
        this.pairsGuessed +=1;
        return true;
      }
      else{
        return false;
      }
  }

  checkIfFinished() {
    const totalPairs = this.cards.length /2;
    if (this.pairsGuessed === totalPairs) {
      return true;
    }
    else{
      return false;
    }
  }
}
