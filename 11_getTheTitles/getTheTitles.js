const getTheTitles = function(arr) {
    let temp=[];
    for(let x=0;x<arr.length;x++) {
        temp.push(arr[x].title)
    }
    return temp;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
