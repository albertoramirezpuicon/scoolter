import React from "react";

function Navigation(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <div className="language-select">
          <select
            className="custom-select"
            value={props.language}
            onChange={e => props.handleSetLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Castellano">Castellano</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;