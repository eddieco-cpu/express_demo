let helpers = {
  json: function (context) {
    return JSON.stringify(context);
  },
  sum_up: function (...nums) {
    let numArr = [...nums];
    let sum = [...nums]
      .filter((el, i) => i < numArr.length - 1)
      .reduce((a, b) => a + b, 0);
    return sum;
  },
  minus: function (a, b) {
    return a - b;
  },
  text: function (text, hbsContainer) {
    return hbsContainer ? `${text}` : "helperText";
  },
  component: function (path, varA, varB) {
    let compPath = path.split("/").join("\\");
    let compPara;
    let comp;

    if (varB) {
      //
      compPara = varA ? JSON.parse(varA) : ""; //       varA = para
      comp = varB.data.exphbs.partials[compPath]; //    varB = hbs
    } else {
      //
      comp = varA.data.exphbs.partials[compPath]; //    varA = hbs
    }
    return comp(compPara);
  },
};

module.exports = {
  helpers,
};
