import React, { useEffect, useState } from "react";

const Client = () => {
  const [client, setClient] = useState(null);
  const url = "https://httpbin.org/get";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const clientData = {
          Accept: data.headers.Accept,
          Origin: data.headers.Origin,
          agent: data.headers["Sec-Ch-Ua"],
          language: data.headers["Accept-Language"],
          origin: data.origin,
          Host: data.headers.Host,
          System: data.headers["Sec-Ch-Ua-Platform"],
        };
        setClient(clientData);
      });
  }, []);
  return (
    <div>
      {client ? (
        <div>
          <table border="10">
            <thead>
              <tr>
                <th>INFORMATION </th>
                <th>JSON API</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>The files that are accepted: </th>
                <td>{client.Accept}</td>
              </tr>
              <tr>
                <th>The language:</th>
                <td>{client.language}</td>
              </tr>
              <tr>
                <th>The remote host:</th>
                <td>{client.Host}</td>
              </tr>
              <tr>
                <th>The IP that originated the request:</th>
                <td>{client.origin}</td>
              </tr>
              <tr>
                <th>The name of the browser:</th>
                <td>{client.agent}</td>
              </tr>
              <tr>
                <th>The Operating System of the local machine:</th>
                <td>{client.System}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};
export default Client;
