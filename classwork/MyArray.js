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
        this.
        }
        this.size++;

    }

    public String get(int index) {
    return this.elements[index];
    }

    public int size() {
        return this.size;
    }

    public int getIndexOf(String element) {
        for(int index = 0; index < size; index++) {
            if(this.elements[index].equals(element)) return index;
        }
        return -1;
    }

    public boolean contains(String element) {
        for(int count = 0; count < size; count++) {
            if(this.elements[count].equals(element)) {
                return true;
            }
        }
        return false;
    }

    public void remove(String element) {
        if(this.contains(element)) {
            for(int count = 0; count < size-1; count++) {
                if(element.equals(elements[count]) && count != size-1 ) {
                    for(int index = count; index < size-1; index++) {
                        elements[index] = elements[index+1];
                    }
                    elements[size-1] = null;
                    size--;
                    return;
                }
                else if(count == size-1) {
                    elements[count] = null;
                }
            }
            size--;
        }
    }

    public void clear() {
        for(int count = 0; count < size; count++) {
            elements[count] = null;
            size = 0;
        }
    }

    public void setElement(int index, String element) {
        this.elements[index] = element;
    }

}
