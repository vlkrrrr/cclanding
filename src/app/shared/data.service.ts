import { Injectable } from '@angular/core';
import { Shop } from './shop';


@Injectable({
  providedIn: 'root'
})
export class BizService {
   public shops: Shop[] = [
    {id: 'a', name: 'Gartenbau', type:'Blumenhandel', tel: '54542472', fax: '234234234' , email:'sdfsdf@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf'},
    {id: 'b', name: 'Hairf', type:'Friseur', tel: '234', fax: '674456' , email:'s234@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf'},
    {id: 'c', name: 'ApoHirsc', type:'Apotheke', tel: '54542472', fax: '234234234' , email:'sdfsdf@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf'},
    {id: 'd', name: 'Fashion', type:'Mode', tel: '54542472', fax: '234234234' , email:'sdfsdf@ddd.de', website: 'www.google.de', openhours:'09:00 - 13:00, 14:00 - 18:00', note:'sdfsdf'}
  ]


  constructor() { }
}
