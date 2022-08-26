import React, { useState } from "react";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

export default function SendButton({ action, value }) {
  const [clicked, setClicked] = useState(false);
  const [ready, setReady] = useState(false);
  const { t, i18n } = useTranslation("common");

  async function handelClick() {
    setClicked(true);
    await action(value);
    setTimeout(function () {
      setReady(true);
    }, 2300);
  }

  function handleClassName() {
    if (!value.length) {
      return "dissable";
    }
    if (ready) {
      return "ready";
    }
    if (clicked) {
      return "loading";
    }
    return "";
  }

  function handleText() {
    if (ready) {
      return t("Button.Sent");
    }

    return t("Button.Send");
  }

  return (
    <div className="comments-send-button">
      <button
        onClick={handelClick}
        className={("button ", handleClassName())}
        type="submit"
      >
        <span>{handleText()}</span>
      </button>
    </div>
  );
}

const Button = styled.button``;
