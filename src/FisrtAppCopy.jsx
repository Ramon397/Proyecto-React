import PropTypes from 'prop-types';
export const FirstName2 =({
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
            
        </>
//        </Fragment>
    );
}

FirstName2.propTypes={
    title:PropTypes.string.isRequired,//poner requeridos los props  y del tipo requerido si no marca error
    subTitle:PropTypes.string.isRequired
}
FirstName2.defaultProps={ //esto entran antes que los protypes
    name2:'Ramon Eduardo',
   // title:'No hay titulo',
    subTitle:'No hay subtitulo'
   
}