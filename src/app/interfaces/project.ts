export interface Project {
  id: string
  link?: string;
  href?: string;
  title: string;
  description?: string;
  image: string;
  utils: string[];
  sections?: SeccionContenido[]
}

type TipoAnimacion = 'animate-fade-in' | 'animate-slide-up' | 'animate-zoom-in';

interface ImagenSeccion {
  url: string;
  isVideo?: boolean;
  alt: string;
  posicion: 'izq' | 'der'; // Controla el orden visual
}

interface SeccionContenido {
  id: number;
  titulo: string;
  descripcion: string;
  dificultad: number; //stars
  colorBase: string;
  animacion: TipoAnimacion;
  imagen: ImagenSeccion;
  secondImagen?: ImagenSeccion;
  utils?: string[];
}

