class Node { 
   constructor (value, next) {
       
    this.next = next;
    this.value = value;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }

    push(value){
        let head = this.top;
        let newNode = new Node(value)

        if(!head){
            this.top = newNode;
        } else {
            newNode.next = head;
            this.top = newNode;
        }
    }

    pop(value){
        let head = this.top;

        if(!head) return "The stack is empty.";

        this.top = head.next;
        
        while (head) {
            console.log(head.value, value);
            if (head.value === value){
                value.pop();
            }
        }
        return head.value;
    }

    peak(){
        if(!this.top){
            return;
        }

        return this.top.value;
    }

    isEmpty(){
        if(!this.top){
            return "The stack is empty.";
        } else {
            return "The stack is NOT empty.";
        }
    }

    display(){
        let items = [];
        let top = this.top;
        while(top){
            items.unshift(top.value);
            top = top.next;
        }
        return items;
    }


}

const starTrek = new Stack()

starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");
starTrek.pop("McCoy")

console.log(starTrek.display());