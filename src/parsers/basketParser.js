const $ = require("cheerio");

export const eventParserBasket = (fragmento) => {
  let id = $(fragmento)[0].attribs.id;
  let hora = $(
    "table > thead > tr > th:nth-child(1) > span:nth-child(1)",
    fragmento
  )[0].attribs["data-value"];
  let equipo1 = $(
    "table > tbody > tr:nth-child(1) > td:nth-child(1) > div > span.team-nameplate > span.team-name > a > span",
    fragmento
  ).text();
  let equipo2 = $(
    "table > tbody > tr:nth-child(2) > td:nth-child(1) > div > span.team-nameplate > span.team-name > a > span",
    fragmento
  ).text();
  let valueEquipo1 = $(
    "table > tbody > tr:nth-child(1) > td:nth-child(5) > div > span",
    fragmento
  ).text();
  let oddEquipo1 = $(
    "table > tbody > tr:nth-child(1) > td:nth-child(5) > div > small",
    fragmento
  ).text();
  let valueEquipo2 = $(
    "table > tbody > tr:nth-child(2) > td:nth-child(5) > div > span",
    fragmento
  ).text();
  let oddEquipo2 = $(
    "table > tbody > tr:nth-child(2) > td:nth-child(5) > div > small",
    fragmento
  ).text();

  let scoreEquipo1 = $(
    "table > tbody > tr:nth-child(1) > td.event-card-score.tbd",
    fragmento
  ).text();
  let scoreEquipo2 = $(
    "table > tbody > tr:nth-child(2) > td.event-card-score.tbd",
    fragmento
  ).text();

  let isPlayingNow = $(fragmento)[0].attribs["data-live"] == 1;

  return {
    id,
    hora,
    equipo1,
    equipo2,
    valueEquipo1,
    oddEquipo1,
    valueEquipo2,
    oddEquipo2,
    scoreEquipo1,
    scoreEquipo2,
    isPlayingNow,
  };
};
