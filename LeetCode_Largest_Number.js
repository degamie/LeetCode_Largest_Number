var largestNumber = function(nums) {
  //Newer Approach
  //T(C(N) and S(C(N)  ==O(1) as it requires constant space in Unit time
    nums.sort((a, b) => {//Sorting the Array
        const [ab, ba] = [String(a) + String(b), String(b) + String(a)];//Adding the String's val
        return +ba - +ab;//Printing the joint Output
    });
    return nums[0] ? nums.join('') : '0';//Printing Largest Num
}
//Older Approach
    // var arr=nums.map(String);
    // arr.sort(a,b)=>(b+a).localeCompare(a+b);
    // if(arr[0]=="0")return "0";
    // return arr.join;
    
