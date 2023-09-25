import { LocationClient, SearchPlaceIndexForPositionCommand, SearchPlaceIndexForSuggestionsCommand, SearchPlaceIndexForTextCommand } from "@aws-sdk/client-location";
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
  IndexName: "loc-grab",
  MaxResults: 2,
  Position: [106.8245787,-6.175403]
};

const command = new SearchPlaceIndexForPositionCommand(input);

const response = await client.send(command);
log(JSON.stringify(response, null, "\t"));