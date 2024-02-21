# Summary

<div style="height: 20px"></div>

Toss is leading fintech superapp has monthly 13M+ users in South Korea, and my role is:

- Building products for users aged 7 to 18.
  - Developing and maintaining whole web products have monthly 170M+ users.
  - Finding out technically improvable points and improve them.
  - Finding out improvable points affect productivity for whole team and improve them.
  - Giving technical feedbacks on product design, focusing on user experience.
  - Giving feedbacks on current works, focusing on goals and plans of the team.
- Improving productivity for all developers in the team.
  - Writing and sharing documents about learning and problem solving.
  - Maintaining 100+ internal libraries used by 100+ developers.
  - Leading technical standardization of things used incorrectly.

<div style="height: 40px"></div>

# Details

<div style="height: 20px"></div>

## Technical Contributions

- Contributed as the maintainer of the [Slash](https://github.com/toss/slash) project, an open-source libraries used at Toss.
  - [List of contributed PRs and Issues](https://github.com/toss/slash/issues?q=involves%3AHoseungJang)
- Contributed to internal shared frontend libraries to improve development productivity.
  - [@toss/storage](https://github.com/toss/slash/tree/main/packages/common/storage) ([Documentation](https://slash.page/libraries/common/storage/readme.i18n))
- Compiled and shared knowledge to elevate technical expertise and productivity.
  - [How to develop a library compatible with CommonJS and ESM: exports field](https://blog.hoseung.me/en/2022-10-04-commonjs-esm-exports-field)
    - Toss maximizes development productivity by managing numerous codes as libraries.
    - Shared knowledge about the Node.js module system for the proper working of libraries and, furthermore, for frontend performance.
  - [My Journey to simplify Node.js library bundling process: Bundle a library with a single command](https://blog.hoseung.me/en/2023-07-22-improve-library-bundling)
    - Shared experiences and insights gained from creating numerous libraries.
    - Includes limitations of specific bundling methods and the improvement process.
  - [Module Reading Process in Next.js on the Server Side (Korean)](https://github.com/HoseungJang/wiki/blob/b16bad3a6736091ed80752edb6fa9dca6c0cb9be/front-end/nextjs/server-side-module-resolution/ko.md)
    - Shared in-depth analysis of the causes of problems encountered during development at the company.
    - Contains a detailed examination of Next.js and Webpack code related to the issue.
  - [Performance Improvement of transform: rotate() + filter: blur() (feat. layers, compositing) (Korean)](https://github.com/HoseungJang/wiki/blob/b16bad3a6736091ed80752edb6fa9dca6c0cb9be/front-end/css/improve-transform-rotate-filter-blur-performance/ko.md)
    - Shared the process of solving browser rendering performance issues encountered in a side project.
    - Includes knowledge about layers and compositing in modern browsers.
  - [How to represent and exchange date?](https://blog.hoseung.me/en/2023-03-23-how-to-transfer-date)
    - Many Toss servers were responding without timezone information in Dates.
    - Shared insights on bad cases caused by not specifying timezones, and benefits of specifying timezones.
    - After sharing it, progressive improvements began, like specifying timezones for new APIs in each team.
  - ...

## Savings Boxes for Achievements and Hobbies

- These products are designed for setting goals and saving money to achieve those goals. There are two types: the "해냄(Haenum)" savings box, which is for setting and saving money for any goal, and the "덕질(Deokjil)" savings box, which is for saving money for interests such as favorite idols, sports players, webtoons, animations, etc.
- Developed a script for generating representative images for 해냄 savings boxes.
  - When creating a 해냄 savings box, users can choose an emoji and background colors to create a representative image for the savings box.
  - The representative image is not a single image file. It was rendered by putting the emoji on the background.
  - There was a requirement to display a list of 해냄 savings boxes that the user owns in the account section of the Toss app home.
    - The home is based on Server Driven UI, and the account list was implemented to receive the URL of the representative image for each account.
    - So this required the development of a new spec by the home team (external team), leading to the need for branching based on app version.
  - Therefore, I generated representative images and uploaded them to S3.
    - Since there are around 3000 emojis and only 8 background colors for representative images, it was sufficient to generate and upload all of them locally.
    - Toss uses its own emojis called [TossFace](https://toss.im/tossface), so I wrote a script to composite TossFace image files with background color images.
    - During the process of converting emojis to TossFace image filenames, I learned about the [way emojis are represented in Unicode (Korean)](https://blog.hoseung.me/2022-08-25-emoji-and-unicode) and usage of the [sharp](https://sharp.pixelplumbing.com) library for image composition.
- Despite browser bugs, I found solutions to meet design requirements and implemented them on schedule.
  - There was a requirement to reverse the scroll direction to give a real-time chat message feel.
  - In Safari, there was a serious rendering bug when using `flex-direction: column-reverse`, but I [solved the rendering bug (Korean)](https://github.com/HoseungJang/wiki/blob/main/front-end/browser/safari-flex-direction-column-reverse-scroll-and-rendering-issue/ko.md).
  - However, after solving the issue using the above method, there was an unnatural problem where the scroll stopped immediately after the touch ended.
  - Therefore, I developed and applied a touch scroller open source using CSS Transform called [flickable-scroll](https://github.com/HoseungJang/flickable-scroll).

<div style="width: 100%; display: flex; flex-flow: row wrap; justify-content: center">
  <div style="position: relative; min-width: 300px; width: 50%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/Lo-si7UopVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
  <div style="position: relative; min-width: 300px; width: 50%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/OfK0HXn7hRo"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>

<div style="height: 60px"></div>

## Toss Uss Card 3D Resource Size Reduced by 92%

- On the Toss Uss Card issuance screen, we use `three.js` to render the card in 3D, providing users with the experience of actually choosing a card by viewing it.
  - Despite the cards having the characteristic of being simple planes, the size of the 3D model was unnecessarily big.
    - There are five types for Toss Uss Card, and the each model size ranged from 2MB to 7MB, **totaling 21.5MB**.
  - So I found and used [Draco](https://github.com/google/draco), a 3D model compressor developed by Google.
  - As a result, the total file size of the 3D models significantly **reduced from **21.5MB (22016KB) to 1820KB**, saving almost 92% of network costs for users**.
  - After applying the compressed models, I confirmed that there is not visible damage for it.

<div style="width: 100%; display: flex; flex-flow: row wrap; justify-content: center">
  <div style="position: relative; min-width: 300px; max-width: 560px; width: 50%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/A7M6lioKRMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
  <div style="position: relative; min-width: 300px; max-width: 560px; width: 50%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/ddGYG_xyirI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>

<div style="height: 60px"></div>

## Toss Mock Stock Investment

- This product was created to provide a simplified stock investment experience for teenagers.
- Successfully completed an iteration to increase the **first purchase conversion rate**.
  - Initially, new users were prompted to make their first purchase by showing all available stocks.
  - However, there was a **problem of providing too many choices blindly** to users who are new and potentially feel challenging for the investment.
  - Therefore, allowed users to **choose their interest, and recommended stocks related to it**. It resulted in a significant **17% increase in the first purchase conversion rate**.
- [Implemented a rolling number animation (Korean)](https://github.com/HoseungJang/wiki/blob/main/front-end/uiux/implement-rolling-number-component-in-react/ko.md) to provide a lively UX suitable for real-time stock prices.

<div style="width: 100%; display: flex; justify-content: center">
  <div style="position: relative; max-width: 560px; width: 100%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/uxJIEwMhCb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>

<div style="height: 60px"></div>

## Toss Convenience Store Parcel Delivery

- In South Korea, people can use parcel delivery service through convenience stores such as GS25, CU. The service works by making a reservation for the stuff to send in on/offline and then submit them to a cashier.
- This product enables users to make a reservation for the service in Toss App.
- We conducted monthly promotions to discount on certain amounts when making a reservation.
  - Initially, predicting the format and UI/UX of the promotions was challenging so I hardcoded it.
  - However, as it became kind of consistent after several iterations, it seemed inefficient to hardcode everytime conducting the promotions.
  - Consequently, I defined a JSON data format and made it editable on the admin web, to enable any team member to set the promotions.
  - As a result, frontend deployment was no longer necessary for promotion settings. It enables team members to focus more on other tasks and increases overall productivity.

## Toss Chicken Contest

- This product was designed to increase new sign-ups and retention.
- Technically, I made efforts to write intuitively understandable code, such as [normalizing data responses into an appropriate format](https://blog.hoseung.me/en/2022-06-02-normalization-for-intuitive-component).
- Exploiting the fact that teenagers respond well to products that foster unity, the contest successfully attracted numerous new users.
- Due to its overwhelmingly positive response, the contest was opened multiple times, with continuous changes to the scoring mechanism to ensure that users did not lose interest.
  - For the last Toss Chicken Contest, inspired by Pokémon GO, I implemented a game where users throw snowballs to burst bubbles and earn points.
  - Implemented using pure JavaScript logic, I established the following criteria to conduct numerous tests and ensure that the snowball's throwing motion appears as natural as possible:
    - How fast should the touch move occur to determine that the snowball has been thrown
    - How exact in the direction should the snowball be thrown to determine that it hits the target
    - ...

<div style="width: 100%; display: flex; justify-content: center">
  <div style="position: relative; max-width: 560px; width: 100%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/kJXQZrcpNMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>

<div style="height: 60px"></div>
