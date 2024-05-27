"use client";
import { useState, useEffect } from "react";
import styles from "/components/radio/styles.module.scss";
import { Client, Databases, Query } from "appwrite";

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [users, setUsers] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [invoicedCheckbox, setInvoicedCheckbox] = useState({});
  const [paidCheckbox, setPaidCheckbox] = useState({});

  useEffect(() => {
    // Retrieve saved option from localStorage
    const savedOption = localStorage.getItem("selectedOption");
    if (savedOption) {
      setSelectedOption(savedOption);
    }
  }, []);

  useEffect(() => {
    // Save selected option to localStorage whenever it changes
    localStorage.setItem("selectedOption", selectedOption);
  }, [selectedOption]);

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66329460003701abe30c");

    const databases = new Databases(client);

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await databases.listDocuments(
          "66392c30001b34fefa14",
          "66392c62001ed202eeb8",
          [Query.limit(1000)]
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

  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66329460003701abe30c");

    const databases = new Databases(client);

    const fetchSubscribers = async () => {
      try {
        setLoading(true);
        const response = await databases.listDocuments(
          "66392c30001b34fefa14",
          "663bcd6c003e4b981a09",
          [Query.limit(1000)]
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

  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66329460003701abe30c");

    const databases = new Databases(client);

    const fetchInvoices = async () => {
      try {
        setLoading(true);
        const response = await databases.listDocuments(
          "66392c30001b34fefa14",
          "664fbe2200123f312a69",
          [Query.limit(1000)]
        );
        setInvoices(response.documents);
        setLoading(false);
      } catch (error) {
        console.error("Error loading invoices:", error);
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  useEffect(() => {
    // Fetch initial checkbox state from the database and update the state
    const fetchInitialCheckboxState = async () => {
      // Initialize Appwrite client
      const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("66329460003701abe30c");

      const databases = new Databases(client);

      try {
        setLoading(true);
        const response = await databases.listDocuments(
          "66392c30001b34fefa14",
          "664fbe2200123f312a69",
          [Query.limit(1000)]
        );

        // Initialize invoicedCheckbox and paidCheckbox state based on fetched data
        const initialInvoicedCheckboxState = {};
        const initialPaidCheckboxState = {};
        response.documents.forEach((invoice) => {
          initialInvoicedCheckboxState[invoice.$id] = {
            invoiced: invoice.invoiced === true,
          };
          initialPaidCheckboxState[invoice.$id] = {
            paid: invoice.paid === true,
          };
        });

        setInvoicedCheckbox(initialInvoicedCheckboxState);
        setPaidCheckbox(initialPaidCheckboxState);
        setLoading(false);
      } catch (error) {
        console.error("Error loading invoices:", error);
        setLoading(false);
      }
    };

    fetchInitialCheckboxState();
  }, []);

  const handleCheckboxChange = async (invoiceId, field, checked) => {
    // Initialize Appwrite client
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66329460003701abe30c");

    const databases = new Databases(client);

    // Prepare the data to be updated
    const updateData = {
      [field]: checked,
    };

    try {
      // Update the document in Appwrite database
      await databases.updateDocument(
        "66392c30001b34fefa14", // Database ID
        "664fbe2200123f312a69", // Collection ID
        invoiceId, // Document ID
        updateData
      );
      console.log(`Document ${invoiceId} updated successfully.`);
      window.location.reload();

      // Fetch the updated document to check the current state of "invoiced" and "paid"
      const response = await databases.getDocument(
        "66392c30001b34fefa14", // Database ID
        "664fbe2200123f312a69", // Collection ID
        invoiceId // Document ID
      );

      // Check if response and response.document are not undefined before accessing properties
      if (response && response.document) {
        // Update the local state to reflect the current checkbox state
        if (field === "invoiced") {
          setInvoicedCheckbox((prevState) => ({
            ...prevState,
            [invoiceId]: {
              ...prevState[invoiceId],
              invoiced: response.document.invoiced === true,
            },
          }));
        } else if (field === "paid") {
          setPaidCheckbox((prevState) => ({
            ...prevState,
            [invoiceId]: {
              ...prevState[invoiceId],
              paid: response.document.paid === true,
            },
          }));
        }
      }
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };
  function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const month = dateObject.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
    const day = dateObject.getDate();
    return `${day}. ${month}.`;
  }

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

        <input
          type="radio"
          id="option3"
          name="options"
          value="option3"
          className={styles.radioInput}
          checked={selectedOption === "option3"}
          onChange={() => setSelectedOption("option3")}
        />
        <label htmlFor="option3" className={styles.radioOption}>
          <div
            className={`${styles.radioLabel} ${
              selectedOption === "option3" ? styles.active : ""
            }`}
          >
            Faktury ({invoices.length})
          </div>
        </label>
      </div>
      <div className={styles.contentContainer}>
        {selectedOption === "option1" && (
          <>
            <input
              type="text"
              placeholder="Vyhledat dle jména"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="inputSearch"
            />
            <table className="w-full text-white">
              <thead>
                <tr>
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
              <tr>
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
        {selectedOption === "option3" && (
          <table className="w-full text-white">
            <thead>
              <tr>
                <th className="px-2 py-2 text-left">No.</th>
                <th className="px-2 py-2 text-left">Jméno</th>
                <th className="px-2 py-2 text-left">Email</th>
                <th className="px-2 py-2 text-left">Společnost</th>
                <th className="px-2 py-2 text-left">IČ</th>
                <th className="px-2 py-2 text-left">DIČ</th>
                <th className="px-2 py-2 text-left">Město</th>
                <th className="px-2 py-2 text-left">Ulice</th>
                <th className="px-2 py-2 text-left">Vstupenka</th>
                <th className="px-2 py-2 text-left">Datum</th>
                <th className="px-2 py-2 text-left">Vyfakturováno</th>
                <th className="px-2 py-2 text-left">Zaplaceno</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "" : ""} // Apply different background colors to alternating rows
                >
                  <td className="px-2 py-2">{index + 1}</td>
                  <td className="px-2 py-2">{invoice.Name}</td>
                  <td className="px-2 py-2">{invoice.Email}</td>
                  <td className="px-2 py-2">{invoice.company}</td>
                  <td className="px-2 py-2">{invoice.Ic}</td>
                  <td className="px-2 py-2">{invoice.Dic}</td>
                  <td className="px-2 py-2">{invoice.Mesto}</td>
                  <td className="px-2 py-2">{invoice.Ulice}</td>
                  <td className="px-2 py-2">{invoice.Ticket}</td>
                  <td className="px-2 py-2">
                    {invoice.date && formatDate(invoice.date)}
                  </td>
                  <td className="px-2 py-2">
                    <input
                      type="checkbox"
                      checked={invoicedCheckbox[invoice.$id]?.invoiced || false}
                      onChange={(e) =>
                        handleCheckboxChange(
                          invoice.$id,
                          "invoiced",
                          e.target.checked
                        )
                      }
                    />
                  </td>
                  <td className="px-2 py-2">
                    <input
                      type="checkbox"
                      checked={paidCheckbox[invoice.$id]?.paid || false}
                      onChange={(e) =>
                        handleCheckboxChange(
                          invoice.$id,
                          "paid",
                          e.target.checked
                        )
                      }
                    />
                  </td>
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
