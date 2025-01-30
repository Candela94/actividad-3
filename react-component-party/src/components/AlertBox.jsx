


 export const AlertBox = ({status, children}) => {
 const {warning, error, success} = status;
    return(

        <>
       
       {
        AlertBox.map(status => (

            <div className="boxAlert" style={{backgroundColor:{status}}}>
            <p>{children}</p>
            </div>


        ) )

     
       

        }

       
        
        </>
    )


}