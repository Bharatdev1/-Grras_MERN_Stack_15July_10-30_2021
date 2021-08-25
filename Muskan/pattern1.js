//1 01 010 0101
let n = prompt("enter number of terms")
for (let i=1;i<=n;i++){
    for (let j=1;j<=n;j++){
        if (i>=j){
            if (i%2==0 & j%2!=0){
                document.write(0)
             }
            else if(i%2!=0 & j%2==0){
                document.write(0)
            }
            else{
                document.write(1)
            }
        }
        
    }
    document.write("<br>")
}
//--------------------------------------------------------
// 1 01 010 1010 10101
// let n = prompt("enter number of terms")
//     for (let i=1;i<=n;i++){
//         for (let j=1;j<=n;j++){
//             if (i>=j){
//                 document.write(1)

//             }
//         }
//         document.write("<br>")
//     }
//----------------------------------------------------------
//1357 nterms
// let n = prompt("enter number of terms")
// let m=2*n

// for (let i=1;i<m;i=i+2){
//     document.write(i+" ")
// }
//-----------------------------------------------------------
//101010 n terms
// let q= prompt("enter no of terms")
// for (let i=1;i<=q;i++){
//     if (i%2==0){
//         document.write(0)
//     }
//     else{
//         document.write(1)
//     }
// }
//------------------------------------------------------------
//1 0 1 1 0 0 1 1 1 0 0 0 1 1 1 1 0 0 0 0 
//------------------------------------------------------------
//1 12 123 1234
// let q= prompt("enter no of terms")
// for(let i=1;i<=q;i++){
//     for (let j=1;j<=i;j++){
//         document.write(j)
//     }
//     document.write("<br>")
// }
//------------------------------------------------------------
// 1234 123 12 1
// let q= prompt("enter no of terms")

// for (let i=1;i<=q;i++){
//     let b=1
//    for (let k=1;k<=q;k++){
//        if (i>k){
//            document.write("&nbsp;&nbsp;")
//        }
//        else{
//            document.write(b)
//            b++
//        }
        
//    }
//    document.write("<br>") 
   
  
// }
//------------------------------------------------------------





    