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
<p>Navigate to the nordcode directory via terminal by running <code>cd nordcode-backend</code>. Then from there navigate to nordcode-backend
via terminal. </p>
<h3>Step 3:</h3>
<p>Create a new file named <code>.env</code> and copy everything from <code>.env.example</code>
and then run <code>pwd</code> in the terminal in the nordcode-backend directory. You will get a 
directory address, copy it. Paste it against <code>DB_DATABASE</code> variable and add 
<code>/nordcode.sqlite</code> at the end of string. Change to <code>DB_CONNECTION=sqlite</code>.
Your <code>.env</code> should look like this.<code>

      APP_NAME=Laravel
      APP_ENV=local
      APP_KEY=
      APP_DEBUG=true
      APP_URL=http://localhost
      
      LOG_CHANNEL=stack
      
      DB_CONNECTION=sqlite
      DB_HOST=
      DB_PORT=
      DB_DATABASE=PATH_BEFORE_NORDCODE/nordcode/nordcode-backend/nordcode.sqlite
      DB_USERNAME=
      DB_PASSWORD=
      
      BROADCAST_DRIVER=log
      CACHE_DRIVER=file
      QUEUE_CONNECTION=sync
      SESSION_DRIVER=file
      SESSION_LIFETIME=120
      
      REDIS_HOST=127.0.0.1
      REDIS_PASSWORD=null
      REDIS_PORT=6379
      
      MAIL_DRIVER=smtp
      MAIL_HOST=smtp.mailtrap.io
      MAIL_PORT=2525
      MAIL_USERNAME=null
      MAIL_PASSWORD=null
      MAIL_ENCRYPTION=null
      
      AWS_ACCESS_KEY_ID=
      AWS_SECRET_ACCESS_KEY=
      AWS_DEFAULT_REGION=us-east-1
      AWS_BUCKET=
      
      PUSHER_APP_ID=
      PUSHER_APP_KEY=
      PUSHER_APP_SECRET=
      PUSHER_APP_CLUSTER=mt1
      
      MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
      MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
</code></p>
<h3>Step 4:</h3>
<p>Run <code>composer install</code> to install all the packages for the project. Then run 
<code>php artisan migrate</code> to migrate the database. Then run <code>php artisan serve</code>.
And that should start the backend project in the 8000 port in the local machine.</p>
<h3>Step 5:</h3>
<p>Run <code>php artisan storage:link</code> to link the <code>public/storage</code> with the 
<code>storage</code> directory in order to make the uploaded images show up.</p>
<p><b>PS: if you do not have key generated then run <code>php artisan key:generate</code> 
to generate the key. And also if you face <code>PDOException</code> error then you have to install 
<code>php7.2-sqlite</code> by running <code>sudo apt-get install php7.2-sqlite</code> in the terminal.</b></p>

<h2>Installation for frontend (Depends on the backend for data)</h2>
<h3>Step 1:</h3>
<p>Navigate to the nordcode-frontend directory via terminal by running <code>cd nordcode-frontend</code> and run <code>npm install</code> in the terminal to
install all the dependencies.</p>
<h3>Step 2:</h3>
<p>Run <code>npm start</code> in the terminal and open a browser and go to the address 
<code>localhost:3000</code>. And voila you can use the frontend app the browser.</p>


