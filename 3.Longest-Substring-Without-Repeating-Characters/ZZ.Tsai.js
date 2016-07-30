/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s==='')
    {
        return 0
    }
    else{
    var max=1
    var strlen=1
    for(var i = 1; i<s.length; i++){
        repeatlen = s.substr(i-strlen,strlen).indexOf(s.substr(i,1));
        if(repeatlen === -1){
            strlen++;
        }
        else{
            strlen -= repeatlen;
        }
        if(max<strlen){
            max = strlen;
        }
    }
    return max;
    }
};
