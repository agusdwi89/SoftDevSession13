var PersonLogic = require('../person/person.logic')

class PersonNikLogic extends PersonLogic{
  constructor(...args) {
    super(...args)
  }

  validateLength() {
    return `${super.getNik()} --> ` + ((super.getNik().length == 16) ? `NIK VALID` : "NIK INVALID");
  }

  validateBod() {
        var BODarr = super.getBod().split("-");
        var reformatBod = BODarr[2]+BODarr[1]+BODarr[0].substring(2,4);
        return `${super.getNik()} & ${super.getBod()} --> ` +  ((super.getNik().indexOf(reformatBod) > 0) ? "NIK & Birth of date VALID" : "NIK & Birth of date INVALID");
  }
}

module.exports = PersonNikLogic;