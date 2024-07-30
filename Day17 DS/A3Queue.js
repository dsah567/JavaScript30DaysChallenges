class queue{
    #arr=[]

    enqueue(ele){
        this.#arr.push(ele)
    }

    dequeue(){
        this.#arr.splice(0,1)
    }
    front(){
        console.log(this.#arr[0]);
    }
}

let t1=new queue()
t1.enqueue(5)
t1.enqueue(8)
t1.enqueue(2)
t1.dequeue()
t1.dequeue()
t1.front()
t1.front()