import { Component } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent {

  formInvalid = true;
  enteredName='';
  step='enterName';
  selectedAvatar='';
  avatarClicked = false;
  roomCodeEntered=false;
  imgSrc = '';
  roomExist =false;
  roomCreated=false;
  
  getValue(val: any) {
    console.log(val);
    this.enteredName = val;
    if (val=='') {
      this.formInvalid=true;
    } else {
      this.formInvalid = false;
    }
  }

  getCodeValue(val: any) {
    console.log("getting code value");
    console.log(val);
    //console.log(e);
   
    if(val.length == 6) {
      this.roomCodeEntered = true;
      console.log(this.roomCodeEntered);
      
    } else {
      this.roomCodeEntered = false;
    }

  }

  nameButton() {
    console.log("Button clicked!!!")
    this.step='avatar';
    
  }
  avatarButton() {
    console.log("Button clicked!!!")
    this.step='roomInfo';
  }

  onRoomCode() {
    console.log("Button clicked!!!")
    this.roomExist = true;
    setTimeout(() => {
      this.roomExist = false;
    }, 2000);

  }

  onAvatarClicked(e: any) {
    console.log(e);
    this.avatarClicked=true;
    this.selectedAvatar = e.target.id;
    console.log(this.selectedAvatar);
    this.imgSrc = e.target.currentSrc;
    
    //document.getElementById("div1").classList.remove("classToBeRemoved");
    var element = document.querySelector(`.${this.selectedAvatar}`);
    console.log(element);
    document.querySelector(`.${this.selectedAvatar}`)?.classList.remove('not-selected');
    document.querySelector(`.${this.selectedAvatar}`)?.classList.add('selected');
    
    
    var divs = document.querySelectorAll(`.avatar-container > div:not(.${this.selectedAvatar})`);

    console.log("Divs");
    console.log(divs);
    for(let i=0; i<divs.length;i++) {
      divs[i].classList.remove("selected");
      divs[i].classList.add("not-selected");
      
      console.log(divs[i].classList)
    }
  }

  joinRoom() {
    console.log("Button Clicked!!!");
    this.step='join-room';

  }

  createRoom() {
    console.log("Button Clicked!!!");
    this.step="create-room"
  }

  createRoomButton() {
    console.log("Button Clicked!!!");
    this.step="room-created";
  }

  getRoomInfo(roomName: any, roomNo: any) {
    if(roomName.length>0 && roomNo.length>0) {
      this.roomCreated=true;
    } else {
      this.roomCreated=false;
    }
  }

  shareButton() {
    console.log("Button Clicked!!!");
    this.step="room-shared";
  }
  
}

