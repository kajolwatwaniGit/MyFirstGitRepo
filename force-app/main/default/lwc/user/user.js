import { LightningElement } from 'lwc';

export default class User extends LightningElement {
    user={
        FirstName : 'Kajol',
        LastName : 'Watwani'
    };

    updateUser(){
        this.user={
            FirstName :'Varsha',
            LastName: 'Watwani'
        }
    }
}