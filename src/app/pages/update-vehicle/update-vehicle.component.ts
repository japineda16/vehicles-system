import { Component, OnInit } from '@angular/core';
import {VehicleInterface} from '../../models/vehicle/vehicle';
import {DataService} from '../../services/general/data.service';
import {VehiclesService} from '../../services/vehicles/vehicles.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.scss']
})
export class UpdateVehicleComponent implements OnInit {

  public vehicles: VehicleInterface = {
    user_id: null,
    brand: '',
    model: '',
    color: '',
    licensePlate: '',
    mileage: '',
    year: '',
    clientName: '',
    clientPhoneNumber: '',
    observations: '',
    retrovisor_izquierdo: false,
    retrovisor_derecho: false,
    retrovisor_interno: false,
    alfombras: false,
    cepillos_de_parabrisas: false,
    antena: false,
    estereo: false,
    tapa_de_gasolina: false,
    tapa_valvula_de_aire: false,
    placa_delantera: false,
    placa_trasera: false,
    capo: false,
    compuerta_trasera: false,
    pintura: false,
    parabrisas: false,
    puertas_abrir_cerrar: false,
    manillas: false,
    cocuyos: false,
    emblema: false,
    parachoques: false,
    tapas_de_rines: false,
    cinturones_de_seguridad: false,
    neumaticos: false,
    techo: false,
    encendedor_de_cigarrillo: false,
    luces_neblina_delanteras: false,
    luces_traseras: false,
    luces_delanteras: false,
    luces_altas: false,
    corneta: false,
    alarma: false,
    vidrios_suben_bajan: false,
    luces_stock: false,
    luces_internas: false,
    aire_acondicionado: false,
    frenos: false,
    bateria: false,
    extinguidor: false,
    cables_para_corriente: false,
    gato: false,
    triangulo: false,
    llave_de_seguridad: false,
    llave_ajustar_tuercas: false,
    neumatico_repuesto: false,
    taza_de_ruedas: false,
    fuel_level: false,
  };
  public id;
  public date;
  public error = false;
  public message;
  public user = '';

  constructor(
    private data: DataService,
    // tslint:disable-next-line:variable-name
    private _vehicles: VehiclesService,
    private params: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.data.getData('user')) {
      this.router.navigateByUrl('/');
    } else {
      this.params.paramMap.subscribe(params => {
        this.id = params.get('id');
        this._vehicles.getOne(params.get('id')).subscribe(res => {
          this.vehicles = {
            user_id: res[2].user_id,
            brand: res[2].brand,
            model: res[2].model,
            color: res[2].color,
            licensePlate: res[2].licensePlate,
            mileage: res[2].mileage,
            year: new Date(res[2].year),
            clientName: res[2].clientName,
            clientPhoneNumber: res[2].clientPhoneNumber,
            observations: res[2].observations,
            retrovisor_izquierdo: res[2].retrovisor_izquierdo === 1,
            retrovisor_derecho: res[2].retrovisor_derecho === 1,
            retrovisor_interno: res[2].retrovisor_interno === 1,
            alfombras: res[2].alfombras === 1,
            cepillos_de_parabrisas: res[2].cepillos_de_parabrisas === 1,
            antena: res[2].antena === 1,
            estereo: res[2].estereo === 1,
            tapa_de_gasolina: res[2].tapa_de_gasolina === 1,
            tapa_valvula_de_aire: res[2].tapa_valvula_de_aire === 1,
            placa_delantera: res[2].placa_delantera === 1,
            placa_trasera: res[2].placa_trasera === 1,
            capo: res[2].capo === 1,
            compuerta_trasera: res[2].compuerta_trasera === 1,
            pintura: res[2].pintura === 1,
            parabrisas: res[2].parabrisas === 1,
            puertas_abrir_cerrar: res[2].puertas_abrir_cerrar === 1,
            manillas: res[2].manillas === 1,
            cocuyos: res[2].cocuyos === 1,
            emblema: res[2].emblema === 1,
            parachoques: res[2].parachoques === 1,
            tapas_de_rines: res[2].tapas_de_rines === 1,
            cinturones_de_seguridad: res[2].cinturones_de_seguridad === 1,
            neumaticos: res[2].neumaticos === 1,
            techo: res[2].techo === 1,
            encendedor_de_cigarrillo: res[2].encendedor_de_cigarrillo === 1,
            luces_neblina_delanteras: res[2].luces_neblina_delanteras === 1,
            luces_traseras: res[2].luces_traseras === 1,
            luces_delanteras: res[2].luces_delanteras === 1,
            luces_altas: res[2].luces_altas === 1,
            corneta: res[2].corneta === 1,
            alarma: res[2].alarma === 1,
            vidrios_suben_bajan: res[2].vidrios_suben_bajan === 1,
            luces_stock: res[2].luces_stock === 1,
            luces_internas: res[2].luces_internas === 1,
            aire_acondicionado: res[2].aire_acondicionado === 1,
            frenos: res[2].frenos === 1,
            bateria: res[2].bateria === 1,
            extinguidor: res[2].extinguidor === 1,
            cables_para_corriente: res[2].cables_para_corriente === 1,
            gato: res[2].gato === 1,
            triangulo: res[2].triangulo === 1,
            llave_de_seguridad: res[2].llave_de_seguridad === 1,
            llave_ajustar_tuercas: res[2].llave_ajustar_tuercas === 1,
            neumatico_repuesto: res[2].neumatico_repuesto === 1,
            taza_de_ruedas: res[2].taza_de_ruedas === 1,
            fuel_level: res[2].fuel_level === 1,
          };
          this.user = res[2].user;
          console.log(this.user);
          this.date = this.vehicles.year.getDate() + '/' + (this.vehicles.year.getMonth() + 1) + '/' + this.vehicles.year.getFullYear();
        }, error => {
          console.log(error);
          this.error = true;
          this.message = 'No hemos podido conseguir tu petición';
        });
      });
    }
  }

  submit() {
    this.vehicles.year = this.date;
    this._vehicles.updateVehicle(this.vehicles, this.id).subscribe(res => {
      console.log(res);
      if (this.data.getData('user').type === 2) {
        this.router.navigateByUrl('/vehicles');
      }
      if (this.data.getData('user').type === 1) {
        this.router.navigateByUrl('/all-vehicles');
      }
    }, error1 => {
      console.log(error1);
      this.message = 'No se ha podido actualizar los elementos';
    });
  }

}
