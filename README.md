#Athena
Athena is the scaffolding for your modern web application. Athena contains a bunch of easily configured web components that most projects will need. This saves you time and let's you get to the important stuff faster.

## Core Concepts
Athena aims to make the development experience easy by providing you with an entire development environment, web component usage, easy deployment and more.

###Generating Elements
I think a large focus of this project should be on generating elements. An element generator is the idea of creating a bunch of elements by passing in a list of objects to a single element. For an example of this see the generators folder located at `app/public/parts/generators`. This is useful because it keeps code terse and allows you to do cool stuff like generate entire forms on the fly very quickly.

##Hack with us
Here's how you can get set up developing quickly!
1. If you're an official collaborator just clone the repository to your local machine, otherwise create a fork of the project and clone that. `git clone https://github.com/MichaelScript/Athena`
2. Navigate into the directory, and run the installation scripts `cd athena; npm install; bower install;`
3. Create and checkout a new branch locally `git checkout -b FEATURE_NAME`
4. Run gulp to start the development environment! `gulp`
5. Add your feature or whatever you feel like would be of help, then create a pull request! If you created a fork you'll have to do this manually on github after you push the changes to your fork. `git push origin FEATURE_NAME`

#### Developer Notes
You can safely ignore:
`Uncaught (in promise) DOMException: Failed to register a ServiceWorker: The script has an unsupported MIME type ('text/html').`
Service workers aren't generated in a local development environment, therefore this won't impact anything.