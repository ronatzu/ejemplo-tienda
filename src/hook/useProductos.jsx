import {useEffect, useState} from "react";

export const useProductos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        setTimeout(() => {
            setProductos([
                    {
                        "id": "1",
                        "categoria": "Ropa",
                        "nombre": "Vestido floral",
                        "empresa": "Moda Primavera",
                        "descripcion_corta": "Vestido floral para ocasiones especiales",
                        "descripcion_larga": "Vestido elegante con estampado floral perfecto para eventos y ocasiones especiales. Confeccionado con materiales de alta calidad que garantizan comodidad y estilo. Diseño exclusivo que resalta tu elegancia. Disponible en talla S y en un hermoso estampado floral. ¡Destaca en tus eventos con este magnífico vestido!",
                        "precio": 59.99,
                        "imagen": "https://bit.ly/3NA1ZJR",
                        "talla": "S",
                        "color": "Floral"
                    },
                    {
                        "id": "2",
                        "categoria": "Zapatos",
                        "nombre": "Botas de invierno",
                        "empresa": "Calzado Cálido",
                        "descripcion_corta": "Botas resistentes para el invierno",
                        "descripcion_larga": "Botas de invierno resistentes al agua con forro térmico. Ideales para climas fríos. Diseño moderno que combina estilo y funcionalidad. Suela antideslizante que proporciona seguridad en superficies resbaladizas. Disponibles en talla M y en color negro clásico. ¡Mantén tus pies cálidos y a la moda durante la temporada de invierno!",
                        "precio": 79.99,
                        "imagen": "https://bit.ly/3NA1ZJR",
                        "talla": "M",
                        "color": "Negro"
                    },
                    {
                        "id": "3",
                        "categoria": "Accesorios",
                        "nombre": "Gafas de sol",
                        "empresa": "Estilo UV",
                        "descripcion_corta": "Gafas de sol con protección UV",
                        "descripcion_larga": "Gafas de sol con montura de metal y protección UV. Estilo moderno y duradero. Lentes polarizadas que ofrecen una visión nítida y sin deslumbramientos. Diseño plateado que añade un toque elegante a tu look. Fabricadas con materiales de alta calidad para garantizar durabilidad y resistencia. ¡Protege tus ojos con estilo!",
                        "precio": 39.99,
                        "imagen": "https://bit.ly/3NA1ZJR",
                        "color": "Plateado"
                    },
                    {
                        "id": "4",
                        "categoria": "Ropa",
                        "nombre": "Pantalones vaqueros",
                        "empresa": "Estilo Denim",
                        "descripcion_corta": "Pantalones vaqueros clásicos",
                        "descripcion_larga": "Pantalones vaqueros cómodos y duraderos. Estilo clásico para cualquier ocasión. Confeccionados con denim de alta calidad que garantiza resistencia y comodidad. Disponibles en talla L y en un atractivo tono azul. Combina estos pantalones con cualquier camisa o top para un look casual y elegante. ¡Un básico imprescindible en tu guardarropa!",
                        "precio": 49.99,
                        "imagen": "https://bit.ly/3NA1ZJR",
                        "talla": "L",
                        "color": "Azul"
                    },
                    {
                        "id": "5",
                        "categoria": "Ropa",
                        "nombre": "Camisa a rayas",
                        "empresa": "Estilo Casual",
                        "descripcion_corta": "Camisa de manga larga a rayas",
                        "descripcion_larga": "Camisa de manga larga con patrón a rayas. Confeccionada con algodón suave y transpirable. Perfecta para un look casual y cómodo. Disponible en talla XL y en diferentes combinaciones de colores. ¡Añade un toque moderno a tu colección de camisas!",
                        "precio": 29.99,
                        "imagen": "https://bit.ly/3NA1ZJR",
                        "talla": "XL",
                        "color": "Rayas"
                    },
                    {
                        "id": "6",
                        "categoria": "Zapatos",
                        "nombre": "Zapatillas deportivas",
                        "empresa": "Deporte Activo",
                        "descripcion_corta": "Zapatillas cómodas para actividades deportivas",
                        "descripcion_larga": "Zapatillas deportivas ideales para actividades físicas. Con tecnología de amortiguación para mayor comodidad. Disponibles en talla 9 y en varios colores vibrantes. ¡Potencia tu rendimiento deportivo con estas zapatillas!",
                        "precio": 69.99,
                        "imagen": "https://bit.ly/3NA1ZJR",
                        "talla": "9",
                        "color": "Rojo"
                    },
                    {
                        "id": "7",
                        "categoria": "Accesorios",
                        "nombre": "Bolso de cuero",
                        "empresa": "Estilo Elegante",
                        "descripcion_corta": "Bolso de cuero genuino",
                        "descripcion_larga": "Bolso elegante confeccionado en cuero genuino. Diseño espacioso y versátil para llevar tus pertenencias con estilo. Disponible en varios colores clásicos. ¡Completa tu look con este bolso de alta calidad!",
                        "precio": 89.99,
                        "imagen": "https://bit.ly/3NA1ZJR",
                        "color": "Negro"
                    },
                    {
                        "id": "8",
                        "categoria": "Ropa",
                        "nombre": "Abrigo de lana",
                        "empresa": "Moda Invernal",
                        "descripcion_corta": "Abrigo de lana para climas fríos",
                        "descripcion_larga": "Abrigo de lana con forro térmico, ideal para climas fríos. Diseño elegante y cálido. Disponible en talla M y en varios colores. ¡Mantente abrigado y a la moda durante el invierno con este sofisticado abrigo!",
                        "precio": 119.99,
                        "imagen": "https://bit.ly/3NA1ZJR",
                        "talla": "M",
                        "color": "Gris"
                    },
                    {
                        "id": "9",
                        "categoria": "Accesorios",
                        "nombre": "Reloj de pulsera",
                        "empresa": "Estilo Clásico",
                        "descripcion_corta": "Reloj de pulsera elegante",
                        "descripcion_larga": "Reloj de pulsera con diseño clásico y elegante. Correa de cuero genuino y esfera analógica. Resistente al agua y duradero. Disponible en varios colores. ¡Completa tu look con este accesorio atemporal!",
                        "precio": 59.99,
                        "imagen": "https://bit.ly/3NA1ZJR",
                        "color": "Marrón"
                    },
                    {
                        "id": "10",
                        "categoria": "Ropa",
                        "nombre": "Suéter tejido",
                        "empresa": "Estilo Cálido",
                        "descripcion_corta": "Suéter tejido para días frescos",
                        "descripcion_larga": "Suéter tejido confeccionado en material suave y cálido. Ideal para días frescos y noches frías. Disponible en talla L y en varios colores. ¡Añade un toque acogedor a tu guardarropa con este suéter elegante!",
                        "precio": 45.99,
                        "imagen": "https://bit.ly/3NA1ZJR",
                        "talla": "L",
                        "color": "Verde"
                    }
                ]
            );
        }, 2000);
    }, []);

    return productos;
}