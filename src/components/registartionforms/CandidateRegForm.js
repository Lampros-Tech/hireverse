import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./regform.css";

function CandidateRegForm() {
  let navigate = useNavigate();

  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const refFive = useRef(null);

  const inputRefOne = useRef(null);
  const inputRefTwo = useRef(null);
  const inputRefThree = useRef(null);
  const inputRefFour = useRef(null);
  const inputRefFive = useRef(null);

  const [showAll, setAll] = useState({
    name: "",
    bio: "",
    address: "",
    country: "",
    contact: "",
  });

  const refArr = [
    { section: refOne, input: inputRefOne },
    { section: refTwo, input: inputRefTwo },
    { section: refThree, input: inputRefThree },
    { section: refFour, input: inputRefFour },
    { section: refFive, input: inputRefFive },
  ];

  const countryArr = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burma",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic",
    "Congo, Republic of the",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Greenland",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Mongolia",
    "Morocco",
    "Monaco",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Samoa",
    "San Marino",
    " Sao Tome",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const handleClick = (e) => {
    if (e === 0 && showAll.name === "") {
      alert("Enter Name pls");
    } else if (e === 1 && showAll.bio === "") {
      alert("Enter bio pls");
    } else if (e === 2 && showAll.address === "") {
      alert("Enter address pls");
    } else if (e === 3 && showAll.country === "") {
      alert("Select country pls");
    } else if (e === 4 && showAll.contact === "") {
      alert("Enter contact num pls");
    } else {
      // console.log(refArr[e + 1].section);
      const test = refArr[e + 1].section;
      // console.log(test);
      test.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const inputFocus = refArr[e + 1].input;
        inputFocus.current.focus();
      }, 1000);
    }
  };

  const handleClickPrevious = (e) => {
    // console.log(refArr[e - 1].section);
    const test = refArr[e - 1].section;
    // console.log(test);
    test.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const inputFocus = refArr[e - 1].input;
      inputFocus.current.focus();
      console.log(inputFocus.current.focus());
    }, 1000);
  };

  const target = (e, num) => {
    if (e.keyCode === 13) {
      handleClick(num);
    }
  };

  useEffect(() => {
    inputRefOne.current.focus();
  }, []);

  useEffect(() => {
    console.log(showAll);
  }, [showAll]);

  return (
    <>
      <section className="f-background">
        <section className="f-container">
          {/* *********************************************************** */}
          {/* 1st input field */}

          <section className="f-first" ref={refOne}>
            <div className="f-outside-div">
              <div className="f-inside-section">
                <div className="f-left">
                  <span className="f-num">1</span>
                  <svg
                    className="f-right-ar"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.143 31.143"
                  >
                    <g>
                      <g id="c100_arrow">
                        <path
                          d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                      </g>
                      <g id="Capa_1_46_"></g>
                    </g>
                  </svg>
                </div>
                <div className="f-form-div">
                  <p className="f-p">Hi there! So what's your name?</p>
                  <input
                    className="f-input"
                    id="firstInput"
                    type="text"
                    tabIndex="1"
                    required
                    ref={inputRefOne}
                    placeholder="Type your answer here..."
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                      setAll({ ...showAll, name: e.target.value });
                    }}
                    onKeyUp={(e) => {
                      target(e, 0);
                    }}
                  />
                  <div className="f-btn-flex">
                    <button
                      className="f-next-btn"
                      onClick={() => handleClick(0)}
                    >
                      <span>OK</span>
                      <svg
                        className="f-correct-ar"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 240.608 240.608"
                      >
                        <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z" />
                      </svg>
                    </button>
                    <span className="f-press-enter">
                      press <span className="f-enter">Enter ↵</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* *********************************************************** */}
          {/* 2nd input field */}

          <section className="f-first" ref={refTwo}>
            <div className="f-outside-div">
              <div className="f-inside-section">
                <div className="f-left">
                  <span className="f-num">2</span>
                  <svg
                    className="f-right-ar"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.143 31.143"
                  >
                    <g>
                      <g id="c100_arrow">
                        <path
                          d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                      </g>
                      <g id="Capa_1_46_"></g>
                    </g>
                  </svg>
                </div>
                <div className="f-form-div">
                  <p className="f-p">Candidates Bio</p>
                  <textarea
                    className="f-textarea"
                    name=""
                    id=""
                    placeholder="Type your answer here..."
                    ref={inputRefTwo}
                    onChange={(e) =>
                      setAll({ ...showAll, bio: e.target.value })
                    }
                    onKeyUp={(e) => {
                      e.preventDefault();
                      target(e, 1);
                    }}
                    cols="30"
                    rows="10"
                  />
                  <div className="f-btn-flex">
                    <button
                      className="f-next-btn"
                      onClick={() => handleClickPrevious(1)}
                    >
                      <svg
                        className="f-back-ar"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 492 492"
                      >
                        <g>
                          <g>
                            <path
                              d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z"
                            />
                          </g>
                        </g>
                      </svg>

                      <span>GO BACK</span>
                    </button>
                    <button
                      className="f-next-btn"
                      onClick={() => handleClick(1)}
                    >
                      <span>OK</span>
                      <svg
                        className="f-correct-ar"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 240.608 240.608"
                      >
                        <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z" />
                      </svg>
                    </button>
                    <span className="f-press-enter">
                      press <span className="f-enter">Enter ↵</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* *********************************************************** */}
          {/* 3rd input field */}

          <section className="f-first" ref={refThree}>
            <div className="f-outside-div">
              <div className="f-inside-section">
                <div className="f-left">
                  <span className="f-num">3</span>
                  <svg
                    className="f-right-ar"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.143 31.143"
                  >
                    <g>
                      <g id="c100_arrow">
                        <path
                          d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                      </g>
                      <g id="Capa_1_46_"></g>
                    </g>
                  </svg>
                </div>
                <div className="f-form-div">
                  <p className="f-p">Candidate Address</p>
                  <textarea
                    className="f-textarea"
                    name=""
                    id=""
                    ref={inputRefThree}
                    placeholder="Type your answer here..."
                    onChange={(e) =>
                      setAll({ ...showAll, address: e.target.value })
                    }
                    onKeyUp={(e) => {
                      target(e, 2);
                    }}
                    cols="30"
                    rows="10"
                  ></textarea>
                  <div className="f-btn-flex">
                    <button
                      className="f-next-btn"
                      onClick={() => handleClickPrevious(2)}
                    >
                      <svg
                        className="f-back-ar"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 492 492"
                      >
                        <g>
                          <g>
                            <path
                              d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z"
                            />
                          </g>
                        </g>
                      </svg>

                      <span>GO BACK</span>
                    </button>
                    <button
                      className="f-next-btn"
                      onClick={() => handleClick(2)}
                    >
                      <span>OK</span>
                      <svg
                        className="f-correct-ar"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 240.608 240.608"
                      >
                        <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z" />
                      </svg>
                    </button>
                    <span className="f-press-enter">
                      press <span className="f-enter">Enter ↵</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* *********************************************************** */}
          {/* 4th input field */}

          <section className="f-first" ref={refFour}>
            <div className="f-outside-div">
              <div className="f-inside-section">
                <div className="f-left">
                  <span className="f-num">4</span>
                  <svg
                    className="f-right-ar"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.143 31.143"
                  >
                    <g>
                      <g id="c100_arrow">
                        <path
                          d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                      </g>
                      <g id="Capa_1_46_"></g>
                    </g>
                  </svg>
                </div>
                <div className="f-form-div">
                  <p className="f-p">Select Country</p>
                  <select
                    name=""
                    id=""
                    className="f-select"
                    ref={inputRefFour}
                    onChange={(e) =>
                      setAll({ ...showAll, country: e.target.value })
                    }
                    onKeyUp={(e) => {
                      target(e, 3);
                    }}
                  >
                    {countryArr.map((item, value) => (
                      <option key={value} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <div className="f-btn-flex">
                    <button
                      className="f-next-btn"
                      onClick={() => handleClickPrevious(3)}
                    >
                      <svg
                        className="f-back-ar"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 492 492"
                      >
                        <g>
                          <g>
                            <path
                              d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z"
                            />
                          </g>
                        </g>
                      </svg>

                      <span>GO BACK</span>
                    </button>
                    <button
                      className="f-next-btn"
                      onClick={() => handleClick(3)}
                    >
                      <span>OK</span>
                      <svg
                        className="f-correct-ar"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 240.608 240.608"
                      >
                        <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z" />
                      </svg>
                    </button>
                    <span className="f-press-enter">
                      press <span className="f-enter">Enter ↵</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* *********************************************************** */}
          {/* 5th input field */}

          <section className="f-first" ref={refFive}>
            <div className="f-outside-div">
              <div className="f-inside-section">
                <div className="f-left">
                  <span className="f-num">5</span>
                  <svg
                    className="f-right-ar"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.143 31.143"
                  >
                    <g>
                      <g id="c100_arrow">
                        <path
                          d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                      </g>
                      <g id="Capa_1_46_"></g>
                    </g>
                  </svg>
                </div>
                <div className="f-form-div">
                  <p className="f-p">Candidate Contact Number</p>
                  {/* <input
                    className="f-input"
                    type="number"
                    name=""
                    id=""
                    ref={inputRefFive}
                    onChange={(e) =>
                      setAll({ ...showAll, contact: e.target.value })
                    }
                    onKeyUp={(e) => {
                      target(e, 4);
                    }}
                  /> */}
                  <div ref={inputRefFive}>
                    <PhoneInput
                      inputExtraProps={{
                        name: "phone",
                        required: true,
                        autoFocus: false,
                      }}
                      country={"us"}
                      value={showAll.contact}
                      autoFocus="false"
                      onChange={(e) => setAll({ ...showAll, contact: e })}
                      // onKeyUp={(e) => {
                      //   target(e, 4);
                      // }}
                    />
                  </div>

                  <div className="f-btn-flex">
                    <button
                      className="f-next-btn"
                      onClick={() => handleClickPrevious(4)}
                    >
                      <svg
                        className="f-back-ar"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 492 492"
                      >
                        <g>
                          <g>
                            <path
                              d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z"
                            />
                          </g>
                        </g>
                      </svg>

                      <span>GO BACK</span>
                    </button>
                    <button
                      className="f-next-btn"
                      onClick={() => {
                        // handleClick(4);
                        navigate("/candidateregform/candidate-education");
                      }}
                    >
                      <span>NEXT</span>

                      <svg
                        className="f-correct-ar"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 240.608 240.608"
                      >
                        <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z" />
                      </svg>
                    </button>
                    <span className="f-press-enter">
                      press <span className="f-enter">Enter ↵</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* *********************************************************** */}
        </section>

        {/* <button
          className="f-next-try-btn"
          onClick={() => console.log(document.activeElement)}
        >
          trying
        </button> */}
      </section>
    </>
  );
}

export default CandidateRegForm;
