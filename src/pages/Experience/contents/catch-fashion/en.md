Experiences in Catch Fashion

<div style="height: 60px"></div>

# Summary

<div style="height: 20px"></div>

Catch Fashion is a e-commerce company has monthly 500K+ users, and my role was:

- Developing and maintaining whole web product alone. Sometimes taking on server, cloud infrastructure jobs.
- Developing and maintaining admin web product used by all teams.
- Developing and maintaining highly productive development environments like auto-generated API client library based on OpenAPI specification, and web testing environments generated for each Github branches.
- Finding out technically improvable points and improve them, such as performance optimization for web products, making build time faster, etc.
- Giving technical feedbacks on product design, focusing on user experience.

<div style="height: 40px"></div>

# Details

<div style="height: 20px"></div>

## Improving Various Performance Issues

- Applied **Local Storage-based client-side caching** to APIs that have less change.
  - This resulted in saving approximately **50 to 500 milliseconds of API response waiting time**.
- For paginated APIs, applied prefetching next page.
  - The **rendering performance of the product list and user experience significantly improved**.
- Used Lighthouse CI metrics to **optimize web performance**.
  - Reduced bundle size by **deleting unused fonts** and [migrating from moment.js to dayjs](https://blog.hoseung.me/2022-03-13-dayjs-instead-of-momentjs).
  - Improved **HTML parsing time and network costs by lazy loading third-party libraries** like Kakao, Facebook, and Zendesk.
- Introduced [Visual Regression Tests](https://blog.hoseung.me/2021-02-10-visual-regression-test) to immediately identify unexpected side effects on the UI when certain changes occur.

## Development of Post Targeting System

- Established a system to expose posts throughout the site to make users to interact with posts more naturally.
- Migrated the existing post data schema to a new schema.
  - Due to the small data size stored in DynamoDB, a simple script and test code were used to migrate the data **without any service disruption**.
- Built a data pipeline using [DynamoDB Streams to automatically index changes in Elasticsearch](https://blog.hoseung.me/en/2022-02-19-dynamodb-stream-elasticsearch).
- Added a feature, adding and deleting targets to a post, to the admin web.
  - Used page URLs on our website for creating targets. There were not any discrepancy between the user web and the admin web, because All URLs are centrally managed using the open-source [url-catalog-generator](https://github.com/catchfashion/url-catalog-generator), developed by our team.

## Web Push Notification Service Development

- Developed a feature to enable users to receive push notifications in web browsers [using Service Worker and Web Push API](https://blog.hoseung.me/2021-11-28-web-push-notification).
- It allows **web users to receive push notifications without installing the app** and therefore the push notification service usage rate was improved.
  - Tracked the actions of users who denied push notifications and re-exposed the permission request modal under certain conditions.
  - The API call count to create push notification subscriptions **increased from an average of 600 to 1200**.

## Credit Card Promotion Service Development

- Developed a feature to enable users to register cards for ongoing credit card promotions.
- Using the open-source [dynamorm](https://github.com/serverless-seoul/dynamorm) developed by the team to define DynamoDB tables and develop CRUD APIs.
- Designed the data schema and request -> response -> rendering flow **based on domain features**.
  - Designed the flow to load the data for promotions as a list at once, since it is rare to run a lot of promotions in the same period.
  - This simplified the API request flow, and with only one initial data load, there were no additional data loading steps, providing **performance and UX advantages**.
- Transferred hardcoded credit card promotion data in frontend code to the backend, and added an editor in the admin web to allow **admins to manage promotions without developers**.
- Wrote BDD test code ([Using BDD in a Side Project and Thoughts](https://blog.hoseung.me/2021-02-27-mocha-chai-bdd)).

## AB Testing and Data-Driven UI/UX Improvement

- Practiced considering business impact of tasks, thinking and deciding based on data.
- Conducted a test changing the page name from '쇼핑하기' to '카테고리', resulting in a **significant increase in positive metrics** such as a new sign-up by 11%, product views by 14%, and order conversion rates by 26%.
- Conducted a test moving the authenticity guarantee statement on the product page to the top, resulting in a **3% increase in new sign-ups and a 4% increase in order conversions**.

## Frontend Development for WebView Environments

- Rendered appropriate UI by **parsing User-Agent**, like hiding content encouraging app downloads only on the app.
- Collaborated on and attempted **App-like UI/UX features,** such as displaying a back button instead of a logo starting from the second depth, or keeping the selected tab in the bottom navigation.
- Delegated tasks to the native side through **communication between WebView and native** which is known as app bridge.
