class AddressBookContact{

    get id()
    {
        return this._id;
    }
    set id(id)
    {
        this._id=id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.test(name)){
            this._name=name;
        }
        else{
            throw "Name Is Incorrect!"
        }
    }
    get phone() {
        return this._phone;
    }
    set phone(phone) {
        let phonergx=RegExp('^[+]{0,1}[0-9]{2}\\s{0,1}[0-9]{10}$')
        if(phonergx.test(phone)){
            this._phone=phone;
        }else throw "Phone Number Is Incorrect!"
    }

    get city(){
        return this._city;
    }

    set city(city){
        this._city=city;
    }

    get state(){
        return this._state;
    }

    set state(state){
        this._state=state;
    }

    get address(){
        return this._address;
    }

    set address(address){
        let addrrgx = RegExp('^[a-zA-Z0-9#,&\\s]{4,}$')
        if(addrrgx.test(address)){
            this._address = address;
        }else throw "Address Is Incorrect!";
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        this._zip = zip;
    }
    toString() {
        return "Id="+this.id +  "name=" + this.name + ", Phone No=" + this.phone +
        ", Address=" + this.address + ", Zip Code=" + this.zip +
        ", City=" + this.city + ", State=" +this.state;
    }

}