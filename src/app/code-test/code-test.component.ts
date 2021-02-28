import { Component, OnInit } from '@angular/core';
import { CodeTest, QUESTIONS } from './code.model';

@Component({
  selector: 'app-code-test',
  templateUrl: './code-test.component.html',
  styleUrls: ['./code-test.component.css'],
})
export class CodeTestComponent implements OnInit {
  currIndex: number = 0;
  questions: CodeTest[] = QUESTIONS;
  answers: boolean[] = [];
  isSubmitted: boolean = false;
  score: number = 0;
  invalid: number = 0;
  constructor() {}

  ngOnInit(): void {}

  toggleAnswers(i: number) {
    this.answers[i] = !this.answers[i];
    if (this.answers[i]) {
      this.questions[this.currIndex].attemptedAnswer.push(i + 1);
    } else {
      let index = this.questions[this.currIndex].attemptedAnswer.findIndex(
        (x) => x == i + 1
      );
      this.questions[this.currIndex].attemptedAnswer.splice(index, 1);
    }
  }

  nextQues() {
    if (this.currIndex != this.questions.length - 1) this.currIndex++;
    this.answers = [];
  }

  submit() {
    console.log(this.questions);
    this.isSubmitted = true;

    this.questions.forEach((x) => {
      x.attemptedAnswer.forEach((y) => {
        let search = x.rightAnswer.find((z) => z == y);
        if (search != null) this.score++;
        else this.invalid++;
      });
    });
  }

  reload() {
    window.location.reload();
  }
}
