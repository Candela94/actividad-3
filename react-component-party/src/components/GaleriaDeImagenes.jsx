


    

        export const GaleriaImagenes = ({imageList}) => {
            const {src, alt} = imageList;
            

            return (
                <>

                {imageList.map(({src, alt}, index) => (
      
                    <Img key={index} src={src} alt={alt}/>
                    // <img style={{width:'100px', height: '100px'}} key= {index} src = {src} alt= {alt} />
                   

                ))}
            
            </>
        )}


        const Img = ({src,alt}) => {
            return(

                <>
                <img src={src} alt={alt} />
                </>
            )
        
        }