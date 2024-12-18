'use strict';
export class AvatarElement extends HTMLElement {
    static observedAttributes = [
        'data-title',
        'title',
        'data-src',
        'src',
        'data-icon',
        'icon',
        'data-length',
        'length',
    ];

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        let title = this.getAttribute('title') || this.dataset.title;
        let icon = this.getAttribute('icon') || this.dataset.icon;
        let src = this.getAttribute('src') || this.dataset.src;
        let length = this.getAttribute('length') || this.dataset.length || 2;
        let initials = null;

        if (title) {
            initials = title
                .split(/\s+/)
                .filter(word => word.length > 0)
                .map(word => word[0])
                .join('')
                .slice(0, length)
                .toUpperCase();
        }

        this.innerHTML = '';

        if (icon) {
            if (icon.startsWith('<svg')) {
                this.innerHTML += icon;
            } else {
                let iconDom = document.createElement('i');
                iconDom.classList.add('ti');
                iconDom.classList.add('ti-' + icon);
                this.appendChild(iconDom);
            }
        } else if (initials) {
            let initialsDom = document.createElement('span');
            initialsDom.textContent = initials;
            this.appendChild(initialsDom);
        } else {
            let initialsDom = document.createElement('i');
            initialsDom.classList.add('ti');
            initialsDom.classList.add('ti-line-dotted');
            this.appendChild(initialsDom);
        }

        if (src) {
            let imgDom = document.createElement('img');
            imgDom.src = src;
            imgDom.alt = title;

            this.appendChild(imgDom);
        }
    }

}