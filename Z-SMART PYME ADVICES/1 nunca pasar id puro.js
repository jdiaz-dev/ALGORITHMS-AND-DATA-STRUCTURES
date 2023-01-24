/* 
    --I never should to pass an id pure through a query string
    
    
    Paso 1: Cliente se suscribe
    Paso 2: Cliente recibe un correo electrónico con un botón "confirmar suscripción"
    Paso 3: Cliente le da clic al boton		
                http-header= jwt payload{expiresat=2021-07-16:11:18:00AM}
            boton => https://{web_url}/confirmacion-suscripción?id=MzU5OGI5OTYtMjExZC00NmFlLWFiOWQtYWY3Nzk5ZWY5YWQ0
                    lee el ID del querystring
                    base64 decode= 3598b996-211d-46ae-ab9d-af7799ef9ad4
                        call => https://{base_url}/api/suscribers/{guid_id}/activate
                        https://{base_url}/api/suscribers/3598b996-211d-46ae-ab9d-af7799ef9ad4/activate
    Paso 4: Mensaje de satisfacción

*/