/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(str === "" || str === "+" || str === "-"){
        return 0;
    }
    var len = str.length;
    if(len === 1){
        return (str[0] - '0');
    }
    var sign = 1;
    var flag = 0;
    var mid_flag = 0;
    var inizero = 0;
    var mynum = 0;
    for(i = 0;i<len;i++){
        if(str[i] === ' '){
            if(mid_flag == 1){
                return (mynum * sign);
            }
            continue;
        }
        if (str[i] == '-'){
            mid_flag = 1;
            sign *= -1;
            flag ++;
            continue;
        }else if (str[i] == '+'){
            mid_flag = 1;
            sign *= 1;
            flag ++;
            continue;
        }
        if(flag > 1){
            
            return (mynum * sign);
        }
        var oo = (str[i] - '0');
        if(isNaN(oo)){
            mid_flag = 1;
            return (mynum * sign);
        }else{
            mid_flag = 1;
            mynum *= 10;
            mynum += (str[i] - '0');
            if(mynum > 2147483647 && sign == 1){
                mynum = 2147483647;
            }
            if(mynum > 2147483648 && sign == -1){
                mynum = 2147483648;
            }
        }
        inizero = 1;
    }
    return (mynum * sign);
};
