// src/components/Card.ts
import templateHTML from './card.html?raw';

export class CardComponent {
  private element: HTMLElement;
  private titleEl: HTMLElement | null;
  private contentEl: HTMLElement | null;

  private state = {
    title: '',
    content: ''
  };

  constructor(title: string, content: string) {
    // Asegura que el template esté insertado una vez
    if (!document.getElementById('card-component')) {
      const container = document.createElement('div');
      container.innerHTML = templateHTML;
      document.body.appendChild(container);
    }

    // Clona el template
    const template = document.getElementById('card-component') as HTMLTemplateElement;
    const clone = template.content.cloneNode(true) as HTMLElement;
    this.element = clone.firstElementChild as HTMLElement;

    this.titleEl = this.element.querySelector('h2');
    this.contentEl = this.element.querySelector('p');

    // Asigna estado inicial
    this.setState({ title, content });

    // Hacer el componente arrastrable
    this.initDrag();
  }

  // Inserta en el DOM
  render(parent: HTMLElement) {
    parent.appendChild(this.element);
  }

  // Actualiza estado reactivo
  setState(newState: Partial<typeof this.state>) {
    this.state = { ...this.state, ...newState };
    if (newState.title !== undefined && this.titleEl)
      this.titleEl.textContent = this.state.title;

    if (newState.content !== undefined && this.contentEl)
      this.contentEl.textContent = this.state.content;
  }

  // Manejo de drag & drop
  private initDrag() {
    let offsetX = 0;
    let offsetY = 0;

    this.element.addEventListener('dragstart', (e) => {
      // Necesario para Firefox
      e.dataTransfer?.setData('text/plain', '');
      const rect = this.element.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      // Cambiar opacidad durante el arrastre
      this.element.style.opacity = '0.5';
    });

    this.element.addEventListener('dragend', (e) => {
      this.element.style.opacity = '1';
      // Reposiciona la tarjeta en la ubicación final
      this.element.style.position = 'absolute';
      this.element.style.left = `${e.clientX - offsetX}px`;
      this.element.style.top = `${e.clientY - offsetY}px`;
    });
  }
}