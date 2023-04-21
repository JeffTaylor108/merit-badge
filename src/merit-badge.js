import { LitElement, html, css } from 'lit';

class MeritBadge extends LitElement {
  static properties = {
    date: { type: String },
    icon: { type: String },
    title: { type: String }
  }

  static styles = css`
    .badge {
      display: inline-table;
      vertical-align: middle;
      width: 220px;
      height: 220px;
      background-color: #bbb;
      border-style: dotted;
      border-color: black;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 0 2px #bbb, 3px 3px 6px 2px rgba(10, 10, 0, 0.5);
    }

    .badge_content {
      display: table-cell;
      vertical-align: top;
      text-align: center;
    }

    h3 {
      font-size: 20px;
    }

    .logo img {
      width: 75px;
      max-width: 100%;
      height: auto;
      object-fit: cover;
      object-position: center;
    }

    h2 {
      font-size: 16px;
    }

    .verification {
      padding: 8px;
      border-radius: 10px;
      background-color: #ADD8E6;
    }

    .skills {
      padding: 8px;
      border-radius: 10px;
      background-color: orange;
    }

    .details {
      padding: 8px;
      border-radius: 10px;
      background-color: #2E5984;
    }
  `;

  constructor() {
    super();
    this.date = 'Sample Date';
    this.icon = 'https://cdn-icons-png.flaticon.com/512/5405/5405811.png';
    this.title = 'Sample Title';
  }

  render() {
    return html`
      <div class="badge">
      <div class="badge_content">
        <h3>${this.date}</h3>
        <div class="logo">
          <img src=${this.icon} alt="sample logo">
        </div>
        <h2>${this.title}</h2>
        <div class="buttons">
          <button class="verification"></button>
          <button class="skills"></button>
          <button class="details"></button>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('merit-badge', MeritBadge);