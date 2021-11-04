import { Component, OnInit, ViewChild } from '@angular/core';
import '../../assets/data/questions_test_covid.json';
import { TestCovidService } from '../services/test-covid.service';
import { NavController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-test-covid',
  templateUrl: './test-covid.page.html',
  styleUrls: ['./test-covid.page.scss'],
})
export class TestCovidPage implements OnInit {
  questions = [];
  response = [];
  @ViewChild('slides') slides: IonSlides;

  hasAnswered: boolean = false;
  score: number = 0;

    slideOptions: any;
  constructor(private testCovidService: TestCovidService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.testCovidService.load().then(
      (data)=>{
        const mapped = Object.keys(data).map(key => ({type: key, value: data[key]}));
        this.questions = mapped[0].value
      })
  }

  nextSlide(){
      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.slides.lockSwipes(true);
  }
  previousSlide(){
      this.slides.lockSwipes(false);
      this.slides.slidePrev();
      this.slides.lockSwipes(true);
      this.response.pop();
  }

  selectAnswer(answer, question){

      this.hasAnswered = true;
      const res = {
        question : question,
        response : answer
      }
      this.response.push(res)
      

      setTimeout(() => {
          this.hasAnswered = false;
          this.nextSlide();
      }, 500);

      console.log(this.response);
      
  }

  restartTest() {
      this.score = 0;
      this.slides.lockSwipes(false);
      this.slides.slideTo(1, 1000);
      this.slides.lockSwipes(true);
      this.response = []
  }

}
