// =========================
// CATÁLOGO DE SERVICIOS Y MENÚS - COLOMBIA
// =========================

export const SERVICE_LINES = [
  { key: "tours_rd", id: "svc_tours_rd", title: "🌴 Tours en Colombia" },
  { key: "boletos_aereos", id: "svc_boletos_aereos", title: "✈️ Boletos aéreos" },
  { key: "solo_hoteles", id: "svc_solo_hoteles", title: "🏨 Hoteles" },
  { key: "seguros_viaje", id: "svc_seguros_viaje", title: "🛡 Seguros de viaje" },
  { key: "traslados", id: "svc_traslados", title: "🚌 Traslados" },
  { key: "paquetes_vacacionales", id: "svc_paquetes_vacacionales", title: "🎒 Paquetes vacacionales" },
  { key: "hablar_asesor", id: "svc_hablar_asesor", title: "👤 Hablar con un asesor" },
  { key: "ubicacion_contacto", id: "svc_ubicacion_contacto", title: "📍 Ubicación y contacto" },
];

export const SERVICE_LINE_ID_TO_KEY = Object.fromEntries(SERVICE_LINES.map((s) => [s.id, s.key]));

export const TOUR_ORIGINS = [
  { key: "medellin", id: "org_medellin", title: "Medellín" },
  { key: "oriente", id: "org_oriente", title: "Oriente antioqueño" },
  { key: "area_metropolitana", id: "org_area_metropolitana", title: "Área metropolitana" },
  { key: "salidas_especiales", id: "org_salidas_especiales", title: "Salidas especiales" },
];

export const TOUR_ORIGIN_ID_TO_KEY = Object.fromEntries(TOUR_ORIGINS.map((o) => [o.id, o.key]));

export const PACKAGE_DESTINATIONS = [
  {
    key: "rd_alcance_2026",
    id: "pkg_rd_alcance_2026",
    title: "República Dominicana a tu Alcance 2026",
    imageUrl: "https://res.cloudinary.com/daqqrtg0b/image/upload/v1773984219/fechas_de_salida_a_punta_cana_de_medellin.jpg_v4epml.jpg",
    priceText: "Desde COP 2.750.000 | Hab. doble desde COP 2.550.000 por persona.",
    durationText: "5 días en Punta Cana.",
    dateText: "Salidas programadas 2026: febrero, marzo, abril, mayo, junio, julio, agosto, septiembre y octubre.",
    includesText: "Vuelo redondo MED-PUJ-SDQ-MED con Arajet, traslados colectivos, impuestos aéreos, seguro médico, 1 equipaje documentado según aerolínea y atención personalizada. Excursiones opcionales.",
    noteText: "Tarifa referencial sujeta a fecha, cupo y acomodación. El valor de menores debe validarse con la agencia.",
  },
  {
    key: "eje_cafetero_experiencias",
    id: "pkg_eje_cafetero_experiencias",
    title: "Eje Cafetero Experiencias",
    imageUrl: "https://res.cloudinary.com/daqqrtg0b/image/upload/v1773984220/WhatsApp_Image_2026-03-19_at_8.49.42_PM_4_td5isy.jpg",
    priceText: "Tarifa según acomodación múltiple o doble y fecha de salida.",
    durationText: "4 días.",
    dateText: "Salidas programadas publicadas por la agencia.",
    includesText: "Plan de varios días con alojamiento, recorridos y experiencias según la salida seleccionada.",
    noteText: "La tarifa final depende de la acomodación, la fecha y las condiciones vigentes al momento de reservar.",
  },
];

export const PACKAGE_DESTINATION_ID_TO_KEY = Object.fromEntries(PACKAGE_DESTINATIONS.map((p) => [p.id, p.key]));
