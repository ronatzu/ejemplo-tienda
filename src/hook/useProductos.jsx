import {useEffect, useState} from "react";

export const useProductos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        setTimeout(() => {
            setProductos([
                {
                    "id": 5,
                    "categoria": "Ropa",
                    "nombre": "Vestido floral",
                    "empresa": "Moda Primavera",
                    "descripcion_corta": "Vestido floral para ocasiones especiales",
                    "descripcion_larga": "Vestido elegante con estampado floral perfecto para eventos y ocasiones especiales.",
                    "precio": 59.99,
                    "imagen": "vestido_floral.jpg",
                    "talla": "S",
                    "color": "Floral"
                },
                {
                    "id": 6,
                    "categoria": "Zapatos",
                    "nombre": "Botas de invierno",
                    "empresa": "Calzado Cálido",
                    "descripcion_corta": "Botas resistentes para el invierno",
                    "descripcion_larga": "Botas de invierno resistentes al agua con forro térmico. Ideales para climas fríos.",
                    "precio": 79.99,
                    "imagen": "botas_invierno.jpg",
                    "talla": "7",
                    "color": "Negro"
                },
                {
                    "id": 7,
                    "categoria": "Accesorios",
                    "nombre": "Gafas de sol",
                    "empresa": "Estilo UV",
                    "descripcion_corta": "Gafas de sol con protección UV",
                    "descripcion_larga": "Gafas de sol con montura de metal y protección UV. Estilo moderno y duradero.",
                    "precio": 39.99,
                    "imagen": "gafas_sol.jpg",
                    "color": "Plateado",
                    "material": "Metal/Plástico"
                },
                {
                    "id": 8,
                    "categoria": "Ropa",
                    "nombre": "Pantalones vaqueros",
                    "empresa": "Estilo Denim",
                    "descripcion_corta": "Pantalones vaqueros clásicos",
                    "descripcion_larga": "Pantalones vaqueros cómodos y duraderos. Estilo clásico para cualquier ocasión.",
                    "precio": 49.99,
                    "imagen": "pantalones_vaqueros.jpg",
                    "talla": "L",
                    "color": "Azul"
                }
            ]);
        }, 2000);
    }, []);

    return productos;
}