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
        { id: 'intro', label: 'Introducción', detail: 'Soy...' },
        { id: 'mission', label: 'Misión', detail: 'Mi objetivo...' },
      ],
    },
    {
      id: 'experience',
      label: 'Experiencia',
      options: [
        { id: 'frontend', label: 'Frontend', detail: 'He trabajado con Angular...' },
        { id: 'backend', label: 'Backend', detail: 'También he hecho APIs...' },
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
        { id: 'communication', label: 'Comunicación', detail: 'Me comunico efectivamente...' },
        {
          id: 'problemSolving',
          label: 'Resolución de problemas',
          detail: 'Me gusta resolver problemas...',
        },
        { id: 'teamwork', label: 'Trabajo en equipo', detail: 'Disfruto trabajar en equipo...' },
      ],
    },
    {
      id: 'contact',
      label: 'Contacto',
      options: [
        { id: 'email', label: 'Email', detail: 'miemail@ejemplo.com' },
        { id: 'phone', label: 'Teléfono', detail: '+34 123 456 789' },
        { id: 'location', label: 'Ubicación', detail: 'Madrid, España' },
        { id: 'linkedin', label: 'LinkedIn', detail: 'linkedin.com/in/antonio-kramsky' },
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
