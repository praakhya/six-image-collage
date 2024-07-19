import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-siz-image-collage',
  standalone: true,
  imports: [],
  template: `
    <style>
      :root {
        --contw: 60vw;
      }
      .cover-mask {
        border-radius: 1em;
        z-index: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: inline-block;
        /*background: linear-gradient(to bottom, transparent,rgba(255,255,255,1) 50%); /* W3C */
        background: linear-gradient(to bottom, #333, #333 50%, #eee 100%, #eee 100%);
      }

      .container {
        width: var(--contw);
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 1em;
        background-position: center;
        background-size: cover;
        overflow: hidden;
      }
      .imgcontainer {
        z-index: 2;
        width: var(--contw);
        height: fit-content;
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-self: flex-end;
        align-self: flex-end;
        align-items: center;
        align-content: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 1em;


        /*
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 37%, rgba(255,255,255,1) 64%, rgba(255,255,255,0) 100%);
        */
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 62%);


      }

      .imgtile {
        border: 0.5em solid white;
        align-self: center;
        justify-self: center;
        width: 30%;
        z-index: 2;
        flex-shrink: 1;
        position: static;

      }
      .shift-up {
        transform: translateY(-5em);
      }
      .shift-down {
        transform: translateY(5em);
      }



      .imgcontainer:nth-child(4), .imgcontainer:nth-child(5) {
        margin-left: 0;
        margin-top: -10em;
      }
      .imgcontainer:first-child {
        margin-left: 0;
        margin-top: 0;
      }
      .cover {
        top: 0;
        width: 100%;
        z-index: 0;
        filter: opacity(0.5);
      }
      .content {
        width: 80%;
        height: 100%;
        z-index: 5;
        color: white;
        text-shadow: 1px 1px black;
        padding-left: 5%;
      }



      .circle {
        border-radius: 100%;

      }
      .square {
        border-radius: 2em;
      }
      @media only screen and (max-width: 764px)  {
        .container {
          width: 100%;
        }
        .imgcontainer {
          width: 100%;
          align-content: stretch;
          justify-content: space-evenly;
        }
        .imgtile {
          width: 30%;
          flex-grow: 1;
          z-index: 100;
        }
      }

    </style>
    <div class="container" style="{{generateContainerCSS()}}">

      <div class="content">
        <ng-content></ng-content>
      </div>


      <div class="imgcontainer">

        @for (i of images.slice(0, 3); track i) {
          <img src="{{i}}" class="{{generateClassList(['shift-down'])}}" style="{{generateOverlap()}}"/>
        }
        <div style="flex-basis: 100%; height: 0;"></div>
        @for (i of images.slice(3, 5); track i) {
          <img src="{{i}}" class="{{generateClassList(['shift-up'])}}" style="{{generateOverlap()}}"/>
        }
      </div>
    </div>

    <div>


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
    if (this.width) document.documentElement.style.setProperty("--contw", this.width);
    return `${this.generateCover()}`
  }

}
