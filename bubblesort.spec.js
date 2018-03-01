describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect(bubbleSort([])).toEqual([]);
    });
    it('handles a single item in an array', function(){
        expect(bubbleSort([3]).toEqual([3]));
    });
    it('handles multiple items in an array', function(){
        expect(bubbleSort([2,1,3]).toEqual([1,2,3]));
    })
  });
