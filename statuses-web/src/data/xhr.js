export const get = async (url) => {
  let response;
  try {
    response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (e) {
    console.log(e, response.status);
  }
  return response.json();
};
