class stack{
    #arr =[]

    push(ele){
        this.#arr.push(ele)
    }

    pop(){
        let size=this.#arr.length
        console.log(this.#arr[size-1]);
        this.#arr.pop()
    }

    peek(){
        let size=this.#arr.length
        console.log(this.#arr[size-1]);
    }

}

// let st=new stack();
// st.push(5)
// st.push(8)
// st.pop()
// st.peek()

let str="Dipu"
let t2=new stack()
for (let i = 0; i < str.length; i++) {
    
   t2.push(str[i]);
}
for (let i = 0; i < str.length; i++) {
    t2.pop();
 }