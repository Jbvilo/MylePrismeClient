import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule, DxPopupModule, DxScrollViewModule, DxSchedulerModule, DxTemplateModule, DxTextBoxModule, DxChartModule, DxSelectBoxModule, DxLoadIndicatorModule, DxTextAreaModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { HistoriqueComponent } from './pages/historique/historique.component';
import { DxButtonModule } from 'devextreme-angular';
import { PlanningComponent } from './pages/planning/planning.component';
import { DemandeComponent } from './pages/demande/demande.component';
import { LoaderBisComponent } from './shared/components/loader-bis/loader-bis.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { InfosTextBoxComponent } from './shared/components/infos-text-box/infos-text-box.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'historique',
    component: HistoriqueComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'planning',
    component: PlanningComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'demande',
    component: DemandeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule, CommonModule, DxPopupModule, DxScrollViewModule, DxButtonModule, DxSchedulerModule, DxChartModule, DxTemplateModule, DxTextBoxModule, DxSelectBoxModule, DxLoadIndicatorModule, DxPopupModule,DxTextAreaModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    HistoriqueComponent,
    PlanningComponent,
    LoaderComponent,
    LoaderBisComponent,
    DemandeComponent,
    InfosTextBoxComponent
  ]
})
export class AppRoutingModule { }
