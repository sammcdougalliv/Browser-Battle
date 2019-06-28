new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    badGuyHealth: 100,
    gameOn: false,
    winner: true,
    whoWon: '',
    turns: []
  },
  methods: {
    start: function(){
      this.gameOn = true;
      this.playerHealth = 100;
      this.badGuyHealth = 100;
      this.turns = [];
    },
    attack: function(){
      var damage = this.calcDamage(3, 10);
      this.turns.unshift({
        isPlayer: true,
        text: 'Player attacks Bad Guy for ' + damage
      });
      this.badGuyHealth -= damage;

      if(this.checkWin()){
        return;
      }

      this.badGuyAttack();

      if(this.playerHealth <= 0){
        alert("you lose!");
        this.gameOn = false;

      }
      this.checkWin();
    },
    sAttack: function(){
      var damage = this.calcDamage(10, 20);
      this.badGuyHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player special attacks Bad Guy for ' + damage
      });
      if(this.checkWin()) {
        return;
      }
      this.badGuyAttack();
    },
    heal: function(){
      this.playerHealth += 10;
      if(this.playerHealth >= 100){
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      });
      this.badGuyAttack();

    },
    giveUp: function(){
      this.gameOn = false;

    },
    badGuyAttack: function(){
      var damage = this.calcDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Bad Guy attacks Player for ' + damage
      });
      this.checkWin();
    },
    calcDamage: function(max, min){
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function(){
      if(this.badGuyHealth <= 0){
        alert("you win!");
        if(confirm("Play again?")){
          this.start();
        } else {
          this.gameOn = false;
        }
        return true;
      } else if (this.playerHealth <= 0){
        alert("you lose!");
        if(confirm("Play again?")){
          this.start();
        } else {
          this.gameOn = false;
        }
        return true;
      }
      return false;
    }
  }
});
