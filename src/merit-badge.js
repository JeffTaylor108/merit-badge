import { LitElement, html, css } from 'lit';
import "../src/circle-wrap.js";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";

class MeritBadge extends LitElement {
  static properties = {
    date: { type: String },
    icon: { type: String },
    title: { type: String },
    unlocked: { type: Boolean}
  }

  static styles = css`

    .badge {
      --black: #000000;
      --dark-blue: #2E5984;
      --light-blue: #ADD8E6;
      --white: #FFFFFF;
      --small: 0.7;
      --medium: 1;
      --large: 1.3;
      display: inline-table;
      vertical-align: middle;
      width: 220px;
      height: 220px;
      margin: 10px;
      background-color: #bbb;
      border-style: dotted;
      border-color: var(--black);
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 0 2px #bbb, 3px 3px 6px 2px rgba(10, 10, 0, 0.5);
      transform: scale(var(--medium));
    }

    .badge_content {
      display: table-cell;
      vertical-align: top;
      text-align: center;
    }

    h3 {
      font-size: 25px;
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

    circle-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `;

  constructor() {
    super();
    this.date = 'LOCKED';
    this.icon = 'https://cdn-icons-png.flaticon.com/512/5405/5405811.png';
    this.title = 'Research Analysis';
    this.unlocked = false;
  }

  render() {
    return html`
      <div class="badge">
      <div class="badge_content">
        <circle-wrap title="${this.title}" date="${this.date}"></circle-wrap>
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