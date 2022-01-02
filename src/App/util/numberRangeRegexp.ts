//正規表現パーツ文字の生成
function makeBrackets(str1, str2) {
  //str1とstr2の範囲を生成
  if (str1 == str2) {
    return str1
  } else {
    return `[${str1}-${str2}]`
  }
}

function makeBraces(str1: string, str2: string = null) {
  if (str1 === str2) {
    if (parseInt(str1) == 1) {
      return ''
    } else {
      return `{${str1}}`
    }
  } else {
    if (str2) {
      return `{${str1},${str2}}`
    } else {
      if (str1 === '1') {
        return ''
      } else {
        return `{${str1}}`
      }
    }
  }
}

function addMinus(str) {
  //マイナス記号を追加
  return `-(${str})`
}

//数値範囲の正規表現を生成
export const numberRangeRegexp = (start, end) => {
  if (start === '' && end === '') {
    //どちらも空の場合、終了
    return ''
  } else if (start === '' || end === '') {
    //どちらかの値が空の場合、同じ値を入れる
    if (start === '') start = end
    if (end === '') end = start
  }

  var start_value = parseInt(start)
  var end_value = parseInt(end)

  if (start_value == end_value) {
    //start = end の場合
    return String(start_value)
  }

  var isMinus = false

  if (start_value < 0 && end_value < 0) {
    //どちらもマイナス値の場合
    isMinus = true
    start_value = -start_value
    end_value = -end_value
  }

  if (start_value > end_value) {
    //start > end の場合、値を入れ替える
    var temp = start_value
    start_value = end_value
    end_value = temp
  }

  var ex

  if (start_value < 0 && end_value >= 0) {
    //startのみマイナス値の場合
    if (start_value == -1) {
      //startが-1の場合
      ex = String(start_value) + '|'
    } else {
      ex = addMinus(makeNumberRangeRegexp(1, -start_value)) + '|'
    }
    if (end_value == 0) {
      //endが0の場合
      ex = ex + '0'
    } else {
      ex = ex + makeNumberRangeRegexp(0, end_value)
    }
  } else {
    ex = makeNumberRangeRegexp(start_value, end_value)
    if (isMinus) ex = addMinus(ex)
  }
  return ex
}

function makeNumberRangeRegexp(start_value, end_value) {
  //正規表現生成部 start_value < end_valueであること

  var start_str = String(start_value) //startの文字列
  var end_str = String(end_value) //endの文字列
  var start_digit = start_str.length //startの桁数
  var end_digit = end_str.length //endの桁数
  var agree_digit = 0 //startとendの同数字の桁数

  if (start_digit == end_digit) {
    //start,endの桁数が同じ場合
    for (var i = start_digit; i > 0; i--) {
      //違いがある桁数を求める
      if (start_str.substring(0, i) == end_str.substring(0, i)) {
        agree_digit = i
        break
      }
    }
    if (start_digit - agree_digit == 1) {
      //start,endの違いが下1桁目だけの場合
      var ex = ''
      if (start_digit > 1) {
        ex = start_str.substring(0, start_digit - 1)
      }
      ex = ex + makeBrackets(start_str.charAt(start_digit - 1), end_str.charAt(start_digit - 1))
      return ex
    }
  }
  //	window.console.log('agree_digit:' + agree_digit);

  var lower_thre //下位領域のしきい値
  var upper_thre //上位領域のしきい値

  var exL = '' //下位領域
  if (start_str.match(/^[1-9]0+$/)) {
    //startがx000...の場合
    lower_thre = start_str
  } else if (start_str.match(/^[1-9]9+$/)) {
    //startがx999...の場合
    exL = `${start_str}|`
    lower_thre = String(parseInt(start_str.charAt(0)) + 1) + '0'.repeat(start_digit - 1)
  } else {
    if (start_digit == 1) {
      exL = `${makeBrackets(start_str, 9)}|` //startが１桁の場合
      lower_thre = String('10')
    } else {
      for (var i = 2; i < start_digit - agree_digit; i++) {
        if (parseInt(start_str.charAt(start_digit - i)) != 9) {
          if (parseInt(start_str.substring(0, start_digit - i) + '9'.repeat(i)) <= end_value) {
            exL =
              exL +
              start_str.substring(0, start_digit - i) +
              makeBrackets(parseInt(start_str.charAt(start_digit - i)) + 1, 9)
            if (i - 1 > 0) {
              exL = `${exL}[0-9]${makeBraces(String(i - 1))}`
            }
            exL = `${exL}|`
          }
        }
      }
      exL = `${start_str.substring(0, start_digit - 1) + makeBrackets(start_str.charAt(start_digit - 1), 9)}|${exL}`
      lower_thre =
        String(parseInt(start_str.substring(0, agree_digit + 1)) + 1) + '0'.repeat(start_digit - agree_digit - 1)
    }
  }

  var exU = '' //上位領域
  if (end_str.match(/^[1-9]9+$/)) {
    //endがx999...の場合
    upper_thre = end_str
  } else if (end_str.match(/^[1-9]0+$/)) {
    //endがx000...の場合
    exU = end_str
    upper_thre = String(parseInt(end_str.substring(0, 2)) - 1) + '9'.repeat(end_digit - 2)
  } else {
    for (var i = 2; i < end_digit - agree_digit; i++) {
      if (parseInt(end_str.charAt(end_digit - i)) != 0) {
        exU = `${
          end_str.substring(0, end_digit - i) + makeBrackets(0, parseInt(end_str.charAt(end_digit - i)) - 1)
        }[0-9]${makeBraces(String(i - 1))}|${exU}`
      }
    }
    exU = `${exU + end_str.substring(0, end_digit - 1) + makeBrackets(0, end_str.charAt(end_digit - 1))}|`
    upper_thre = String(
      parseInt(String(parseInt(end_str.substring(0, agree_digit + 1)) - 1) + '9'.repeat(end_digit - agree_digit - 1))
    )
  }

  let exM = '' //中位領域

  if (parseInt(lower_thre) < parseInt(upper_thre)) {
    let lower_digit: number = lower_thre.length
    let upper_digit: number = upper_thre.length

    if (lower_digit === upper_digit) {
      exM =
        lower_thre.substring(0, agree_digit) +
        makeBrackets(lower_thre.charAt(agree_digit), upper_thre.charAt(agree_digit)) +
        '[0-9]' +
        makeBraces(String(lower_digit - agree_digit - 1)) +
        '|'
    } else {
      if (lower_thre.charAt(0) == '1') {
        if (upper_thre.charAt(0) == '9') {
          exM = `${
            makeBrackets(1, 9) + makeBrackets(0, 9) + makeBraces(String(lower_digit - 1), String(upper_digit - 1))
          }|`
        } else {
          exM = `${
            makeBrackets(1, 9) + makeBrackets(0, 9) + makeBraces(String(lower_digit - 1), String(upper_digit - 2))
          }|`
          exM = `${
            exM + makeBrackets(1, upper_thre.charAt(0)) + makeBrackets(0, 9) + makeBraces(String(upper_digit - 1))
          }|`
        }
      } else {
        if (upper_thre.charAt(0) == '9') {
          exM = `${makeBrackets(lower_thre.charAt(0), 9) + makeBrackets(0, 9) + makeBraces(String(lower_digit - 1))}|`
          exM =
            exM +
            makeBrackets(1, 9) +
            makeBrackets(0, 9) +
            makeBraces(String(lower_digit), String(upper_digit - 1)) +
            '|'
        } else {
          exM = `${makeBrackets(lower_thre.charAt(0), 9) + makeBrackets(0, 9) + makeBraces(String(lower_digit - 1))}|`
          if (upper_digit - lower_digit > 1) {
            exM = `${
              exM + makeBrackets(1, 9) + makeBrackets(0, 9) + makeBraces(String(lower_digit), String(upper_digit - 2))
            }|`
          }
          exM = `${
            exM + makeBrackets(1, upper_thre.charAt(0)) + makeBrackets(0, 9) + makeBraces(String(upper_digit - 1))
          }|`
        }
      }
    }
  }

  var ex = exL + exM + exU
  if (ex.charAt(ex.length - 1) == '|') ex = ex.substring(0, ex.length - 1)
  return ex
}
