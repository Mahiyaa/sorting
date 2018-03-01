function bubbleSort(array) {
    let swapped = false;
  
    while (swapped === false){
      for (let i = 0; i < array.length-1; i++){
          let first = array[i];
          let second = array[i+1];
          if (first > second){
              const temp = array[i];
                  array[i] = array[i+1];
                  array[i+1] = temp;
                  swapped = true;
          } 
          swapped = false;
    }
      return array;
    }
  }

    //when and where should we switch swapped to false?

     // function swap(arr, firstInd, secondInd){ 
    //     swapped = true;
    //     const temp = arr[firstInd];
    //     arr[firstInd] = arr[secondInd];
    //     arr[secondInd] = temp;
    //     console.log("our first index is", arr[firstInd]);
    //     console.log("our second index is", arr[secondInd]);
    //     swapped = false;
    // }