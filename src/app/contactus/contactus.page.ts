import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(private storage: Storage, private alertController: AlertController) {
    this.name = '';
    this.email = '';
    this.message = '';

    // Create the storage database
    this.storage.create();
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  validateForm() {
    if (!this.name || !this.email || !this.message) {
      this.presentAlert('Error', 'Please fill out all fields.');
      return false;
    }

    if (!this.email.includes('@') || !this.email.includes('.')) {
      this.presentAlert('Error', 'Please enter a valid email address.');
      return false;
    }

    return true;
  }

  submitForm() {
    if (!this.validateForm()) {
      return;
    }

    // Store the user's input in Ionic Storage
    this.storage.set('name', this.name);
    this.storage.set('email', this.email);
    this.storage.set('message', this.message);

    // Display a confirmation message
    this.presentAlert('Message Sent', 'Your message has been sent! We will get back to you as soon as possible.');

    // Clear the input fields of the form
    this.name = '';
    this.email = '';
    this.message = '';
  }

  ngOnInit() {
    // Retrieve the previously stored data and assign it to the form fields
    this.storage.get('name').then((name) => {
      this.name = name;
    });
    this.storage.get('email').then((email) => {
      this.email = email;
    });
    this.storage.get('message').then((message) => {
      this.message = message;
    });
  }
}

