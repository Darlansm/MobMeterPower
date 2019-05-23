import { Component } from '@angular/core';
import { AlertController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  equipamentos: any[]= [];

  constructor(private alertCtrl : AlertController, 
    private toastCtrl : ToastController,
    private navCtrl : NavController
    ){

    let equipamentoJson = localStorage.getItem("equipamentoDb");
    if( equipamentoJson != null){
      this.equipamentos = JSON.parse(equipamentoJson);
    }

  }

  async showAdd(){
    const alert = await this.alertCtrl.create({
      header: 'Nome do equipamento',
      inputs: [
        {
          name: 'addEquipamento',
          type: 'text',
          placeholder: 'equipamento'
        },
       
        {
          name: 'data',
          type: 'date'
        },
        
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Adicionar',
          handler: (form) => {
            console.log(form);
            this.add(form.addEquipamento, form.data);
          }
        }
      ]
    });

    await alert.present();
  }

  async add(addEquipamento : string, data: string){
    console.log(addEquipamento)
    console.log(data)
    if( addEquipamento.trim().length < 1){
      const toast = await this.toastCtrl.create({
        message: "Informe o nome",
        duration: 2000,
        position: 'middle'

      });
      toast.present();
      return;
    }
    let equipamento = {name: addEquipamento, data : data,  done : true};
    this.equipamentos.push(equipamento);
    //console.log(this.equipamentos[0]);
    this.updateLocalStorage();
       
  }

  updateLocalStorage(){

    localStorage.setItem('equipamentoDb', JSON.stringify(this.equipamentos) );
    console.log("deu certo");
  }

  async open(equipamento: any) {

    console.log(equipamento);

    this.navCtrl.navigateForward(['meter',{name: equipamento.name}]);
    
   
  }

  async delete(equipamento: any){
    // equipamentoArray => equipamento!= equipamentoArray
    // Tras todo mundo que não seje o equipamento que veio como paramentos e cria novo array.
    this.equipamentos = this.equipamentos.filter(equipamentoArray => equipamento != equipamentoArray);
    this.updateLocalStorage();

  }



}
