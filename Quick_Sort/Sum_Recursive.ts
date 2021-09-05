    //Starting with easy examples to apply divide and conquer algorithm

    // First example : print sum([1, 2, 3, 4])

    function SumD_C(arr:number[]):number
    {
        let sum = 0;
        //base case
        if(arr.length === 0)
        return 0
        else 
        sum = arr[0] + SumD_C(arr.slice(1,arr.length));
        return sum;
    }

    console.log(SumD_C([1, 2, 3, 4]));
