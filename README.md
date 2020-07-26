<h1 align="center">
    <img alt="Logo" src="https://github.com/Daniel-Simoes/WebSocket-Chat/blob/master/socketchat.jpg" />
    <br>
</h1>

On this project, I created a real-time chat application that allows different users to chat. I used Socket.io to manage real-time WebSocket connections to a Node.js server. It will allow you to communicate in real-time chat messages with all clients connected to a single server.

On this entire project, I only used JavaScript(NodeJS to backend and ReactJS to frontend).

By the end of this project, I was able to get a better understanding of how to send and receive messages using WebSockets and Socket.io to make any real-time application.


## 🖥 Apresentation

<p align="center">
  <img alt="img" src="https://github.com/Daniel-Simoes/WebSocket-Chat/blob/master/devices.jpg">
</p>

## :rocket: WebSocket-Chat Installation

Clone the repository

```bash
git clone https://github.com/Daniel-Simoes/WebSocket-Chat
```

## 1️⃣ Setting the Backend

Open the terminal on the repository, look for the backend's folder then, install the dependencies:

```bash
yarn install
```

After finishing the dependancies’ installation, run the backend:

```bash
yarn dev
```

## 2️⃣ Setting the Frontend

Open an other window on your terminal, go to Web's folder and install the dependencies:

```bash
yarn install
```

To run the application use:

```bash
yarn start
```

## 🤷🏻‍♂️ Did you have any problems with the installation?

- Make sure that you have Node installed in your machine.

```bash
Solution: Install Node
```
- Assure that you have `Yarn` or `NPM` installed in your machine.

```bash
Solution: Install Yarn or NPM
```
- A dependency called Nodemon in the package.json file(Backend) should be there.

```bash
Solution: Install Nodemon as a dependency on project.
```
- Faleid comunication between frontend and backend?

```bash
Solution: Set a empty PORT on beckend.Them go to frontend/src/pages/chat and fix the ENDPOINT = 'NEW_PORT';
```

## 🎯 Bonus

If you completed all the steps successfully, you are finished with the installation, congrats! 
The application should now be running in your localhost and I have a bonus for you, if you want to chat with someone, the deploy has already been made and you can access it through the WebPage.

Copy the link below and paste on your Browser

```bash
https://happy-noyce-9e1119.netlify.app
```

## :books: Technologies

This project was developed with the following technologies:
- [Node](https://nodejs.org/en/)
- [ReactJS](https://facebook.github.io/react/)
- [Cors](https://babeljs.io/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [Nodemon](https://nodemon.io/)
- [Polished](https://github.com/styled-components/polished)
- [Styled-Components](https://styled-components.com/)
- [Query-String](https://www.npmjs.com/package/query-string)
- [VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## :memo: License

This project is under the MIT license. See the [LICENSE] for more information.


## 🤔 How to contribute

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

After the merge of your pull request is done, you can delete your branch.


---

Made by Daniel Simões :wave: [Get in touch!](https://www.linkedin.com/in/dan-sim%C3%B5es/)
