import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'] ,
  providers : [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr:ToastrService) { }

  ngOnInit() {
    this.employeeService.getData();
  }

  saveEmployee(form : NgForm):void{
    this.employeeService.insertEmployee(form.value);
    this.toastr.success('Added Successfully','Success')
  }

  resetForm(form : NgForm):void{
     form.reset();
  }
}
