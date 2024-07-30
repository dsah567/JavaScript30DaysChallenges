class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }

    insertAtEnd(value){
        let newNode=new Node(value)
        let hd=this.head
        if(this.head==null){
            this.head=newNode
            return
        }
        else{
            while(hd.next!=null){
                hd=hd.next
            }
            hd.next=newNode
        }
    }

    removeAtEnd(){
        console.log(this.head);
        let hd=this.head
        if(hd==null){
           console.log("Linked List is Empty");
            return
        }
        else if(hd.next==null){
            this.head==null
        }
        else{
            while(hd.next.next!=null){
                console.log(hd.next.next);
                hd=hd.next
            }
            hd.next=null
        }

    }

    printList(){
        let hd=this.head
        if(hd==null){
           console.log("Linked List is Empty");
            return
        }
        else{
            console.log(hd.value);
            while(hd.next!=null){
                hd=hd.next
                console.log(hd.value);
            }
        }
    }
}

let list = new LinkedList()
list.insertAtEnd(5)
list.insertAtEnd(51)
list.insertAtEnd(52)
list.printList()
list.removeAtEnd()
console.log("d");
list.printList()