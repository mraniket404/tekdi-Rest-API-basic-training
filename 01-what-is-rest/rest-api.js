// ==========================================
// What is REST?
// REST = Representational State Transfer
// ==========================================

// REST APIs commonly use HTTP to communicate
// between a client and a server.

// In this example, we will use the iTunes Search API
// to understand how a REST-style API works.

async function searchMusic() {
  // API URL
  const url =
    "https://itunes.apple.com/search?term=radiohead&media=music&limit=3";

  try {
    // Send GET request to the API
    const response = await fetch(url);

    // Check whether the request was successful
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // Convert JSON response into JavaScript object
    const data = await response.json();

    // Display total number of results
    console.log("Total Results:", data.resultCount);

    console.log("\nMusic Results:\n");

    // Loop through API results
    data.results.forEach((song, index) => {
      console.log(`${index + 1}. ${song.trackName}`);
      console.log(`   Artist: ${song.artistName}`);
      console.log(`   Album: ${song.collectionName}`);
      console.log(`   Genre: ${song.primaryGenreName}`);
      console.log(`   Price: ${song.trackPrice} ${song.currency}`);
      console.log("-----------------------------------");
    });
  } catch (error) {
    // Handle errors
    console.error("Error:", error.message);
  }
}

// Call the function
searchMusic();