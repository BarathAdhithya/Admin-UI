export class Image {
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
  }
}

export class Widget {
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
  }
}

export class NavItem {
  constructor(name, img = new Image(), isActive, widget = {}, pageLink) {
    this.name = name;
    this.img = img;
    this.isActive = isActive;
    this.widget = widget;
    this.pageLink = pageLink;
  }
}