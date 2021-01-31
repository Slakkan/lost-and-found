import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { LostObject, objectList, User, Response, UserTypes } from './data/objects.data';
import { RenderingService } from './rendering.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  @ViewChild('gameCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('background', { static: true }) background!: ElementRef<HTMLImageElement>;

  objectList: LostObject[] = objectList;
  selectedObjectIndex = 0;
  inventory: LostObject[] = [];
  userList: User[] = [];
  dialog = "";
  canvasHeight!: number;

  isXRayCharning = false;
  xRayPercentage = 0;
  xRayResult = "";


  lives = 3;
  subscriptions: Subscription[] = [];

  constructor(private renderingService: RenderingService) { }

  ngOnInit(): void {
    this.renderingService.createEngine(this.canvasRef.nativeElement);
    const resizeSub = fromEvent(window, 'resize').subscribe(() => {
      this.renderingService.resizeGame();
      this.canvasHeight = this.background.nativeElement.clientHeight;
    });
    this.subscriptions.push(resizeSub);

    //GAME INIT
    this.canvasHeight = this.background.nativeElement.clientHeight;
    setInterval(() => {
      if (this.isXRayCharning && this.xRayPercentage < 100) {
        this.xRayPercentage++;
      } else if (this.isXRayCharning && this.xRayPercentage === 100) {
        this.xRayPercentage = 0;
        this.isXRayCharning = false;
      }
    }, 10);
    this.populateInventory();
    this.generateUserList();
    this.randomizeUserList();
    this.playAmbientSound();
    this.dialog = this.userList[0].response.intro;
    const asset = this.inventory[this.selectedObjectIndex].asset;
    const texture = this.inventory[this.selectedObjectIndex].texture;
    this.renderingService.loadMesh(asset);
    this.renderingService.loadTexture(asset, texture);
    console.log(this.objectList);
    console.log(this.inventory);
    console.log(this.userList);
  }

  playAmbientSound() {
    var audio = new Audio('./assets/sound/ambientAirport.ogg');
    audio.loop = true;
    audio.play();
  }

  playClickSound() {
    var audio = new Audio('./assets/sound/clickMouse.ogg');
    audio.loop = false;
    audio.play();
  }

  playXraySound() {
    var audio = new Audio('./assets/sound/scanXRay.ogg');
    audio.loop = false;
    audio.play();
  }

  playFuckSound() {
    const randomIndex = Math.floor(Math.random() * 3);
    var audio;
    if (randomIndex === 0) {
      audio = new Audio('./assets/sound/fuck.ogg');
    } else if (randomIndex === 1) {
      audio = new Audio('./assets/sound/fuckingIdiot.ogg');
    } else {
      audio = new Audio('./assets/sound/fuckingPieceOfShit.ogg');
    }
    audio.loop = false;
    audio.play();
  }

  populateInventory() {
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * this.objectList.length);
      const object = this.objectList[randomIndex];
      this.inventory.push(object);
      this.objectList = this.objectList.filter(obj => obj.id !== object.id);
    }
  }

  generateUserList() {
    this.inventory.forEach(item => this.generateUserFromItem(item));
  }

  generateUserFromItem(item: LostObject) {
    if (item.isUnique) {
      const isOwner = true;
      const objectId = item.id;
      const userType = item.userType[0];
      const response = item.response;
      const asset = this.getUserAsset(userType);
      const user = { isOwner, objectId, userType, response, asset };
      this.userList.push(user);
    } else {
      for (let i = 0; i < 3; i++) {
        const isOwner = i === 0;
        const objectId = item.id;
        const index = Math.floor(Math.random() * item.userType.length);
        const userType = item.userType[index];
        let response: Response;
        if (!isOwner) {
          const index = Math.floor(Math.random() * item.fakeResponses.length);
          response = item.fakeResponses[index];
        } else {
          response = item.response;
        }
        const asset = this.getUserAsset(userType);
        const user = { isOwner, objectId, userType, response, asset };
        this.userList.push(user);
      }
    }
  }

  getUserAsset(userType: UserTypes): string {
    const baseUrl = './assets/2D/char/';
    switch (userType) {
      case "agent47":
        return baseUrl + "agente47.png";
      case "alien":
        const isMr = Math.floor(Math.random() * 2) === 0 ? true : false;
        return baseUrl + (isMr ? "mrAlien.png" : "msAlien.png");
      case "cat":
        return baseUrl + "cat.png";
      case "cthulu":
        return baseUrl + "chthulhu.png";
      case "death":
        return baseUrl + "morte.png";
      case "goku":
        return baseUrl + "goku.png";
      case "horse":
        return baseUrl + "horse.png";
      case "human":
        const fileNames = ["asianGuy.png", "businessMan.png", "karen.png", "lady.png",
          "motherAndChild.png", "oldCouple.png"];
        const index = Math.floor(Math.random() * 6);
        return baseUrl + fileNames[index];
      case "luffy":
        return baseUrl + "luffy.png";
      case "trump":
        return baseUrl + "trump.png";
      case "lemonLady":
        return baseUrl + "signoraLimoni.png";
      case "zombie":
        const isMrz = Math.floor(Math.random() * 2) === 0 ? true : false;
        return baseUrl + (isMrz ? "zombieMan.png" : "zombieWoman.png");
      case "zuckerberg":
        return baseUrl + "zuckerberg.png";
      default:
        return "NOT FOUND";
    }

  }

  randomizeUserList() {
    const mixedUserList = [];
    const userCount = this.userList.length;
    for (let i = 0; i < userCount; i++) {
      const index = Math.floor(Math.random() * this.userList.length);
      const randomUser = this.userList[index];
      mixedUserList.push(randomUser);
      this.userList.filter(user => user !== randomUser);
    }
    this.userList = mixedUserList;
  }

  onObjectSelect(index: number) {
    this.playClickSound();
    this.selectedObjectIndex = index;
    const asset = this.inventory[this.selectedObjectIndex].asset;
    const texture = this.inventory[this.selectedObjectIndex].texture;
    this.renderingService.changeObject(asset, texture);
  }

  askForColor() {
    this.dialog = this.userList[0].response.color;
  }

  askForDetails() {
    this.dialog = this.userList[0].response.detail;
  }

  askForContent() {
    this.dialog = this.userList[0].response.xRay;
  }

  giveItem() {
    this.playClickSound();
    const user = this.userList[0];
    const selectedItem = this.inventory[this.selectedObjectIndex];
    if (!user.isOwner && user.objectId !== selectedItem.id) {
      this.lives--;
      this.playFuckSound();
    }
    this.userList = this.userList.filter(user => user.objectId !== selectedItem.id);
    this.inventory = this.inventory.filter(item => item.id !== selectedItem.id);
    this.pushNewItemFromObjectList();
    this.dialog = this.userList[0].response.intro;
  }

  sendAway() {
    this.playClickSound();
    const selectedUser = this.userList[0];
    if (selectedUser.isOwner) {
      this.lives--;
      this.playFuckSound();
      this.userList = this.userList.filter(user => user.objectId !== selectedUser.objectId);
      this.inventory = this.inventory.filter(item => item.id !== selectedUser.objectId);
      this.pushNewItemFromObjectList();
    } else {
      this.userList.shift();
    }
    this.dialog = this.userList[0].response.intro;
  }

  onXRayActive() {
    this.playXraySound();
    this.isXRayCharning = true;
    setTimeout(() => {
      const selectedObject = this.inventory[this.selectedObjectIndex];
      this.xRayResult = selectedObject.response.xRay;
      setTimeout(() => this.xRayResult = "", 1500);
    }, 1000);
  }

  pushNewItemFromObjectList() {
    const index = Math.floor(Math.random() * this.objectList.length);
    const randomItem = this.objectList[index];
    this.objectList = this.objectList.filter(item => item.id !== randomItem.id);
    this.inventory.push(randomItem);
    this.generateUserFromItem(randomItem);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}