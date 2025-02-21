 class MyArray{
    #elements;
    #length;
    #size;
    constructor(size){
        this.elements = [];
        this.length = size
        this.size = 0;

    }

    isEmpty() {
        return this.size == 0;
    }
    add(item) {
        if (this.size < this.length) {
        this.elements += item
        this.size+=1;
        }
        return "index out of bound"
    }

    length() {
    return this.length;
    }

    size() {
        return this.size;
    }
    getIndex(index) {
        for(let index = 0; index < size; index++) {
            if(this.elements[index].equals(element)) return index;
        }
        return "index out of bound";
    }
    getIndexOf(element) {
        for(let index = 0; index < size; index++) {
            if(this.elements[index].equals(element)) return index;
        }
        return "index out of bound";
    }

    contains(element) {
        for(let count = 0; count < size; count++) {
            if(this.elements[count].equals(element)) {
                return true;
            }
        }
        return false;
    }

    remove(element) {
        if(this.contains(element)) {
            for(let count = 0; count < size-1; count++) {
                if(element.equals(this.elements[count]) && count != size-1 ) {
                    for(let index = count; index < size-1; index++) {
                        this.elements[index] = this.elements[index+1];
                    }
                    this.elements[size-1] = null;
                    this.size--;
                    return;
                }
                else if(count == size-1) {
                    this.elements[count] = null;
                }
            }
            this.size--;
        }
    }

    clear() {
        for(let count = 0; count < size; count++) {
            elements[count] = null;
            this.size = 0;
        }
    }

    setElement(index, element) {
        this.elements[index] = element;
    }

}
