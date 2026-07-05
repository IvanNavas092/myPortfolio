import { Project } from "@/interfaces/project";

export const projectList: Project[] = [
    {
        id: 'Skillping',
        link: 'projects/Skillping',
        href: "https://skillping.netlify.app/",
        title: 'SkillPing',
        description: 'desc-skillping',
        image: './projects/skillPing.jpg',
        utils: ['Angular', 'Django', 'Tailwind', 'PostgreSQL'],
        sections: [
            {
                id: 1,
                titulo: "chat-realtime",
                descripcion: "chat-realtime-desc",
                dificultad: 4,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/skillping/chat-skillping.png', alt: 'chat', posicion: 'izq' },
                "utils": ["Sockets", "Django",]
            },
            {
                id: 2,
                titulo: "explore",
                descripcion: "explore-desc",
                dificultad: 4,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/skillping/explore.png', alt: 'explore', posicion: 'der' },
            },
            {
                id: 3,
                titulo: "maquetation",
                descripcion: "maquetation-desc",
                dificultad: 4,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/skillping/maquetation.png', alt: 'maquetation', posicion: 'der' },
                secondImagen: { url: 'projects/imgsForId/skillping/maquetation-2.png', alt: 'maquetation-2', posicion: 'izq' },

            }
        ]
    },
    {
        id: 'FastSnippets',
        link: 'projects/FastSnippets',
        href: "https://fastsnippets.es/",
        title: 'FastSnippets',
        description: 'desc-fastsnippets',
        image: './projects/fastSnippets.jpg',
        utils: ['Angular', 'Tailwind', 'Firebase'],
        sections: [
            {
                id: 1,
                titulo: "home",
                descripcion: "home-desc",
                dificultad: 3,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/fastsnippets/home-large.png', alt: 'home', posicion: 'izq' },

            },
            {
                id: 2,
                titulo: "explore",
                descripcion: "explore-desc-fastS",
                dificultad: 4,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/fastsnippets/explore.png', alt: 'explore', posicion: 'izq' },
                utils: ['Firebase'],
            },
            {
                id: 3,
                titulo: "ia-agent-fastS",
                descripcion: "ia-agent-desc-fastS",
                dificultad: 5,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/fastsnippets/ia-agent.png', alt: 'ia-agent', posicion: 'izq' },
                utils: ['django'],
            }
        ]
    },
    {
        id: 'CostaDigital',
        link: 'projects/CostaDigital',
        href: "https://marketingcostadigital.com/",
        title: 'Costa Digital',
        description: 'desc-costadigital',
        image: './projects/costaDigital.jpg',
        utils: ['React', 'Tailwind'],
        sections: [
            {
                id: 1,
                titulo: "home",
                descripcion: "home-desc-CostaD",
                dificultad: 3,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/costaDigital/home.mp4', alt: 'home', posicion: 'izq', isVideo: true },
                utils: ['React'],


            },
            {
                id: 2,
                titulo: "animation-CostaD",
                descripcion: "animation-desc-CostaD",
                dificultad: 4,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/costaDigital/animation.mp4', alt: 'animation', posicion: 'izq', isVideo: true },
                utils: ['GSAP'],
            },
        ]
    },
    {
        id: 'PomodoroCount',
        link: 'projects/PomodoroCount',
        href: "https://pomodorocount.netlify.app/",
        title: 'Pomodoro Count',
        description: 'desc-pomodoro',
        image: './projects/pomodoroCount.jpg',
        utils: ['Angular', 'Tailwind'],
        sections: [
            {
                id: 1,
                titulo: "Home",
                descripcion: "home-desc-pomodoro",
                dificultad: 1,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/pomodoro/home.png', alt: 'home-pomodoro', posicion: 'izq' },

            },
            {
                id: 2,
                titulo: "backgrounds-pomodoro",
                descripcion: "backgrounds-desc-pomodoro",
                dificultad: 3,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/pomodoro/backgrounds.png', alt: 'backgrounds-pomodoro', posicion: 'izq' },
                utils: ['Cloudinary']
            },
            {
                id: 3,
                titulo: "spotify-pomodoro",
                descripcion: "spotify-desc-pomodoro",
                dificultad: 4,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/pomodoro/spotify.png', alt: 'spotify-pomodoro', posicion: 'izq' },
                utils: ['Spotify API']
            }

        ]
    },
    {
        id: 'Herreras',
        link: 'projects/Herreras',
        href: "https://www.herreras.com/",
        title: 'HERRERAS',
        description: 'desc-herreras',
        image: './projects/herreras.jpg',
        utils: ['Liquid', 'Tailwind'],
        sections: [
            {
                id: 1,
                titulo: "home",
                descripcion: "herreras-home-desc",
                dificultad: 3,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                utils: ['Liquid', "Tailwind"],
                imagen:
                    { url: 'projects/imgsForId/herreras/herreras-home.mp4', alt: 'chat', isVideo: true, posicion: 'izq' },

            },
            {
                id: 2,
                titulo: "animation-herreras",
                descripcion: "animation-herreras-desc",
                dificultad: 4,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/herreras/herreras-gsap.mp4', alt: 'chat', isVideo: true, posicion: 'izq' },

            },
            {
                id: 3,
                titulo: "buy-glasses",
                descripcion: "buy-glasses-desc",
                dificultad: 3,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/herreras/herreras-gafa.png', alt: 'chat', isVideo: false, posicion: 'izq' },

            },
            {
                id: 3,
                titulo: "discount",
                descripcion: "discount-desc",
                dificultad: 2,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: 'projects/imgsForId/herreras/herreras-newsletter.png', alt: 'chat', isVideo: false, posicion: 'izq' },

            }
        ]
    },
    // {
    //     id: 'TimeCapsule',
    //     link: 'projects/TimeCapsule',
    //     title: 'TimeCapsule',
    //     description: 'desc-timecapsule',
    //     image: './projects/timeCapsule.jpg',
    //     utils: ['React', 'Tailwind', 'Java Spring', 'PostgreSQL'],
    //     sections: [
    //         {
    //             id: 1,
    //             titulo: "E-commerce Dashboard",
    //             descripcion: "Panel de administración con métricas en tiempo real y gestión de inventario.",
    //             dificultad: 4,
    //             colorBase: 'off-color',
    //             animacion: 'animate-fade-in',
    //             imagen:
    //                 { url: 'projects/imgsForId/chat_skillping.png', alt: 'chat', posicion: 'izq' },

    //         }
    //     ]
    // },
];