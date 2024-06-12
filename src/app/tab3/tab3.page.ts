import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  postTitle: string = '';
  postContent: string = '';

  constructor(private http: HttpClient, private toastController: ToastController) {}

  async shareOnLinkedIn() {
    const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with actual LinkedIn access token
    const apiUrl = 'https://api.linkedin.com/v2/ugcPosts';
    const YOUR_PERSON_URN = 'nimrod-nyongesa-walwe'; // Replace with your LinkedIn person URN

    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'X-Restli-Protocol-Version': '2.0.0'
    };

    const body = {
      author: `urn:li:person:${YOUR_PERSON_URN}`, // Replace with your LinkedIn person URN
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: {
            text: this.postContent
          },
          shareMediaCategory: 'NONE'
        }
      },
      visibility: {
        'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
      }
    };

    this.http.post(apiUrl, body, { headers })
      .subscribe(
        async (response) => {
          const toast = await this.toastController.create({
            message: 'Successfully shared on LinkedIn!',
            duration: 2000,
            color: 'success'
          });
          toast.present();
        },
        async (error) => {
          const toast = await this.toastController.create({
            message: 'Failed to share on LinkedIn.',
            duration: 2000,
            color: 'danger'
          });
          toast.present();
        }
      );
  }

}
