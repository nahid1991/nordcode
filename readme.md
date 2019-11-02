<h1>Nordcode assessment</h1>
<h2>Description</h2>
<p>This is a project for an assessment for Nordcode. The project has separate two apps. One is a 
standalone backend application inside the nordcode-backend directory. Other is a frontend application
feeding the data of the nordcode-backend. It is inside the nordcode-frontend directory.</p>

<h2>Installation for backend</h2>
<p>I am assuming you are currently running the apps in linux or macos.</p>
<h3>Step 1:</h3>
<p>Clone the repo. There should be new folder named nordcode in the directory you are currently in.</p>
<h3>Step 2:</h3>
<p>Navigate to the nordcode directory via terminal. Then from there navigate to nordcode-backend
via terminal. </p>
<h3>Step 3:</h3>
<p>Create a new file named <code>.env</code> and copy everything from <code>.env.example</code>
and then run <code>pwd</code> in the terminal in the nordcode-backend directory. You will get a 
directory address, copy it. Paste it against <code>DB_DATABASE</code> variable and add 
<code>/nordcode.sqlite</code> at the end of string. Change to <code>DB_CONNECTION=sqlite</code>.</p>
<h3>Step 4:</h3>
<p>Run <code>composer install</code> to install all the packages for the project. Then run 
<code>php artisan migrate</code> to migrate the database. Then run <code>php artisan serve</code>.
And that should start the backend project in the 8000 port in the local machine.</p>
<p><b>PS: if you do not have key generated then run <code>php artisan key:generate</code> 
to generate the key.</b></p>

<h2>Installation for frontend (Depends on the backend for data)</h2>
<h3>Step 1:</h3>
<p>Navigate to the nordcode-frontend directory and run <code>npm install</code> in the terminal to
install all the dependencies.</p>
<h3>Step 2:</h3>
<p>Run <code>npm start</code> in the terminal and open a browser and go to the address 
<code>localhost:3000</code>. And voila you can use the frontend app the browser.</p>




