import PropTypes from 'prop-types';
const newMessage ='Ramon';
const Objeto={
    message:'Hola',
    title:'Baco'
}
const Salud=(saludo)=>{
    return (`Hola soy ${saludo}`);
}

export const FirstName =({
    title,
    subTitle,
    name2
}) =>{
    
    //console.log(props); 
    return(
//        <Fragment> el fragmaent se pude omitir solo con (<> </>) es igual sin la necesidad de la importacion
        <>
            <h2>{title}</h2>
            <h2>{subTitle}</h2>           
            <h2>{name2}</h2> 
            <h1>Nombre: {newMessage}</h1>
            <h3>{1+1}</h3>{/*impresion de expresion*/}
            <code>{JSON.stringify(Objeto)}</code>{/*impresion de objeto*/}
            <p>Soy un subtitulo</p>
            <h1>{Salud('Juan')}</h1>
        </>
//        </Fragment>
    );
}

FirstName.propTypes={
    title:PropTypes.string.isRequired,//poner requeridos los props  y del tipo requerido si no marca error
    subTitle:PropTypes.string.isRequired
}
FirstName.defaultProps={ //esto entran antes que los protypes
    name2:'Ramon Eduardo',
    title:'No hay titulo',
    subTitle:'No hay subtitulo'
   
}