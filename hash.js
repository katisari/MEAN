  String.prototype.hashCode = function(){
    var hash = 0;
    if(this.length == 0){
        return hash;
    }
    for(i=0; i<this.length; i++){
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char;  // bitwise operators are used to manipulate the string in binary
        hash &= hash;                
    }
    return hash;                         // by the end of the loop, the hash is unique to this string
}
    // Now, when we need a particular string's hash code, we may call its hashCode method, which we just created
    
    
    
function HashMap() {

    this.hashMap = []
    this.hashMap.length = 30;
    this.mod = function (hashedkey, capacity) {
        return (hashedkey % capacity + capacity) % capacity;
    };
    this.getIndexInsert = function(key) {
        var hashedkey = key.hashCode();      
        return this.mod(hashedkey, this.hashMap.length);
    }
    this.insert = function(key,val) {
        console.log(key,val);
        console.log(this.getIndexInsert(key));
        this.hashMap[this.getIndexInsert(key)] = [key,val];
        console.log(this.hashMap)
    };
    this.get = function(key) {
        if (this.hashMap[this.getIndexInsert(key)]) {
            return this.hashMap[this.getIndexInsert(key)][1];
        } else {
            return null
        }
    }
    
}
