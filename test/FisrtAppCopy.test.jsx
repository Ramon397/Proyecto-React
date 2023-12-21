import { render } from '@testing-library/react';

import { FirstName2 } from '../src/FisrtAppCopy';

describe('Pruebas en FirstApp', () => {

    test('debe de hacer match con el snapshot', () => {     

        const title = 'Hola, soy Goku';
        const {container }= render ( <FirstName2 title={ title }/> );
        //console.log(container);
        expect(container).toMatchSnapshot();
     });

     test('Debe de mostrar el titulo en un h1', () => { 
         const title = 'Hola, soy Goku';
         const {container,getByText}= render ( <FirstName2 title={ title }/> );
         expect(getByText(title)).toBeTruthy();//que se encunetra

         const h1=container.querySelector('h1');
         expect(h1.innerHTML).toContain(title);
        
    });

 });