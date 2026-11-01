import { Component, EventEmitter, Output } from '@angular/core';

type InfoOption = {
  id: string;
  label: string;
  detail: string;
};

type InfoSection = {
  id: string;
  label: string;
  options: InfoOption[];
};

@Component({
  selector: 'app-information',
  imports: [],
  templateUrl: './information.html',
  styleUrl: './information.scss',
})
export class Information {
  protected readonly pixelArt = '/assets/borderless.jpg';
  @Output() componentSelected = new EventEmitter<string>();
  protected readonly components = ['about', 'experience', 'stack', 'aptitudes', 'contact'];
  selectedSection = 'about';
  selectedOption = 'intro';

  sections: InfoSection[] = [
    {
      id: 'about',
      label: 'Sobre mí',
      options: [
        {
          id: 'desc',
          label: 'Descripción',
          detail:
            'Desarrollador de software entusiasta con dos años de experiencia usando tecnologías modernas de frontend y backend. Me apasiona crear aplicaciones web eficientes y escalables, y siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.',
        },
        {
          id: 'mission',
          label: 'Misión',
          detail:
            'Aprender cosas nuevas constantemente tanto profesional cómo personalmente, para ser una mejor versión de mí mismo y poder ayudar a otros a crecer.',
        },
        {
          id: 'intereses',
          label: 'Intereses',
          detail:
            'Soy un apasionado de la tecnología y la programación, me gusta aprender nuevas tecnologías y aplicarlas en proyectos personales. También disfruto de los videojuegos, el deporte y de muchas cosas más, siempre estoy buscando nuevas experiencias y formas de crecer como persona.',
        },
      ],
    },
    {
      id: 'experience',
      label: 'Experiencia',
      options: [
        {
          id: 'ecosur',
          label: 'Ecosur',
          detail:
            'Trabajé cómo desarrollador becario principalmente enfocado en el backend trabajando con las tecnologías de .NET desarrollando APIs para automatizar procesos educativos. Además, utilicé react para graficar datos institucionales.',
        },
        {
          id: 'alset',
          label: 'Alset',
          detail:
            'Me desempeñé cómo un desarrollador full-stack desarrollando y haciendo mantenimiento de aplicaciones web utilizando .NET y NestJS para el backend y angular para frontend.',
        },
        {
          id: 'legalbit',
          label: 'Legalbit',
          detail: 'Tuve un puesto cómo desarrollador backend utilizando tecnologías de node.js',
        },
        {
          id: 'cajapixeles',
          label: 'Caja de Pixeles',
          detail:
            'Apoyé en el desarrollo y migración de un sistema de gestión empresarial haciendo uso de Angular para la implementación de interfaces y conectarlas con la API.',
        },
        // {
        //   id: 'personal',
        //   label: 'Proyectos personales',
        //   detail: 'He trabajado con Angular y React...',
        // },
      ],
    },
    {
      id: 'stack',
      label: 'Stack',
      options: [
        { id: 'frontend', label: 'Frontend', detail: 'Angular, React...' },
        { id: 'backend', label: 'Backend', detail: 'Node.js, Express...' },
      ],
    },
    {
      id: 'aptitudes',
      label: 'Aptitudes',
      options: [
        {
          id: 'communication',
          label: 'Comunicación',
          detail:
            'Disfruto de tener una comunicación clara y eficiente con los clientes y compañeros de trabajo.',
        },
        {
          id: 'problemSolving',
          label: 'Resolución de problemas',
          detail:
            'Me gusta enfrentar desafíos y encontrar soluciones a los problemas que surgen en el desarrollo de software.',
        },
        {
          id: 'teamwork',
          label: 'Trabajo en equipo',
          detail:
            'Disfruto de estar en un equipo en el que se fomente la colaboración y el respeto mutuo para disfrutar aún más del desarrollo de sistemas y tener un ambiente de trabajo positivo.',
        },
      ],
    },
    {
      id: 'contact',
      label: 'Contacto',
      options: [
        {
          id: 'email',
          label: 'Email',
          detail:
            'jesus.kramsky@gmail.com\nSi tienes alguna pregunta o proyecto con el que te gustaría colaborar, no dudes en contactarme por medio de mi correo.',
        },
        {
          id: 'linkedin',
          label: 'LinkedIn',
          detail:
            'https://www.linkedin.com/in/jesus-kramsky-27b541317/\nPuedes ver y seguir mi perfil en Linkedin para conocer más sobre mi experiencia y habilidades por medio de mis publicaciones.',
        },
      ],
    },
  ];

  // Details: Record<string, {}> = {
  //   about: {
  //     description: '',
  //     formación: '',
  //   },
  //   experience: {
  //     frontend: '',
  //     backend: '',
  //   },
  //   stack: {
  //     frontend: '',
  //     backend: '',
  //   },
  //   aptitudes: {
  //     communication: '',
  //     problemSolving: '',
  //     teamwork: '',
  //   },
  //   contact: {
  //     email: '',
  //     phone: '',
  //     location: '',
  //     linkedin: '',
  //   },
  // };

  selectComponent(component: string) {
    this.componentSelected.emit(component);
  }

  selectSection(sectionId: string) {
    this.selectedSection = sectionId;
    const section = this.sections.find((s) => s.id === sectionId);
    this.selectedOption = section?.options[0]?.id ?? '';
  }

  selectOption(optionId: string) {
    this.selectedOption = optionId;
  }

  currentSection() {
    return this.sections.find((s) => s.id === this.selectedSection);
  }

  currentOptions() {
    return this.currentSection()?.options ?? [];
  }

  currentDetail() {
    return (
      this.currentOptions().find((option) => option.id === this.selectedOption)?.detail ??
      'Selecciona una opción'
    );
  }
}
