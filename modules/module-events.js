const he = require('he');
module.exports = ({days}) => Object.keys(days).map(key => {
  const day = days[key];
  const { holiday, name, date, events } = day;
  const content = `
  <h2>${holiday || name} <small>${date}</small></h2>
  <table class="events">
    ${events.map(event => `
      <tr>
        <td>${event.friendlyTimeStart}</td>
        <td><a href="https://eventsbne.me${event.uri}">${he.encode(event.name)}</a><br>
        <!--em>${he.encode(event.organizer || '')}</em-->
        </td>
      </tr>
    `).join('')}
  </table>
  `;
  return require(require('path').resolve('./modules', `module-full-width`)).apply(this, [{content}]);
}).join('');
