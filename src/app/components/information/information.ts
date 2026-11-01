import { Component, EventEmitter, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

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
  imports: [TranslatePipe],
  templateUrl: './information.html',
  styleUrl: './information.scss',
})
export class Information {
  protected readonly pixelArt = '/assets/borderless.jpg';
  @Output() componentSelected = new EventEmitter<string>();
  protected readonly components = ['about', 'experience', 'stack', 'aptitudes', 'contact'];
  selectedSection = 'about';
  selectedOption = 'desc';

  sections: InfoSection[] = [
    {
      id: 'about',
      label: 'information.sections.about.label',
      options: [
        {
          id: 'desc',
          label: 'information.sections.about.options.description.label',
          detail: 'information.sections.about.options.description.detail',
        },
        {
          id: 'mission',
          label: 'information.sections.about.options.mission.label',
          detail: 'information.sections.about.options.mission.detail',
        },
        {
          id: 'intereses',
          label: 'information.sections.about.options.interests.label',
          detail: 'information.sections.about.options.interests.detail',
        },
      ],
    },
    {
      id: 'experience',
      label: 'information.sections.experience.label',
      options: [
        {
          id: 'ecosur',
          label: 'information.sections.experience.options.ecosur.label',
          detail: 'information.sections.experience.options.ecosur.detail',
        },
        {
          id: 'alset',
          label: 'information.sections.experience.options.alset.label',
          detail: 'information.sections.experience.options.alset.detail',
        },
        {
          id: 'legalbit',
          label: 'information.sections.experience.options.legalbit.label',
          detail: 'information.sections.experience.options.legalbit.detail',
        },
        {
          id: 'cajapixeles',
          label: 'information.sections.experience.options.cajapixeles.label',
          detail: 'information.sections.experience.options.cajapixeles.detail',
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
      label: 'information.sections.stack.label',
      options: [
        {
          id: 'frontend',
          label: 'information.sections.stack.options.frontend.label',
          detail: 'information.sections.stack.options.frontend.detail',
        },
        {
          id: 'backend',
          label: 'information.sections.stack.options.backend.label',
          detail: 'information.sections.stack.options.backend.detail',
        },
      ],
    },
    {
      id: 'aptitudes',
      label: 'information.sections.skills.label',
      options: [
        {
          id: 'communication',
          label: 'information.sections.skills.options.communication.label',
          detail: 'information.sections.skills.options.communication.detail',
        },
        {
          id: 'problemSolving',
          label: 'information.sections.skills.options.problemSolving.label',
          detail: 'information.sections.skills.options.problemSolving.detail',
        },
        {
          id: 'teamwork',
          label: 'information.sections.skills.options.teamwork.label',
          detail: 'information.sections.skills.options.teamwork.detail',
        },
      ],
    },
    {
      id: 'contact',
      label: 'information.sections.contact.label',
      options: [
        {
          id: 'email',
          label: 'information.sections.contact.options.email.label',
          detail: 'information.sections.contact.options.email.detail',
        },
        {
          id: 'linkedin',
          label: 'information.sections.contact.options.linkedin.label',
          detail: 'information.sections.contact.options.linkedin.detail',
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
      'information.selectOption'
    );
  }
}
