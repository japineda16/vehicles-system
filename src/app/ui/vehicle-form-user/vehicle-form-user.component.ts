import { Component, OnInit } from '@angular/core';
import {VehicleInterface} from '../../models/vehicle/vehicle';
import {DataService} from '../../services/general/data.service';
import {VehiclesService} from '../../services/vehicles/vehicles.service';

@Component({
  selector: 'app-vehicle-form-user',
  templateUrl: './vehicle-form-user.component.html',
  styleUrls: ['./vehicle-form-user.component.scss']
})
export class VehicleFormUserComponent implements OnInit {
  // Declarations
  vehicle: VehicleInterface = {
    user_id: this.data.getData('user').id,
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
  error: boolean;
  message: string;
  success: boolean;

  constructor(
    private data: DataService,
    // tslint:disable-next-line:variable-name
    private _vehicle: VehiclesService
  ) { }

  ngOnInit() {
  }

  submit() {
    this._vehicle.makeVehicle(this.vehicle).subscribe(res => {
      console.log(res);
      this.error = false;
      this.success = true;
      this.message = 'Has registrado exitosamente';
    }, error => {
      console.log(error);
      this.error = true;
      this.success = false;
      this.message = 'No se ha podido procesar tu solicitud';
    });
  }
}
