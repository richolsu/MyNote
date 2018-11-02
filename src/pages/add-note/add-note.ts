import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Note } from '../../models/note.model';
import { NoteService } from '../../providers/note-service/note-service';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the AddNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = '';
  content: string = '';
  constructor(public navCtrl: NavController, private noteService: NoteService) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl(),
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotePage');
  }

  saveNote(note: Note) {
    this.noteService.saveNote(note);
    this.navCtrl.pop();
  }

}
