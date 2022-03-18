import { Component, ViewChildren, AfterViewInit } from '@angular/core';
import * as BABYLON from '@babylonjs/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChildren('renderCanvas')
  private renderCanvas: HTMLCanvasElement;

  constructor() { }

  ngAfterViewInit(): void {
      this.render();
  }

  render() {
    const engine = new BABYLON.Engine(this.renderCanvas, true); // Generate the BABYLON 3D engine

    // Add your code here matching the playground format
    const createScene = () => {
      const scene = new BABYLON.Scene(engine);
  
      const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
      camera.attachControl(this.renderCanvas, true);
  
      const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
  
      const box = BABYLON.MeshBuilder.CreateBox("box", {});
  
      return scene;
  }

    const scene = createScene(); //Call the createScene function

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
      scene.render();
    });
  }

}
