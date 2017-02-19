#Scaff
Scaff is the scaffolding for your web application. Scaff contains a bunch of easily configured web components that most projects will need. This saves you time and let's you get to the important stuff faster. Scaff is in it's early stages right now but we're adding more every day. 

##Contribute
Here's how you can get set up developing quickly!

1. If you're an official collaborator just clone the repository to your local machine, otherwise create a fork of the project and clone that.
`git clone https://github.com/MichaelScript/Scaff`
2. Navigate into the directory, and run the installation scripts
`cd scaff; npm install; bower install;`
3. Create and checkout a new branch locally
`git checkout -b FEATURE_NAME`
4. Run gulp to start the development environment!
`gulp`
5. Add your feature or whatever you feel like would be of help, then create a pull request! If you created a fork you'll have to do this manually on github after you push the changes to your fork.
`git push origin FEATURE_NAME`



## Developer Notes

###Ideas and Concepts

####Generating Elements
I think a large focus of this project should be on generating elements. An element generator is the idea of creating a bunch of elements by passing in a list of objects to a single element. For an example of this see the generators folder located at `app/public/parts/generators`. This is useful because it keeps code terse and allows you to do cool stuff like generate entire forms on the fly very quickly.

###Development Issues
####Serviceworker
You can safely ignore:
`Uncaught (in promise) DOMException: Failed to register a ServiceWorker: The script has an unsupported MIME type ('text/html').`
This is because you're in a local development environment. This won't appear outside testing on your localhost.
