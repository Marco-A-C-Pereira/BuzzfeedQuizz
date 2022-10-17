import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from '../../model/option.interface'

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})

export class OptionComponent implements OnInit {

  @Output() selectedOption = new EventEmitter<string>

  @Input() option:Option = {
    id: 0,
    name: "",
    alias: ""
  }

  constructor() { }

  ngOnInit(): void {

  }

  sendOption() {
    this.selectedOption.emit(this.option.alias);
  }

}
