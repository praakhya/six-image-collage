# SixImageCollage

This component is a simplified version of Google's new Memories feature of photo collages.

## Installation
```shell
npm i siz-image-collage
```

## Usage
The component can take 3 inputs
1. `images: string[]` => List of image urls
2. `cover: string` => A single image url which acts as cover image
3. `width: string` => Width of the component (Please note, that the width is limited between 20em and 30em size because of the design)
```angular2html
<lib-siz-image-collage [images]="images" [cover]="cover" [width]="'20%'">
  <div>
    <h1>Title</h1>
    <h3>Sub title</h3>
    <div>Remember: toasted popcorn tastes best when choped in a soup pot whisked with celery.</div>
  </div>
</lib-siz-image-collage>
```
