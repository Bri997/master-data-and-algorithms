class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //private property
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      //charCode is a UTF-8 codeNumber then multiply by i then modulo to keep it in the size array
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      //might have multiple items in the bucket array IE collision
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        //first 0 removed the array then 2nd 0 gets the keys
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}
const myHashTable = new HashTable(50);
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 22);
