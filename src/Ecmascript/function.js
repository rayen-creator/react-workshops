 const findLongestWord = (tab) => {


     let longestWord = '';
     let longestWordLength = 0;
     for (let i = 0; i < tab.length; i++) {
         if (tab[i].length > longestWordLength) {
             longestWord = `the word is : ${tab[i]} it's length is : ${tab[i].length} `;
             longestWordLength = tab[i].length;
         }
     }
     return longestWord;

 }

 function occurence(tab2) {
     //method 1
     const newArray = tab2.flat();
     const count = {};

     for (let i = 0; i < newArray.length; i++) {
         let element = newArray[i];
         if (count[element]) {
             count[element]++;
         } else {
             count[element] = 1;
         }

     }
     console.log(count);
     return "count";

     //method 2
     //  tab2.flat().reduce((count, element) => {
     //      count[element] = (count[element] || 0) + 1;

     //      return count;
     //  }, {});

     //  return console.log(tab2);

 }

 function totaleleve(students) {

     const total = students
         .map(student => (student.marks < 50 ? {...student, marks: student.marks + 15 } : student))
         .filter(student => student.marks >= 50)
         .reduce((total, student) => total + student.marks, 0);

     console.log(total);
     return total
 }


 export { findLongestWord, occurence, totaleleve };