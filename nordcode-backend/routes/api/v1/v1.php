<?php

Route::group(['namespace_prefix' => 'Api\V1'], function() {
    Route::get("/", "ImageUploadController@post");
});
