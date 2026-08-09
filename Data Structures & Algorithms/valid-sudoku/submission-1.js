class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    let r=Array.from({length:9}, ()=>new Set())
    let c=Array.from({length:9}, ()=> new Set())
     let boxes = Array.from({ length: 9 }, () => new Set());
    for(let row=0;row<board.length;row++){
        for(let col=0; col<board[row].length;col++){
           let value = board[row][col]
           if(value==="." ){
            continue;
           } 
           let box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
           if(r[row].has(value) || c[col].has(value) || boxes[box].has(value)){
             
              return false;
           }
           r[row].add(value) 
            c[col].add(value)  
            boxes[box].add(value)
        }
    }
     return true
    }
}
