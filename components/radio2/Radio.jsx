"use client";
import { useState, useEffect } from "react";
import styles from "/components/radio/styles.module.scss";
import { Client, Databases, Query } from "appwrite";

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66329460003701abe30c");

    const databases = new Databases(client);

    const fetchUsers = async () => {
      try {
        setLoading(true);

        const query = [Query.limit(1000)];

        const response = await databases.listDocuments(
          "66392c30001b34fefa14",
          "66392c62001ed202eeb8",
          query
        );

        setUsers(response.documents);
        setLoading(false);
      } catch (error) {
        console.error("Error loading users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66329460003701abe30c");

    const databases = new Databases(client);

    const fetchSubscribers = async () => {
      try {
        setLoading(true);

        const query = [Query.limit(1000)];

        const response = await databases.listDocuments(
          "66392c30001b34fefa14",
          "663bcd6c003e4b981a09",
          query
        );

        setSubscribers(response.documents);
        setLoading(false);
      } catch (error) {
        console.error("Error loading subscribers:", error);
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.radioContainer}>
        <input
          type="radio"
          id="option1"
          name="options"
          value="option1"
          className={styles.radioInput}
          checked={selectedOption === "option1"}
          onChange={() => setSelectedOption("option1")}
        />
        <label htmlFor="option1" className={styles.radioOption}>
          <div
            className={`${styles.radioLabel} ${
              selectedOption === "option1" ? styles.active : ""
            }`}
          >
            Registrovaní uživatelé ({users.length})
          </div>
        </label>

        <input
          type="radio"
          id="option2"
          name="options"
          value="option2"
          className={styles.radioInput}
          checked={selectedOption === "option2"}
          onChange={() => setSelectedOption("option2")}
        />
        <label htmlFor="option2" className={styles.radioOption}>
          <div
            className={`${styles.radioLabel} ${
              selectedOption === "option2" ? styles.active : ""
            }`}
          >
            Subscribers ({subscribers.length})
          </div>
        </label>
      </div>
      <div className={styles.contentContainer}>
        {selectedOption === "option1" && (
          <>
            {" "}
            <input
              type="text"
              placeholder="Vyhledat dle jména"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="inputSearch"
            />
            <table className="w-full text-white">
              <thead>
                <tr className="">
                  <th className="px-2 py-2 text-left">No.</th>
                  <th className="px-2 py-2 text-left">Jméno</th>
                  <th className="px-2 py-2 text-left">Email</th>
                  <th className="px-2 py-2 text-left">Telefon</th>
                  <th className="px-2 py-2 text-left">Společnost</th>
                  <th className="px-2 py-2 text-left">Adresa</th>
                  <th className="px-2 py-2 text-left">Offline</th>
                  <th className="px-2 py-2 text-left">Online</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter(
                    (user) =>
                      searchTerm === "" ||
                      user.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((user, index) => (
                    <tr key={index} className={index % 2 === 0 ? "" : ""}>
                      <td className="px-2 py-2">{index + 1}</td>
                      <td className="px-2 py-2">{user.name}</td>
                      <td className="px-2 py-2">{user.email}</td>
                      <td className="px-2 py-2">{user.phoneNumber}</td>
                      <td className="px-2 py-2">{user.company}</td>
                      <td className="px-2 py-2">{user.address}</td>
                      <td className="px-2 py-2">
                        {user.paid === "true" ? "x" : user.paid}
                      </td>
                      <td className="px-2 py-2">
                        {user.paid2 === "true" ? "x" : user.paid2}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        )}
        {selectedOption === "option2" && (
          <table className="w-[250px] text-white">
            <thead>
              <tr className="">
                <th className="px-4 py-2 text-left">No.</th>
                <th className="px-4 py-2 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber, index) => (
                <tr key={index} className={index % 2 === 0 ? "" : ""}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{subscriber.Email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RadioButtons;
