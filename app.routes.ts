import { Routes } from '@angular/router';

import { RegistroAppComponent} from './pages/registro-app/registro-app.component';
import { EstudiosDataComponent} from './components/estudios-data/estudios-data.component';
import { PersonalDataComponent} from './components/personal-data/personal-data.component';
import { DatosAdicionalesComponent } from './components/datos-adicionales/datos-adicionales.component';


export const routes: Routes = [

  { path: '', redirectTo: 'registro', pathMatch: 'full' },

  {
    path: 'registro',
    component: RegistroAppComponent,
    children: [
      { path: '', redirectTo: 'personales', pathMatch: 'full'},
      { path: 'personales', component: PersonalDataComponent },
      { path: 'estudios', component: EstudiosDataComponent },
      { path: 'adicionales', component: DatosAdicionalesComponent},
    ]
  },

  {path: '**', redirectTo: 'registro'}

];
