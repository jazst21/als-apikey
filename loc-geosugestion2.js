import { LocationClient, SearchPlaceIndexForSuggestionsCommand, SearchPlaceIndexForTextCommand } from "@aws-sdk/client-location";
import { withAPIKey } from "@aws/amazon-location-utilities-auth-helper";
import { log } from "console";
import { apiKey } from "./conf.js";

// Create an authentication helper instance using an API key
const authHelper = await withAPIKey(apiKey);

const client = new LocationClient({
  region: "ap-southeast-1", 
  ...authHelper.getLocationClientConfig(), // Provides configuration required to make requests to Amazon Location
});

const input = {
  IndexName: "loc-here",
  Text: "Monumen nasional",
  MaxResults: 2,
  BiasPosition: [106.769470,-6.301150]
};

const command = new SearchPlaceIndexForSuggestionsCommand(input);

const response = await client.send(command);
log(JSON.stringify(response, null, "\t"));