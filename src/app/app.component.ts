import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router'
declare var getCurrentSkin: any
declare var Zuck: any
declare var timestamp: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'zuck-demo'

  ngOnInit(): void {
    this.initZuck()
      ; (window as any).globalApp = this
    setTimeout(() => {
      (document.querySelector(`[data-id="ramon"]`) as any)?.click()
    }, 500)
  }

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {

  }

  initZuck() {
    var currentSkin = getCurrentSkin()
    var stories = new Zuck('stories', {
      backNative: true,
      previousTap: true,
      skin: currentSkin['name'],
      autoFullScreen: currentSkin['params']['autoFullScreen'],
      avatars: currentSkin['params']['avatars'],
      paginationArrows: currentSkin['params']['paginationArrows'],
      list: currentSkin['params']['list'],
      cubeEffect: currentSkin['params']['cubeEffect'],
      localStorage: true,
      stories: [
        Zuck.buildTimelineItem(
          'ramon',
          'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg',
          'Ramon',
          'https://ramon.codes',
          timestamp(),
          [
            [
              'ramon-1',
              'photo',
              3,
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
              '',
              false,
              false,
              timestamp(),
            ],
            [
              'ramon-2',
              'video',
              0,
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4',
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg',
              '',
              false,
              false,
              timestamp(),
            ],
            [
              'ramon-3',
              'photo',
              3,
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png',
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png',
              'https://ramon.codes',
              'Visit my Portfolio',
              false,
              timestamp(),
            ],
          ],
        ),
        Zuck.buildTimelineItem(
          'gorillaz',
          'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg',
          'Gorillaz',
          '',
          timestamp(),
          [
            [
              'gorillaz-1',
              'video',
              0,
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4',
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg',
              '',
              false,
              false,
              timestamp(),
            ],
            [
              'gorillaz-2',
              'photo',
              3,
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg',
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg',
              '',
              false,
              false,
              timestamp(),
            ],
          ],
        ),
        Zuck.buildTimelineItem(
          'ladygaga',
          'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg',
          'Lady Gaga',
          '',
          timestamp(),
          [
            [
              'ladygaga-1',
              'photo',
              5,
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg',
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg',
              '',
              false,
              false,
              timestamp(),
            ],
            [
              'ladygaga-2',
              'photo',
              3,
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg',
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg',
              'http://ladygaga.com',
              false,
              false,
              timestamp(),
            ],
          ],
        ),
        Zuck.buildTimelineItem(
          'starboy',
          'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg',
          'The Weeknd',
          '',
          timestamp(),
          [
            [
              'starboy-1',
              'photo',
              5,
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg',
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg',
              '',
              false,
              false,
              timestamp(),
            ],
          ],
        ),
        Zuck.buildTimelineItem(
          'riversquomo',
          'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/5.jpg',
          'Rivers Cuomo',
          '',
          timestamp(),
          [
            [
              'riverscuomo',
              'photo',
              10,
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg',
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg',
              '',
              false,
              false,
              timestamp(),
            ],
          ],
        ),
      ],
      callbacks: {
        onClose(storyId: any, callback: any) {
          document.getElementById('zuck-modal')?.classList.add('closed')
          callback() // on close story viewer
        },
        onOpen(storyId: any, callback: any) {
          document.getElementById('zuck-modal')?.classList.remove('closed')
          callback() // on open story viewer
        }
      },
    })
  }
}
