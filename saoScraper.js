const requestPromise = require("request-promise");
const $ = require("cheerio");

const eventParserBasket = require("./src/parsers/basketParser");
const eventParserPelota = require("./src/parsers/pelotaParser");

/**
 * Dictionary for events depending on the
 * sports we will have diferent data to parse
 */
const eventParser = {
  nba: eventParserBasket,
  ncaab: eventParserBasket,
  ["id del mlb"]: eventParserPelota,
};

/**
 * General parser for all sports
 */
const sportParser = (fragmento) => {
  const nombre = $("header.container-header h2 a", fragmento).text();
  const id = $("header.container-header h2 a", fragmento)[0].attribs.name;
  const eventsHtml = $(".container-body.cards .event-card", fragmento);
  let events = new Array();
  for (let i = 0; i < eventsHtml.length; i++) {
    events.push(eventParser[id](eventsHtml[i]));
  }
  return {
    id,
    nombre,
    events,
  };
};

/**
 * Main function that makes the call to the webpage
 */
const requestFromSAO = async function (fecha) {
  try {
    const html = await requestPromise(
      `https://www.scoresandodds.com/?date=${fecha}`
    );

    const deportesHtml = $(".page-content .container", html);
    let deportes = new Array();
    for (let i = 0; i < deportesHtml.length; i++) {
      deportes.push(sportParser(deportesHtml[i]));
    }
    // Here we should do something with the data, right
    // now we just print it to console to see what it looks like
    console.log(JSON.stringify(deportes));

  } catch (err) {
    //TODO: improve error handling
    console.log(err);
  }
};

module.exports = requestFromSAO;
