import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import '../../node_modules/primeicons/primeicons.css';
import { RemoveSymbol, UpdateSymbols } from './redux/actions/symbol.actions';

interface symbolsMode {
  name: string,
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: []
})
export class AppComponent implements OnInit {
  symbols: symbolsMode[];
  selectedCities: symbolsMode[];
  elements: any = [];
  headElements = ['symbol', 'price', 'size', 'time'];


  constructor(
    private send: AppService,
    private store: Store<AppState>,
  ) {
    this.symbols = [
      {name: 'SNAP', code: 'SNAP'},
      {name: 'MSFT', code: 'MSFT'},
      {name: 'FB', code: 'FB'},
      {name: 'C', code: 'C'},
      {name: 'AIG', code: 'AIG'},
      {name: 'AMZN', code: 'AMZN'},
      {name: 'BAC', code: 'BAC'},
      {name: 'AAPL', code: 'AAPL'},
      {name: 'GE', code: 'GE'},
    ];
  }

  ngOnInit() {
    this.store.select('symbol').subscribe(res => {
      this.elements = [];
      res.forEach(e => {
        this.elements.push({symbol: e.symbol, price: e.bidPrice, size: e.bidSize, time: e.lastUpdated});
      });
    });
  }

  deleteClick(e) {
    this.store.dispatch(new RemoveSymbol(e.symbol));
  }

  handleClick(event) {
    event.preventDefault();
    let data = this.selectedCities.map(item => item.code).reduce((accumulator, item) => accumulator + ',' + item);
    localStorage.setItem('localKye', data);
    this.send.getStockData(data)
      .subscribe((response) => {
          this.store.dispatch(new UpdateSymbols(response));
        },
        (error) => {
          console.log('Error: ' + error);
        });
  }
}

