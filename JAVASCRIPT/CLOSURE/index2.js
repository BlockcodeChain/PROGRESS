// // function print(){
// //     const count =0;
// //     return count;
// // }

// // const ans=print();
// // const ans1=print();
// // const ans2=print();
// // console.log(ans,ans1,ans2);

// as a normal fn ki trh call kiya hai humne kuch huaaa nhi hrr baar fn invoke dho rha hai neew woh varibale ko rember bhi nhi kiya humne toh count badhnae ka socha but woh increase to solve this we use closure her 



// closure 
 function print(){
    let count =0;
    return function calc(){
        console.log("count", count++)
    };

}

const ans=print();
ans();
ans()
ans()



// Data ko private banana (VERY IMPORTANT)
// 2️⃣ State maintain karna (React me use hota hai 🔥)

// 👉 Counter, timers, etc.

// 3️⃣ Memory efficient

// // 👉 Baar baar variable create nahi hota

// “Closure is used in real-world applications like banking systems to create private variables, where data can only be accessed through controlled functions like deposit and withdraw.”