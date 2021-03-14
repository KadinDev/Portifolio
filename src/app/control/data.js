
module.exports = {
    index( req, res ){

        const index = {
            logo: 'Portfolio',
            linksHeader: [
                {link: '#home', name: 'Home'},
                {link: '#sobre', name: 'sobre'},
                {link: '#competencias', name: 'Competências'},
                {link: '#projetos', name: 'Projetos'},
                {link: '#contato', name: 'Contato'},
            ],
            myName: 'Olá, Eu sou <br/><span>Ricardo Alves</span>',
            aboutMe: "I'm a Front End Web Developer",
            linksSociais: [
                { url: 'https://www.instagram.com/developing_ips/', img: '/images/instagram.png' },
                { url: 'https://github.com/KadinDev', img: '/images/github.png' },
                { url: 'https://www.linkedin.com/in/ricardo-alves-6a713b1b8/', img: '/images/linkedin.png' },
            ],
            efectsNuvens: [
                { src: '/images/nuvens/cloud1.png' },
                { src: '/images/nuvens/cloud2.png' },
                { src: '/images/nuvens/cloud3.png' },
                { src: '/images/nuvens/cloud4.png' },
                { src: '/images/nuvens/cloud5.png' }
            ],
            about: 'Sobre mim',
            titleAbout:  "<span>I</span>'m a <span>F</span>ront <span>E</span>nd <span>W</span>eb <span>D</span>eveloper <span>J</span>r",
            textAbout: 'Mais um alguém totalmente apaixonado por programação! Estou em transição de carreira e atualmente curso o LaunchBase da Rocketseat que é simplesmente sensacional, busco minha primeira oportunidade para trabalhar e crescer nessa área que é incrível, já possuo uma boa experiência em Front-End e Back-End e sigo a cada dia buscando o próximo nível!',
            imgAbout: 'https://images.squarespace-cdn.com/content/560949d7e4b01f8778bb857b/1571067611157-NY1U1AOIPNWAKLETOFD7/giphy+%282%29.gif?content-type=image%2Fgif',
            level: 'Competências',
            titleLevel: 'Full Stack Developer in Progress',
            services: [
                {
                    img: 'https://icon-library.com/images/frontend-icon/frontend-icon-4.jpg',
                    tecnologia: 'Front-End',
                    info: 'Responsável por desenvolver por meio de código uma interface gráfica.'
                },
                {
                    img: 'https://site.fintel.com.br/wp-content/uploads/2020/10/icone-programador.png',
                    tecnologia: 'Back-End',
                    info: 'Responsável por fazer com que as informações sejam encontradas.'
                },
                {
                    img: 'https://cdn.iconscout.com/icon/free/png-256/node-js-3-1174937.png',
                    tecnologia: 'Node.Js',
                    info: 'Node.js pode ser definido como um ambiente de execução Javascript server-side.'
                },
                {
                    img: 'https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png',
                    tecnologia: 'Postgre<span>SQL</span>',
                    info: 'Ferramenta que atua como sistema de gerenciamento de bancos de dados relacionados.'
                }
            ],
            project: 'Projetos',
            subProject: 'Projects created by me',
            projects: [
                {
                    id: '4p05Fm9HTZE',
                    img: 'https://img.youtube.com/vi/4p05Fm9HTZE/0.jpg',
                    title: 'Doação Natal',
                    git: '/images/github.png',
                    link: 'https://github.com/KadinDev/Natal-project'
                },
                {
                    id: 'xC7UB712Fl4',
                    img: 'https://img.youtube.com/vi/xC7UB712Fl4/0.jpg',
                    title: 'Gym Manager',
                    git: '/images/github.png',
                    link: 'https://github.com/KadinDev/Gym_Manager'
                },
                {
                    id: 'qmyCyZlS-Vw',
                    img: 'https://img.youtube.com/vi/qmyCyZlS-Vw/0.jpg',
                    title: 'Boxing Academy',
                    git: '/images/github.png',
                    link: 'https://github.com/KadinDev/Gym-Boxe'
                },
                {
                    id: 'Y4axm8selvU',
                    img: 'https://img.youtube.com/vi/Y4axm8selvU/0.jpg',
                    title: 'Iron Man',
                    git: '/images/github.png',
                    link: 'https://github.com/KadinDev/Parallax-Effects-Iron_man'
                } 
            ],
            contact: 'Contato',
            infoContact: 'Estou sempre a disposição  <span>💻</span>',
            boxContact: [
                {
                    icon: 'location_on',
                    name: 'Endereço',
                    info: 'Rua da Paz, Vila Nova - Ipueiras-CE',
                },
                {
                    icon: 'call',
                    name: 'Contato',
                    info: '+55 88 99696 0239',
                },
                {
                    icon: 'email',
                    name: 'Email',
                    info: 'devricardo@outlook.com',
                }
            ]
        }

        return res.render('index', { page: index } )
    },

    projects( req, res ){
    
        
        const {id} = req.params

        const projects = [
            {
                id: '4p05Fm9HTZE',
                title: 'Projeto Doação Natal',
            },
            {
                id: 'xC7UB712Fl4',
                title: 'Gym Manager',
            },
            {
                id: 'qmyCyZlS-Vw',
                title: 'Boxing Academy',
            },
            {
                id: 'Y4axm8selvU',
                title: 'Projeto Iron Man',
            }
        ]

        const projectId = projects.find(function(project){
            return project.id == id
        })

        if(!projectId) return res.send('Video not found!')

        return res.render('project', { project: projectId } )
    }

}