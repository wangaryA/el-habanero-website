/* =====================================================
   LANGUAGE TRANSLATION SYSTEM
   ===================================================== */

const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_menu: "Menu",
        nav_events: "Events",
        nav_gallery: "Gallery",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        nav_reserve: "Reserve Table",

        // Hero Section
        hero_welcome: "Welcome to",
        hero_tagline: "Authentic Mexican Seafood & Live Entertainment",
        hero_desc: "Where the freshest mariscos meet the vibrant spirit of Mexico. Join us for an unforgettable dining experience in Burien, WA.",
        hero_cta_menu: "Explore Menu",
        hero_cta_reserve: "Make Reservation",
        hero_stat_reviews: "5-Star Reviews",
        hero_stat_menu: "Menu Items",
        hero_stat_music: "Live Music",

        // About Section
        about_badge: "Our Story",
        about_title: "A Taste of Mexico's",
        about_title_highlight: "Coastline",
        about_lead: "Nestled in the heart of Burien, El Habanero Bar & Grill brings the vibrant flavors of Mexican coastal cuisine to the Pacific Northwest.",
        about_text: "Our kitchen celebrates the rich traditions of Mexican seafood, from perfectly prepared aguachiles and ceviches to our signature grilled octopus. Every dish tells a story of passion, authenticity, and the bold spirit of the habanero pepper.",
        about_feature1_title: "Fresh Seafood",
        about_feature1_desc: "Daily-sourced premium seafood",
        about_feature2_title: "Authentic Recipes",
        about_feature2_desc: "Traditional Mexican flavors",
        about_feature3_title: "Live Entertainment",
        about_feature3_desc: "Music & karaoke nights",
        about_feature4_title: "Craft Cocktails",
        about_feature4_desc: "Signature micheladas & more",
        about_cta: "View Our Menu",

        // Signatures Section
        signatures_badge: "Chef's Selection",
        signatures_title: "Signature",
        signatures_title_highlight: "Creations",
        signatures_desc: "Discover our most beloved dishes, crafted with passion and the freshest ingredients",

        // Menu Section
        menu_badge: "Our Menu",
        menu_title: "Explore Our",
        menu_title_highlight: "Flavors",
        menu_desc: "A taste of authentic Mexican cuisine - from fresh seafood to sizzling classics",
        menu_mariscos: "Mariscos",
        menu_mariscos_sub: "Fresh Seafood",
        menu_tacos: "Tacos",
        menu_tacos_sub: "Street Style Favorites",
        menu_platos: "Platos Fuertes",
        menu_platos_sub: "Main Courses",
        menu_antojitos: "Antojitos & Bebidas",
        menu_antojitos_sub: "Starters & Drinks",
        menu_cta: "Full menu available in-house with daily specials",
        menu_call: "Call to Order: (206) 244-3443",

        // Menu Items - Mariscos
        molcajete_title: "Molcajete de Mariscos",
        molcajete_desc: "Volcanic stone bowl with shrimp, octopus, fish & signature salsa",
        diabla_title: "Camarones a la Diabla",
        diabla_desc: "Jumbo shrimp in fiery red chile sauce",
        aguachile_title: "Aguachile Verde",
        aguachile_desc: "Raw shrimp cured in lime with serrano peppers",
        ceviche_title: "Ceviche de Camaron",
        ceviche_desc: "Classic shrimp ceviche with avocado & lime",

        // Menu Items - Tacos
        taco_camaron_title: "Tacos de Camaron",
        taco_camaron_desc: "Grilled shrimp with cabbage slaw & chipotle crema",
        taco_asada_title: "Tacos de Carne Asada",
        taco_asada_desc: "Grilled steak with onion, cilantro & salsa verde",
        taco_pastor_title: "Tacos al Pastor",
        taco_pastor_desc: "Marinated pork with pineapple & cilantro",
        taco_birria_title: "Tacos de Birria",
        taco_birria_desc: "Crispy birria tacos with consommé for dipping",

        // Menu Items - Platos Fuertes
        fajitas_title: "Fajitas Mixtas",
        fajitas_desc: "Sizzling steak, chicken & shrimp with peppers",
        carne_title: "Carne Asada",
        carne_desc: "Grilled steak with rice, beans & guacamole",
        chile_verde_title: "Chile Verde",
        chile_verde_desc: "Tender pork in green tomatillo sauce",
        enchiladas_title: "Enchiladas Verdes",
        enchiladas_desc: "Chicken enchiladas with tomatillo sauce & crema",

        // Menu Items - Antojitos
        nachos_title: "Nachos Supreme",
        nachos_desc: "Loaded with beef, cheese, jalapeños & sour cream",
        queso_title: "Queso Fundido",
        queso_desc: "Melted cheese with chorizo & warm tortillas",
        margarita_title: "Margarita Clásica",
        margarita_desc: "Premium tequila, triple sec & fresh lime",
        michelada_title: "Michelada",
        michelada_desc: "Mexican beer with lime, Clamato & Tajín rim",

        // Showcase Section
        showcase_badge: "From Our Kitchen",
        showcase_title: "What We",
        showcase_title_highlight: "Offer",
        showcase_desc: "Professional photos straight from the owners - showcasing our finest dishes prepared with passion and authenticity",
        showcase_autoplay: "Auto-play",
        showcase_pause: "Pause",

        // Specials Section
        specials_badge: "Weekly Events",
        specials_title: "Specials &",
        specials_title_highlight: "Entertainment",
        specials_desc: "More than just great food - experience the vibrant atmosphere of El Habanero",
        specials_live_when: "Every Weekend",
        specials_live_title: "Live Music Nights",
        specials_live_desc: "Experience authentic Mexican music every Thursday through Sunday evening. Dance, sing, and celebrate with us!",
        specials_live_time: "Thu-Sun: 8PM - 2AM",
        specials_karaoke_when: "Fridays & Saturdays",
        specials_karaoke_title: "Karaoke Night",
        specials_karaoke_desc: "Take the stage and show off your vocal talents! Spanish and English songs available.",
        specials_happy_when: "Daily 3-6PM",
        specials_happy_title: "Happy Hour",
        specials_happy_desc: "Discounted drinks and appetizers to kick off your evening. $2 off all drinks & 25% off antojitos!",
        specials_happy_time: "Mon-Fri: 3PM - 6PM",
        specials_taco_when: "Tuesdays",
        specials_taco_title: "Taco Tuesday",
        specials_taco_desc: "All tacos $2.50 each! Mix and match your favorites from our extensive taco selection.",
        specials_taco_time: "All Day",

        // Gallery Section
        gallery_badge: "Guest Gallery",
        gallery_title: "Shared by",
        gallery_title_highlight: "Our Guests",
        gallery_desc: "Real moments captured by our customers - swipe to explore",
        gallery_cta: "Follow us on Instagram for more delicious content!",

        // Reviews Section
        reviews_badge: "Testimonials",
        reviews_title: "What Our",
        reviews_title_highlight: "Guests Say",
        reviews_desc: "Real reviews from our valued customers on Google",
        reviews_rating: "4.0 Average Rating",
        reviews_count: "Based on 1,400+ reviews",
        reviews_read_more: "Read More Reviews",
        reviews_leave: "Leave a Review",

        // Contact Section
        contact_badge: "Get in Touch",
        contact_title: "Visit",
        contact_title_highlight: "Us",
        contact_address_title: "Address",
        contact_directions: "Get Directions",
        contact_hours_title: "Hours",
        contact_hours_mw: "Mon-Wed: 10AM - 10PM",
        contact_hours_ts: "Thu-Sun: 10AM - 2AM",
        contact_hours_mw_label: "Mon - Wed",
        contact_hours_ts_label: "Thu - Sun",
        contact_phone_title: "Phone",
        contact_phone_desc: "Call for takeout or reservations",
        contact_follow_title: "Follow Us",

        // Reservation Section
        reserve_badge: "Book Your Table",
        reserve_title: "Make a",
        reserve_title_highlight: "Reservation",
        reserve_desc: "Join us for an unforgettable dining experience. Whether it's a romantic dinner, family celebration, or night out with friends, we're ready to serve you.",
        reserve_groups: "Groups Welcome",
        reserve_private: "Private Events",
        reserve_entertainment: "Live Entertainment",
        reserve_call_info: "For large parties or special events, please call us directly:",
        reserve_name: "Full Name",
        reserve_name_placeholder: "Your name",
        reserve_email: "Email Address",
        reserve_phone: "Phone Number",
        reserve_date: "Date",
        reserve_time: "Time",
        reserve_select_time: "Select time",
        reserve_guests: "Number of Guests",
        reserve_select_guests: "Select guests",
        reserve_guest_1: "1 Guest",
        reserve_guest_2: "2 Guests",
        reserve_guest_3: "3 Guests",
        reserve_guest_4: "4 Guests",
        reserve_guest_5: "5 Guests",
        reserve_guest_6: "6 Guests",
        reserve_guest_7: "7 Guests",
        reserve_guest_8: "8+ Guests",
        reserve_occasion: "Occasion (Optional)",
        reserve_select_occasion: "Select occasion",
        reserve_occasion_none: "None",
        reserve_occasion_birthday: "Birthday",
        reserve_occasion_anniversary: "Anniversary",
        reserve_occasion_business: "Business",
        reserve_occasion_date: "Date Night",
        reserve_occasion_other: "Other",
        reserve_requests: "Special Requests",
        reserve_requests_placeholder: "Any dietary restrictions, accessibility needs, or special requests?",
        reserve_submit: "Request Reservation",
        reserve_note: "We'll confirm your reservation via phone within 24 hours.",

        // Footer
        footer_tagline: "Los Mejores Mariscos en Seattle",
        footer_desc: "Authentic Mexican seafood cuisine, live entertainment, and unforgettable moments in the heart of Burien.",
        footer_links: "Quick Links",
        footer_menu: "Our Menu",
        footer_specials: "Specials",
        footer_visit: "Visit Us",
        footer_reservations: "Reservations",
        footer_directions: "Directions",
        footer_connect: "Connect",
        footer_contact: "Contact",
        footer_hours: "Hours",
        footer_copyright: "© 2024 El Habanero Bar & Grill. All rights reserved.",
        footer_credit: "Demo website created for illustration purposes.",

        // Events Page
        events_hero_badge: "Live Entertainment",
        events_hero_title: "Events &",
        events_hero_title_highlight: "Entertainment",
        events_hero_desc: "Experience the vibrant nightlife at El Habanero - live bands, karaoke, and unforgettable celebrations",

        events_music_badge: "Live Music",
        events_music_title: "Featured",
        events_music_title_highlight: "Artists",
        events_music_desc: "We host the best regional bands every weekend - from Tamborazo to Banda",
        events_featured_artist: "Featured Artist",
        events_artist1_name: "Pura Lumbre Tamborazo",
        events_artist1_desc: "Authentic Tamborazo music that gets everyone on their feet",
        events_artist2_name: "El Canario & Efectivo Show",
        events_artist2_desc: "Regional Mexican music at its finest",
        events_artist3_name: "Weekend Live Bands",
        events_artist3_desc: "Different artists every Thursday - Sunday",

        events_venue_badge: "The Venue",
        events_venue_title: "Our",
        events_venue_title_highlight: "Atmosphere",
        events_venue_desc: "A spacious venue with multiple TVs, comfortable seating, and the perfect ambiance for any occasion",
        events_venue_main: "Main Dining Area",
        events_venue_live: "Live Entertainment",
        events_venue_service: "Friendly Service",
        events_venue_bar: "Full Bar",
        events_venue_dining: "Dining Experience",

        events_party_badge: "Celebrations",
        events_party_title: "Parties &",
        events_party_title_highlight: "Private Events",
        events_party_desc: "From birthdays to corporate events - we make every celebration special",
        events_party_cta_title: "Planning a Private Event?",
        events_party_cta_desc: "We offer private party packages with custom menus, live entertainment options, and dedicated service",
        events_party_cta_btn: "Call to Book: (206) 244-3443",

        events_schedule_badge: "Weekly Events",
        events_schedule_title: "Entertainment",
        events_schedule_title_highlight: "Schedule",
        events_thu: "Thu",
        events_thu_title: "Karaoke Night",
        events_thu_desc: "Show off your voice! DJ starts at 8PM",
        events_fri: "Fri",
        events_fri_title: "Live Music",
        events_fri_desc: "Regional Mexican bands starting at 9PM",
        events_sat: "Sat",
        events_sat_title: "Live Bands + DJ",
        events_sat_desc: "Our biggest night! Entertainment until 2AM",
        events_sun: "Sun",
        events_sun_title: "Family Day + Live Music",
        events_sun_desc: "Afternoon entertainment for all ages",

        events_moments_badge: "Gallery",
        events_moments_title: "More",
        events_moments_title_highlight: "Moments",

        events_cta_title: "Ready to Join the Party?",
        events_cta_desc: "Visit us any night of the week for great food, drinks, and entertainment",
        events_cta_menu: "View Our Menu",
        events_cta_call: "Call Us",
        events_cta_hours: "Extended Hours:",
        events_cta_hours_detail: "Thu-Sun open until 2AM",

        // Language Toggle
        lang_toggle: "ES"
    },

    es: {
        // Navigation
        nav_home: "Inicio",
        nav_about: "Nosotros",
        nav_menu: "Menú",
        nav_events: "Eventos",
        nav_gallery: "Galería",
        nav_reviews: "Reseñas",
        nav_contact: "Contacto",
        nav_reserve: "Reservar Mesa",

        // Hero Section
        hero_welcome: "Bienvenidos a",
        hero_tagline: "Mariscos Mexicanos Auténticos y Entretenimiento en Vivo",
        hero_desc: "Donde los mariscos más frescos se encuentran con el espíritu vibrante de México. Únete a nosotros para una experiencia gastronómica inolvidable en Burien, WA.",
        hero_cta_menu: "Ver Menú",
        hero_cta_reserve: "Hacer Reservación",
        hero_stat_reviews: "Reseñas 5 Estrellas",
        hero_stat_menu: "Platillos",
        hero_stat_music: "Música en Vivo",

        // About Section
        about_badge: "Nuestra Historia",
        about_title: "Un Sabor de la Costa de",
        about_title_highlight: "México",
        about_lead: "En el corazón de Burien, El Habanero Bar & Grill trae los vibrantes sabores de la cocina costera mexicana al Noroeste del Pacífico.",
        about_text: "Nuestra cocina celebra las ricas tradiciones de los mariscos mexicanos, desde aguachiles y ceviches perfectamente preparados hasta nuestro pulpo a la parrilla. Cada platillo cuenta una historia de pasión, autenticidad y el espíritu audaz del chile habanero.",
        about_feature1_title: "Mariscos Frescos",
        about_feature1_desc: "Mariscos premium de origen diario",
        about_feature2_title: "Recetas Auténticas",
        about_feature2_desc: "Sabores tradicionales mexicanos",
        about_feature3_title: "Entretenimiento en Vivo",
        about_feature3_desc: "Música y karaoke",
        about_feature4_title: "Cócteles Artesanales",
        about_feature4_desc: "Micheladas y más",
        about_cta: "Ver Nuestro Menú",

        // Signatures Section
        signatures_badge: "Selección del Chef",
        signatures_title: "Creaciones",
        signatures_title_highlight: "Exclusivas",
        signatures_desc: "Descubre nuestros platillos más queridos, preparados con pasión y los ingredientes más frescos",

        // Menu Section
        menu_badge: "Nuestro Menú",
        menu_title: "Explora Nuestros",
        menu_title_highlight: "Sabores",
        menu_desc: "Un sabor de la auténtica cocina mexicana - desde mariscos frescos hasta clásicos chispeantes",
        menu_mariscos: "Mariscos",
        menu_mariscos_sub: "Del Mar a Tu Mesa",
        menu_tacos: "Tacos",
        menu_tacos_sub: "Estilo Callejero",
        menu_platos: "Platos Fuertes",
        menu_platos_sub: "Platos Principales",
        menu_antojitos: "Antojitos y Bebidas",
        menu_antojitos_sub: "Entradas y Bebidas",
        menu_cta: "Menú completo disponible con especialidades del día",
        menu_call: "Ordena al: (206) 244-3443",

        // Menu Items - Mariscos
        molcajete_title: "Molcajete de Mariscos",
        molcajete_desc: "Molcajete con camarones, pulpo, pescado y salsa de la casa",
        diabla_title: "Camarones a la Diabla",
        diabla_desc: "Camarones jumbo en salsa de chile rojo picante",
        aguachile_title: "Aguachile Verde",
        aguachile_desc: "Camarón crudo curado en limón con chile serrano",
        ceviche_title: "Ceviche de Camarón",
        ceviche_desc: "Ceviche clásico de camarón con aguacate y limón",

        // Menu Items - Tacos
        taco_camaron_title: "Tacos de Camarón",
        taco_camaron_desc: "Camarón a la parrilla con ensalada de col y crema de chipotle",
        taco_asada_title: "Tacos de Carne Asada",
        taco_asada_desc: "Carne asada con cebolla, cilantro y salsa verde",
        taco_pastor_title: "Tacos al Pastor",
        taco_pastor_desc: "Cerdo marinado con piña y cilantro",
        taco_birria_title: "Tacos de Birria",
        taco_birria_desc: "Tacos de birria crujientes con consomé para mojar",

        // Menu Items - Platos Fuertes
        fajitas_title: "Fajitas Mixtas",
        fajitas_desc: "Res, pollo y camarón con pimientos a la plancha",
        carne_title: "Carne Asada",
        carne_desc: "Carne asada con arroz, frijoles y guacamole",
        chile_verde_title: "Chile Verde",
        chile_verde_desc: "Cerdo suave en salsa verde de tomatillo",
        enchiladas_title: "Enchiladas Verdes",
        enchiladas_desc: "Enchiladas de pollo con salsa de tomatillo y crema",

        // Menu Items - Antojitos
        nachos_title: "Nachos Supreme",
        nachos_desc: "Cargados con carne, queso, jalapeños y crema",
        queso_title: "Queso Fundido",
        queso_desc: "Queso fundido con chorizo y tortillas calientes",
        margarita_title: "Margarita Clásica",
        margarita_desc: "Tequila premium, triple sec y limón fresco",
        michelada_title: "Michelada",
        michelada_desc: "Cerveza mexicana con limón, Clamato y Tajín",

        // Showcase Section
        showcase_badge: "Desde Nuestra Cocina",
        showcase_title: "Lo Que",
        showcase_title_highlight: "Ofrecemos",
        showcase_desc: "Fotos profesionales directo de los dueños - mostrando nuestros mejores platillos preparados con pasión y autenticidad",
        showcase_autoplay: "Auto-play",
        showcase_pause: "Pausar",

        // Specials Section
        specials_badge: "Eventos Semanales",
        specials_title: "Especiales y",
        specials_title_highlight: "Entretenimiento",
        specials_desc: "Más que buena comida - vive el ambiente vibrante de El Habanero",
        specials_live_when: "Cada Fin de Semana",
        specials_live_title: "Noches de Música en Vivo",
        specials_live_desc: "Disfruta música mexicana auténtica cada jueves a domingo por la noche. ¡Baila, canta y celebra con nosotros!",
        specials_live_time: "Jue-Dom: 8PM - 2AM",
        specials_karaoke_when: "Viernes y Sábados",
        specials_karaoke_title: "Noche de Karaoke",
        specials_karaoke_desc: "¡Sube al escenario y muestra tu voz! Canciones en español e inglés disponibles.",
        specials_happy_when: "Diario 3-6PM",
        specials_happy_title: "Happy Hour",
        specials_happy_desc: "Bebidas y antojitos con descuento para empezar tu noche. ¡$2 de descuento en bebidas y 25% en antojitos!",
        specials_happy_time: "Lun-Vie: 3PM - 6PM",
        specials_taco_when: "Martes",
        specials_taco_title: "Martes de Tacos",
        specials_taco_desc: "¡Todos los tacos a $2.50! Mezcla y combina tus favoritos de nuestra extensa selección.",
        specials_taco_time: "Todo el Día",

        // Gallery Section
        gallery_badge: "Galería de Invitados",
        gallery_title: "Compartido por",
        gallery_title_highlight: "Nuestros Clientes",
        gallery_desc: "Momentos reales capturados por nuestros clientes - desliza para explorar",
        gallery_cta: "¡Síguenos en Instagram para más contenido delicioso!",

        // Reviews Section
        reviews_badge: "Testimonios",
        reviews_title: "Lo Que Dicen",
        reviews_title_highlight: "Nuestros Clientes",
        reviews_desc: "Reseñas reales de nuestros valiosos clientes en Google",
        reviews_rating: "4.0 Calificación Promedio",
        reviews_count: "Basado en más de 1,400 reseñas",
        reviews_read_more: "Leer Más Reseñas",
        reviews_leave: "Dejar una Reseña",

        // Contact Section
        contact_badge: "Contáctanos",
        contact_title: "Visita",
        contact_title_highlight: "",
        contact_address_title: "Dirección",
        contact_directions: "Cómo Llegar",
        contact_hours_title: "Horario",
        contact_hours_mw: "Lun-Mié: 10AM - 10PM",
        contact_hours_ts: "Jue-Dom: 10AM - 2AM",
        contact_hours_mw_label: "Lun - Mié",
        contact_hours_ts_label: "Jue - Dom",
        contact_phone_title: "Teléfono",
        contact_phone_desc: "Llama para pedidos o reservaciones",
        contact_follow_title: "Síguenos",

        // Reservation Section
        reserve_badge: "Reserva Tu Mesa",
        reserve_title: "Haz una",
        reserve_title_highlight: "Reservación",
        reserve_desc: "Únete a nosotros para una experiencia gastronómica inolvidable. Ya sea una cena romántica, celebración familiar o noche con amigos, estamos listos para servirte.",
        reserve_groups: "Grupos Bienvenidos",
        reserve_private: "Eventos Privados",
        reserve_entertainment: "Entretenimiento en Vivo",
        reserve_call_info: "Para grupos grandes o eventos especiales, llámanos directamente:",
        reserve_name: "Nombre Completo",
        reserve_name_placeholder: "Tu nombre",
        reserve_email: "Correo Electrónico",
        reserve_phone: "Número de Teléfono",
        reserve_date: "Fecha",
        reserve_time: "Hora",
        reserve_select_time: "Seleccionar hora",
        reserve_guests: "Número de Invitados",
        reserve_select_guests: "Seleccionar invitados",
        reserve_guest_1: "1 Invitado",
        reserve_guest_2: "2 Invitados",
        reserve_guest_3: "3 Invitados",
        reserve_guest_4: "4 Invitados",
        reserve_guest_5: "5 Invitados",
        reserve_guest_6: "6 Invitados",
        reserve_guest_7: "7 Invitados",
        reserve_guest_8: "8+ Invitados",
        reserve_occasion: "Ocasión (Opcional)",
        reserve_select_occasion: "Seleccionar ocasión",
        reserve_occasion_none: "Ninguna",
        reserve_occasion_birthday: "Cumpleaños",
        reserve_occasion_anniversary: "Aniversario",
        reserve_occasion_business: "Negocios",
        reserve_occasion_date: "Cita Romántica",
        reserve_occasion_other: "Otra",
        reserve_requests: "Peticiones Especiales",
        reserve_requests_placeholder: "¿Restricciones dietéticas, necesidades de accesibilidad o peticiones especiales?",
        reserve_submit: "Solicitar Reservación",
        reserve_note: "Confirmaremos tu reservación por teléfono dentro de 24 horas.",

        // Footer
        footer_tagline: "Los Mejores Mariscos en Seattle",
        footer_desc: "Cocina de mariscos mexicanos auténticos, entretenimiento en vivo y momentos inolvidables en el corazón de Burien.",
        footer_links: "Enlaces Rápidos",
        footer_menu: "Nuestro Menú",
        footer_specials: "Especiales",
        footer_visit: "Visítanos",
        footer_reservations: "Reservaciones",
        footer_directions: "Direcciones",
        footer_connect: "Conéctate",
        footer_contact: "Contacto",
        footer_hours: "Horario",
        footer_copyright: "© 2024 El Habanero Bar & Grill. Todos los derechos reservados.",
        footer_credit: "Sitio web de demostración creado con fines ilustrativos.",

        // Events Page
        events_hero_badge: "Entretenimiento en Vivo",
        events_hero_title: "Eventos y",
        events_hero_title_highlight: "Entretenimiento",
        events_hero_desc: "Vive la vibrante vida nocturna en El Habanero - bandas en vivo, karaoke y celebraciones inolvidables",

        events_music_badge: "Música en Vivo",
        events_music_title: "Artistas",
        events_music_title_highlight: "Destacados",
        events_music_desc: "Presentamos las mejores bandas regionales cada fin de semana - desde Tamborazo hasta Banda",
        events_featured_artist: "Artista Destacado",
        events_artist1_name: "Pura Lumbre Tamborazo",
        events_artist1_desc: "Música de Tamborazo auténtica que pone a todos a bailar",
        events_artist2_name: "El Canario y Efectivo Show",
        events_artist2_desc: "Música regional mexicana en su máxima expresión",
        events_artist3_name: "Bandas en Vivo de Fin de Semana",
        events_artist3_desc: "Diferentes artistas cada jueves a domingo",

        events_venue_badge: "El Local",
        events_venue_title: "Nuestro",
        events_venue_title_highlight: "Ambiente",
        events_venue_desc: "Un local espacioso con múltiples pantallas, asientos cómodos y el ambiente perfecto para cualquier ocasión",
        events_venue_main: "Área Principal",
        events_venue_live: "Entretenimiento en Vivo",
        events_venue_service: "Servicio Amable",
        events_venue_bar: "Bar Completo",
        events_venue_dining: "Experiencia Gastronómica",

        events_party_badge: "Celebraciones",
        events_party_title: "Fiestas y",
        events_party_title_highlight: "Eventos Privados",
        events_party_desc: "Desde cumpleaños hasta eventos corporativos - hacemos cada celebración especial",
        events_party_cta_title: "¿Planeando un Evento Privado?",
        events_party_cta_desc: "Ofrecemos paquetes de fiesta privada con menús personalizados, opciones de entretenimiento en vivo y servicio dedicado",
        events_party_cta_btn: "Llama para Reservar: (206) 244-3443",

        events_schedule_badge: "Eventos Semanales",
        events_schedule_title: "Calendario de",
        events_schedule_title_highlight: "Entretenimiento",
        events_thu: "Jue",
        events_thu_title: "Noche de Karaoke",
        events_thu_desc: "¡Muestra tu voz! DJ comienza a las 8PM",
        events_fri: "Vie",
        events_fri_title: "Música en Vivo",
        events_fri_desc: "Bandas regionales mexicanas desde las 9PM",
        events_sat: "Sáb",
        events_sat_title: "Bandas en Vivo + DJ",
        events_sat_desc: "¡Nuestra mejor noche! Entretenimiento hasta las 2AM",
        events_sun: "Dom",
        events_sun_title: "Día Familiar + Música en Vivo",
        events_sun_desc: "Entretenimiento para toda la familia",

        events_moments_badge: "Galería",
        events_moments_title: "Más",
        events_moments_title_highlight: "Momentos",

        events_cta_title: "¿Listo para la Fiesta?",
        events_cta_desc: "Visítanos cualquier noche de la semana para buena comida, bebidas y entretenimiento",
        events_cta_menu: "Ver Nuestro Menú",
        events_cta_call: "Llámanos",
        events_cta_hours: "Horario Extendido:",
        events_cta_hours_detail: "Jue-Dom abierto hasta las 2AM",

        // Language Toggle
        lang_toggle: "EN"
    }
};

// Language Manager
const LanguageManager = {
    currentLang: 'en',

    init() {
        // Check for saved language preference
        const savedLang = localStorage.getItem('el_habanero_lang');
        if (savedLang) {
            this.currentLang = savedLang;
        }

        this.applyTranslations();
        this.bindEvents();
        this.updateToggleButton();
    },

    bindEvents() {
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggleLanguage());
        }
    },

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'es' : 'en';
        localStorage.setItem('el_habanero_lang', this.currentLang);
        this.applyTranslations();
        this.updateToggleButton();
    },

    updateToggleButton() {
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            const span = toggleBtn.querySelector('span');
            if (span) {
                span.textContent = translations[this.currentLang].lang_toggle;
            }
        }
    },

    applyTranslations() {
        const lang = translations[this.currentLang];

        // Find all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (lang[key]) {
                el.textContent = lang[key];
            }
        });

        // Find all elements with data-translate-placeholder attribute
        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const key = el.getAttribute('data-translate-placeholder');
            if (lang[key]) {
                el.placeholder = lang[key];
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    LanguageManager.init();
});
