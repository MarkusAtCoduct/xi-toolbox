import { flexbox } from "@mui/system";
import * as React from "react";
import ArrowDown from "../../assets/ArrowDown.png";

export default function FAQQuestions() {
  const [togglequest1, setTogglequest1] = React.useState(false);
  const [togglequest2, setTogglequest2] = React.useState(false);
  const [togglequest3, setTogglequest3] = React.useState(false);
  const [togglequest4, setTogglequest4] = React.useState(false);
  const [togglequest5, setTogglequest5] = React.useState(false);

  return (
    <div style={{ magrinleft: 180, marginRight: 180, marginBottom: 100 }}>
      <div>
        <div
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 22,
            color: "#5C5F5D",
            textAlign: "left",
          }}
          onClick={() => setTogglequest1(!togglequest1)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 18,
            }}
          >
            <div>How can I create a new method from scratch?</div>
            <div>
              {togglequest1 ? <img src={ArrowDown} /> : <img src={ArrowDown} />}
            </div>
          </div>
          <hr />
        </div>
        {togglequest1 && (
          <div
            style={{
              textAlign: "left",

              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 22,
              color: "#000",
              marginBottom: 24,
            }}
          >
            Lorem Ipsum
          </div>
        )}
      </div>
      <div>
        <div
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 22,
            color: "#5C5F5D",
            textAlign: "left",
          }}
          onClick={() => setTogglequest2(!togglequest2)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 18,
            }}
          >
            <div>How can I combine methods?</div>
            <div>
              {togglequest2 ? <img src={ArrowDown} /> : <img src={ArrowDown} />}
            </div>
          </div>
          <hr />
        </div>
        {togglequest2 && (
          <div
            style={{
              textAlign: "left",

              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 22,
              color: "#000",
              marginBottom: 24,
            }}
          >
            Lorem Ipsum
          </div>
        )}
      </div>
      <div>
        <div
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 22,
            color: "#5C5F5D",
            textAlign: "left",
          }}
          onClick={() => setTogglequest3(!togglequest3)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 18,
            }}
          >
            <div>How to save my methods without publishing them to public?</div>
            <div>
              {togglequest3 ? <img src={ArrowDown} /> : <img src={ArrowDown} />}
            </div>
          </div>
          <hr />
        </div>
        {togglequest3 && (
          <div
            style={{
              textAlign: "left",

              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 22,
              color: "#000",
              marginBottom: 24,
            }}
          >
            Lorem Ipsum
          </div>
        )}
      </div>
      <div>
        <div
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 22,
            color: "#5C5F5D",
            textAlign: "left",
          }}
          onClick={() => setTogglequest4(!togglequest4)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 18,
            }}
          >
            <div>
              Can I download and save my process and methods to my computer?
            </div>
            <div>
              {togglequest4 ? <img src={ArrowDown} /> : <img src={ArrowDown} />}
            </div>
          </div>
          <hr />
        </div>
        {togglequest4 && (
          <div
            style={{
              textAlign: "left",

              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 22,
              color: "#000",
              marginBottom: 24,
            }}
          >
            Lorem Ipsum
          </div>
        )}
      </div>
      <div>
        <div
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 22,
            color: "#5C5F5D",
            textAlign: "left",
          }}
          onClick={() => setTogglequest5(!togglequest5)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 18,
            }}
          >
            <div>
              Is there a way to share my methods to colleagues without
              publishing to public?
            </div>
            <div>
              {togglequest5 ? <img src={ArrowDown} /> : <img src={ArrowDown} />}
            </div>
          </div>
          <hr />
        </div>
        {togglequest5 && (
          <div
            style={{
              textAlign: "left",

              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 22,
              color: "#000",
              marginBottom: 24,
            }}
          >
            Lorem Ipsum
          </div>
        )}
      </div>
    </div>
  );
}
