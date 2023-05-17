import React, { useState, useEffect } from "react";

type Props = {};

function Test({}: Props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.socialintents.com/v1/api/chats/app_id=402881ca479973440147997a99b00000",
      {
        method: "GET",
        headers: {
          Authorization:
            "Basic " +
            btoa(
              "2c9fa6c388226f69018827e7bd5105f9:d98ba953-ad71-4cad-be11-23ee51321f7d"
            ),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: "no-cors",
        cache: "default",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  // useEffect(() => {
  //   const accountId = "2c9fa6c388226f69018827e7bd5105f9";
  //   const apiToken = "d98ba953-ad71-4cad-be11-23ee51321f7d";

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.socialintents.com/v1/api/chats/",
  //         {
  //           headers: {
  //             Authorization:
  //               "Basic " +
  //               btoa(
  //                 "2c9fa6c388226f69018827e7bd5105f9:d98ba953-ad71-4cad-be11-23ee51321f7d"
  //               ),
  //             "Content-Type": "application/x-www-form-urlencoded",
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         const jsonData = await response.json();
  //         setData(jsonData);
  //         console.log(data);
  //       } else {
  //         console.log("Failed to fetch the API:", response.status);
  //       }
  //     } catch (error) {
  //       console.log("Error:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return <div>test</div>;
}

export default Test;
