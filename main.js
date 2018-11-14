var app = new Vue({
  el: '#app',
  // dataの定義
  data: {
    credits: 0,
    allGpaSum: 0,
    gpaPoints: {
      // gpaの各ポイントの定義
      a: 4, am: 3.7, bp: 3.3, b: 3, bm: 2.7, cp: 2.3, c: 2, cm: 1.7, dp: 1.3, d: 1.0, dm: 0.7
    },
    gpa:{
      a: 0,
      am: 0,
      bp: 0,
      b: 0,
      bm: 0,
      cp: 0,
      c: 0,
      cm: 0,
      dp: 0,
      d: 0,
      dm: 0
    },
    gpaSum: {
      a: 0,
      am: 0,
      bp: 0,
      b: 0,
      bm: 0,
      cp: 0,
      c: 0,
      cm: 0,
      dp: 0,
      d: 0,
      dm: 0
    }
  },
  computed: {
    Aave: function () {
      return Math.floor(this.allGpaSum / this.totalCredit * 100) / 100
    },
    totalCredit: function () {
      this.credits = 0
      for ( var key in this.gpa ) {
        this.credits += this.gpa[key]
      }
      return this.credits
    },
    sumGpaGrade: function () {
      this.allGpaSum = 0
      for ( var key in this.gpa ){
        this.allGpaSum += this.gpa[key] * this.gpaPoints[key]
      }
      return this.allGpaSum
    }
  }
})
