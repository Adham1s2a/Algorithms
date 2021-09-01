//binary search is an algorithms searching in a sorted list and get the index of the searched key or null if not found 


function BinarySearch(list,key):number | null
{
            let low:number =0; 
            let high:number = list.length -1 

        while(low <= high) {
            let mid = Math.floor((low+high) /2);
            //console.log(mid);
            if (key == list[mid])
                return mid;
            if (key > list[mid] )
                low = mid+1 ;
            else 
                high= mid-1;
        }    
}
const my_list = [1, 3, 5, 7, 9]
console.log(BinarySearch(my_list,7));
