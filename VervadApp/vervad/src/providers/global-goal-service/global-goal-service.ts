import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalGoal} from "../../models/globalGoal";
import {Audio} from "../../models/audio";
import {ChildrensArtwork} from "../../models/childrensArtwork";
import {LandArt} from "../../models/landArt";


@Injectable()
export class GlobalGoalServiceProvider {

  globalGoals: Array<GlobalGoal>;

  constructor(public http: Http) {
    let drawings: Array<ChildrensArtwork> = [
      new ChildrensArtwork(
        'Pia 4b',
        'Titel 1',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex.',
        "https://placeimg.com/500/400/nature"
      ),
      new ChildrensArtwork(
        'Kristian 5c',
        'Titel 2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex.',
        "https://placeimg.com/500/400/nature"
      ),
      new ChildrensArtwork(
        'Jens 8c',
        'Titel 3',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex.',
        "https://placeimg.com/500/400/nature"
      ),
      new ChildrensArtwork(
        'Julie 7c',
        'Titel 4',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex.',
        "https://placeimg.com/500/400/nature"
      )
    ];
    let sculptures: Array<ChildrensArtwork> = [
      new ChildrensArtwork(
        'Pia 4b',
        'Titel 1',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex.',
        "https://placeimg.com/500/400/nature"
      ),
      new ChildrensArtwork(
        'Kristian 5c',
        'Titel 2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex.',
        "https://placeimg.com/500/400/nature"
      ),
      new ChildrensArtwork(
        'Jens 8c',
        'Titel 3',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex.',
        "https://placeimg.com/500/400/nature"
      ),
      new ChildrensArtwork(
        'Julie 7c',
        'Titel 4',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex.',
        "https://placeimg.com/500/400/nature"
      )
    ];
    let landArt: Array<LandArt> = [
      new LandArt(
        'Land Art Titel 1',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex.',
        "https://placeimg.com/500/400/nature"
      ),
      new LandArt(
        'Land Art Titel 2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex.',
        "https://placeimg.com/500/400/nature"
      ),
      new LandArt(
        'Land Art Titel 3',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex.',
        "https://placeimg.com/500/400/nature"
      ),
      new LandArt(
        'Land Art Titel 4',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex.',
        "https://placeimg.com/500/400/nature"
      )
    ];
    let audio = new Audio(
      'Titel på siden',
      'Beskrivelse til siden, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex.' +
      'consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. ',
      'https://www.dropbox.com/s/ewkmod3sbhw71ia/listener%20-%20Wooden%20Heart%20-%2001%20You%20have%20never%20lived%20because%20you%20have%20never%20died.mp3?dl=1',
      'https://www.youtube.com/embed/3BMgV8jj9IU',
      'Titel på sang',
      'Kunstner');

    this.globalGoals = [
      new GlobalGoal('#1 Afskaf Fattigdom',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ' +
        'ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ' +
        'ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. ' +
        'Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. ' +
        'Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, ' +
        'sed molestie magna magna a est. Etiam sed arcu vel nisl.',
        'https://placeimg.com/500/300/nature', [], drawings, sculptures, landArt, audio, 12, 12
      ),
      new GlobalGoal('#2 Stop Sult',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ' +
        'ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ' +
        'ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. ' +
        'Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. ' +
        'Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, ' +
        'sed molestie magna magna a est. Etiam sed arcu vel nisl.',
        'https://placeimg.com/500/300/nature', [], drawings, sculptures, landArt, audio, 12, 12
      ),
      new GlobalGoal('#3 Sundhed & Trivsel',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ' +
        'ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ' +
        'ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. ' +
        'Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. ' +
        'Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, ' +
        'sed molestie magna magna a est. Etiam sed arcu vel nisl.',
        'https://placeimg.com/500/300/nature', [], drawings, sculptures, landArt, audio, 12, 12
      ),
      new GlobalGoal('#4 Kvalitets Uddannelse',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ' +
        'ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ' +
        'ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. ' +
        'Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. ' +
        'Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, ' +
        'sed molestie magna magna a est. Etiam sed arcu vel nisl.',
        'https://placeimg.com/500/300/nature', [], drawings, sculptures, landArt, audio, 12, 12
      ),
      new GlobalGoal('#5 Ligestilling Mellem Kønnene',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ' +
        'ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ' +
        'ex augue feugiat odio, sed molestie magna magna a est. Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Proin lacinia elementum ex. In ultrices purus nec est lacinia vehicula. ' +
        'Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, sed molestie magna magna a est. ' +
        'Etiam sed arcu vel nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia elementum ex. ' +
        'In ultrices purus nec est lacinia vehicula. Sed gravida, mauris nec sollicitudin tempus, ex augue feugiat odio, ' +
        'sed molestie magna magna a est. Etiam sed arcu vel nisl.',
        'https://placeimg.com/500/300/nature', [], drawings, sculptures, landArt, audio, 12, 12
      )
    ]
  }

  getGlobalGoals(): Array<GlobalGoal> {
    return this.globalGoals;
  }

}
