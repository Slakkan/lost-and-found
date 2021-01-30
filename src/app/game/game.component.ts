import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ArcRotateCamera, AssetsManager, Camera, Engine, FreeCamera, HemisphericLight, Mesh, Quaternion, Scene, SceneLoader, UniversalCamera, Vector3 } from 'babylonjs';
import { OBJFileLoader } from 'babylonjs-loaders';
import { fromEvent, Subscription } from 'rxjs';
import { RenderingService } from './rendering.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  @ViewChild('gameCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  subscriptions: Subscription[] = [];

  constructor(private renderingService: RenderingService) { }

  ngOnInit(): void {
    this.renderingService.createEngine(this.canvasRef.nativeElement);
    const resizeSub = fromEvent(window, 'resize').subscribe(() => {
      this.renderingService.resizeGame()
    });
    this.subscriptions.push(resizeSub)

    //TESTING
    this.renderingService.loadMesh('valigiaMarrone')
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}