import { Injectable } from '@angular/core';
import { ArcRotateCamera, AssetsManager, Color4, Engine, Material, Mesh, Scene, StandardMaterial, Texture, Vector3 } from 'babylonjs';
import { MTLFileLoader, OBJFileLoader } from 'babylonjs-loaders';

@Injectable({
  providedIn: 'root'
})
export class RenderingService {
  canvas!: HTMLCanvasElement;
  engine!: Engine;
  scene!: Scene;
  camera!: ArcRotateCamera;
  objLoader = new OBJFileLoader();
  mtlLoader = new MTLFileLoader();
  lastLoadedMesh!: Mesh;
  lastLoadedMaterial!: Material;

  constructor() { }

  createEngine(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
    this.engine = new Engine(canvas);
    this.createScene();
    this.engine.runRenderLoop(() => {this.scene.render();});
  }

  createScene(): void {
    const scene = new Scene(this.engine);
    scene.clearColor = new Color4(0,0,0,0)
    this.camera = new ArcRotateCamera('camera', 0, 1, 10, Vector3.Zero(), scene);
    this.camera.setTarget(Vector3.Zero());
    this.camera.attachControl(this.canvas);
    this.scene = scene;
  }

  resizeGame() {
    this.engine.resize();
  }

  loadMesh(asset: string) {
    const assetsManager = new AssetsManager(this.scene);
    const url = './assets/3D/' + asset + '/';
    const name = asset + '.obj';
    const meshTask = assetsManager.addMeshTask('', '', url, name);
    meshTask.onSuccess = (task) => {
      const mesh = Mesh.MergeMeshes(task.loadedMeshes as Mesh[], true) as Mesh;
      this.lastLoadedMesh = mesh;
    };
    assetsManager.load();
  }

  loadTexture(asset: string, textureName: string) {
    const assetsManager = new AssetsManager(this.scene);
    const url = './assets/3D/' + asset + '/' + textureName + '.bmp';
    const meshTask = assetsManager.addTextureTask('', url);
    meshTask.onSuccess = (task) => {
      const mat = new StandardMaterial("defaultMat", this.scene)
      mat.emissiveTexture = task.texture
      this.lastLoadedMaterial = mat;
      this.lastLoadedMesh.material = mat;
    };
    assetsManager.load();
  }

  changeObject(asset: string, texture: string) {
    this.engine.dispose()
    this.createEngine(this.canvas)
    this.loadMesh(asset);
    this.loadTexture(asset, texture)
  }
}
