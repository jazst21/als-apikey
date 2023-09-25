import { LocationClient, SearchPlaceIndexForTextCommand } from "@aws-sdk/client-location";
import { withAPIKey } from "@aws/amazon-location-utilities-auth-helper";
import { log } from "console";

const apiKey = "v1.public.eyJqdGkiOiJkMTBlNzg1Mi0yYTU0LTRjMGItYjNmMC0zMjU5ZmQxZTI3ZGEifQ3j88cWg-UZgIY7nncWPu0FcmAQbUI-9MY0Mfu53b8FagC_LfI3PUChvT__ehhsDQh78NUFQPVvPCoCOAkFbfDd8BRWgybumPKRPIc-uJ2QK4i1_BI-TjkFWJaiCD6wO7eS7sa2t69KQSFpJgUOnaPss_EtwMEuNB0rgzQKD_huPnVVd7R2yPGzH5Dg9xVmwfp9ekj3UWdvN2BvTBSMGTfd5tWxkLV7lpZODJg94jYcTtXZDUWW_MCDt9CJsA_JCMunFe-AwONyZ_u7lrr0YcnjiLtXhdUErY3Mb57-ALcDCrIhU0vprw0RRCvk3pFRXJSuK_L4Ji4PqpSfFx6viLQ.MzRjYzZmZGUtZmY3NC00NDZiLWJiMTktNTc4YjUxYTFlOGZi"; // API key

// Create an authentication helper instance using an API key
const authHelper = await withAPIKey(apiKey);

const client = new LocationClient({
  region: "ap-southeast-1", // region containing Cognito pool
  ...authHelper.getLocationClientConfig(), // Provides configuration required to make requests to Amazon Location
});

const input = {
  IndexName: "WorkshopIndex",
  Text: "Anyplace",
  BiasPosition: [-123.4567, 45.6789]
};

const command = new SearchPlaceIndexForTextCommand(input);

const response = await client.send(command);
log(response);