module.exports = function toReadable(number) {
    function pos0(number) {
        if (number === "0") {
            return "";
        }
        if (number === "1") {
            return "one";
        }
        if (number === "2") {
            return "two";
        }
        if (number === "3") {
            return "three";
        }
        if (number === "4") {
            return "four";
        }
        if (number === "5") {
            return "five";
        }
        if (number === "6") {
            return "six";
        }
        if (number === "7") {
            return "seven";
        }
        if (number === "8") {
            return "eight";
        }
        if (number === "9") {
            return "nine";
        }
    }

    function pos1(number) {
        if (number === "1") {
            return "eleven";
        }
        if (number === "2") {
            return "twelve";
        }
        if (number === "3") {
            return "thirteen";
        }
        if (number === "4") {
            return "fourteen";
        }
        if (number === "5") {
            return "fifteen";
        }
        if (number === "6") {
            return "sixteen";
        }
        if (number === "7") {
            return "seventeen";
        }
        if (number === "8") {
            return "eighteen";
        }
        if (number === "9") {
            return "nineteen";
        }
    }

    function pos2(number) {
        if (number === "0") {
            return "";
        }
        if (number === "1") {
            return "ten";
        }
        if (number === "2") {
            return "twenty";
        }
        if (number === "3") {
            return "thirty";
        }
        if (number === "4") {
            return "forty";
        }
        if (number === "5") {
            return "fifty";
        }
        if (number === "6") {
            return "sixty";
        }
        if (number === "7") {
            return "seventy";
        }
        if (number === "8") {
            return "eighty";
        }
        if (number === "9") {
            return "ninety";
        }
    }

    let res = "";
    let s = String(number).split("");

    if (s.length === 1 && s[0] === "0") {
        return "zero";
    }

    if (s.length === 3) {
        if (s[1] === "0" && s[2] === "0") {
            res = pos0(s[0]) + " hundred";
        } else {
            res = pos0(s[0]) + " hundred ";
        }
        s.shift();
    }

    if (s.length === 2) {
        if (s[0] !== "1" && s[0] !== "0" && s[1] !== "0") {
            res = res + pos2(s[0]) + " ";
        } else if (s[0] === "0") {
            return res + pos0(s[1]);
        } else if (s[1] === "0") {
            return res + pos2(s[0]);
        } else {
            return res + pos1(s[1]);
        }
        s.shift();
    }

    if (s.length === 1) {
        res = res + pos0(s[0]);
    }
    return res;
}
