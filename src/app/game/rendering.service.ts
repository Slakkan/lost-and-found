import { Injectable } from '@angular/core';
import { ArcRotateCamera, AssetsManager, Engine, HemisphericLight, Material, Mesh, Scene, Vector3 } from 'babylonjs';
import { GLTFFileLoader, MTLFileLoader, OBJFileLoader } from 'babylonjs-loaders';

@Injectable({
  providedIn: 'root'
})
export class RenderingService {
  canvas!: HTMLCanvasElement;
  engine!: Engine;
  scene!: Scene;
  camera!: ArcRotateCamera;
  light!: HemisphericLight;
  objLoader = new OBJFileLoader();
  mtlLoader = new MTLFileLoader();
  gltfLoader = new GLTFFileLoader();

  constructor() { }

  createEngine(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
    this.engine = new Engine(canvas);
    this.createScene();
    this.engine.runRenderLoop(() => this.scene.render());
  }

  createScene(): void {
    const scene = new Scene(this.engine);
    this.camera = new ArcRotateCamera('camera', 0, 1, 10, Vector3.Zero(), scene);
    this.camera.setTarget(Vector3.Zero());
    this.camera.attachControl(this.canvas);
    this.light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);
    this.scene = scene;
  }

  resizeGame() {
    this.engine.resize();
  }

  loadMesh(meshName: string) {
    const assetsManager = new AssetsManager(this.scene);
    const url = './assets/3D/' + meshName + '/';
    const name = meshName + '.obj';
    const meshTask = assetsManager.addMeshTask('', '', url, name);
    meshTask.onSuccess = (task) => {
      const potato = Mesh.MergeMeshes(task.loadedMeshes as Mesh[], true);
      console.log(potato);
      potato?.material;
    };
    assetsManager.load();
  }

  loadTexture(textureName: string) {
    const assetsManager = new AssetsManager(this.scene);
    const url = './assets/3D/' + textureName + '/' + textureName + '.mtl';
    const meshTask = assetsManager.addTextureTask('', url);
    meshTask.onSuccess = (task) => {
      console.log(task);
    };
    assetsManager.load();
  }
}
