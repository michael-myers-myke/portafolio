import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';

const Inicio = () => {
    const [status, setStatus] = useState('');
    const currentYear = new Date().getFullYear();
    const projects = [
        {
            title: "E-commerce Full Stack",
            tech: "Django REST & React",
            tags: ["Python", "PostgreSQL", "Stripe"],
            desc: "Desarrollo integral de una plataforma de comercio electrónico con arquitectura Cliente-Servidor. Implementa pasarela de pagos, gestión compleja de estado en el frontend y un panel administrativo robusto con Django.",
            link: "#",
            demo: "#"
        },
        {
            title: "Enterprise Multi-tenant SaaS",
            tech: "Node.js & React",
            tags: ["Express", "PostgreSQL", "Layered Arch", "JWT"],
            desc: "Aplicación SaaS empresarial diseñada bajo una arquitectura en capas. Implementa multi-tenancy para el aislamiento de datos por cliente, autenticación segura mediante JWT y una estructura altamente escalable.",
            link: "#",
            demo: "#"
        },
        {
            title: "CRUD Layered Architecture",
            tech: "NodeJs",
            tags: ["Clean Code", "express", "Postgresql", "JWT"],
            desc: "API de usuarios enfocado en las mejores prácticas de el desarrollo de software. Implementación estricta de arquitectura en capas para separar la lógica de negocio de la persistencia de datos.",
            link: "#",
            demo: "#"
        },
    ];

    const tecnologias = [
        {
            category: "Backend & API",
            items: [
                { name: "Django REST", icon: "https://cdn.simpleicons.org/django/092E20", color: "group-hover:shadow-emerald-500/20" },
                { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "group-hover:shadow-green-500/20" },
                { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff", color: "group-hover:shadow-white/10" },
                { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "group-hover:shadow-blue-500/20" },
                { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", color: "group-hover:shadow-blue-600/20" },
                { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", color: "group-hover:shadow-green-600/20" },
            ]
        },
        {
            category: "Frontend & UI",
            items: [
                { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "group-hover:shadow-cyan-500/20" },
                { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "group-hover:shadow-yellow-500/20" },
                { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", color: "group-hover:shadow-blue-500/20" },
                { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "group-hover:shadow-sky-500/20" },
            ]
        }
    ];

    const arquitecturas = [
        {
            title: "Arquitectura en Capas (Layered)",
            subtitle: "Separación de Responsabilidades",
            desc: "Organización del software en niveles lógicos (Presentación, Negocio, Datos). Fundamental en mis desarrollos con Node.js (express) para garantizar que la lógica de negocio esté aislada de la infraestructura.",
            features: ["Alta Mantenibilidad", "Escalabilidad Lógica", "Desacoplamiento"],
            iconColor: "from-blue-500/20 to-indigo-500/20"
        },
        {
            title: "MVC (Model-View-Controller)",
            subtitle: "Patrón de Diseño Estructural",
            desc: "Implementación de este patrón tanto en el backend con Django y Express como en la organización de componentes en React, permitiendo un flujo de datos predecible y una interfaz de usuario reactiva.",
            features: ["Código Organizado", "Reutilización de Componentes", "Flujo Unidireccional"],
            iconColor: "from-emerald-500/20 to-teal-500/20"
        },
        {
            title: "Cliente-Servidor",
            subtitle: "Sistemas distribuidos",
            desc: "Diseño y consumo de servicios distribuidos. Gestión de estados en el frontend (React) y procesamiento de peticiones asíncronas hacia backends robustos (DRF/Express).",
            features: ["Protocolos HTTP", "Gestión de API", "Seguridad JWT"]
        }
    ];




    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulación de envío (Aquí conectarías con EmailJS o Formspree)
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus(''), 3000);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        &lt;MichaelZuluaga /&gt;
                    </span>
                    <div className="space-x-8 hidden md:flex">
                        <a href="#about" className="hover:text-blue-400 transition">Sobre mí</a>
                        <a href="#projects" className="hover:text-blue-400 transition">Proyectos</a>
                        <a href="#arquitecturas" className="hover:text-blue-400 transition">Arquitecturas</a>
                        <a href="#tecnologias" className="hover:text-blue-400 transition">Tecnologias</a>
                        <a href="#contact" className="hover:text-blue-400 transition">Contacto</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="about" className="pt-60 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        Desarrollador <span className="text-blue-500">Full Stack</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-3xl mx-auto">
                        Desarrollador Full Stack en la construcción de APIs robustas con
                        <span className="text-yellow-500 font-semibold"> Django Rest Framework</span> y
                        <span className="text-green-500 font-semibold"> Node.js / Express</span>.
                        Especializado en dar vida a interfaces dinámicas y escalables utilizando
                        <span className="text-blue-400 font-semibold"> React</span>, conectando arquitecturas complejas con experiencias de usuario fluidas.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-blue-500/20">
                            Descargar CV
                        </button>
                        <div className="flex items-center gap-4 ml-4">
                            <a href="https://github.com/michael-myers-myke"><FaGithub className="cursor-pointer hover:text-blue-400 transition" /></a>
                            <a href="https://www.linkedin.com/in/michael-zuluaga-a271b2363/"><FaLinkedin className="cursor-pointer hover:text-blue-400 transition" /></a>
                            
                        </div>
                    </div>
                </div>
            </section>
            {/* Projects Grid */}
            <section id="projects" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
                            <p className="text-slate-400 max-w-md">
                                Una selección de mis trabajos más recientes integrando arquitecturas robustas y diseños modernos.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative bg-slate-800/40 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                            >
                                {/* Header de la tarjeta con gradiente */}
                                <div className="h-2 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-mono text-emerald-400 px-2 py-1 bg-emerald-400/10 rounded">
                                            {project.tech}
                                        </span>
                                        <div className="flex gap-3 text-slate-400">
                                            <a href={project.link} className="hover:text-white transition-colors"><FaGithub size={20} /></a>
                                            <a href={project.demo} className="hover:text-white transition-colors"><FiExternalLink size={20} /></a>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="arquitecturas" className="py-24 bg-slate-900 border-t border-slate-800/50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-sm font-mono text-blue-500 mb-2 uppercase tracking-[0.4em]">// Diseño del sistema</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Arquitecturas Manejadas</h3>
                    </div>

                    <div className="grid gap-6">
                        {arquitecturas.map((arch, index) => (
                            <div
                                key={index}
                                className="group relative p-8 bg-slate-800/20 border border-slate-800 rounded-3xl hover:bg-slate-800/40 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center"
                            >
                                {/* Indicador Visual de Arquitectura */}
                                <div className="w-24 h-24 flex-shrink-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                                    <div className="relative">
                                        <div className="w-12 h-12 border-2 border-blue-400 rounded-lg group-hover:rotate-45 transition-transform duration-700"></div>
                                        <div className="absolute inset-0 w-12 h-12 border-2 border-emerald-400 rounded-lg group-hover:-rotate-45 transition-transform duration-700 opacity-50"></div>
                                    </div>
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    <h4 className="text-2xl font-bold text-white mb-1">{arch.title}</h4>
                                    <p className="text-blue-400 font-mono text-sm mb-4">{arch.subtitle}</p>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-2xl">
                                        {arch.desc}
                                    </p>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                        {arch.features.map(f => (
                                            <span key={f} className="text-[10px] bg-slate-900 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Tech Stack - Bento Style */}
            <section id="tecnologias" className="py-24 bg-slate-900">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Tecnologias</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {tecnologias.map((stack) => (
                            <div key={stack.category} className="space-y-6">
                                <h3 className="text-slate-500 font-mono text-sm uppercase tracking-[0.3em] mb-4">
                // {stack.category}
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {stack.items.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className={`group relative flex items-center gap-4 p-4 bg-slate-800/20 border border-slate-800 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/40 hover:border-slate-700 ${tech.color} hover:shadow-2xl`}
                                        >
                                            <div className="w-10 h-10 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                                                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-200 group-hover:text-white transition-colors">{tech.name}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <section id="contact" className="py-24 px-6 bg-slate-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Columna 1: Texto e Info */}
                        <div>
                            <h2 className="text-4xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
                            <p className="text-slate-400 text-lg mb-8">
                                Estoy disponible para trabajos freelance o posiciones de tiempo completo.
                                Si buscas a alguien que domine el stack <span className="text-blue-400">DjangoRest + React</span>, hablemos.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                        <MdEmail className="text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-mono">Email</p>
                                        <p className="text-slate-200">zuluagamaikol1@gmail.com</p>
                                    </div>
                                </div>
                                {/* Puedes añadir más como ubicación o disponibilidad */}
                            </div>
                        </div>

                        {/* Columna 2: El Formulario */}
                        <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-mono text-slate-400 ml-1">Nombre</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-slate-200"
                                            placeholder="Ingresa tu nombre"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-mono text-slate-400 ml-1">Email</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-slate-200"
                                            placeholder="Ingresa tu email "
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-mono text-slate-400 ml-1">Mensaje</label>
                                    <textarea
                                        rows="4"
                                        required
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-slate-200 resize-none"
                                        placeholder="Cuéntame sobre tu idea..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className={`w-full py-4 rounded-xl font-bold transition-all flex justify-center items-center gap-2 ${status === 'success'
                                        ? 'bg-emerald-500 text-white'
                                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20'
                                        }`}
                                >
                                    {status === 'sending' ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    ) : status === 'success' ? (
                                        "¡Mensaje Enviado!"
                                    ) : (
                                        "Enviar Mensaje"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-12 px-6 border-t border-slate-800 bg-slate-900">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Branding & Copy */}
                    <div className="text-center md:text-left">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            &lt;MichaelZuluaga /&gt;
                        </span>
                        <p className="text-slate-500 text-sm mt-2 font-mono">
                            © {currentYear} — Diseñado por Michael Zuluaga.
                        </p>
                    </div>

                    {/* Stack Highlights */}
                    <div className="flex gap-6 text-xs font-mono text-slate-500 uppercase tracking-widest">
                        <span className="hover:text-blue-400 transition-colors cursor-default">React</span>
                        <span className="hover:text-green-500 transition-colors cursor-default">Node Js</span>
                        <span className="hover:text-yellow-500 transition-colors cursor-default">Django Rest Framework</span>
                        <span className="hover:text-green-500 transition-colors cursor-default">Express</span>
                        <span className="hover:text-blue-400 transition-colors cursor-default">PostgreSQL</span>
                    </div>

                    {/* Redes Sociales Rápidas */}
                    <div className="flex gap-5">
                        <a
                            href="https://github.com/michael-myers-myke"
                            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/michael-zuluaga-a271b2363/"
                            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>

                </div>

                {/* Una pequeña línea de código como detalle final */}
                <div className="mt-12 text-center">
                    <p className="text-[13px] font-mono text-slate-600 italic">
                        {"// "} La mejor forma de predecir el futuro es programarlo.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Inicio;