const validateCuit = (value, next) => {
    if(value) {
        if (value.length == 11) {
            var Caracters_1_2 = value.charAt(0) + value.charAt(1)
            if (Caracters_1_2 == "20" || Caracters_1_2 == "23" || Caracters_1_2 == "24" || Caracters_1_2 == "27" || Caracters_1_2 == "30" || Caracters_1_2 == "33" || Caracters_1_2 == "34") {
                var Count = value.charAt(0) * 5 + value.charAt(1) * 4 + value.charAt(2) * 3 + value.charAt(3) * 2 + value.charAt(4) * 7 + value.charAt(5) * 6 + value.charAt(6) * 5 + value.charAt(7) * 4 + value.charAt(8) * 3 + value.charAt(9) * 2 + value.charAt(10) * 1
                var Division = Count / 11;
                if (Division == Math.floor(Division)) {
                    return true;
                }
            }
        }
        return false; 
    }
      return false;

    next();
}

module.exports = {
    validateCuit
}
