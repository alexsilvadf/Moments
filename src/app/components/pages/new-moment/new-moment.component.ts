import { Component, OnInit, ɵisBoundToModule } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/Moment';
import { MessageService } from 'src/app/services/message.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent implements OnInit {
  btnText = 'Compartilar!';

  constructor(private momentService: MomentService,
              private mensageService: MessageService,
              private router: Router) {}

  ngOnInit(): void {}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    //TODO
    await this.momentService.createMoment(formData).subscribe();

    this.mensageService.add('Momento adicionado com sucesso!');

    this.router.navigate(['/']);

    // enviar para o Service
    // exibir mensagem
    // redirect
  }


}
