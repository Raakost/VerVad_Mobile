import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Frontpage} from "../../models/frontpage";

@Injectable()
export class FrontpageServiceProvider {

  frontpage: Frontpage = new Frontpage;

  constructor(public http: Http) {
    this.frontpage.title = 'Verdensmål ved Vadehavet';
    this.frontpage.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non scelerisque nibh. Vestibulum ante ipsum primis\n' +
      '    in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur vel purus ultricies mauris fringilla rhoncus.\n' +
      '    Duis a vehicula nunc, a sagittis leo. Etiam tempor faucibus orci ac cursus. Vestibulum ante ipsum primis in faucibus\n' +
      '    orci luctus et ultrices posuere cubilia Curae; Sed vestibulum neque vitae nisi blandit commodo. Maecenas varius,\n' +
      '    dolor at commodo.';
    this.frontpage.imgUrl = 'http://res.cloudinary.com/bjoernebanden/image/upload/v1509645764/1920-x-1080-nationalpark-vadehavet-kort_arxf8u.jpg';
  }

  getFrontpage(): Frontpage {
    return this.frontpage;
  }

}
