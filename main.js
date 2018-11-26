var app = new Vue({
  el: '#app',
  // dataの定義
  data: {
    gpagot: 0,
    creditsgot: 0,
    credits: 0,
    allGpaSum: 0,
    gpaPoints: {
      // gpaの各ポイントの定義
      a: 4,
      am: 3.7,
      bp: 3.3,
      b: 3,
      bm: 2.7,
      cp: 2.3,
      c: 2,
      cm: 1.7,
      dp: 1.3,
      d: 1.0,
      dm: 0.7,
      f: 0
    },
    gpa:{
      // 各gpaの獲得単位数
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
      dm: 0,
      f: 0
    }
  },
  computed: {
    // GPAを算出
    GPAe: function () {
      return Math.floor(this.sumGpaGrade / this.totalCredit * 100) / 100
    },
    // 総合獲得単位数を算出
    totalCredit: function () {
      this.credits = 0
      for ( var key in this.gpa ) {
        this.credits += this.gpa[key]
      }
      this.credits += this.creditsgot
      return this.credits
    },
    // gpaとgpaPointsをかけたものをさらにかけ合わせる
    sumGpaGrade: function () {
      this.allGpaSum = 0
      for ( var key in this.gpa ){
        this.allGpaSum += this.gpa[key] * this.gpaPoints[key]
      }
      this.allGpaSum += this.gpagot * this.creditsgot
      return this.allGpaSum
    }
  },
  methods: {
    plusGrade: function ( grade ) {
      this.gpa[grade]++
    },
    minusGrade: function ( grade ){
      this.gpa[grade]--
    }
  }
})
