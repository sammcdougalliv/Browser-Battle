new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    badGuyHealth: 100,
    gameOn: false,
    winner: true,
    whoWon: ''
  },
  methods: {
    start: function(){
      this.gameOn = true;
      this.playerHealth = 100;
      this.badGuyHealth = 100;
    },
    attack: function(){

      var damage = this.calcDamage(3, 10);
      this.badGuyHealth -= damage;

      if(this.checkWin()){
        return;
      }

      damage = this.calcDamage(5, 12);
      this.playerHealth -= damage;

      if(this.playerHealth <= 0){
        alert("you lose!");
        this.gameOn = false;

      }
      this.checkWin();
    },
    sAttack: function(){

    },
    heal: function(){

    },
    giveUp: function(){

    },
    calcDamage: function(max, min){
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function(){
      if(this.badGuyHealth <= 0){
        if(confirm("Play again?")){
          this.start();
        } else {
          this.gameOn = false;
        }
        return true;
      } else if (this.playerHealth <= 0){
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
