import { LitElement, html, css } from 'lit';

class MeritBadge extends LitElement {
  static properties = {
    header: { type: String },
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
  box-shadow:  -1px 1px black,
         -2px 2px black,
         -3px 3px black,
         -4px 4px black,
         -5px 5px gray;
}

.badge_content {
  display: table-cell;
  vertical-align: top;
  text-align: center;
}

.date {
  font-size: 20px;
}

.logo img {
  width: 75px;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}

.title {
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
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="badge">
  <div class="badge_content">
    <p class="date">Sample Date</p>
    <div class="logo">
    <img src=https://cdn-icons-png.flaticon.com/512/5405/5405811.png alt="sample logo">
    </div>
    <p class="title">Sample Title</p>
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