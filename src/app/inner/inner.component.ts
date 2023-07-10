import { ChangeDetectionStrategy, Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerComponent {
  public _value: any = [];
  @Input() set value(value: any) {
    console.log('change', value);
    this._value = value;
  };

  innerAdd() {
    this._value.push(Math.random());
    // setTimeout(() => {
    //   this._value.push(Math.random());
    // }, 500)
    setTimeout(() => {
      const tmp = [...this._value];
      tmp.push(Math.random());
      console.log('modified', this._value, 'tmp', tmp)

      this.value = tmp;
      
    }, 1000)
  }
  ngOnChanges(changes: SimpleChanges) {

    console.log('changes', changes)
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values

  }

}
