import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-siz-image-collage',
  standalone: true,
  imports: [],
  template: `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      .container {
        height: 96vh;
        width: 90vw;
        max-width: 30em;
        min-width: 25em;
        overflow: hidden;
        position: relative;
      }
      .cover-container {
        position: absolute;
        border-radius: 2em;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 60%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;

      }
      .content {
        font-family: "Roboto", sans-serif;
        position: absolute;
        bottom: 60%;
        left: 0;
        max-height: 40%;
        width: 80%;
        margin: 10%;
        vertical-align: bottom;
        z-index: 1000;
        color: white;
        border-bottom: 3px solid white;
        padding-bottom: 1em;
      }
      .cover-container > img {
        -webkit-mask:linear-gradient(#0000,#fff,#fff, #fff, #fff);
        mask:linear-gradient(#0000,#fff);
      }
      .cover-container > img + .cover-container > img {
        -webkit-mask:linear-gradient(#000000 50%,#fff 0);
        mask:linear-gradient(#0000 50%,#fff 0);
      }
      .cover-container > img {
        z-index: 0;
        width: 100%;

      }
      .img-container {
        position: absolute;
        top: 40%;
        left: 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
      }
      .imgtile {
        max-width: 29%;
        max-height: 25vh;
        border: 8px solid white;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .imgtile > img {
        width: 100%;
      }
      .shift-up {
        transform: translateY(-20%);
      }
      .shift-down {
        transform: translateY(10%);
      }
      .circle {
        border-radius: 100%;

      }
      .square {
        border-radius: 2em;
      }

    </style>
    <div class="container">
      <div class="cover-container">
        <img src="{{cover}}"/>
      </div>
      <div class="content"><ng-content></ng-content></div>
      <div class="img-container">
        @for (i of images.slice(0, 3); track i) {
          <div class="{{generateClassList(['shift-down'])}}" style="{{generateOverlap()}}">
            <img src="{{i}}"/>
          </div>
        }
        <div style="flex-basis: 100%; height: 0;"></div>
        @for (i of images.slice(3, 5); track i) {
          <div class="{{generateClassList(['shift-up'])}}" style="{{generateOverlap()}}">
            <img src="{{i}}"/>

          </div>
        }
      </div>
    </div>

  `,
  styles: ``
})
export class SizImageCollageComponent {
  @Input() cover = "";
  @Input() images:string[] = [];
  @Input() width:string = "";
  shapes = ["square","circle"]
  choose(list: any[]) {
    var len = list.length;
    var index = Math.floor(Math.random() * len);
    return list[index];
  }

  generateClassList(classes: string[]) {
    var shape = this.choose(this.shapes);
    return `${classes.join(" ")} imgtile ${shape}`
  }
  generateOverlap() {
    var z = Math.floor(Math.random()*(5-3)+3);
    return `z-index:${z}`
  }


  generateCover() {
    return `background-image: url(${(this.cover)});`;
  }
  generateContainerCSS() {
    if (this.width) document.documentElement.style.setProperty("$contw", this.width);
    return `${this.generateCover()}`
  }

}
