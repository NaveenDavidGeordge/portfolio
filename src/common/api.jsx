const BIN_ID = "692dbc49ae596e708f7c9277";
const MASTER_KEY = "$2a$10$xlyB7uchBG0E/OZdAFczXuCaQjQeOb/SCArgVygBIVvypmKCkAQK6";
const BASE_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

export const getMessages = async () => {
  try {
    const res = await fetch(`${BASE_URL}/latest`, {
      headers: { "X-Master-Key": MASTER_KEY },
    });
    const data = await res.json();
    return data.record[0].messages || [];
  } catch (err) {
    console.error("Error fetching messages:", err);
    return [];
  }
};

export const postMessage = async (newMessage) => {
  try {
    const messages = await getMessages();
    messages.push(newMessage);
    await fetch(BASE_URL, {
      method: "PUT",
      headers: {
        "X-Master-Key": MASTER_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ messages }]),
    });
    return true;
  } catch (err) {
    console.error("Error posting message:", err);
    return false;
  }
};
