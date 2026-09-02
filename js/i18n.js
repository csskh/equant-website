(function () {
  var i18n = {
    es: {
      // NAVBAR
      'nav.services': 'Nuestros servicios',
      'nav.projects': 'Proyectos',
      'nav.about': 'Acerca de nosotros',
      'nav.contact': 'Contáctenos',
      // FOOTER
      'footer.tagline': 'Soluciones integrales en telecomunicaciones y electromecánica para Costa Rica.',
      'footer.services': 'Servicios',
      'footer.more.services': 'Más servicios',
      'footer.rights': 'Todos los derechos reservados.',
      'footer.about': '<strong>Acerca de nosotros</strong>',
      'footer.contact': '<strong>Contáctenos</strong>',
      'svc.name.dc': 'Datacenters',
      'svc.name.net': 'Networking',
      'svc.name.sw': 'Switching &amp; Routing',
      'svc.name.energy': 'Respaldo de Energía',
      'svc.name.voip': 'Telefonía VoIP',
      'svc.name.cooling': 'Sistemas de Enfriamiento',
      'svc.name.security': 'Seguridad Electrónica',
      'svc.name.electro': 'Electromecánica',
      'svc.name.auto': 'Automatización',
      'svc.name.links': 'Enlaces Inalámbricos',
      'svc.name.signage': 'Digital Signage',
      // COMMON BUTTONS
      'common.back': '← Volver a Servicios',
      'common.request.proposal': 'Solicitar propuesta →',
      'common.view.services': 'Ver todos los servicios',
      'common.request.info': 'Solicitar información →',
      // DATACENTERS
      'dc.hero.tag': 'Infraestructura crítica',
      'dc.hero.desc': 'Diseñamos y construimos infraestructuras de misión crítica que garantizan disponibilidad continua, seguridad física y máximo rendimiento para su centro de procesamiento de datos.',
      'dc.c1.title': 'Soluciones de Canalización para cables de comunicación',
      'dc.c1.d1': 'Sistemas especializados diseñados para organizar, proteger y distribuir el cableado de red y energía. Nuestras soluciones aseguran un flujo de datos constante y facilitan el mantenimiento, optimizando el espacio y previniendo interferencias electromagnéticas dentro del datacenter.',
      'dc.c2.title': 'Piso Falso',
      'dc.c2.d1': 'Implementamos sistemas de piso técnico elevado que permiten una gestión eficiente de la infraestructura subyacente. Facilita la distribución de aire acondicionado de precisión y el enrutamiento oculto de cables, proporcionando flexibilidad estructural y alta capacidad de carga para equipos críticos.',
      'dc.c3.title': 'Cooling Systems para Centros de Cómputo',
      'dc.c3.d1': 'Soluciones avanzadas de climatización de precisión diseñadas para mantener niveles óptimos de temperatura y humedad. Nuestros sistemas de enfriamiento garantizan la continuidad operativa del hardware, evitando el sobrecalentamiento y maximizando la eficiencia energética (PUE) de la instalación.',
      'dc.c4.title': 'Sistemas de Monitoreo y Accesos para Datacenter',
      'dc.c4.d1': 'Control total y seguridad en tiempo real. Integramos plataformas de gestión que supervisan variables ambientales y sistemas de seguridad física con control de acceso biométrico, garantizando que solo el personal autorizado interactúe con la infraestructura sensible.',
      'dc.c5.title': 'Microdatacenters',
      'dc.c5.d1': 'Soluciones <strong>"Todo-en-Uno"</strong> que integran rack, refrigeración, monitoreo y respaldo de energía (UPS) en un gabinete compacto y seguro. Son la opción ideal para entornos de <strong>Edge Computing</strong>, sucursales o empresas que requieren alta disponibilidad.',
      'dc.c6.title': 'Unidades de Poder Ininterrumpido (UPS)',
      'dc.c6.d1': 'Sistemas de respaldo de energía crítica que garantizan la continuidad del negocio ante fallas en el suministro eléctrico. Protegen sus equipos contra picos de voltaje y aseguran una transición limpia a generadores, manteniendo la integridad de los datos en todo momento.',
      // NETWORKING
      'net.hero.tag': 'Conectividad de alta velocidad',
      'net.hero.desc': 'Diseño, instalación y certificación de redes de cableado estructurado y fibra óptica que forman la columna vertebral de su infraestructura digital.',
      'net.c1.title': 'Diseño y Certificación de Cableado Estructurado',
      'net.c1.d1': 'El diseño del sistema de cableado es un paso fundamental que tiene un impacto directo en el desempeño de la red. Un diseño preciso del sistema de cableado que considere todas las variables en juego, proporciona claridad para el diseño de la red del datacenter y asegura que las aplicaciones empresariales sean soportadas de la mejor forma.',
      'net.c1.d2': 'Cualquier red de cableado debe tener su correspondiente certificación que garantice que:<br>▸ Se han utilizado materiales de calidad.<br>▸ El proceso de instalación se ha realizado según normativa.',
      'net.c2.title': 'UTP Cabling Systems',
      'net.c2.d1': 'En los últimos años, el cableado estructurado ha llevado a cabo una gran evolución con el objetivo de soportar mayores velocidades y arquitecturas de red más complejas que permitan una gestión eficiente para los edificios inteligentes. Las siguientes categorías (6-8) son las más demandadas actualmente:',
      'net.c2.d2': '▸ Categoría 6 &nbsp;▸ Categoría 6A &nbsp;▸ Categoría 7 &nbsp;▸ Categoría 7A &nbsp;▸ Categoría 8',
      'net.c3.title': 'Fibra Óptica',
      'net.c3.d1': 'En la era de la transformación digital, la fibra óptica se ha consolidado como la columna vertebral de las comunicaciones modernas. A diferencia del cobre, utiliza pulsos de luz para transmitir datos, alcanzando distancias mayores y velocidades simétricas sin interferencias electromagnéticas.',
      'net.c3.d2': '▸ Fibra Monomodo (SM) &nbsp;▸ Fibra Multimodo (MM) — OM3/OM4/OM5',
      'net.c4.title': 'Telecom Grounding Systems',
      'net.c4.d1': 'Sistemas de puesta a tierra para telecomunicaciones que protegen la infraestructura activa y pasiva de descargas eléctricas y ruido electromagnético, cumpliendo con estándares internacionales de instalación.',
      'net.c5.title': 'Sistemas de Canalización de Cable',
      'net.c5.d1': 'Rutas organizadas y protegidas para el tendido de cableado de red y energía: canastas, bandejas de malla, ductos y canaletas que garantizan orden, accesibilidad y cumplimiento normativo en toda la instalación.',
      'net.c6.title': 'Metalmecánica — Gabinetes, Racks y Bandejas',
      'net.c6.d1': 'La infraestructura física es el soporte vital que garantiza el orden, la seguridad y la correcta ventilación de los equipos activos y pasivos. Un sistema de gestión de cableado bien diseñado prolonga la vida útil de la red y facilita el mantenimiento técnico.',
      'net.c6.d2': '▸ Gabinetes de Piso (Racks Cerrados) &nbsp;▸ Gabinetes de Pared &nbsp;▸ Racks Abiertos (Two-Post / Four-Post) &nbsp;▸ Bandejas de Malla y Organizadores',
      // SWITCHING
      'sw.hero.tag': 'Redes empresariales',
      'sw.hero.desc': 'Infraestructura de red sólida y eficiente para el crecimiento de su empresa. Garantizamos que el flujo de datos entre sus dispositivos y la nube sea rápido, seguro y sin interrupciones.',
      'sw.c1.title': 'Diseño e Implementación de Soluciones TI',
      'sw.c1.d1': 'Transformamos sus necesidades de negocio en arquitecturas tecnológicas a medida. No solo instalamos equipos; creamos ecosistemas digitales escalables.',
      'sw.c1.d2': '▸ <strong>Análisis de infraestructura</strong> — Evaluamos su estado actual para proyectar el crecimiento futuro.<br>▸ <strong>Optimización de recursos</strong> — Diseñamos redes que maximizan el rendimiento reduciendo costos operativos.<br>▸ <strong>Puesta en marcha</strong> — Implementación profesional con estándares internacionales.',
      'sw.c2.title': 'Equipos de Red',
      'sw.c2.d1': 'Suministramos y configuramos hardware de última generación para mantener a su empresa siempre conectada. Trabajamos con los componentes más confiables del mercado para asegurar la continuidad de su negocio.',
      'sw.c2.d2': '▸ Switches &amp; Routers &nbsp;▸ Access Points &nbsp;▸ Firewalls',
      'sw.c3.title': 'Certificaciones',
      'sw.c3.d1': 'Contamos con el respaldo y la experiencia técnica de nivel mundial. Nuestro equipo posee certificaciones oficiales que garantizan la calidad de cada proyecto.',
      'sw.c3.d2': '▸ Cisco (CCNA, CCNP) y especializaciones en Security<br>▸ Juniper Networks<br>▸ HPE Aruba Networking<br>▸ Fortinet NSE<br>▸ Ruijie Networks',
      // ENERGY
      'energy.hero.tag': 'Continuidad operativa',
      'energy.hero.title': 'RESPALDO DE <span class="highlight">ENERGÍA</span>',
      'energy.hero.desc': 'Garantizamos la continuidad operativa de su negocio con soluciones de respaldo energético para cualquier escenario: cortes, sobrecargas y emergencias prolongadas.',
      'energy.c1.title': 'Unidades de Poder Ininterrumpido (UPS)',
      'energy.c1.d1': 'Sistemas de respaldo de energía crítica que garantizan la continuidad del negocio ante fallas en el suministro eléctrico. Protegen sus equipos contra picos de voltaje y aseguran una transición limpia a generadores, manteniendo la integridad de los datos en todo momento.',
      'energy.c2.title': 'Genset — Grupos Electrógenos',
      'energy.c2.d1': 'Soluciones robustas diseñadas para suministrar energía a largo plazo durante interrupciones prolongadas. Ofrecemos potencia fiable y eficiente para mantener su hogar o empresa en marcha, sin importar las condiciones externas.',
      'energy.c3.title': 'Paneles Solares',
      'energy.c3.d1': 'Aproveche la energía limpia y renovable del sol. Reduzca drásticamente sus costos operativos, impulse la sostenibilidad de su marca y obtenga independencia energética total con nuestros sistemas fotovoltaicos de alta eficiencia.',
      // VOIP
      'voip.hero.tag': 'Comunicaciones Unificadas',
      'voip.hero.title': 'TELEFONÍA <span class="highlight">VOIP</span>',
      'voip.hero.desc': 'Transformamos la manera en que su empresa se comunica. Nuestras soluciones VoIP eliminan las limitaciones de la telefonía tradicional, conectando a su equipo desde cualquier dispositivo y lugar del mundo con calidad de voz empresarial.',
      'voip.c1.title': 'IP PBX Empresarial',
      'voip.c1.d1': 'Central telefónica IP instalada en sus instalaciones. Control total sobre su infraestructura de comunicaciones con capacidad para extensiones ilimitadas.',
      'voip.c2.title': 'Videoconferencia HD',
      'voip.c2.d1': 'Salas de reuniones virtuales y presenciales con integración total. Compatible con Zoom, Teams, Google Meet y plataformas propias.',
      'voip.c3.title': 'Plataformas y Fabricantes',
      'voip.c3.d1': '<strong>Cisco Unified CM</strong> — Plataforma empresarial líder para organizaciones que exigen alta disponibilidad, seguridad avanzada y capacidad masiva.',
      'voip.c3.d2': '<strong>Avaya</strong> — Soluciones de comunicaciones unificadas y centros de contacto de clase mundial, con amplia trayectoria en el mercado corporativo y soporte para entornos híbridos y en la nube.',
      'voip.c3.d3': '<strong>Grandstream</strong> — Teléfonos IP, video phones, gateways y dispositivos de conferencia de alta calidad y relación costo-beneficio, compatibles con todos nuestros sistemas PBX.',
      // COOLING
      'cooling.hero.tag': 'Climatización inteligente',
      'cooling.hero.title': 'SISTEMAS DE <span class="highlight">ENFRIAMIENTO</span>',
      'cooling.hero.desc': 'Soluciones de climatización de confort y precisión para oficinas, hogares y centros de datos, con tecnología Inverter de última generación y control inteligente.',
      'cooling.c1.title': 'Aire Acondicionado de Confort',
      'cooling.c1.d1': 'Diseñado específicamente para el bienestar de las personas. Regula temperatura y humedad en hogares, oficinas y locales comerciales. Su prioridad es el funcionamiento silencioso, el diseño estético y el ahorro energético.',
      'cooling.c2.title': 'Aire Acondicionado de Precisión',
      'cooling.c2.d1': 'Diseñados para entornos críticos donde el control debe ser absoluto: centros de datos, laboratorios o salas de servidores. Operan 24/7 los 365 días del año, manteniendo un margen de error mínimo para proteger equipos electrónicos sensibles.',
      'cooling.c3.title': 'Unidades Split',
      'cooling.c3.d1': 'Ideales para climatizar espacios individuales como habitaciones u oficinas de forma eficiente y silenciosa. Compuestas por una unidad interior estética y una unidad exterior de alto rendimiento, permiten un control preciso de la temperatura en cada ambiente.',
      'cooling.c4.title': 'Unidades Piso Cielo',
      'cooling.c4.d1': 'Versatilidad total para grandes áreas comerciales o salas diáfanas. Pueden instalarse tanto en el techo como en la parte inferior de la pared, optimizando el flujo de aire y distribuyendo la climatización de manera uniforme en espacios amplios.',
      'cooling.c5.title': 'Unidades Centrales de Ducto',
      'cooling.c5.d1': 'La solución más completa para climatizar edificios enteros o múltiples ambientes de forma estética. El equipo principal se oculta en el cielo raso, distribuyendo el aire a través de una red de conductos invisibles que garantizan confort total.',
      // SECURITY
      'security.hero.tag': 'Protección 24/7',
      'security.hero.title': 'SEGURIDAD <span class="highlight">ELECTRÓNICA</span>',
      'security.hero.desc': 'Proteja sus activos las 24 horas, los 7 días de la semana, con sistemas inteligentes de video vigilancia, control de accesos y detección temprana de amenazas. Diseñamos soluciones a medida que garantizan la tranquilidad de su hogar o empresa con tecnología de vanguardia.',
      'security.c1.title': 'Video Vigilancia IP',
      'security.c1.d1': 'Obtenga una supervisión total con sistemas de red de última generación. Nuestras soluciones de video IP ofrecen nitidez superior, almacenamiento eficiente local y en la nube, y la posibilidad de monitorear sus espacios en tiempo real desde cualquier dispositivo móvil.',
      'security.c2.title': 'Control de Accesos',
      'security.c2.d1': 'Gestione y restrinja de forma inteligente el ingreso a áreas sensibles. Implementamos soluciones biométricas, tarjetas de proximidad y cerraduras inteligentes que se integran perfectamente a la infraestructura de su empresa.',
      'security.c3.title': 'Sistemas de Detección de Incendio',
      'security.c3.d1': 'Detección temprana y confiable ante cualquier amenaza de fuego. Instalamos detectores de humo, calor y CO conectados a centrales de monitoreo profesional, garantizando una respuesta inmediata para salvaguardar vidas y bienes materiales.',
      'security.c4.title': 'Sistemas contra Intrusión',
      'security.c4.d1': 'Anticípese a cualquier riesgo con nuestras alarmas inteligentes. Contamos con sensores de movimiento de alta precisión, seguridad perimetral y monitoreo preventivo diseñado para detectar y disuadir cualquier intento de acceso no autorizado.',
      'security.c5.title': 'Sistemas de Audio y Video',
      'security.c5.d1': 'Optimice sus espacios con soluciones audiovisuales de calidad superior. Somos expertos en el diseño e integración de salas de conferencias, sistemas de megafonía, videowalls y plataformas multimedia.',
      // ELECTROMECANICA
      'elec.hero.tag': 'Ingeniería eléctrica y mecánica',
      'elec.hero.title': 'ELECTRO<span class="highlight">MECÁNICA</span>',
      'elec.hero.desc': 'Brindamos soluciones integrales que combinan la ingeniería eléctrica y mecánica, desde la conceptualización técnica hasta la ejecución en obra.',
      'elec.c1.title': 'Diseño y Construcción de Sistemas Eléctricos',
      'elec.c1.d1': 'Desarrollamos proyectos eléctricos de alta precisión, cumpliendo con las normativas vigentes. Nos encargamos de la planificación detallada y la instalación técnica para garantizar un suministro de energía seguro y escalable.',
      'elec.c2.title': 'Sistemas de Protección Eléctrica',
      'elec.c2.d1': 'Implementamos tecnologías avanzadas para salvaguardar sus equipos y personal contra fallas críticas. Instalamos dispositivos de protección que minimizan riesgos de sobrecargas, cortocircuitos y paros no programados.',
      'elec.c3.title': 'Sistemas de Puesta a Tierra',
      'elec.c3.d1': 'Diseñamos redes de tierra físicas robustas para garantizar la seguridad operativa. Estas instalaciones desvían corrientes de falla de manera eficiente, protegiendo la integridad de sus activos tecnológicos y la vida humana.',
      'elec.c4.title': 'Pararrayos',
      'elec.c4.d1': 'Instalamos sistemas de protección atmosférica de última generación. Nuestras soluciones están diseñadas para captar y disipar descargas eléctricas naturales, evitando daños estructurales y fallos en sistemas sensibles.',
      'elec.c5.title': 'Calidad de Energía',
      'elec.c5.d1': 'Analizamos y optimizamos el flujo eléctrico para eliminar perturbaciones como armónicos o variaciones de voltaje. Mejoramos el rendimiento de su maquinaria, reducimos costos de mantenimiento y prolongamos la vida útil de sus equipos.',
      // AUTOMATIZACION
      'auto.hero.tag': 'Inteligencia operativa',
      'auto.hero.title': 'AUTOMA<span class="highlight">TIZACIÓN</span>',
      'auto.hero.desc': 'Soluciones para la industria y el hogar que integran tecnología inteligente para automatizar procesos, optimizar recursos y elevar la eficiencia operativa.',
      'auto.c1.title': 'Automatización Industrial',
      'auto.c1.d1': 'Soluciones de control y automatización de procesos productivos que optimizan la eficiencia operacional, reducen el margen de error humano y mejoran la trazabilidad en planta.',
      'auto.c2.title': 'Domótica — Hogar Inteligente',
      'auto.c2.d1': 'Integración de tecnología en el hogar para el control inteligente de iluminación, climatización, seguridad y entretenimiento desde un único punto de gestión o dispositivo móvil.',
      // ENLACES
      'links.hero.tag': 'Conectividad inalámbrica',
      'links.hero.title': 'ENLACES <span class="highlight">INALÁMBRICOS</span>',
      'links.hero.desc': 'Conectamos ubicaciones remotas con soluciones de radiofrecuencia de alto rendimiento, donde el tendido de fibra no es viable, con latencias bajas y anchos de banda empresariales.',
      'links.c1.title': 'Enlaces Punto a Punto (PtP)',
      'links.c1.d1': 'Conectamos dos ubicaciones remotas con un enlace dedicado de alta velocidad y baja latencia. Ideal para interconectar edificios, plantas industriales o sedes corporativas donde el tendido de fibra óptica no es económicamente viable o físicamente posible.',
      'links.c2.title': 'Enlaces Multipunto (PtMP)',
      'links.c2.d1': 'Conectamos múltiples ubicaciones remotas desde un punto central de distribución. Solución ideal para municipios, parques industriales, campus universitarios y cualquier entorno que requiera conectar varios nodos desde una única estación base.',
      'links.c3.title': 'Redundancia y Alta Disponibilidad',
      'links.c3.d1': 'Diseñamos topologías con rutas redundantes para garantizar continuidad del servicio. Si un enlace falla, el tráfico se redirige automáticamente por la ruta alternativa, minimizando el tiempo de inactividad a segundos.',
      'links.c4.title': 'Equipos de Radiofrecuencia',
      'links.c4.d1': 'Trabajamos con fabricantes líderes en soluciones de radio frecuencia de alta capacidad, seleccionando el equipo óptimo según distancia, ancho de banda requerido, condiciones del entorno y presupuesto del proyecto.',
      // DIGITAL SIGNAGE
      'signage.hero.tag': 'Visualización digital',
      'signage.hero.desc': 'Pantallas digitales inteligentes con administración remota de contenido. Soluciones de visualización que transforman sus espacios y potencian la comunicación de su empresa.',
      'signage.c1.title': 'Soluciones de Señalización Digital',
      'signage.c1.d1': 'Pantallas digitales inteligentes con administración remota de contenido para empresas, comercios, instituciones y espacios públicos en Costa Rica. Controle su mensaje desde cualquier lugar y actualice contenidos en tiempo real.',
      'signage.c2.title': 'Videoconferencia y Comunicaciones Unificadas',
      'signage.c2.d1': 'Soluciones integradas que facilitan la colaboración remota, optimizando las dinámicas de comunicación empresarial. Conecte equipos distribuidos en múltiples sedes con calidad de video y audio de nivel corporativo.',
      'signage.c2.d2': '▸ Colaboración remota &nbsp;▸ Video HD &nbsp;▸ Audio profesional',
      'signage.c3.title': 'VideoWall y Pantallas Gigantes',
      'signage.c3.d1': 'Tecnología de visualización de gran formato que ofrece una experiencia inmersiva y de alto impacto visual. Ideal para centros de monitoreo, lobbies corporativos, auditorios y espacios públicos de alto tráfico.',
      'signage.c3.d2': '▸ 4K / 8K &nbsp;▸ LED Directo &nbsp;▸ LCD Mosaico &nbsp;▸ Gran formato',
      'signage.c4.title': 'Pantallas Interactivas y Kioscos',
      'signage.c4.d1': 'Optimice la atención al cliente y agilice sus procesos con nuestras soluciones de kioskos interactivos. Diseñados para ofrecer una experiencia intuitiva, autónoma y rápida, nuestros terminales digitales mejoran la interactividad en el punto de venta, reducen los tiempos de espera y modernizan la gestión de su negocio.',
      'signage.c5.title': 'Pantallas publicitarias',
      'signage.c5.d1': 'Transforma la visibilidad de tu negocio con pantallas y tótems publicitarios.',
      'signage.c5.d2': 'Captura la atención de tus clientes al instante con soluciones de señalización digital de alto impacto. Diseñados para interiores y exteriores, nuestros tótems y pantallas publicitarias combinan tecnología LED y LCD de alta definición con un diseño elegante, convirtiendo cualquier espacio en un canal de comunicación dinámico y moderno.',
      'signage.c6.title': 'Automatización de Salas',
      'signage.c6.d1': 'Optimice la Gestión de sus Espacios con Automatización de Salas de Videoconferencia',
      'signage.c6.d2': 'Transforme la dinámica de sus reuniones y elimine los conflictos de reserva en su oficina. Nuestras soluciones avanzadas de automatización integran tecnología audiovisual de alta definición con un sistema inteligente de agendamiento en tiempo real, diseñado para elevar la productividad y la colaboración corporativa.'
    },
    en: {
      // NAVBAR
      'nav.services': 'Our Services',
      'nav.projects': 'Projects',
      'nav.about': 'About Us',
      'nav.contact': 'Contact Us',
      // FOOTER
      'footer.tagline': 'Comprehensive solutions in telecommunications and electromechanics for Costa Rica.',
      'footer.services': 'Services',
      'footer.more.services': 'More Services',
      'footer.rights': 'All rights reserved.',
      'footer.about': '<strong>About Us</strong>',
      'footer.contact': '<strong>Contact Us</strong>',
      'svc.name.dc': 'Datacenters',
      'svc.name.net': 'Networking',
      'svc.name.sw': 'Switching &amp; Routing',
      'svc.name.energy': 'Energy Backup',
      'svc.name.voip': 'VoIP Telephony',
      'svc.name.cooling': 'Cooling Systems',
      'svc.name.security': 'Electronic Security',
      'svc.name.electro': 'Electromechanics',
      'svc.name.auto': 'Automation',
      'svc.name.links': 'Wireless Links',
      'svc.name.signage': 'Digital Signage',
      // COMMON BUTTONS
      'common.back': '← Back to Services',
      'common.request.proposal': 'Request a Proposal →',
      'common.view.services': 'View All Services',
      'common.request.info': 'Request Information →',
      // DATACENTERS
      'dc.hero.tag': 'Critical Infrastructure',
      'dc.hero.desc': 'We design and build mission-critical infrastructures that guarantee continuous availability, physical security and maximum performance for your data processing center.',
      'dc.c1.title': 'Communication Cable Management Solutions',
      'dc.c1.d1': 'Specialized systems designed to organize, protect and distribute network and power cabling. Our solutions ensure constant data flow and ease of maintenance, optimizing space and preventing electromagnetic interference within the datacenter.',
      'dc.c2.title': 'Raised Floor',
      'dc.c2.d1': 'We implement raised technical floor systems that allow efficient management of the underlying infrastructure. It facilitates precision air conditioning distribution and hidden cable routing, providing structural flexibility and high load capacity for critical equipment.',
      'dc.c3.title': 'Cooling Systems for Data Centers',
      'dc.c3.d1': 'Advanced precision cooling solutions designed to maintain optimal temperature and humidity levels. Our cooling systems guarantee hardware operational continuity, preventing overheating and maximizing energy efficiency (PUE) of the installation.',
      'dc.c4.title': 'Datacenter Monitoring and Access Systems',
      'dc.c4.d1': 'Total control and real-time security. We integrate management platforms that monitor environmental variables and physical security systems with biometric access control, ensuring only authorized personnel interact with the sensitive infrastructure.',
      'dc.c5.title': 'Microdatacenters',
      'dc.c5.d1': '<strong>"All-in-One"</strong> solutions that integrate rack, cooling, monitoring and power backup (UPS) in a compact and secure cabinet. They are the ideal option for <strong>Edge Computing</strong> environments, branch offices or companies requiring high availability.',
      'dc.c6.title': 'Uninterruptible Power Units (UPS)',
      'dc.c6.d1': 'Critical power backup systems that guarantee business continuity during power supply failures. They protect your equipment against voltage spikes and ensure a clean transition to generators, maintaining data integrity at all times.',
      // NETWORKING
      'net.hero.tag': 'High-Speed Connectivity',
      'net.hero.desc': 'Design, installation and certification of structured cabling and fiber optic networks that form the backbone of your digital infrastructure.',
      'net.c1.title': 'Structured Cabling Design and Certification',
      'net.c1.d1': 'Cabling system design is a fundamental step with a direct impact on network performance. Precise cabling system design that considers all variables provides clarity for datacenter network design and ensures business applications are supported in the best possible way.',
      'net.c1.d2': 'Any cabling network must have its corresponding certification to guarantee that:<br>▸ Quality materials have been used.<br>▸ The installation process has been carried out according to standards.',
      'net.c2.title': 'UTP Cabling Systems',
      'net.c2.d1': 'In recent years, structured cabling has undergone great evolution to support higher speeds and more complex network architectures that allow efficient management for smart buildings. The following categories (6-8) are currently the most in demand:',
      'net.c2.d2': '▸ Category 6 &nbsp;▸ Category 6A &nbsp;▸ Category 7 &nbsp;▸ Category 7A &nbsp;▸ Category 8',
      'net.c3.title': 'Fiber Optics',
      'net.c3.d1': 'In the era of digital transformation, fiber optics has established itself as the backbone of modern communications. Unlike copper, it uses light pulses to transmit data, reaching greater distances and symmetrical speeds without electromagnetic interference.',
      'net.c3.d2': '▸ Single-mode Fiber (SM) &nbsp;▸ Multimode Fiber (MM) — OM3/OM4/OM5',
      'net.c4.title': 'Telecom Grounding Systems',
      'net.c4.d1': 'Telecommunications grounding systems that protect active and passive infrastructure from electrical discharges and electromagnetic noise, complying with international installation standards.',
      'net.c5.title': 'Cable Management Systems',
      'net.c5.d1': 'Organized and protected routes for network and power cabling: baskets, mesh trays, ducts and raceways that guarantee order, accessibility and regulatory compliance throughout the installation.',
      'net.c6.title': 'Metalwork — Cabinets, Racks and Trays',
      'net.c6.d1': 'Physical infrastructure is the vital support that guarantees order, security and proper ventilation of active and passive equipment. A well-designed cable management system extends network service life and facilitates technical maintenance.',
      'net.c6.d2': '▸ Floor Cabinets (Closed Racks) &nbsp;▸ Wall Cabinets &nbsp;▸ Open Racks (Two-Post / Four-Post) &nbsp;▸ Mesh Trays and Organizers',
      // SWITCHING
      'sw.hero.tag': 'Enterprise Networks',
      'sw.hero.desc': "Solid and efficient network infrastructure for your company's growth. We guarantee that data flow between your devices and the cloud is fast, secure and uninterrupted.",
      'sw.c1.title': 'IT Solutions Design and Implementation',
      'sw.c1.d1': "We transform your business needs into custom technology architectures. We don't just install equipment; we create scalable digital ecosystems.",
      'sw.c1.d2': '▸ <strong>Infrastructure analysis</strong> — We evaluate your current state to project future growth.<br>▸ <strong>Resource optimization</strong> — We design networks that maximize performance while reducing operational costs.<br>▸ <strong>Commissioning</strong> — Professional implementation with international standards.',
      'sw.c2.title': 'Network Equipment',
      'sw.c2.d1': 'We supply and configure state-of-the-art hardware to keep your company always connected. We work with the most reliable components on the market to ensure business continuity.',
      'sw.c2.d2': '▸ Switches &amp; Routers &nbsp;▸ Access Points &nbsp;▸ Firewalls',
      'sw.c3.title': 'Certifications',
      'sw.c3.d1': 'We have world-class technical support and experience. Our team holds official certifications that guarantee the quality of every project.',
      'sw.c3.d2': '▸ Cisco (CCNA, CCNP) and Security specializations<br>▸ Juniper Networks<br>▸ HPE Aruba Networking<br>▸ Fortinet NSE<br>▸ Ruijie Networks',
      // ENERGY
      'energy.hero.tag': 'Operational Continuity',
      'energy.hero.title': 'ENERGY <span class="highlight">BACKUP</span>',
      'energy.hero.desc': 'We guarantee the operational continuity of your business with energy backup solutions for any scenario: outages, overloads and extended emergencies.',
      'energy.c1.title': 'Uninterruptible Power Units (UPS)',
      'energy.c1.d1': 'Critical power backup systems that guarantee business continuity during power supply failures. They protect your equipment against voltage spikes and ensure a clean transition to generators, maintaining data integrity at all times.',
      'energy.c2.title': 'Genset — Generator Sets',
      'energy.c2.d1': 'Robust solutions designed to supply long-term power during extended interruptions. We offer reliable and efficient power to keep your home or business running, regardless of external conditions.',
      'energy.c3.title': 'Solar Panels',
      'energy.c3.d1': "Harness clean and renewable solar energy. Dramatically reduce your operating costs, boost your brand's sustainability and achieve total energy independence with our high-efficiency photovoltaic systems.",
      // VOIP
      'voip.hero.tag': 'Unified Communications',
      'voip.hero.title': 'VOIP <span class="highlight">TELEPHONY</span>',
      'voip.hero.desc': 'We transform the way your company communicates. Our VoIP solutions eliminate the limitations of traditional telephony, connecting your team from any device and location worldwide with enterprise voice quality.',
      'voip.c1.title': 'Enterprise IP PBX',
      'voip.c1.d1': 'IP telephone exchange installed at your premises. Full control over your communications infrastructure with capacity for unlimited extensions.',
      'voip.c2.title': 'HD Video Conferencing',
      'voip.c2.d1': 'Virtual and in-person meeting rooms with full integration. Compatible with Zoom, Teams, Google Meet and proprietary platforms.',
      'voip.c3.title': 'Platforms and Manufacturers',
      'voip.c3.d1': '<strong>Cisco Unified CM</strong> — Leading enterprise platform for organizations requiring high availability, advanced security and massive capacity.',
      'voip.c3.d2': '<strong>Avaya</strong> — World-class unified communications and contact center solutions, with a long track record in the corporate market and support for hybrid and cloud environments.',
      'voip.c3.d3': '<strong>Grandstream</strong> — High-quality IP phones, video phones, gateways and conference devices with excellent cost-benefit ratio, compatible with all our PBX systems.',
      // COOLING
      'cooling.hero.tag': 'Smart Climate Control',
      'cooling.hero.title': 'COOLING <span class="highlight">SYSTEMS</span>',
      'cooling.hero.desc': 'Comfort and precision cooling solutions for offices, homes and data centers, with latest-generation Inverter technology and intelligent control.',
      'cooling.c1.title': 'Comfort Air Conditioning',
      'cooling.c1.d1': 'Specifically designed for human well-being. Regulates temperature and humidity in homes, offices and commercial spaces. Its priority is silent operation, aesthetic design and energy savings.',
      'cooling.c2.title': 'Precision Air Conditioning',
      'cooling.c2.d1': 'Designed for critical environments where control must be absolute: data centers, laboratories or server rooms. They operate 24/7 all 365 days of the year, maintaining a minimal margin of error to protect sensitive electronic equipment.',
      'cooling.c3.title': 'Split Units',
      'cooling.c3.d1': 'Ideal for efficiently and silently air conditioning individual spaces such as rooms or offices. Composed of an aesthetic indoor unit and a high-performance outdoor unit, they allow precise temperature control in each environment.',
      'cooling.c4.title': 'Floor-to-Ceiling Units',
      'cooling.c4.d1': 'Total versatility for large commercial areas or open-plan spaces. They can be installed on the ceiling or on the lower part of the wall, optimizing airflow and distributing climate control uniformly in large spaces.',
      'cooling.c5.title': 'Central Duct Units',
      'cooling.c5.d1': 'The most complete solution for air conditioning entire buildings or multiple environments aesthetically. The main unit is hidden in the false ceiling, distributing air through a network of invisible ducts that guarantee total comfort.',
      // SECURITY
      'security.hero.tag': '24/7 Protection',
      'security.hero.title': 'ELECTRONIC <span class="highlight">SECURITY</span>',
      'security.hero.desc': 'Protect your assets 24 hours a day, 7 days a week, with intelligent video surveillance systems, access control and early threat detection. We design custom solutions that guarantee peace of mind for your home or business with cutting-edge technology.',
      'security.c1.title': 'IP Video Surveillance',
      'security.c1.d1': 'Get total supervision with state-of-the-art network systems. Our IP video solutions offer superior clarity, efficient local and cloud storage, and the ability to monitor your spaces in real time from any mobile device.',
      'security.c2.title': 'Access Control',
      'security.c2.d1': "Intelligently manage and restrict entry to sensitive areas. We implement biometric solutions, proximity cards and smart locks that integrate perfectly with your company's infrastructure.",
      'security.c3.title': 'Fire Detection Systems',
      'security.c3.d1': 'Early and reliable detection of any fire threat. We install smoke, heat and CO detectors connected to professional monitoring centers, guaranteeing an immediate response to safeguard lives and property.',
      'security.c4.title': 'Intrusion Detection Systems',
      'security.c4.d1': 'Anticipate any risk with our smart alarms. We have high-precision motion sensors, perimeter security and preventive monitoring designed to detect and deter any unauthorized access attempt.',
      'security.c5.title': 'Audio and Video Systems',
      'security.c5.d1': 'Optimize your spaces with superior quality audiovisual solutions. We are experts in the design and integration of conference rooms, public address systems, videowalls and multimedia platforms.',
      // ELECTROMECANICA
      'elec.hero.tag': 'Electrical and Mechanical Engineering',
      'elec.hero.title': 'ELECTRO<span class="highlight">MECHANICS</span>',
      'elec.hero.desc': 'We provide comprehensive solutions that combine electrical and mechanical engineering, from technical conceptualization to on-site execution.',
      'elec.c1.title': 'Electrical Systems Design and Construction',
      'elec.c1.d1': 'We develop high-precision electrical projects complying with current regulations. We handle detailed planning and technical installation to guarantee a safe and scalable power supply.',
      'elec.c2.title': 'Electrical Protection Systems',
      'elec.c2.d1': 'We implement advanced technologies to safeguard your equipment and personnel against critical failures. We install protection devices that minimize risks of overloads, short circuits and unplanned shutdowns.',
      'elec.c3.title': 'Grounding Systems',
      'elec.c3.d1': 'We design robust physical ground networks to guarantee operational safety. These installations efficiently divert fault currents, protecting the integrity of your technological assets and human life.',
      'elec.c4.title': 'Lightning Rods',
      'elec.c4.d1': 'We install state-of-the-art atmospheric protection systems. Our solutions are designed to capture and dissipate natural electrical discharges, preventing structural damage and failures in sensitive systems.',
      'elec.c5.title': 'Power Quality',
      'elec.c5.d1': "We analyze and optimize electrical flow to eliminate disturbances such as harmonics or voltage variations. We improve your machinery's performance, reduce maintenance costs and extend the service life of your equipment.",
      // AUTOMATIZACION
      'auto.hero.tag': 'Operational Intelligence',
      'auto.hero.title': 'AUTOMA<span class="highlight">TION</span>',
      'auto.hero.desc': 'Solutions for industry and home that integrate smart technology to automate processes, optimize resources and elevate operational efficiency.',
      'auto.c1.title': 'Industrial Automation',
      'auto.c1.d1': 'Control and automation solutions for productive processes that optimize operational efficiency, reduce human error margins and improve plant traceability.',
      'auto.c2.title': 'Smart Home Automation',
      'auto.c2.d1': 'Integration of technology in the home for intelligent control of lighting, climate, security and entertainment from a single management point or mobile device.',
      // ENLACES
      'links.hero.tag': 'Wireless Connectivity',
      'links.hero.title': 'WIRELESS <span class="highlight">LINKS</span>',
      'links.hero.desc': 'We connect remote locations with high-performance radio frequency solutions, where fiber deployment is not feasible, with low latency and enterprise bandwidth.',
      'links.c1.title': 'Point-to-Point Links (PtP)',
      'links.c1.d1': 'We connect two remote locations with a dedicated high-speed, low-latency link. Ideal for interconnecting buildings, industrial plants or corporate offices where fiber optic deployment is not economically viable or physically possible.',
      'links.c2.title': 'Multipoint Links (PtMP)',
      'links.c2.d1': 'We connect multiple remote locations from a central distribution point. The ideal solution for municipalities, industrial parks, university campuses and any environment requiring connection of multiple nodes from a single base station.',
      'links.c3.title': 'Redundancy and High Availability',
      'links.c3.d1': 'We design topologies with redundant routes to guarantee service continuity. If a link fails, traffic is automatically rerouted through the alternative path, minimizing downtime to seconds.',
      'links.c4.title': 'Radio Frequency Equipment',
      'links.c4.d1': 'We work with leading manufacturers of high-capacity radio frequency solutions, selecting the optimal equipment based on distance, required bandwidth, environmental conditions and project budget.',
      // DIGITAL SIGNAGE
      'signage.hero.tag': 'Digital Visualization',
      'signage.hero.desc': "Smart digital displays with remote content management. Visualization solutions that transform your spaces and enhance your company's communication.",
      'signage.c1.title': 'Digital Signage Solutions',
      'signage.c1.d1': 'Smart digital displays with remote content management for businesses, retailers, institutions and public spaces in Costa Rica. Control your message from anywhere and update content in real time.',
      'signage.c2.title': 'Video Conferencing and Unified Communications',
      'signage.c2.d1': 'Integrated solutions that facilitate remote collaboration, optimizing business communication dynamics. Connect distributed teams across multiple locations with corporate-level video and audio quality.',
      'signage.c2.d2': '▸ Remote collaboration &nbsp;▸ HD Video &nbsp;▸ Professional audio',
      'signage.c3.title': 'VideoWall and Giant Screens',
      'signage.c3.d1': 'Large-format visualization technology that offers an immersive and high-visual-impact experience. Ideal for monitoring centers, corporate lobbies, auditoriums and high-traffic public spaces.',
      'signage.c3.d2': '▸ 4K / 8K &nbsp;▸ Direct LED &nbsp;▸ LCD Mosaic &nbsp;▸ Large format',
      'signage.c4.title': 'Interactive Screens and Kiosks',
      'signage.c4.d1': 'Optimize customer service and streamline your processes with our interactive kiosk solutions. Designed to offer an intuitive, self-service and fast experience, our digital terminals improve interactivity at the point of sale, reduce wait times and modernize your business management.',
      'signage.c5.title': 'Advertising Displays',
      'signage.c5.d1': 'Transform your business visibility with advertising displays and totems.',
      'signage.c5.d2': 'Capture your customers\' attention instantly with high-impact digital signage solutions. Designed for indoor and outdoor use, our totems and advertising displays combine high-definition LED and LCD technology with an elegant design, turning any space into a dynamic and modern communication channel.',
      'signage.c6.title': 'Room Automation',
      'signage.c6.d1': 'Optimize the Management of Your Spaces with Videoconference Room Automation',
      'signage.c6.d2': 'Transform the dynamics of your meetings and eliminate booking conflicts in your office. Our advanced automation solutions integrate high-definition audiovisual technology with an intelligent real-time scheduling system, designed to boost corporate productivity and collaboration.'
    }
  };

  var currentLang = localStorage.getItem('equant-lang') || 'es';

  function applyLang(lang) {
    currentLang = lang;
    var t = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });
    document.documentElement.lang = lang;
    localStorage.setItem('equant-lang', lang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang') === lang);
    });
  }

  // Back to top
  var btt = document.querySelector('.back-to-top');
  if (btt) {
    window.addEventListener('scroll', function () { btt.classList.toggle('visible', window.scrollY > 400); });
    btt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  // Hamburger
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    document.querySelectorAll('.nav-link').forEach(function (l) {
      l.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // Language toggle
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(this.getAttribute('data-lang')); });
  });

  // Apply saved language on load (always refresh button state)
  if (currentLang !== 'es') {
    applyLang(currentLang);
  } else {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang') === 'es');
    });
  }
})();
