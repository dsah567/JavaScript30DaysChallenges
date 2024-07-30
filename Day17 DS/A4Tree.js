class treeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinaryTree{
    constructor(){
        this.root=null
    }

    insert(value){
        let newTreeNode = new treeNode(value)
        if(this.root==null){
            this.root=newTreeNode
            return
        }

        let node=this.root
        while(node.left!=null || node.right!=null){
            
        }
    }

}